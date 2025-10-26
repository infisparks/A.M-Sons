"use client"

import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"
import Link from "next/link"
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"

interface FeaturedProductsProps {
  onProductClick: (product: any) => void
}

export default function FeaturedProducts({ onProductClick }: FeaturedProductsProps) {
  const featuredProducts = products.slice(0, 8)

  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-50 to-blue-100 border border-blue-200 px-5 py-2 rounded-full mb-6 shadow-sm">
            <TrendingUp size={16} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Featured Collection</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Construction Materials
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated selection of high-quality construction supplies trusted by industry
            professionals worldwide
          </p>
        </div>

        {/* Stats Bar */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Products", value: "500+", icon: "📦" },
            { label: "Happy Clients", value: "5000+", icon: "😊" },
            { label: "Years Experience", value: "20+", icon: "⭐" },
            { label: "Countries", value: "15+", icon: "🌍" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onProductClick={onProductClick} viewMode={"grid"} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48" />
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} className="text-yellow-300" />
              <span className="text-white text-sm font-medium">Exclusive Deals</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Our Complete Product Range
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Browse through our extensive catalog and find the perfect materials for your next project
            </p>

            <Link href="/shop">
              <button className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
                View All Products
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}