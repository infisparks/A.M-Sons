"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Search, Phone, Mail } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>
                  +91 8104870627
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>amandsons9819@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-100">Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white border-b sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg border-gray-200" : "border-gray-100 shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-23 h-23">
                <Image
                  src="/logo-main-img.png"
                  alt="A.M and Sons Logo"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  A.M and Sons
                </div>
                <div className="text-xs text-gray-600 font-medium">Premium Construction Materials</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/shop", label: "Shop" },
                { href: "/contact-us", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-5 py-2 text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300 group">
                <Search size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="text-sm text-gray-600 group-hover:text-blue-600 font-medium">Search</span>
              </button>

              {/* Get Quote Button */}
              <Link href="/contact-us" className="hidden md:block">
                <button className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105">
                  Get Quote
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-6 space-y-2 border-t border-gray-100 pt-4 animate-in slide-in-from-top duration-300">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/shop", label: "Shop" },
                { href: "/contact-us", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-6 py-3 bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                    Get Quote
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}