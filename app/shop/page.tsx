"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import ProductPopup from "@/components/product-popup"
import { products, type Product } from "@/lib/products"
import { Filter, Grid3x3, List, Package, TrendingUp, Sparkles } from "lucide-react"

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  // Default to grid, but this will be the only option on mobile
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = [
    "All",
    "Safety Materials",
    "Nails Materials",
    "Wire Materials",
    "Hardware",
    "Construction Materials",
    "Tools",
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  // Determine the header text for the products section
  const getProductHeader = () => {
    if (selectedCategory === "All") {
      return {
        tag: "Our Full Catalog",
        title: "All Available Products",
        description: "Explore our complete range of premium materials and supplies",
      }
    }
    return {
      tag: selectedCategory,
      title: `Browse ${selectedCategory}`,
      description: `Discover our premium selection of ${selectedCategory.toLowerCase()}`,
    }
  }

  const headerContent = getProductHeader()

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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full mb-6">
              <Package size={16} className="text-blue-200" />
              <span className="text-white font-semibold text-sm tracking-widest uppercase">Shop</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our Premium
              <span className="block bg-linear-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Product Collection
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed mb-8">
              Browse our comprehensive collection of premium construction materials and supplies
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-2xl">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Package size={24} className="text-white" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-white">{filteredProducts.length}</span>
                  <span className="text-blue-200 ml-2">Products Available</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-6 py-4 rounded-2xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-100 font-medium">All items in stock</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section - STICKY REMOVED */}
        <section className="bg-white border-b-2 border-gray-100 py-8 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Filter Header */}
              <div className="flex items-center gap-3">
                <div className="bg-linear-to-br from-blue-600 to-blue-800 p-3 rounded-xl">
                  <Filter size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Filter by Category</h3>
                  <p className="text-sm text-gray-600">Showing {filteredProducts.length} products</p>
                </div>
              </div>

              {/* View Mode Toggle - HIDDEN ON MOBILE (sm:flex) */}
              <div className="hidden sm:flex items-center gap-3 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Grid3x3 size={18} />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    viewMode === "list"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <List size={18} />
                  <span className="hidden sm:inline">List</span>
                </button>
              </div>
            </div>

            {/* Category Pills - HORIZONTAL SCROLL */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`group px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap shrink-0 ${
                    selectedCategory === category
                      ? "bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <span className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full text-xs">
                      {filteredProducts.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 md:py-32 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-40 right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-6">
                <Sparkles size={16} className="text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
                  {headerContent.tag}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {headerContent.title.split(' ')[0]}{" "}
                <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {headerContent.title.split(' ').slice(1).join(' ')}
                </span>
              </h2>
              <p className="text-xl text-gray-600">{headerContent.description}</p>
            </div>

            {filteredProducts.length > 0 ? (
              <>
                {/* Products Grid/List */}
                <div
                  className={`grid gap-8 ${
                    viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 max-w-6xl mx-auto"
                  }`}
                >
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onProductClick={setSelectedProduct} 
                      viewMode={viewMode} // Pass viewMode to ProductCard
                    />
                  ))}
                </div>

                {/* Load More Section */}
                {filteredProducts.length > 8 && (
                  <div className="text-center mt-16">
                    <div className="inline-flex flex-col items-center gap-4 bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-lg">
                      <TrendingUp size={48} className="text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900 mb-2">Want to see more?</p>
                        <p className="text-gray-600">We have many more products available</p>
                      </div>
                      <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105">
                        Load More Products
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="text-center py-24">
                <div className="inline-flex flex-col items-center gap-6 bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-lg max-w-md mx-auto">
                  <div className="bg-gray-100 p-6 rounded-full">
                    <Package size={64} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">No products found</p>
                    <p className="text-gray-600 mb-6">We couldn't find any products in this category</p>
                  </div>
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="px-8 py-4 bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
                  >
                    View All Products
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚚",
                  title: "Fast Delivery",
                  description: "Quick shipping to your construction site",
                },
                {
                  icon: "✅",
                  title: "Quality Assured",
                  description: "All products meet international standards",
                },
                {
                  icon: "💬",
                  title: "Expert Support",
                  description: "Professional guidance from our team",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-8 rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ProductPopup product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}