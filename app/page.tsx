import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntroCTASection } from "@/components/intro-cta-section"
import { Footer } from "@/components/footer"
import { SectionSeparator } from "@/components/section-separator"

const OurStorySection = dynamic(
  () => import("@/components/our-story-section").then((mod) => ({ default: mod.OurStorySection })),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-muted" />,
  },
)

const OurProjectsSection = dynamic(
  () => import("@/components/our-projects-section").then((mod) => ({ default: mod.OurProjectsSection })),
  {
    loading: () => <div className="min-h-[600px] animate-pulse bg-muted" />,
  },
)

const GoogleReviewsSection = dynamic(
  () => import("@/components/google-reviews-section").then((mod) => ({ default: mod.GoogleReviewsSection })),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-muted" />,
  },
)

const ServicesSection = dynamic(
  () => import("@/components/services-section").then((mod) => ({ default: mod.ServicesSection })),
  {
    loading: () => <div className="min-h-[500px] animate-pulse bg-muted" />,
  },
)

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <IntroCTASection />
      <SectionSeparator />
      <OurStorySection />
      <SectionSeparator />
      <OurProjectsSection />
      <SectionSeparator />
      <GoogleReviewsSection />
      <SectionSeparator />
      <ServicesSection />
      <Footer />
    </main>
  )
}
