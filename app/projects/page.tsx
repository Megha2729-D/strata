import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const ProjectsSection = dynamic(
  () => import("@/components/projects-section").then((mod) => ({ default: mod.ProjectsSection })),
  {
    loading: () => <div className="min-h-[800px] animate-pulse bg-muted" />,
  },
)

export const metadata = {
  title: "Projects - Strata.SG | Singapore Renovation Projects Gallery",
  description:
    "View our completed renovation projects in Singapore. From HDB flats to luxury condos and commercial spaces - see our quality workmanship.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
