import { Hammer, Shield, Zap } from "lucide-react"

export default function CategoriesSection() {
  const categories = [
    {
      icon: Shield,
      name: "Safety Materials",
      description: "Helmets, gloves, vests, harnesses and more",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Hammer,
      name: "Nails Materials",
      description: "Various types of nails for all applications",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Zap,
      name: "Wire Materials",
      description: "Electrical and steel wires for construction",
      color: "from-yellow-500 to-yellow-600",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Categories</h2>
          <p className="text-muted-foreground text-lg">Browse through our comprehensive product categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} p-8 rounded-lg text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
              >
                <Icon size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="opacity-90">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
