export function InteriorDesignHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/images/hero-interior.jpg')] bg-cover bg-center opacity-10" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Modern with Professional Interior Design in Singapore—From Concept to
            Completion
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 text-pretty leading-relaxed">
            At{" "} <a href="https://www.strata.sg/" className="text-white hover:underline"> Strata.sg </a> , we provide professional interior design in Singapore that combine style and functionality. From
            comfortable homes to dynamic workplaces, we deliver designs tailored to your lifestyle, needs, and budget.
          </p>
        </div>
      </div>
    </section>
  )
}
