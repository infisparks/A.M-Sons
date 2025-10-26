"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Headphones, MapPinned } from "lucide-react"

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
    // NOTE: In a real application, you would send formData to an API endpoint here.
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  // --- Real Contact Information ---
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      // Updated to include all three phone numbers
      details: ["+91 8104870627", "+91 9930758369", "+91 9321392150"],
      description: "Available during business hours",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Mail,
      title: "Email",
      // Updated with the real email address
      details: ["amandsons9819@gmail.com"],
      description: "We respond within 24 hours",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Industrial Avenue", "New York, NY 10001"], // Keeping dummy address
      description: "Visit our showroom",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ]
  // --------------------------------

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 md:py-32 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 border-4 border-white rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 border-4 border-white rounded-full translate-y-48 -translate-x-48" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full mb-6">
              <MessageCircle size={16} className="text-blue-200" />
              <span className="text-white font-semibold text-sm tracking-widest uppercase">Get in Touch</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Contact Our
              <span className="block bg-linear-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible
            </p>

            {/* Quick Response Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-6 py-3 rounded-full mt-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-100 font-medium">We typically respond within 24 hours</span>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-6">
                <Headphones size={16} className="text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Contact Information</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Multiple Ways to{" "}
                <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Reach Us
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="group relative">
                    {/* Card */}
                    <div className={`bg-white border-2 ${item.borderColor} p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden`}>
                      {/* Hover Background */}
                      <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                          <Icon className="text-white" size={32} />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>

                        {/* Details */}
                        <div className="space-y-1 mb-4">
                          {item.details.map((detail, i) => (
                            <p key={i} className="font-semibold text-gray-900 text-lg">
                              {detail}
                            </p>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600">{item.description}</p>

                        {/* Badge */}
                        <div className={`inline-flex items-center gap-2 ${item.bgColor} px-4 py-2 rounded-full mt-6`}>
                          <CheckCircle size={16} className="text-blue-600" />
                          <span className="text-sm font-medium text-gray-700">Verified</span>
                        </div>
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl group-hover:scale-110 transition-transform duration-300">
                      {idx + 1}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Business Hours */}
            <div className="relative bg-linear-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Business Hours</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                      <p className="font-bold text-white text-lg mb-2">{schedule.day}</p>
                      <p className="text-blue-100 text-lg">{schedule.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 md:py-32 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-6">
                <Send size={16} className="text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Send a Message</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Let's Start a{" "}
                <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h2>
              <p className="text-xl text-gray-600">Fill out the form below and our team will get back to you shortly</p>
            </div>

            {/* Form Card */}
            <div className="bg-white border-2 border-gray-100 p-8 md:p-12 rounded-3xl shadow-2xl">
              {/* Success Message */}
              {submitted && (
                <div className="mb-8 p-6 bg-linear-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl flex items-start gap-4 animate-in slide-in-from-top duration-500">
                  <div className="bg-green-500 p-2 rounded-full">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-green-900 text-lg">Message sent successfully!</p>
                    <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-gray-900 transition-all font-medium placeholder:text-gray-400 hover:border-gray-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-gray-900 transition-all font-medium placeholder:text-gray-400 hover:border-gray-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-gray-900 transition-all font-medium placeholder:text-gray-400 hover:border-gray-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-gray-900 transition-all font-medium placeholder:text-gray-400 hover:border-gray-300"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-gray-900 transition-all font-medium placeholder:text-gray-400 hover:border-gray-300 resize-none"
                    placeholder="Tell us about your inquiry..."
                    rows={6}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 flex items-center justify-center gap-3 group"
                >
                  <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-6">
                <MapPinned size={16} className="text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Our Location</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Visit Our{" "}
                <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Showroom
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Come see our complete range of products in person at our state-of-the-art facility
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 h-[500px]">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Location Info Cards */}
            {/* Location Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: MapPin, title: "Address", value: "123 Industrial Ave, NY 10001" },
                {
                  icon: Phone,
                  title: "Phone",
                  // Updated to include all three phone numbers with a line break
                  value: (
                    <>
                      +91 8104870627
                      <br />
                      +91 9930758369
                      <br />
                      +91 9321392150
                    </>
                  ),
                },
                { icon: Clock, title: "Hours", value: "Mon-Fri: 8AM-6PM" },
              ].map((info, idx) => {
                const Icon = info.icon
                return (
                  <div key={idx} className="bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6 rounded-2xl text-center">
                    <Icon size={32} className="text-blue-600 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-gray-600 mb-1">{info.title}</p>
                    {/* Ensure value handles both string and JSX */}
                    <p className="text-lg font-bold text-gray-900">{info.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}