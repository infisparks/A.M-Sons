"use client"

import Image from "next/image"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onProductClick: (product: Product) => void
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-75 cursor-pointer overflow-hidden bg-muted" onClick={() => onProductClick(product)}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300 "
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex justify-end">
          <button
            onClick={() => onProductClick(product)}
            className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm hover:bg-secondary transition-colors"
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}
