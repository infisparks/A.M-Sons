"use client"

import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"
import Link from "next/link"

interface FeaturedProductsProps {
  onProductClick: (product: any) => void
}

export default function FeaturedProducts({ onProductClick }: FeaturedProductsProps) {
  const featuredProducts = products.slice(0, 8)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Products</h2>
          <p className="text-muted-foreground text-lg">Explore our wide range of quality construction materials</p>
        </div>

        {/* Product Grid - 2 rows of 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link href="/shop">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
              See More Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
