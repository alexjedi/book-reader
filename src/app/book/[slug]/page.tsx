'use client'

import { Pagination } from '@/components/ui/pagination'
import { booksList } from '@/data/books'
import Link from 'next/link'
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react'

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
    <div>
      <img src={`/img/${book.cover}`} alt={book.name} />
      <h1>{book.name}</h1>
      <p>{book.writer}</p>
      <p>
        <Markdown>{text}</Markdown>
      </p>
      <Link href="/book">Back to book list</Link>
      <Pagination />
    </div>
  )
}
