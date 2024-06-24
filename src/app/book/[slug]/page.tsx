'use client'

import { booksList } from '@/data/books'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HeaderContent from '@/components/HeaderContent'

export default function BookPage({ params }: { params: any }) {
  const { slug, chapter } = params

  const book = booksList.find((book) => book.slug === slug)

  if (!book) return <div>Book not found</div>

  return (
    <main className="w-screen flex flex-col items-center p-8 lg:p-16">
      <HeaderContent />
      <article className="prose prose-base lg:prose-lg w-full prose-p:text-gray-900">
        <img
          src={`/img/${book.cover}`}
          alt={book.name}
          className="w-full max-w-40 h-auto p-1 border border-background-primary"
        />
        <h1>{book.name}</h1>
        <h4>{book.writer}</h4>
        <ul>
          {book.chapters &&
            Array.from({ length: book.chapters }, (_, i) => (
              <li key={i}>
                <Link href={`/book/${slug}/chapter/${i + 1}`}>Chapter {i + 1}</Link>
              </li>
            ))}
        </ul>
      </article>
    </main>
  )
}
