"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "./ui/button"
import { Great_Vibes } from "next/font/google"

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" })

export function InteriorDesignContent() {
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true,
    },
    [autoplay]
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    onSelect()
  }, [emblaApi])

  const sections = [
    {
      title: "Our Interior Design Services",
      description:
        "We create modern, stylish, and functional interiors tailored to your lifestyle and space. Our team combines creativity with practical solutions to optimize every corner of your home...",
      image: "/images/projects/mandarin-gardens-condo/living-dining.jpg",
      reverse: false,
      buttons: [
        { text: "Find Out More", link: "#" },
        { text: "See Projects", link: "#" },
      ],
      bg: "bg-white",
    },
    {
      title: "Renovation Solutions",
      description:
        "From minor touch-ups to complete home transformations, our renovation solutions are tailored to your unique needs and budget...",
      image: "/images/projects/punggol-hdb/kitchen-cabinets.jpg",
      reverse: true,
      buttons: [
        { text: "Learn More", link: "#" },
        { text: "View Gallery", link: "#" },
      ],
      bg: "bg-secondary/20",
    },
    {
      title: "New Builds & Extensions",
      description:
        "Specializing in new builds and home extensions, we transform your ideas into stunning, practical spaces...",
      image: "/images/projects/mandarin-gardens-condo/kitchen.jpg",
      reverse: false,
      buttons: [
        { text: "Find Out More", link: "#" },
        { text: "See Projects", link: "#" },
      ],
      bg: "bg-white",
    },
  ]

  const testimonials = [
    {
      name: "Vijaya Ramanathan K",
      text: "I got some renovation work done. Jag was very professional and ensured his team got the work completed on time. Excellent service.",
    },
    {
      name: "Chong Wei Ang",
      text: "I engaged strata.sg for home renovation in Singapore. Their premium interior design touches gave my space a better look.",
    },
    {
      name: "Thirumalai Srinivasan",
      text: "My office renovation in Singapore was managed by strata.sg. The team was responsive and professional. Glad I found them while looking for a renovation contractor.",
    },
    {
      name: "Jeeva Jasper Arvin",
      text: "Had a great experience with him at strata.sg. He's genuine, professional, and always ready to guide clearly. Highly recommend.",
    },
  ]
  const information = [
    {
      heading: "Interior Space Planning",
      description:
        "Space planning is key to achieving a positive flow with balance throughout rooms for the optimal layout. It’s where the Interior Design process starts. We’ll work with you to understand how you live so that we can create a floor plan that not only complements your lifestyle but also maximizes your space.",
    },
    {
      heading: "Custom Cabinetry Design, Layout & Documentation",
      description:
        "We design functional and practical cabinetry as a priority, to suit each room. Whether we’re designing your kitchen, pantry, bathroom, walk-in robe, or office, every layout is meticulously thought out and tailored to your needs.",
    },
    {
      heading: "Lighting & Fixture Planning",
      description:
        "We create lighting plans that enhance your home’s ambiance and functionality, ensuring every space feels balanced, comfortable, and visually appealing.",
    },
    {
      heading: "Furniture & Décor Curation",
      description:
        "From sofas to accent pieces, our team curates furniture and décor that complement your interior theme and bring your space to life.",
    },
  ];


  const faqs = [
    { question: "What is the cost of interior design in Singapore?", answer: "The cost depends on the size, style, and scope of your project..." },
    { question: "How long does a project take?", answer: "For most apartments, the renovation timeline is approximately 6–10 weeks..." },
    { question: "Do you offer design-only packages?", answer: "Yes. We provide flexible design consultancy packages for clients who already have contractors." },
    { question: "Can you help with permits?", answer: "Yes. We handle approvals with HDB, BCA, or condo management to ensure compliance with regulations." },
    { question: "Do you offer eco-friendly solutions?", answer: "Yes. We incorporate energy-efficient lighting, eco-friendly materials, and space-saving layouts." },
    { question: "Can you customize furniture?", answer: "We work with skilled carpenters to craft custom furniture and built-ins." },
  ]

  return (
    <div className="bg-background">
      {/* About Section */}
      <section className="py-20 bg-secondary/5 animate-fade-in-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interior Designers Singapore</h2>
          <p className="max-w-3xl mx-auto text-[14px] leading-[23px] font-light text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae laboriosam, odit facilis maxime nesciunt distinctio consequuntur ipsam odio...
          </p>
          <div className="mt-5">
            <Button size="lg" className="bg-primary tracking-[1px] font-light text-[13px] text-white hover:bg-primary/90 px-8 py-4 rounded-[20px]">
              BOOK A FREE 15-MIN PHONE CONSULTATION
            </Button>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {sections.map((section, i) => (
        <section key={i} className={`${section.bg} py-20 transition-all duration-700`}>
          <div className={`container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center ${section.reverse ? "md:flex-row-reverse" : ""}`}>
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-[400px] overflow-hidden rounded-xl">
              <Image src={section.image} alt={section.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>

            {/* Content */}
            <div className="space-y-6 md:w-1/2">
              <h2 className={`${greatVibes.className} text-center text-5xl font-extralight text-primary`}>
                {section.title}
              </h2>
              <p className="text-gray-600 text-[15px] text-justify leading-[27px]">{section.description}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {section.buttons.map((btn, idx) => (
                  <Button key={idx} asChild variant={idx === 0 ? "default" : "outline"} className="rounded-full px-6 py-3">
                    <a href={btn.link}>{btn.text}</a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process & Inclusions Section */}
      <section className="relative bg-white text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/hero-interior.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-3 lg:px-20">
          <div className="py-30 px-10 m-auto bg-[#eeeeee]" style={{ width: "fit-content" }}>
            <div className="relative " style={{ zIndex: 1 }}>
              <h2 className={`${greatVibes.className} text-4xl md:text-6xl leading-[70px] font-light mb-6`} > Interior Design
                <br className="hidden md:block" /> Process & Inclusions
              </h2>
              <p className="text-gray-600 text-[15px] leading-[27px] max-w-2xl mx-auto mb-10 "> When you work with
                <span className="font-medium">Designing Interiors</span>,
                we will provide you with a comprehensive interior design service that includes:
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button className="rounded-full border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all px-8 py-3 tracking-[1px] font-light text-[13px]" >
                  CLICK TO SEE OUR PROCESS
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent border border-primary text-white bg-primary hover:text-white transition-all px-8 py-3 tracking-[1px] font-light text-[13px]" >
                  CLICK TO SEE PROJECT PHOTOS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-[#aa5830] mb-8 uppercase">
            What Our Clients Say About Us
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex items-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] px-6 md:px-20 flex flex-col items-center justify-center transition-transform duration-1000 ease-linear"
                  >
                    <div className="flex justify-center mb-4 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-5 h-5"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic max-w-3xl mx-auto leading-relaxed text-[16px] mb-6">
                      {testimonial.text}
                    </p>
                    <p className="text-gray-800 font-medium">— {testimonial.name}</p>
                    <p className="text-sm text-gray-500 mt-1">Renovation</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#aa5830]/80 text-white p-2 rounded-full hover:bg-[#aa5830] transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#aa5830]/80 text-white p-2 rounded-full hover:bg-[#aa5830] transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-[#aa5830]" : "bg-gray-300"
                  }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6 lg:px-16 space-y-5 flex flex-col items-center">
          {information.map((item, index) => (
            <div
              key={index}
              className="bg-white w-[80%] p-8 shadow-sm rounded-none mx-auto"
            >
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {item.heading}
              </h3>
              <p className="text-gray-600 text-[15px] leading-[27px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-xl">
                  <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-left hover:text-primary transition-colors">
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

      {/* Consultation Section */}
      <section className="relative py-20 bg-[#f9f9f9] overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="md:w-7/12 h-100 bg-white py-12 px-10 shadow-md text-center md:text-left">
            <h2 className={`${greatVibes.className} text-5xl text-[#aa5830] mb-4 text-center`}>
              Let us help you
            </h2>
            <h3 className="uppercase text-gray-800 text-sm font-semibold tracking-[1px] mb-6 text-center">
              READY TO GET YOUR PROJECT STARTED?
            </h3>
            <p className="text-gray-700 text-[15px] leading-[27px] mb-6 text-center">
              Let us help you by booking your <strong>FREE 15-minute consult call today!</strong>
            </p>
            <p className="text-gray-600 text-[14px] leading-[26px] mb-8 text-center">
              Speak to an expert Interior Designer to discuss your project goals and
              interior design needs. We are excited to meet you!
            </p>
            <div className="flex justify-center">
              <Button className="border border-black bg-white text-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-all">
                BOOK NOW
              </Button>
            </div>
          </div>
          <div className="md:w-5/12 h-100 w-100 relative">
            <Image
              src="/images/jennifer-wong-latest.png"
              alt="Consultation"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </section>
    </div>
  )
}
