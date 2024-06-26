import React from 'react'

const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="p-4 rounded-full flex items-center justify-center bg-background text-accent-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {children}
    </a>
  )
}

export default CustomLink
