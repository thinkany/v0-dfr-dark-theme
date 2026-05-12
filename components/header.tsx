"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ChevronDown } from "lucide-react"

const reviewsSubLinks = [
  { href: "#reviews-az", label: "Reviews A-Z" },
  { href: "#readers-choice", label: "Reader's Choice" },
  { href: "#short-takes", label: "Short Takes" },
  { href: "#patreon-exclusive", label: "Patreon Exclusive" },
]

const featuresSubLinks = [
  { href: "#lists", label: "Lists" },
  { href: "#cinefiles", label: "The CineFiles" },
  { href: "#guest-appearances", label: "Guest Appearances" },
  { href: "#festival-coverage", label: "Festival Coverage" },
  { href: "#film-editorials", label: "Film Editorials" },
]

const navLinks = [
  { href: "#reviews", label: "Reviews", submenu: "reviews" },
  { href: "#essays", label: "The Definitives" },
  { href: "#features", label: "Features", submenu: "features" },
  { href: "https://www.patreon.com/deepfocusreview", label: "Patreon", external: true },
  { href: "#about", label: "About" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [reviewsOpen, setReviewsOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">DF</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl text-foreground tracking-tight">Deep Focus</span>
              <span className="block text-xs text-muted-foreground uppercase tracking-[0.2em]">Review</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isOpen = link.submenu === "reviews" ? reviewsOpen : link.submenu === "features" ? featuresOpen : false
              const setOpen = link.submenu === "reviews" ? setReviewsOpen : link.submenu === "features" ? setFeaturesOpen : () => {}
              const subLinks = link.submenu === "reviews" ? reviewsSubLinks : link.submenu === "features" ? featuresSubLinks : []
              
              return link.submenu ? (
                <div 
                  key={link.href} 
                  className="relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-card border border-border rounded-sm shadow-lg min-w-48 py-2">
                        {subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="#subscribe"
              className="hidden sm:inline-flex px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </Link>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => {
              const isOpen = link.submenu === "reviews" ? reviewsOpen : link.submenu === "features" ? featuresOpen : false
              const toggleOpen = link.submenu === "reviews" 
                ? () => setReviewsOpen(!reviewsOpen) 
                : link.submenu === "features" 
                  ? () => setFeaturesOpen(!featuresOpen) 
                  : () => {}
              const subLinks = link.submenu === "reviews" ? reviewsSubLinks : link.submenu === "features" ? featuresSubLinks : []
              
              return link.submenu ? (
                <div key={link.href}>
                  <button
                    className="flex items-center justify-between w-full text-lg text-foreground hover:text-primary transition-colors py-2"
                    onClick={toggleOpen}
                  >
                    {link.label}
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="pl-4 space-y-1 border-l border-border ml-2">
                      {subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-lg text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="#subscribe"
              className="inline-flex mt-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscribe
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
