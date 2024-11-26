"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'CV', href: '/#cv-download' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.substring(2)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
      setMobileMenuOpen(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Hafedh Ben Slama
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setMobileMenuOpen(false)} />
        
        {/* Sidebar */}
        <nav className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white dark:bg-gray-900 h-full overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>
                Hafedh Ben Slama
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto py-6 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-indigo-400 mb-1"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              {mounted && (
                <button
                  onClick={() => {
                    toggleTheme();
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="mr-2 h-5 w-5" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2 h-5 w-5" /> Dark Mode
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

