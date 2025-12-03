"use client"

import type React from "react"
import type { Product } from "@/lib/products"
import { X, Phone, Mail, MapPin, Clock, CheckCircle, Star, Shield, Award } from "lucide-react"
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

  const isVideo = product.image?.toLowerCase().endsWith(".mp4")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm rounded-t-3xl z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">4.8 Rating</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:rotate-90 ml-4"
            aria-label="Close"
          >
            <X size={28} className="text-gray-600" />
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {/* Product Image */}
            <div className="relative">
              <div className="relative h-96 bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                {isVideo ? (
                  <video
                    src={product.image}
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                ) : (
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                )}

                {/* Premium Badge */}
                <div className="absolute top-4 right-4 bg-linear-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Award size={16} />
                  <span>Premium Quality</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { icon: Shield, label: "Quality Assured", color: "blue" },
                  { icon: CheckCircle, label: "ISO Certified", color: "green" },
                  { icon: Award, label: "Best Seller", color: "yellow" },
                ].map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <badge.icon size={24} className={`text-${badge.color}-600`} />
                    <span className="text-xs font-semibold text-gray-700 text-center">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-linear-to-b from-blue-600 to-blue-800 rounded-full" />
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="bg-linear-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-blue-600" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {[
                    "Premium quality materials",
                    "ISO certified and tested",
                    "Fast and reliable delivery",
                    "Expert support available",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-linear-to-br from-gray-900 to-gray-950 p-6 rounded-2xl text-white">
                <h4 className="font-bold mb-5 text-lg flex items-center gap-2">
                  <Phone size={20} className="text-blue-400" />
                  Contact Information
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                      <Phone size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <div className="font-semibold flex flex-col">
                        <span>+91 8104870627</span>
                        <span>+91 9930758369</span>
                        <span>+91 9321392150</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                      <Mail size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="font-semibold">amandsons9819@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                      <MapPin size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Address</p>
                      <p className="font-semibold">123 Industrial Ave, NY</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                      <Clock size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Hours</p>
                      <p className="font-semibold">Mon-Fri 8AM-6PM, Sat 9AM-4PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="border-t-2 border-gray-100 pt-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Request a Quote</h3>
              <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-gray-900 transition-all font-medium placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-gray-900 transition-all font-medium placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-gray-900 transition-all font-medium placeholder:text-gray-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Your Message *</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-gray-900 transition-all font-medium placeholder:text-gray-400 resize-none"
                  placeholder="Tell us about your requirements..."
                  rows={5}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
                >
                  Send Inquiry
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-5 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}