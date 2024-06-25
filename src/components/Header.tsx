'use client'

import {
  ALargeSmall,
  Baseline,
  Bookmark,
  Languages,
  Menu,
  Moon,
  PanelLeftDashed,
  Search,
  Sun,
  User,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { link } from 'fs'

const Header = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="w-full flex h-20 items-center justify-between px-4 lg:px-6">
      <div className="flex space-x-3 items-center">
        <Button size="icon" variant="ghost">
          <PanelLeftDashed size={20} />
        </Button>
        <h1 className="text-lg font-medium">Reader</h1>
      </div>
      <div className="flex items-center">
        <Button size="icon" variant="ghost">
          <Search size={20} />
        </Button>

        <Button onClick={() => toggleTheme()} size="icon" variant="ghost">
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
        <Button size="icon" variant="ghost">
          <User size={20} />
        </Button>
      </div>
    </header>
  )
}

export default Header
