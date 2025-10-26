import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Award, Users, Zap, Globe } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About A.M and Sons</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Leading supplier of premium construction materials with over 20 years of industry expertise
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                  Founded in 2004, A.M and Sons has been a trusted name in the construction materials industry. What
                  started as a small family business has grown into a comprehensive supplier serving thousands of
                  construction professionals across the region.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for
                  contractors, builders, and construction companies of all sizes.
                </p>
              </div>
              <div className="bg-muted rounded-lg h-64 md:h-80 flex items-center justify-center">
                <div className="text-center">
                  <Award size={64} className="text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold">20+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality construction materials and exceptional customer service that empowers builders
                  and contractors to create safe, durable, and innovative structures.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and reliable construction materials supplier in the region, known for our
                  commitment to quality, innovation, and customer excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why We're Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary p-4 rounded-lg inline-block mb-4">
                  <Users className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Experienced professionals ready to help with your construction needs
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary p-4 rounded-lg inline-block mb-4">
                  <Zap className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Fast Service</h3>
                <p className="text-muted-foreground">Quick processing and delivery to keep your projects on schedule</p>
              </div>
              <div className="text-center">
                <div className="bg-primary p-4 rounded-lg inline-block mb-4">
                  <Award className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Quality Products</h3>
                <p className="text-muted-foreground">All materials meet international safety and quality standards</p>
              </div>
              <div className="text-center">
                <div className="bg-primary p-4 rounded-lg inline-block mb-4">
                  <Globe className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Wide Range</h3>
                <p className="text-muted-foreground">Comprehensive selection of materials for all construction needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your construction material needs
            </p>
            <a href="/contact-us">
              <button className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Get in Touch
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
