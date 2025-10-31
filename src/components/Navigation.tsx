'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200'
        : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="https://z-cdn-media.chatglm.cn/files/ab0b5c5e-58df-46d9-a00f-375bf0f1a256_pasted_image_1761923913963.jpg?auth_key=1761927532-909201fe5c9543d69e8415128e02e7b0-0-b9b48a3707ad98c3367f46a713ab640a"
              alt="STR Mix Logo"
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <span className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-600">STR Mix</span>
              <p className="text-xs text-gray-600">Shree Tulasi Ready-Mix</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-green-600 font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-600 before:transition-all before:duration-300 hover:before:w-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
              <a
                href="tel:07947426693"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>07947426693</span>
              </a>
              <a
                href="https://instagram.com/strmix_9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-pink-50"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-all duration-300 hover:bg-green-50 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
              }`}>
                <Menu className="w-6 h-6" />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
              }`}>
                <X className="w-6 h-6" />
              </span>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 py-2 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                <a
                  href="tel:07947426693"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-all duration-300 py-2 hover:translate-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>07947426693</span>
                </a>
                <a
                  href="https://instagram.com/strmix_9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-all duration-300 py-2 hover:translate-x-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@strmix_9</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
