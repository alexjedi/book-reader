'use client'

import {
  ALargeSmall,
  ArrowLeft,
  Baseline,
  Bookmark,
  Languages,
  Menu,
  Moon,
  Search,
  Sun,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import Link from 'next/link'

const HeaderContent = ({ backLink }: { backLink: string }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="w-full flex h-20 items-center justify-between px-4 lg:px-6">
      <div className="flex space-x-3 items-center">
        <Button variant="outline" size="icon" asChild>
          <Link href={backLink}>
            <ArrowLeft size={20} />
          </Link>
        </Button>
      </div>
      <div className="flex space-x-3 items-center">
        <Button variant="outline" size="icon">
          <Search size={20} />
        </Button>
        <Button variant="outline" size="icon">
          <Languages size={20} />
        </Button>
        <Button variant="outline" size="icon">
          <Baseline size={20} />
        </Button>
        <Button onClick={toggleTheme} variant="outline" size="icon">
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
      </div>
    </header>
  )
}

export default HeaderContent
