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
    <main className="w-screen flex flex-col items-center">
      <HeaderContent backLink={`/`} />
      <article className="prose prose-base lg:prose-lg w-full prose-p:text-gray-900 p-4 lg:p-8">
        <img
          src={`/img/${book.cover}`}
          alt={book.name}
          className="w-full max-w-40 h-auto p-1 border border-background-primary"
        />
        <h2 className="leading-3 !mt-1 !mb-2">{book.name}</h2>
        <h4 className="!mb-8">{book.writer}</h4>
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
