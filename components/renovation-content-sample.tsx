"use client"

import { ChevronLeft, ChevronRight, CheckCircle, Clock, Shield, Sparkles, Hammer } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Great_Vibes } from "next/font/google"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" })

export default function RenovationContent() {
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

    const whyChoose = [
        {
            icon: Shield,
            title: "Experienced Team",
            description:
                "Our <a href='https://www.strata.sg/about'> certified professionals </a> bring years of expertise in residential, commercial, and office renovations across Singapore. From the first sketch to the final handover, we manage every detail with precision and care.",
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
            icon: Hammer,
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
        <div className="bg-background text-foreground">
            {/* Why Choose Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className={` ${greatVibes.className} text-3xl md:text-5xl font-bold text-center mb-14`}>
                        Why Choose Strata?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChoose.map((item, i) => (
                            <Card key={i} className="hover:shadow-lg transition-all">
                                <CardContent className="px-6 py-2">
                                    <div className="flex items-center gap-2">
                                        <item.icon className="w-10 h-10 text-secondary mb-5" />
                                        <h3 className="text-lg font-semibold mb-3 text-gray-800">
                                            {item.title}
                                        </h3>

                                    </div>
                                    <p
                                        className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-[16px] mb-6"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                    {/* <p className="text-muted-foreground leading-relaxed">
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  </p> */}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
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
                        {services.map((service, i) => (
                            <Card key={i} className="hover:shadow-lg transition-all">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
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

                    {/* Residential */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6">Residential Projects</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {residentialProjects.map((p, i) => (
                                <Card key={i} className="hover:shadow-lg transition-all">
                                    <CardContent className="p-6">
                                        <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                                        <p className="text-sm text-primary font-medium mb-3">{p.duration}</p>
                                        <p className="text-muted-foreground mb-3 leading-relaxed">{p.description}</p>
                                        <p className="text-sm text-muted-foreground">📍 {p.location}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Commercial */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Commercial Projects</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {commercialProjects.map((p, i) => (
                                <Card key={i} className="hover:shadow-lg transition-all">
                                    <CardContent className="p-6">
                                        <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                                        <p className="text-sm text-primary font-medium mb-3">{p.duration}</p>
                                        <p className="text-muted-foreground mb-3 leading-relaxed">{p.description}</p>
                                        <p className="text-sm text-muted-foreground">📍 {p.location}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Our Strata Team Works</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                        At Strata.sg, our goal is to make your renovation or interior design project smooth, transparent, and
                        stress-free. From consultation to handover, we manage every step with care and professionalism.
                    </p>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {process.map((step, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                                    {step.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
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
                                        <p
                                            className="text-gray-600 italic max-w-3xl mx-auto leading-relaxed text-[16px] mb-6"
                                            dangerouslySetInnerHTML={{ __html: testimonial.text }}
                                        />
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
                                <AccordionItem
                                    key={index}
                                    value={`faq-${index}`}
                                    className="border rounded-xl"
                                >
                                    <AccordionTrigger
                                        className="px-6 py-4 text-lg font-semibold text-left hover:text-primary transition-colors no-underline hover:no-underline [&>svg]:text-primary"
                                    >
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
                            Start Your Renovation Today
                        </h3>
                        <p className="text-gray-600 text-[14px] leading-[26px] mb-8 text-center">
                            Ready to transform your home, office, or commercial space? Contact Strata.sg for a free consultation and a detailed renovation plan tailored to your needs, style, and budget.
                        </p>
                        <p className="text-gray-700 text-[15px] leading-[27px] mb-6 text-center">
                            Let us help you by booking your <strong>FREE 15-minute consult call today!</strong>
                        </p>
                        <div className="flex justify-center">
                            <a href="https://www.strata.sg/contact">
                                <Button className="border border-black bg-white text-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-all">
                                    BOOK NOW
                                </Button>
                            </a>
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
