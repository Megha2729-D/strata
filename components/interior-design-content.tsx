"use client"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, Building2, Store, Briefcase, Hammer, Zap, Star, Clock, Users } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"

export function InteriorDesignContent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false })
  const [currentIndex, setCurrentIndex] = useState(0)

  const stats = [
    { icon: Hammer, label: "Projects Completed", value: "150+" },
    { icon: Clock, label: "Average Timeline", value: "8 wks" },
    { icon: Star, label: "Award-Winning Designs", value: "10+" },
    { icon: Users, label: "Clients Served", value: "500+" },
  ]

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    emblaApi.on("init", onSelect)

    const autoplay = setInterval(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  const services = [
    { icon: Home, title: "HDB Renovation", description: "We specialize in transforming HDB flats into functional and stylish living spaces. From space planning to custom carpentry and modern finishes, we create homes that suit your lifestyle and maximize every square meter.", },
    { icon: Building2, title: "Condo Renovation", description: "Our condominium renovations combine elegance and practicality. With premium materials, custom-built solutions, and optimized layouts, we deliver luxurious and comfortable living environments.", },
    { icon: Store, title: "Commercial Renovation", description: "We design and renovate commercial spaces that leave a lasting impression. From retail stores to restaurants, our team enhances functionality, brand identity, and customer experience.", },
    { icon: Briefcase, title: "Office Renovation", description: "Strata creates offices that inspire productivity and reflect your brand. Open layouts, ergonomic designs, and smart storage solutions ensure a professional and efficient workspace.", },
    { icon: Hammer, title: "Carpentry Services", description: "Our experienced carpenters craft custom furniture, built-in storage, and bespoke cabinetry tailored to your space, ensuring functionality and style in every detail.", },
    { icon: Zap, title: "Electrical Services", description: "We provide professional electrical installations and repairs for residential and commercial projects. All work is carried out by licensed electricians, ensuring safety and compliance with regulations.", },
  ]
  const whyChooseUs = [
    "Understanding how you live, work, and use your space",
    "Maximizing your budget with value-focused design",
    "Blending elegance with functionality in every detail",
    "Transparent pricing with no hidden costs",
    "Years of experience across HDB flats, condos, offices, and industrial interiors",
  ]
  const residentialProjects = [
    { title: "HDB 4-Room – 664A Punggol Drive", duration: "8 weeks", description: "Complete 4-room HDB renovation featuring modern design, custom carpentry, and optimized living spaces.", location: "Punggol Drive", },
    { title: "HDB 4-Room – Marine Terrace", duration: "10 weeks", description: "Luxury 4-room HDB renovation featuring premium black marble floors, geometric tile patterns, and sophisticated finishes.", location: "Marine Terrace", },
    { title: "Orchid Park Condo – Yishun", duration: "12 weeks", description: "Luxury condominium renovation with sophisticated color schemes, premium marble finishes, and custom built-in solutions.", location: "Yishun", },
  ]
  const commercialProjects = [
    { title: "Luxury Skincare Shop at CityLink – City Hall", duration: "6 weeks", description: "High-end skincare and beauty shop featuring luxury marble finishes, professional treatment rooms, and sophisticated commercial design.", location: "CityLink Mall, City Hall", },
    { title: "Restaurant Bar at Novena Square – Novena", duration: "8 weeks", description: "Modern restaurant and sports bar featuring industrial design, extensive bar facilities, and contemporary dining spaces.", location: "Novena Square, Novena", },
  ]
  const process = [{ title: "Initial Consultation", description: "We begin by understanding your needs, budget, and timeline to ensure a tailored renovation or interior design plan.", },
  { title: "Concept and Design Proposal", description: "We present mood boards, layouts, and 3D renderings to visualize your space and refine the design.", },
  { title: "Design Review and Approval", description: "You review the proposed designs, and we make adjustments until everything meets your expectations.", },
  { title: "Execution and Project Management", description: "Our team manages all contractors, vendors, and quality control to ensure smooth execution.", },
  { title: "Delivery and Aftercare", description: "We finalize the finishing touches, hand over your completed space, and provide follow-up support to guarantee your satisfaction.", },
  ]
  const testimonials = [
    { name: "Vijaya Ramanathan K", text: "I got some renovation work done. Jag was very professional and took the job very seriously and ensured his team got the work completed on time and the quality of work is very good. Excellent service.", },
    { name: "Chong Wei Ang", text: "I engaged strata.sg for home renovation in Singapore. They were easy to work with and kept me updated. Their premium interior design touches gave my space a better look. I felt comfortable dealing with their Sims Avenue office.", },
    { name: "Thirumalai Srinivasan", text: "My office renovation in Singapore was managed by strata.sg. The team was responsive and professional. They gave me modern interior design suggestions that made sense. Glad I found them while looking for a renovation contractor near me.", },
    { name: "Jeeva Jasper Arvin", text: "Had a great experience with him at strata.sg. He's genuine, professional, and always ready to guide clearly. Highly recommend if you want someone you can trust", },

  ]
  const faqs = [
    { question: "What is the cost of interior design in Singapore?", answer: "The cost depends on the size, style, and scope of your project. After an initial consultation, we provide a transparent quotation tailored to your requirements and budget.", },
    { question: "How long does a project take?", answer: "For most apartments, the renovation timeline is approximately 6–10 weeks. Larger or more complex projects, such as landed properties or commercial spaces, may require 12–20 weeks.", },
    { question: "Do you offer design-only packages?", answer: "Yes. If you already have your own contractors, we provide flexible design consultancy packages where we handle the creative planning and design, while your contractors manage the execution.", },
    { question: "Can you help with permits or regulatory requirements?", answer: "Yes. We take care of all necessary approvals with HDB, BCA, or your condo management and ensure your renovation fully complies with Singapore's building regulations and safety standards.", },
    { question: "Do you offer sustainable or eco-friendly design solutions?", answer: "Yes. We incorporate energy-efficient lighting, eco-friendly materials, and space-saving layouts to create designs that are both stylish and environmentally responsible.", },
    { question: "Can you customize furniture and carpentry?", answer: "Definitely. We work with experienced carpenters to craft custom furniture, storage solutions, and built-ins that perfectly fit your space.", },
    { question: "What if I only need a small renovation?", answer: "No project is too small. Whether it's a simple room makeover or a full renovation, we tailor our services to your needs.", },
  ]
  return (
    <div className="bg-background">
      {/* About Section */}
      <section className="py-20 bg-secondary/5 animate-fade-in-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                What Makes Strata Your Ideal{" "}
                <a href="https://www.strata.sg/about" className="text-primary hover:underline">Interior Design Partner</a>?
              </h2>
              <p className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-6">
                Every home and workplace is unique. That's why we start by understanding how you live, work, and use your space—so our interior design in Singapore enhances your lifestyle rather than simply following trends. We maximize your budget, ensuring every detail adds value. From lighting to layout, our focus is on blending elegance with functionality. With transparent pricing and no hidden costs, you'll always know what to expect. Backed by years of experience across Singapore, our portfolio includes <a href="https://en.wikipedia.org/wiki/Public_housing_in_Singapore" target="_blank">HDB flats</a> , condominiums, offices, and industrial interiors.
              </p>
              <div className="grid gap-3 mt-8">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 animate-fade-in-up delay-[calc(50ms*var(--i))]" style={{ "--i": index } as React.CSSProperties}>
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground m-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/projects/mandarin-gardens-condo/living-dining.jpg"
                  alt="Modern bar renovation showcasing Strata.SG quality work"
                  fill
                  className="object-cover"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border">
                {/* Stats content */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="h-6 w-6 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Interior Design & Renovation <span className="text-primary">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl text-center font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-center leading-relaxed flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">From Our Portfolio: Real Projects, Real <span className="text-primary">Transformations</span></h2>
          </div>

          {/* Residential Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Residential Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residentialProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-primary font-medium mb-3">{project.duration}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{project.description}</p>
                    <p className="text-sm text-muted-foreground">📍 {project.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Commercial Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Commercial Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commercialProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-primary font-medium mb-3">{project.duration}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{project.description}</p>
                    <p className="text-sm text-muted-foreground">📍 {project.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Transparent and <span className="text-primary">Customer-Centric Process</span></h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((step, index) => (
              <Card key={index} className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              What <a href="https://www.strata.sg/reviews" className="text-primary hover:underline">Our Customers</a> Say
            </h2>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] px-2">
                  <Card className="hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <p className="text-muted-foreground leading-relaxed mb-4 italic flex-grow">"{testimonial.text}"</p>
                      <p className="font-semibold text-foreground mt-auto">— {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted-foreground"}`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frequently Asked <span className="text-primary">Questions</span></h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-xl">
                  <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-left hover:text-primary transition-colors [&>svg]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
