import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-white mt-24">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
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
                <h3 className="text-lg font-bold">A.M and Sons</h3>
                <p className="text-xs text-gray-400">Premium Materials</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted supplier for premium construction materials with over 20 years of industry experience and
              commitment to quality.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
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
                    className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Categories</h4>
            <ul className="space-y-3">
              {[
                { label: "Safety Materials", href: "/shop" },
                { label: "Nails & Fasteners", href: "/shop" },
                { label: "Wire Materials", href: "/shop" },
                { label: "Hardware", href: "/shop" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-gray-300 text-sm">info@amsons.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-gray-300 text-sm">123 Industrial Ave, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">&copy; 2025 A.M and Sons. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
