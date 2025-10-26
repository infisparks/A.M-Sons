"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import ProductPopup from "@/components/product-popup"
import { products, type Product } from "@/lib/products"
import { Filter, Grid3x3, List } from "lucide-react"

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <section className="bg-linear-to-br from-primary via-blue-600 to-secondary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-block mb-4">
              <span className="text-blue-100 font-semibold text-sm tracking-widest uppercase">Shop</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Our Shop</h1>
            <p className="text-xl text-blue-100 text-balance">
              Browse our comprehensive collection of premium construction materials and supplies
            </p>
            <div className="mt-6 flex items-center gap-2 text-blue-100">
              <span className="text-2xl font-bold text-white">{filteredProducts.length}</span>
              <span>products available</span>
            </div>
          </div>
        </section>

        {/* MODIFIED: Removed sticky classes (sticky top-20 z-30 shadow-sm)
             to allow the filter section to scroll naturally. */}
        <section className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Filter by Category</h3>
              </div>

              <div className="flex items-center gap-3">
                {/* View Mode Buttons (Commented out) */}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-linear-to-r from-primary to-secondary text-white shadow-lg"
                      : "bg-gray-100 text-foreground hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length > 0 ? (
              <div
                className={`grid gap-6 ${
                  viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onProductClick={setSelectedProduct} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">No products found in this category</p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ProductPopup product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}