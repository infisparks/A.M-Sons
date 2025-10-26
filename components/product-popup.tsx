"use client"

import type React from "react"
import type { Product } from "@/lib/products"
import { X, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ProductPopupProps {
  product: Product | null
  onClose: () => void
}

export default function ProductPopup({ product, onClose }: ProductPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  if (!product) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl z-10">
          <div>
            <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{product.category}</p>
            <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Product Image */}
            <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-3 leading-relaxed">{product.description}</p>
              </div>

              <div className="bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary" />
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">info@amsons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Address</p>
                      <p className="font-semibold text-foreground">123 Industrial Ave, NY</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Hours</p>
                      <p className="font-semibold text-foreground">Mon-Fri 8AM-6PM, Sat 9AM-4PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h4 className="text-2xl font-bold text-foreground mb-6">Inquire About This Product</h4>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-foreground transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-foreground transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-foreground transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-foreground transition-all"
                  placeholder="Tell us about your inquiry..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
