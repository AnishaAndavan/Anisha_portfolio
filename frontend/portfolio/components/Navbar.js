'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { toggleTheme } from '@/utils/theme'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const dark = theme === 'dark' || (!theme && prefersDark);
    setIsDark(dark);
  }, [])

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDark(prev => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="bg-white dark:bg-black shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-gray-900 dark:text-white">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Anisha</h1>

        {/* Hamburger for mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex space-x-6 items-center">
          <Link href="#hero" className="hover:text-indigo-600">Home</Link>
          <Link href="#about" className="hover:text-indigo-600">About</Link>
          <Link href="#skills" className="hover:text-indigo-600">Skills</Link>
          <Link href="#projects" className="hover:text-indigo-600">Projects</Link>
          <Link href="#contact" className="hover:text-indigo-600">Contact</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden px-4 pb-4 flex flex-col space-y-4 bg-white dark:bg-black text-gray-900 dark:text-white">
          <Link href="#hero" className="hover:text-indigo-600" onClick={toggleMenu}>Hero</Link>
          <Link href="#about" className="hover:text-indigo-600" onClick={toggleMenu}>About</Link>
          <Link href="#skills" className="hover:text-indigo-600" onClick={toggleMenu}>Skills</Link>
          <Link href="#projects" className="hover:text-indigo-600" onClick={toggleMenu}>Projects</Link>
          <Link href="#contact" className="hover:text-indigo-600" onClick={toggleMenu}>Contact</Link>
          <button
            onClick={handleThemeToggle}
            className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-fit transition"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
      )}
    </nav>
  );
}
