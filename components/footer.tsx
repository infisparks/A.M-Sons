import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowRight, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 via-gray-950 to-black text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl p-10 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">Stay Updated</h3>
                <p className="text-blue-100 text-lg">
                  Subscribe to our newsletter for exclusive deals and industry insights
                </p>
              </div>
              <div>
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                  />
                  <button
                    type="submit"
                    // UPDATED CLASSES: p-4 for a square button on mobile, sm:px-8 sm:py-4 for full size on desktop
                    className="p-4 sm:px-8 sm:py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
                  >
                    <span className="hidden sm:inline">Subscribe</span>
                    <Send size={20} className="transition-transform sm:group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-23 h-23">
                <Image
                  src="/logo-2-main-img.png"
                  alt="A.M and Sons Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">A.M and Sons</h3>
                <p className="text-xs text-gray-400">Premium Materials</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted supplier for premium construction materials with over 20 years of industry experience and
              commitment to quality excellence.
            </p>
            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold mb-3 text-gray-200">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/5 hover:bg-linear-to-r hover:from-blue-600 hover:to-blue-800 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-blue-500 group"
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-blue-700 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Shop", href: "/shop" },
                { label: "Contact", href: "/contact-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-blue-700 rounded-full" />
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Safety Materials", href: "/shop" },
                { label: "Nails & Fasteners", href: "/shop" },
                { label: "Wire Materials", href: "/shop" },
                { label: "Hardware", href: "/shop" },
                { label: "Construction Materials", href: "/shop" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-blue-700 rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Phone</p>
                  <p className="text-white font-medium">
                      +91 8104870627
                      <br />
                      +91 9930758369
                      <br />
                      +91 9321392150
                    </p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <p className="text-white font-medium">amandsons9819@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Address</p>
                  <p className="text-white font-medium">123 Industrial Ave, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2025 A.M and Sons. All rights reserved. Designed with ❤️
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
