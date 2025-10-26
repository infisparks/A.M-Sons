"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold">AM</span>
            </div>
            <span>A.M and Sons</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/shop" className="hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/contact-us" className="hover:text-accent transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="block py-2 hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/shop" className="block py-2 hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/contact-us" className="block py-2 hover:text-accent transition-colors">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
