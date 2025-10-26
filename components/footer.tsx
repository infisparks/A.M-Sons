import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">A.M and Sons</h3>
            <p className="text-sm opacity-90">
              Premium construction materials supplier with over 20 years of industry experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-accent transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/shop" className="hover:text-accent transition-colors">
                  Safety Materials
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-accent transition-colors">
                  Nails Materials
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-accent transition-colors">
                  Wire Materials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@amsons.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Industrial Ave, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 A.M and Sons. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
