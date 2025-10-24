import { CheckCircle, Clock, Shield, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function RenovationContent() {
  const whyChoose = [
    {
      icon: Shield,
      title: "Experienced Team",
      description:
        "Our certified professionals bring years of expertise in residential, commercial, and office renovations across Singapore. From the first sketch to the final handover, we manage every detail with precision and care.",
    },
    {
      icon: Sparkles,
      title: "Quality Craftsmanship",
      description:
        "We use premium materials and proven techniques to ensure exceptional results. Every project receives meticulous attention, delivering finishes that stand the test of time.",
    },
    {
      icon: CheckCircle,
      title: "Transparent Process",
      description:
        "We provide clear quotations, realistic timelines, and regular progress updates so you'll always know what to expect with no hidden surprises.",
    },
    {
      icon: Sparkles,
      title: "Tailored Solutions",
      description:
        "Every design is customized to match your lifestyle, brand identity, and budget. The outcome is a space that feels uniquely yours.",
    },
    {
      icon: Clock,
      title: "Affordable & On-Time",
      description:
        "We're committed to competitive pricing and timely delivery, ensuring minimal disruption to your home or business.",
    },
  ]

  const services = [
    {
      title: "HDB Renovation",
      description:
        "We transform HDB flats into stylish and functional homes. From smart space planning to custom carpentry and modern finishes, we maximize every square foot for comfort and practicality.",
    },
    {
      title: "Condo Renovation",
      description:
        "Our condominium renovations combine luxury with functionality. Using premium materials and tailored layouts, we create elegant living spaces that match your lifestyle.",
    },
    {
      title: "Commercial Renovation",
      description:
        "From retail outlets to restaurants and showrooms, we design and renovate commercial spaces that strengthen your brand identity while improving customer experience.",
    },
    {
      title: "Office Renovation",
      description:
        "We create modern, efficient, and inspiring office spaces that boost productivity. From open layouts to ergonomic solutions, we tailor designs to your team's needs and business goals.",
    },
    {
      title: "Carpentry Services",
      description:
        "Our skilled carpenters craft bespoke furniture, built-in storage, and cabinetry. Every piece is designed to fit your space perfectly while balancing durability and style.",
    },
    {
      title: "Electrical Services",
      description:
        "We provide safe, reliable, and professional electrical installations and upgrades for both residential and commercial projects—handled by licensed electricians in compliance with Singapore regulations.",
    },
  ]

  const residentialProjects = [
    {
      title: "HDB 4-Room – 664A Punggol Drive",
      duration: "8 Weeks",
      description:
        "A complete 4-room HDB renovation featuring modern layouts, custom carpentry, and optimized living spaces for comfort and practicality.",
      location: "Punggol Drive",
    },
    {
      title: "HDB 4-Room – Marine Terrace",
      duration: "10 Weeks",
      description:
        "Luxury 4-room HDB transformation with premium black marble floors, geometric tile patterns, and sophisticated finishes.",
      location: "Marine Terrace",
    },
    {
      title: "Orchid Park Condo – Yishun",
      duration: "12 Weeks",
      description:
        "Elegant condominium renovation with refined color schemes, premium marble finishes, and tailor-made built-in solutions.",
      location: "Yishun",
    },
  ]

  const commercialProjects = [
    {
      title: "Luxury Skincare Shop – CityLink Mall",
      duration: "6 Weeks",
      description:
        "High-end retail fit-out featuring marble finishes, professional treatment rooms, and a sophisticated design that elevates the brand.",
      location: "CityLink Mall, City Hall",
    },
    {
      title: "Restaurant & Bar – Novena Square",
      duration: "8 Weeks",
      description:
        "Modern restaurant and sports bar renovation with industrial aesthetics, extensive bar facilities, and contemporary dining layouts.",
      location: "Novena Square, Novena",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Consultation & Requirements",
      description:
        "We start by understanding your vision, lifestyle, style preferences, and budget. This ensures every decision we make aligns with your expectations.",
    },
    {
      step: "2",
      title: "Concept & Design Planning",
      description:
        "Our team develops detailed design concepts, layouts, and 3D renderings so you can visualize the final space. We provide clear proposals that outline materials, timelines, and costs.",
    },
    {
      step: "3",
      title: "Execution & Quality Assurance",
      description:
        "We manage all contractors, suppliers, and on-site work, ensuring the highest standards of craftsmanship and safety. Only premium materials and proven techniques are used for lasting results.",
    },
    {
      step: "4",
      title: "Review & Final Approval",
      description:
        "Before project handover, we conduct a thorough inspection with you to ensure every detail meets your expectations. We make adjustments as needed to guarantee complete satisfaction.",
    },
    {
      step: "5",
      title: "Aftercare & Support",
      description:
        "Our commitment doesn't end at handover. We provide follow-up support, maintenance advice, and guidance to ensure your space continues to look and function beautifully.",
    },
  ]

  const testimonials = [
    {
      name: "Vijaya Ramanathan K",
      text: "I got some renovation work done. Jag was very professional and took the job very seriously and ensured his team got the work completed on time and the quality of work is very good. Excellent service.",
    },
    {
      name: "Chong Wei Ang",
      text: "I engaged strata.sg for home renovation in Singapore. They were easy to work with and kept me updated. Their premium interior design touches gave my space a better look. I felt comfortable dealing with their Sims Avenue office.",
    },
    {
      name: "Thirumalai Srinivasan",
      text: "My office renovation in Singapore was managed by strata.sg. The team was responsive and professional. They gave me modern interior design suggestions that made sense. Glad I found them while looking for a renovation contractor near me.",
    },
    {
      name: "Jeeva Jasper Arvin",
      text: "Had a great experience with him at strata.sg. He's genuine, professional, and always ready to guide clearly. Highly recommend if you want someone you can trust.",
    },
  ]

  const faqs = [
    {
      question: "How long does a renovation project typically take in Singapore?",
      answer:
        "The timeline depends on the size and complexity of the project. Most HDB or condo renovations take 6–12 weeks, while larger commercial or office projects may require 12–20 weeks.",
    },
    {
      question: "How much does a renovation cost in Singapore?",
      answer:
        "Renovation costs vary depending on the project type, size, materials, and finishes. After an initial consultation, we provide a transparent, detailed quotation tailored to your budget and requirements.",
    },
    {
      question: "Can you help with permits and regulatory requirements?",
      answer:
        "Absolutely. We manage all approvals with HDB, BCA, and condo management, ensuring your project fully complies with Singapore's building regulations and safety standards.",
    },
    {
      question: "Can you customize furniture and carpentry?",
      answer:
        "Yes. Our skilled carpenters craft custom furniture, built-in storage, and cabinetry designed to fit your space perfectly while maintaining style and durability.",
    },
    {
      question: "Do you use eco-friendly and durable materials?",
      answer:
        "We incorporate premium, long-lasting materials and offer sustainable solutions such as energy-efficient lighting and space-saving designs to create environmentally responsible spaces.",
    },
    {
      question: "Can you handle both small and large projects?",
      answer:
        "Absolutely. We manage everything from single-room makeovers to full-home, office, or commercial renovations, ensuring consistent quality and professionalism at every scale.",
    },
    {
      question: "What makes Strata.sg different from other renovation contractors?",
      answer:
        "We provide a transparent, customer-centric process, combining design expertise, high-quality craftsmanship, and clear communication from consultation to aftercare. Every project is tailored to your lifestyle, brand, and budget.",
    },
  ]

  return (
    <div className="bg-background">
      {/* Why Choose Strata */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Strata?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Comprehensive Interior Design & Renovation Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            At Strata.sg, we offer comprehensive renovation and interior design solutions for homes, condos, offices,
            and commercial spaces across Singapore. Our services combine style, functionality, and quality craftsmanship
            to create spaces that reflect your lifestyle, brand, and vision.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            From Our Portfolio: Real Projects, Real Transformations
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore our{" "}
            <Link href="/projects" className="text-primary hover:underline">
              completed renovation projects
            </Link>{" "}
            across Singapore, showcasing quality craftsmanship, attention to detail, and functional, stylish designs.
          </p>

          {/* Residential Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Residential Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residentialProjects.map((project, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-primary font-medium mb-3">{project.duration}</p>
                    <p className="text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                    <p className="text-sm text-muted-foreground">📍 {project.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Commercial Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Commercial Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {commercialProjects.map((project, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-primary font-medium mb-3">{project.duration}</p>
                    <p className="text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                    <p className="text-sm text-muted-foreground">📍 {project.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Our Strata Team Works</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            At Strata.sg, our goal is to make your renovation or interior design project smooth, transparent, and
            stress-free. From the initial consultation to the final handover, we manage every step with care,
            professionalism, and attention to detail.
          </p>
          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Happy Clients</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
