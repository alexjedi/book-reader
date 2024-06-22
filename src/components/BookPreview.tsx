import Image from 'next/image'

import { cn } from '@/lib/utils'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

import { Book } from '@/data/books'
import { playlists } from '@/data/playlists'
import { PlusCircleIcon } from 'lucide-react'

import Avatar from '@/app/avatar.png'
import Link from 'next/link'

interface BookPreview extends React.HTMLAttributes<HTMLDivElement> {
  book: Book
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}

export function BookPreview({
  book,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: BookPreview) {
  return (
    <Link href={`/book/${book.slug}`}>
      <div className={cn('space-y-3 cursor-pointer', className)} {...props}>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="overflow-hidden rounded-md">
              <Image
                src={`/img/${book.cover}`}
                alt={book.name}
                width={width}
                height={height}
                className={cn(
                  'h-auto w-auto object-cover transition-all hover:scale-105 duration-300 ease-in-out',
                  aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
                )}
              />
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-40">
            <ContextMenuItem>Add to Read Later</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  <PlusCircleIcon className="mr-2 h-4 w-4" />
                  New Playlist
                </ContextMenuItem>
                <ContextMenuSeparator />
                {playlists.map((playlist) => (
                  <ContextMenuItem key={playlist}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="mr-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                    </svg>
                    {playlist}
                  </ContextMenuItem>
                ))}
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>Like</ContextMenuItem>
            <ContextMenuItem>Share</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <div className="space-y-1 text-sm">
          <h3 className="font-medium text-lg leading-none">{book.name}</h3>
          <div className="space-x-2 flex items-center">
            {/* <Image src={Avatar} alt="avatar" className="size-5" /> */}
            <p className="text-base text-muted-foreground">{book.writer}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
