'use client'

import { booksList } from '@/data/books'
import Markdown from 'react-markdown'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import HeaderContent from '@/components/HeaderContent'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const markdown = (slug: string | string[], chapter: string | string[]) =>
  `/books/${slug}/chapter_${chapter}.md`

export default function ChapterPage({ params }: { params: any }) {
  const { slug, chapter } = params

  const book = booksList.find((book) => book.slug === slug)

  const [text, setText] = useState('')
  const [isObserverActive, setIsObserverActive] = useState(false)

  const router = useRouter()
  const observer = useRef<IntersectionObserver>()

  const nextChapter = parseInt(chapter as string) + 1

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(
        (entries) => {
          if (
            book &&
            book.chapters &&
            entries[0].isIntersecting &&
            nextChapter <= book.chapters &&
            isObserverActive
          ) {
            setTimeout(() => {
              router.push(`/book/${slug}/chapter/${nextChapter}`)
            }, 400)
          }
        },
        {
          rootMargin: '-100px',
        }
      )
      if (node) observer.current.observe(node)
    },
    [book, nextChapter, isObserverActive, router, slug]
  )

  useEffect(() => {
    if (slug && chapter) {
      fetch(markdown(slug, chapter))
        .then((response) => response.text())
        .then((md) => {
          setText(md)
          setIsObserverActive(false)
        })
    }

    window.scrollTo(0, 0)

    const timer = setTimeout(() => setIsObserverActive(true), 500)

    return () => clearTimeout(timer)
  }, [slug, chapter])

  if (!book) return <div>Book not found</div>

  return (
    <main className="w-screen flex flex-col items-center">
      <HeaderContent backLink={`/book/${slug}`} />
      <article className="prose dark:prose-invert prose-base lg:prose-lg w-full prose-p:text-primary p-4 lg:p-8">
        <img
          src={`/books/${slug}/chapter_${chapter}.png`}
          alt={book.name}
          className="w-full max-w-40 h-auto p-1 border border-background-primary"
        />
        <p>
          <Markdown>{text}</Markdown>
        </p>
        {book && book.chapters && chapter < book.chapters ? (
          <>
            <Button asChild>
              <Link className="not-prose" href={`/book/${slug}/chapter/${nextChapter}`}>
                <span className="mr-1">Next Chapter</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
            <span className="text-xs ml-2">or scroll down</span>
            <div ref={lastElementRef} className="h-[100px] w-full"></div>
          </>
        ) : (
          <span className="text-xs">End of a story</span>
        )}
      </article>
    </main>
  )
}
