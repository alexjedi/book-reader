import { Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { BookPreview } from '@/components/BookPreview'
import { AudioEmpty } from '@/components/AudioEmpty'
import { Sidebar } from '@/components/Sidebar'
import { playlists } from '@/data/playlists'
import { Play, PlusCircleIcon } from 'lucide-react'
import { booksList } from '@/data/books'
import { Separator } from '@/components/ui/separator'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book Reader',
  description: 'Example of a book catalog page.',
}

export default function BooksPage() {
  return (
    <main className="w-full">
      <Header />
      <section className="w-full flex">
        <Sidebar playlists={playlists} className="hidden lg:flex lg:w-80" />
        <div className="h-full px-4 lg:py-6 lg:px-8 w-full">
          <Tabs defaultValue="books" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="books" className="relative">
                  Text
                </TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
                <TabsTrigger value="live" disabled>
                  Live
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto">
                <Button asChild>
                  <Link href={'/book/into_the_lethe/chapter/1'}>
                    Continue Reading
                    <Play className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <TabsContent value="books" className="border-none p-0 outline-none space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">Read Now</h2>
                  <p className="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {booksList.map((book) => (
                  <BookPreview
                    key={book.name}
                    book={book}
                    className="w-[150px] lg:w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent
              value="audio"
              className="h-full flex-col border-none p-0 data-[state=active]:flex space-y-8"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">New Chapters</h2>
                  <p className="text-sm text-muted-foreground">
                    Your favorite audiobooks. Updated daily.
                  </p>
                </div>
              </div>
              <AudioEmpty />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
