"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import FeaturedProducts from "@/components/home/featured-products"
import WhyChooseUs from "@/components/home/why-choose-us"
import CategoriesSection from "@/components/home/categories-section"
import ProductPopup from "@/components/product-popup"
import type { Product } from "@/lib/products"

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts onProductClick={setSelectedProduct} />
        <WhyChooseUs />
      </main>
      <Footer />
      <ProductPopup product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}
