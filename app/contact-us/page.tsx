"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <section className="bg-linear-to-br from-primary via-blue-600 to-secondary text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-4">
              <span className="text-blue-100 font-semibold text-sm tracking-widest uppercase">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Contact Our Team</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto text-balance">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info Cards */}
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  details: ["+1 (555) 123-4567"],
                  description: "Available during business hours",
                },
                {
                  icon: Mail,
                  title: "Email",
                  details: ["info@amsons.com"],
                  description: "We respond within 24 hours",
                },
                {
                  icon: MapPin,
                  title: "Address",
                  details: ["123 Industrial Avenue", "New York, NY 10001"],
                  description: "Visit our showroom",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group hover:border-primary"
                  >
                    <div className="bg-linear-to-br from-primary to-secondary p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <div className="space-y-1 mb-3">
                      {item.details.map((detail, i) => (
                        <p key={i} className="font-semibold text-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-linear-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary" size={28} />
                <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="font-semibold text-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">8:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Saturday</p>
                  <p className="text-muted-foreground">9:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sunday</p>
                  <p className="text-muted-foreground">Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <p className="font-semibold text-green-900">Message sent successfully!</p>
                    <p className="text-sm text-green-700">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-foreground transition-all"
                      placeholder="Your name"
                    />
                  </div>

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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-foreground transition-all"
                      placeholder="How can we help?"
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
                    rows={6}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 md:py-32 bg-linear-to-b from-blue-50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Location</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance">Visit Our Showroom</h2>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-96 border border-gray-200">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
