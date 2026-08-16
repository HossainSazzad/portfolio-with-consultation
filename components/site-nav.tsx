'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

const links = [
  { href: '#journey', label: 'Journey' },
  { href: '#help', label: 'Mentorship' },
  { href: '#booking', label: 'Book a Call' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-foreground"
        >
          MSH<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <a
            href="#booking"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  )
}
