"use client"

import Image from "next/image"
import type { Product } from "@/lib/products"
import { ShoppingCart, Eye } from "lucide-react"

interface ProductCardProps {
  product: Product
  onProductClick: (product: Product) => void
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-primary">
      <div className="relative h-64 cursor-pointer overflow-hidden bg-gray-100" onClick={() => onProductClick(product)}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onProductClick(product)
            }}
            className="bg-white text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
          >
            <Eye size={20} />
          </button>
          <button className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-all duration-300 shadow-lg">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">{product.category}</p>
        <h3 className="font-bold text-foreground mb-3 line-clamp-2 text-sm group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-primary rounded-full" />
            <span className="text-xs text-muted-foreground">Premium Quality</span>
          </div>
          <button
            onClick={() => onProductClick(product)}
            className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-md"
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}
