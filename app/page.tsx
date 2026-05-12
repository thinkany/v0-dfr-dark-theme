import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ReviewsSection } from "@/components/reviews-section"
import { EssaySection } from "@/components/essay-section"
import { FeaturesSection } from "@/components/features-section"
import { MoreReviews } from "@/components/more-reviews"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ReviewsSection />
      <EssaySection />
      <FeaturesSection />
      <MoreReviews />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
