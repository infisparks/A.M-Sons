"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Premium Construction Materials",
    subtitle: "Quality supplies for every project",
    cta: "Explore Products",
    bgImage: "/hero-banner-img-1.png",
    badge: "Trusted by 5000+ Contractors"
  },
  {
    id: 2,
    title: "Safety Equipment & Gear",
    subtitle: "Protect your team with industry-leading safety solutions",
    cta: "Shop Safety",
    bgImage: "/hero-banner-img-2.png",
    badge: "ISO Certified Products"
  },
  {
    id: 3,
    title: "Trusted by Industry Leaders",
    subtitle: "20+ years of excellence in fabrication supplies",
    cta: "Learn More",
    bgImage: "/hero-banner-img-3.png",
    badge: "20+ Years Experience"
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

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
    <section className="relative h-[650px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image with Parallax Effect */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url('${slide.bgImage}')`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
          
          {/* Animated Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                {/* Badge */}
                <div 
                  className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 transition-all duration-700 delay-200 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-medium">{slide.badge}</span>
                </div>

                {/* Title */}
                <h1 
                  className={`text-5xl md:text-7xl font-bold mb-6 text-white leading-tight transition-all duration-700 delay-300 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}
                >
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p 
                  className={`text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed transition-all duration-700 delay-400 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div 
                  className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Link
                    href="/shop"
                    className="group inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                  >
                    {slide.cta}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-white/50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Progress Bar & Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-4">
          {/* Dots Indicator */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlay(false)
                }}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-12"
                      : "bg-white/40 hover:bg-white/60 w-2"
                  }`}
                />
                {index === currentSlide && (
                  <div className="absolute inset-0 h-2 bg-linear-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:flex flex-col items-center gap-2 text-white">
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-0.5 h-12 bg-linear-to-b from-white to-transparent animate-bounce" />
      </div>
    </section>
  )
}