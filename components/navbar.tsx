"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ShoppingCart, Search } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-2xl group">
            <div className="relative w-23 h-23">
              <Image
                src="/logo-main-img.png"
                alt="A.M and Sons Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-primary font-bold text-lg">A.M and Sons</div>
              <div className="text-xs text-muted-foreground font-normal">Construction Materials</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/shop", label: "Shop" },
              { href: "/contact-us", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors hidden sm:flex">
              <Search size={20} className="text-foreground" />
            </button>

            {/* Cart Icon */}
            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors relative">
              <ShoppingCart size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-gray-200">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/shop", label: "Shop" },
              { href: "/contact-us", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
