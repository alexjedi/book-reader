export interface Book {
  slug: string
  name: string
  writer: string
  cover: string
  content?: string
}

export const booksList: Book[] = [
  {
    slug: 'into_the_lethe',
    name: 'Into the Lethe',
    writer: 'Alex Shelvey',
    cover: 'into_the_lethe.png',
    content: 'into_the_lethe.md',
  },
  {
    slug: 'merge_conflict',
    name: 'Merge Conflict',
    writer: 'Alex Shelvey',
    cover: 'merge_conflict.png',
    content: 'merge_conflict.md',
  },
  {
    slug: 'yields_of_civilisation',
    name: 'Yields of the Humanity',
    writer: 'Alex Shelvey',
    cover: 'yields_of_civilisation.png',
    content: 'yields_of_civilisation.md',
  },
]
