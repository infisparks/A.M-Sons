import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Award, Users, Zap, Globe, CheckCircle, TrendingUp, Target, Heart, Shield, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutUs() {
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
              <Award size={16} className="text-yellow-300" />
              <span className="text-white font-semibold text-sm tracking-widest uppercase">About Our Company</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building Trust
              <span className="block bg-linear-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Since 2004
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Leading supplier of premium construction materials with over 20 years of industry expertise and unwavering commitment to excellence
            </p>

            {/* Stats Bar - FIX: Changed to grid-cols-1 on mobile, grid-cols-3 on medium screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              {[
                { value: "20+", label: "Years" },
                { value: "5000+", label: "Clients" },
                { value: "500+", label: "Products" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-4">
                    <Rocket size={16} className="text-blue-600" />
                    <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Our Journey</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Our{" "}
                    <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Story
                    </span>
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Founded in 2004, A.M and Sons has been a trusted name in the construction materials industry. What
                    started as a small family business has grown into a comprehensive supplier serving thousands of
                    construction professionals across the region.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for
                    contractors, builders, and construction companies of all sizes. Today, we continue to innovate and
                    expand our product range to meet the evolving needs of the construction industry.
                  </p>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  {[
                    { label: "20+ Years", value: "Experience", icon: Award },
                    { label: "5000+", value: "Customers", icon: Users },
                    { label: "500+", value: "Products", icon: Shield },
                  ].map((stat, idx) => {
                    const Icon = stat.icon
                    return (
                      <div key={idx} className="bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center">
                        <Icon size={24} className="text-blue-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-gray-900">{stat.label}</p>
                        <p className="text-xs text-gray-600 font-medium">{stat.value}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Image/Illustration */}
              <div className="relative">
                <div className="relative bg-linear-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl aspect-square">
                  {/* You can replace this with an actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-12">
                      <Award size={120} className="text-white/80 mx-auto mb-6" />
                      <p className="text-white text-3xl font-bold mb-2">20+ Years</p>
                      <p className="text-blue-200 text-xl">of Excellence</p>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-4 border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-linear-to-br from-blue-600 to-blue-800 p-3 rounded-xl">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">ISO 9001</p>
                      <p className="text-sm text-gray-600">Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 md:py-32 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-6">
                <Target size={16} className="text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Our Purpose</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Mission &{" "}
                <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-blue-800 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                <div className="relative bg-white border-4 border-blue-600 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <TrendingUp className="text-white" size={32} />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    Our Mission
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide high-quality construction materials and exceptional customer service that empowers builders
                    and contractors to create safe, durable, and innovative structures that stand the test of time.
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-b-3xl" />
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-blue-700 to-blue-900 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                <div className="relative bg-white border-4 border-blue-700 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-700 to-blue-900 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Globe className="text-white" size={32} />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    Our Vision
                    <div className="w-2 h-2 bg-blue-700 rounded-full animate-pulse" />
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the most trusted and reliable construction materials supplier in the region, known for our
                    unwavering commitment to quality, innovation, and customer excellence.
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-blue-700 to-blue-900 rounded-b-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different Section */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-6">
                <Shield size={16} className="text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Our Strengths</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Why We're{" "}
                <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Different
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what sets us apart in the construction materials industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Experienced professionals ready to help with your construction needs",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Zap,
                  title: "Fast Service",
                  description: "Quick processing and delivery to keep your projects on schedule",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Award,
                  title: "Quality Products",
                  description: "All materials meet international safety and quality standards",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  icon: Globe,
                  title: "Wide Range",
                  description: "Comprehensive selection of materials for all construction needs",
                  color: "from-green-500 to-green-600",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="group relative">
                    {/* Card */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-blue-200 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                      {/* Hover Background */}
                      <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                          <Icon className="text-white" size={32} />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>

                        {/* Verified Badge */}
                        <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                          <CheckCircle size={18} />
                          <span>Verified</span>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-linear-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-24 md:py-32 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-64 h-64 border-4 border-white rounded-full" />
            <div className="absolute bottom-20 left-20 w-80 h-80 border-4 border-white rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full mb-6">
              <Heart size={16} className="text-pink-300" />
              <span className="text-white font-medium">Let's Work Together</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your construction material needs and discover why we're the trusted choice for
              professionals
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-us">
                <button className="inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
                  Get in Touch
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
              
              <Link href="/shop">
                <button className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:border-white/50">
                  Browse Products
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
