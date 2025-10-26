"use client"

import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeaturedProductsProps {
  onProductClick: (product: any) => void
}

export default function FeaturedProducts({ onProductClick }: FeaturedProductsProps) {
  const featuredProducts = products.slice(0, 8)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Featured Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Premium Construction Materials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our carefully curated selection of high-quality construction supplies trusted by industry
            professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/shop">
            <button className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              View All Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
