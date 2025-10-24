import { Header } from "@/components/header"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Reviews & Testimonials - Strata.SG | Client Feedback",
  description:
    "Read what our clients say about Strata.SG's renovation services. 5-star Google reviews from satisfied customers across Singapore.",
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <GoogleReviewsSection />
      </div>
      <Footer />
    </main>
  )
}
