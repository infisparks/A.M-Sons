import { Hammer, Shield, Zap, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CategoriesSection() {
  const categories = [
    {
      icon: Shield,
      name: "Safety Materials",
      description: "Helmets, gloves, vests, harnesses and protective equipment",
      color: "from-blue-600 to-blue-800",
      hoverColor: "group-hover:from-blue-700 group-hover:to-blue-900",
      count: "250+ Products",
      bgPattern: "safety"
    },
    {
      icon: Hammer,
      name: "Nails & Fasteners",
      description: "Various types of nails and fasteners for all applications",
      color: "from-slate-700 to-slate-900",
      hoverColor: "group-hover:from-slate-800 group-hover:to-black",
      count: "180+ Products",
      bgPattern: "tools"
    },
    {
      icon: Zap,
      name: "Wire Materials",
      description: "Electrical and steel wires for construction projects",
      color: "from-amber-500 to-orange-600",
      hoverColor: "group-hover:from-amber-600 group-hover:to-orange-700",
      count: "120+ Products",
      bgPattern: "electric"
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Shop by Category</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Browse Our{" "}
            <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find exactly what you need from our comprehensive range of construction materials and safety equipment
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href="/shop" className="group">
                <div className="relative h-full">
                  {/* Main Card */}
                  <div
                    className={`relative bg-linear-to-br ${category.color} ${category.hoverColor} p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-full overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 border-4 border-white rounded-full -translate-y-16 translate-x-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 border-4 border-white rounded-full translate-y-12 -translate-x-12" />
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon and Count */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border border-white/20">
                          <Icon size={36} className="text-white" />
                        </div>
                        <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                          {category.count}
                        </span>
                      </div>

                      {/* Category Name */}
                      <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="opacity-90 mb-8 text-sm leading-relaxed">
                        {category.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                        <span>Shop Now</span>
                        <ArrowRight 
                          size={20} 
                          className="group-hover:translate-x-2 transition-transform duration-300" 
                        />
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent" />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                      Popular
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">Can't find what you're looking for?</p>
          <Link href="/contact-us">
            <button className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105">
              Contact Our Team
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}