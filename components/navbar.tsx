"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import LanguageSwitcher from "@/components/language-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/blog", label: t("nav.blog") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
      ${isScrolled ? "glass-effect shadow-lg shadow-black/5" : "bg-background/80 backdrop-blur-sm"}
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative overflow-hidden rounded-lg p-2 transition-all duration-300 group-hover:bg-muted/50">
              <Image
                src="/affe_logo.jpeg"
                alt="AFFE"
                width={140}
                height={48}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:text-primary"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-xl bg-card/60 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-primary/10"></div>

                  <div className="relative">
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </div>
                </Link>
              ))}

              <div className="ml-4 pl-4 border-l border-border/50">
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-xl glass-hover border-0 hover:bg-card/60 hover:text-primary transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="px-2 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:text-primary hover:bg-card/60 hover:backdrop-blur-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.3s ease-out ${index * 50}ms`,
                }}
              >
                <div className="flex items-center">
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
