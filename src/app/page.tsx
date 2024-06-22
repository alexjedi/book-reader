import { Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { BookPreview } from '@/components/BookPreview'
import { AudioEmpty } from '@/components/AudioEmpty'
import { Sidebar } from '@/components/Sidebar'
import { playlists } from '@/data/playlists'
import { PlusCircleIcon } from 'lucide-react'
import { booksList } from '@/data/books'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Book Catalog',
  description: 'Example of a book catalog page.',
}

export default function BooksPage() {
  return (
    <>
      <div className="hidden md:block">
        <header></header>
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
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
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircleIcon className="mr-2 h-4 w-4" />
                          Add books
                        </Button>
                      </div>
                    </div>
                    <TabsContent value="books" className="border-none p-0 outline-none space-y-8">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">Read Now</h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-8 pb-8">
                            {booksList.map((book) => (
                              <BookPreview
                                key={book.name}
                                book={book}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="audio"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex space-y-8"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">New Episodes</h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite audio. Updated daily.
                          </p>
                        </div>
                      </div>
                      <AudioEmpty />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
