"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Premium Construction Materials",
    subtitle: "Quality supplies for every project",
    cta: "Explore Products",
    bgImage: "/hero-banner-img-1.png",
  },
  {
    id: 2,
    title: "Safety Equipment & Gear",
    subtitle: "Protect your team with industry-leading safety solutions",
    cta: "Shop Safety",
    bgImage: "/hero-banner-img-2.png",
  },
  {
    id: 3,
    title: "Trusted by Industry Leaders",
    subtitle: "20+ years of excellence in fabrication supplies",
    cta: "Learn More",
    bgImage: "/hero-banner-img-3.png",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="relative h-screen md:h-[600px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.bgImage}')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">{slide.title}</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 text-balance">{slide.subtitle}</p>
              <Link
                href="/shop"
                className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white/75 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
