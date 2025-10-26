"use client"

import Image from "next/image"
import type { Product } from "@/lib/products"
import { ShoppingCart, Eye, Star, ArrowRight } from "lucide-react"

interface ProductCardProps {
  product: Product
  onProductClick: (product: Product) => void
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
      {/* Badge */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
          <Star size={12} className="fill-white" />
          <span>Premium</span>
        </div>
      </div>

      {/* Image Container */}
      <div
        className="relative h-105 sm:h-105 md:h-110 lg:h-72 cursor-pointer overflow-hidden bg-linear-to-br from-gray-50 to-gray-100"
        onClick={() => onProductClick(product)}
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onProductClick(product)
            }}
            className="bg-white text-blue-600 p-3.5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl hover:scale-110 transform"
            aria-label="Quick View"
          >
            <Eye size={22} />
          </button>
          <button
            className="bg-linear-to-r from-blue-600 to-blue-800 text-white p-3.5 rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-xl hover:scale-110 transform"
            aria-label="Add to Cart"
          >
            <ShoppingCart size={22} />
          </button>
        </div>

        {/* Quick Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-medium">In Stock</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block text-xs text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 text-base group-hover:text-blue-600 transition-colors duration-300 leading-snug">
          {product.name}
        </h3>

        {/* Features */}
        <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            <span>Quality Assured</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            <span>Fast Ship</span>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">A.M</span>
            </div> */}
            <div>
              <p className="text-xs font-semibold text-gray-900">A.M and Sons</p>
              <p className="text-xs text-gray-500">Trusted Supplier</p>
            </div>
          </div>
          
          <button
            onClick={() => onProductClick(product)}
            className="group/btn px-5 py-2.5 bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl text-xs font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
          >
            <span>View</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-colors duration-500 pointer-events-none" />
    </div>
  )
}