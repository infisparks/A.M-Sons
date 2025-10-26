import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Award, Users, Zap, Globe, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <section className="bg-linear-to-br from-primary via-blue-600 to-secondary text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-4">
              <span className="text-blue-100 font-semibold text-sm tracking-widest uppercase">About Our Company</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Building Trust Since 2004
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto text-balance">
              Leading supplier of premium construction materials with over 20 years of industry expertise and commitment
              to excellence
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Journey</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance">Our Story</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded in 2004, A.M and Sons has been a trusted name in the construction materials industry. What
                  started as a small family business has grown into a comprehensive supplier serving thousands of
                  construction professionals across the region.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for
                  contractors, builders, and construction companies of all sizes. Today, we continue to innovate and
                  expand our product range to meet the evolving needs of the construction industry.
                </p>
                <div className="flex gap-4 pt-4">
                  {[
                    { label: "20+ Years", value: "Industry Experience" },
                    { label: "5000+", value: "Happy Customers" },
                    { label: "500+", value: "Product Types" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex-1">
                      <p className="text-2xl font-bold text-primary">{stat.label}</p>
                      <p className="text-sm text-muted-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 md:h-96 bg-linear-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Award size={80} className="text-primary mx-auto mb-4" />
                    <p className="text-foreground font-bold text-xl">20+ Years</p>
                    <p className="text-muted-foreground">of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-linear-to-b from-blue-50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Purpose</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance">Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-primary p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide high-quality construction materials and exceptional customer service that empowers builders
                  and contractors to create safe, durable, and innovative structures that stand the test of time.
                </p>
              </div>
              <div className="bg-white border-2 border-secondary p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the most trusted and reliable construction materials supplier in the region, known for our
                  unwavering commitment to quality, innovation, and customer excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Strengths</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance">Why We're Different</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Experienced professionals ready to help with your construction needs",
                },
                {
                  icon: Zap,
                  title: "Fast Service",
                  description: "Quick processing and delivery to keep your projects on schedule",
                },
                {
                  icon: Award,
                  title: "Quality Products",
                  description: "All materials meet international safety and quality standards",
                },
                {
                  icon: Globe,
                  title: "Wide Range",
                  description: "Comprehensive selection of materials for all construction needs",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="bg-linear-to-br from-primary to-secondary p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                      <CheckCircle size={16} />
                      Verified
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-linear-to-r from-primary to-secondary text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto text-balance">
              Contact us today to discuss your construction material needs and discover why we're the trusted choice for
              professionals
            </p>
            <Link href="/contact-us">
              <button className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Get in Touch
                <span>→</span>
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
