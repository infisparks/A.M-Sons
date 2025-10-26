import { Shield, Truck, Award, Users, CheckCircle } from "lucide-react"

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
    <section className="py-20 md:py-32 bg-linearto-b from-blue-50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Why A.M and Sons?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing the best construction materials and exceptional service to every customer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 rounded-xl text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary group"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-linear-to-br from-primary to-secondary p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                <div className="mt-6 flex justify-center">
                  <CheckCircle size={20} className="text-primary" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
