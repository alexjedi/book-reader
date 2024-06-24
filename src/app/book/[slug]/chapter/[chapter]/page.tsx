'use client'

import { booksList } from '@/data/books'
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import HeaderContent from '@/components/HeaderContent'
import Link from 'next/link'

const markdown = (slug: string | string[], chapter: string | string[]) =>
  `/books/${slug}/chapter_${chapter}.md`

export default function ChapterPage({ params }: { params: any }) {
  const { slug, chapter } = params

  console.log(slug, chapter)

  const book = booksList.find((book) => book.slug === slug)

  const [text, setText] = useState('')

  useEffect(() => {
    if (slug && chapter) {
      fetch(markdown(slug, chapter))
        .then((response) => response.text())
        .then((md) => {
          setText(md)
        })
    }
  }, [slug, chapter])

  if (!book) return <div>Book not found</div>

  const nextChapter = parseInt(chapter as string) + 1

  return (
    <main className="w-screen flex flex-col items-center p-8 lg:p-16">
      <HeaderContent />
      <article className="prose prose-base lg:prose-lg w-full prose-p:text-gray-900">
        <img
          src={`/books/${slug}/chapter_${chapter}.png`}
          alt={book.name}
          className="w-full max-w-40 h-auto p-1 border border-background-primary"
        />
        <h1>{`Chapter ${chapter}`}</h1>
        <p>
          <Markdown>{text}</Markdown>
        </p>
        <Button asChild>
          <Link href={`/book/${slug}/chapter/${nextChapter}`}>Next Chapter</Link>
        </Button>
      </article>
    </main>
  )
}
