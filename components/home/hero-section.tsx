export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Premium Construction Materials</h1>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto text-balance">
          Your trusted supplier for safety equipment, nails, wires, and all construction materials you need
        </p>
        <button className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Explore Products
        </button>
      </div>
    </section>
  )
}
