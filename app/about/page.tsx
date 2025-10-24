import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const AboutSection = dynamic(
  () => import("@/components/about-section").then((mod) => ({ default: mod.AboutSection })),
  {
    loading: () => <div className="min-h-[500px] animate-pulse bg-muted" />,
  },
)

const TeamSection = dynamic(() => import("@/components/team-section").then((mod) => ({ default: mod.TeamSection })), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-muted" />,
})

export const metadata = {
  title: "About Us - Strata.SG | Singapore's Trusted Renovation Company",
  description:
    "Learn about Strata.SG's 15+ years of experience in Singapore renovations. Meet our expert team of designers, project managers, and craftsmen.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <AboutSection />
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}
