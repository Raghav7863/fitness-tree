import { useState, useEffect } from 'react'
import { Menu, X, Dumbbell } from 'lucide-react'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#5a9e0f] flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-[#2d5a06]' : 'text-white'}`}>
              Fitness Tree
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button key={link.label} onClick={() => handleClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-[#5a9e0f] ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                {link.label}
              </button>
            ))}
            <a href="tel:+919871366691"
              className="bg-[#5a9e0f] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#4a8a0c] transition-colors">
              Join Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button className={`md:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <button key={link.label} onClick={() => handleClick(link.href)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#5a9e0f] hover:bg-green-50 rounded-md transition-colors">
                {link.label}
              </button>
            ))}
            <a href="tel:+919871366691"
              className="block mt-2 bg-[#5a9e0f] text-white text-center text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#4a8a0c] transition-colors">
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
