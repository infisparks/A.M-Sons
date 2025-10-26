import { Hammer, Shield, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CategoriesSection() {
  const categories = [
    {
      icon: Shield,
      name: "Safety Materials",
      description: "Helmets, gloves, vests, harnesses and protective equipment",
      color: "from-blue-500 to-blue-600",
      count: "250+ Products",
    },
    {
      icon: Hammer,
      name: "Nails & Fasteners",
      description: "Various types of nails and fasteners for all applications",
      color: "from-slate-600 to-slate-700",
      count: "180+ Products",
    },
    {
      icon: Zap,
      name: "Wire Materials",
      description: "Electrical and steel wires for construction projects",
      color: "from-amber-500 to-amber-600",
      count: "120+ Products",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-linear-to-b from-background to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Shop by Category</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Browse Our Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need from our comprehensive range of construction materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href="/shop">
                <div
                  className={`bg-linear-to-br ${category.color} p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full hover:scale-105 transform`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-white/20 p-4 rounded-lg group-hover:bg-white/30 transition-colors">
                      <Icon size={32} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">{category.count}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="opacity-90 mb-6 text-sm leading-relaxed">{category.description}</p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Shop Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
