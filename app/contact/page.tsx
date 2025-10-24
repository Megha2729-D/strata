import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const ContactSection = dynamic(
  () => import("@/components/contact-section").then((mod) => ({ default: mod.ContactSection })),
  {
    loading: () => <div className="min-h-[800px] animate-pulse bg-muted" />,
  },
)

const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-muted" />,
})

export const metadata = {
  title: "Contact Us - Strata.SG | Get Your Free Renovation Quote",
  description:
    "Contact Strata.SG for your Singapore renovation project. Get a free quote, ask questions, or schedule a consultation. Call +65 6222 3042 or WhatsApp us.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ContactSection />
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
