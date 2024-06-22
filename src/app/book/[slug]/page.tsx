'use client'

import { Pagination } from '@/components/ui/pagination'
import { booksList } from '@/data/books'
import Link from 'next/link'
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Settings } from 'lucide-react'

const markdown = '../books/yields_of_civilization.md'

export default function BookPage({ params }: { params: any }) {
  const { slug } = params
  const book = booksList.find((book) => book.slug === slug)

  const [text, setText] = useState('')

  useEffect(() => {
    fetch(markdown)
      .then((response) => response.text())
      .then((md) => {
        setText(md)
      })
  }, [])

  if (!book) return <div>Book not found</div>

  return (
    <main className="w-screen flex flex-col items-center p-8 lg:p-24">
      <header className="w-full flex justify-between max-w-[65ch] py-8">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <Settings className="h-4 w-4" />
          </Link>
        </Button>
      </header>
      <article className="prose prose-base lg:prose-lg w-full prose-p:text-gray-900">
        <img
          src={`/img/${book.cover}`}
          alt={book.name}
          className="w-full max-w-40 h-auto p-1 border border-background-primary"
        />
        <h1>{book.name}</h1>
        <h4>{book.writer}</h4>
        <p>
          <Markdown>{text}</Markdown>
        </p>
        <Pagination />
      </article>
    </main>
  )
}
