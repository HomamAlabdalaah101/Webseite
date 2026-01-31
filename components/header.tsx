"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import LanguageSwitcher from "./language-switcher"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.work, href: "#projects" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      // Already on homepage, scroll to top
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // On other pages, navigate to homepage
      router.push("/")
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = pathname === "/"

    if (isHomePage) {
      // On homepage, scroll to section
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
        setIsOpen(false)
      }
    } else {
      // On other pages, navigate to homepage with hash
      // Let the default link behavior handle it
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="text-xl font-bold text-foreground hover:text-primary focus:text-primary transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
        >
          DevSpace
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={pathname === "/" ? item.href : `/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-muted-foreground hover:text-foreground focus:text-foreground transition-colors duration-300 ease-in-out relative group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-2 py-1"
            >
              {item.label}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"></div>
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 w-6 h-6 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded" onClick={() => setIsOpen(!isOpen)}>
          <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={pathname === "/" ? item.href : `/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground focus:text-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-2 py-1"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
