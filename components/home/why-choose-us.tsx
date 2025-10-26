import { Shield, Truck, Award, Users, CheckCircle, Star } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products meet international safety and quality standards",
      gradient: "from-blue-500 to-blue-600",
      stat: "100%",
      statLabel: "Certified"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your construction site",
      gradient: "from-green-500 to-green-600",
      stat: "24-48h",
      statLabel: "Delivery"
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Professional guidance from our experienced team",
      gradient: "from-purple-500 to-purple-600",
      stat: "20+",
      statLabel: "Years Exp"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated support for all your construction needs",
      gradient: "from-orange-500 to-orange-600",
      stat: "5000+",
      statLabel: "Clients"
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-6">
            <Star size={16} className="text-blue-600 fill-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Why Choose Us</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why{" "}
            <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              A.M and Sons?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing the best construction materials and exceptional service to every customer
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl text-center hover:border-blue-200 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="flex justify-center mb-6">
                      <div className={`bg-linear-to-br ${feature.gradient} p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <Icon className="text-white" size={36} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Stat Badge */}
                    <div className="inline-flex flex-col items-center gap-1 bg-gray-50 group-hover:bg-blue-50 px-6 py-3 rounded-xl transition-colors duration-300">
                      <span className="text-2xl font-bold text-gray-900">{feature.stat}</span>
                      <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">
                        {feature.statLabel}
                      </span>
                    </div>

                    {/* Check Icon */}
                    <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle size={24} className="text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl p-10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -translate-y-24 translate-x-24" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">ISO 9001</div>
              <div className="text-blue-100">Certified Quality</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}