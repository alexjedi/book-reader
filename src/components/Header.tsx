'use client'

import {
  ALargeSmall,
  Baseline,
  Bookmark,
  Languages,
  Menu,
  Moon,
  Search,
  Sun,
  User,
} from 'lucide-react'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="w-full flex h-20 items-center justify-between px-4 lg:px-6">
      <div className="flex space-x-3 items-center">
        <Menu size={20} />
        <h1 className="text-lg font-medium">Reader</h1>
      </div>
      <div className="flex space-x-6 items-center">
        <Search size={20} />
        <button onClick={toggleTheme} className="flex items-center space-x-1">
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <User size={20} />
      </div>
    </header>
  )
}

export default Header
