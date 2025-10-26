import { Shield, Truck, Award, Users } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products meet international safety and quality standards",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your construction site",
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Professional guidance from our experienced team",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated support for all your construction needs",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose A.M and Sons?</h2>
          <p className="text-muted-foreground text-lg">
            We are committed to providing the best construction materials and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
