import { ReviewCard } from "./review-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const reviews = [
  {
    title: "Mike & Nick & Nick & Alice",
    excerpt: "A playful blend of action-comedy and time-travel movie that delivers unexpected thrills.",
    author: "Brian Eggert",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
  },
  {
    title: "A Magnificent Life",
    excerpt: "French animator Sylvain Chomet's latest is gorgeously animated, but its English-dubbed presentation was a mistake.",
    author: "Brian Eggert",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
  },
  {
    title: "Project Hail Mary",
    excerpt: "Ryan Gosling stars in a big-screen spectacle that dumbs down Andy Weir's excellent book.",
    author: "Brian Eggert",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Miroirs No. 3",
    excerpt: "Christian Petzold's latest is a mysterious, moving drama about tragedy and emotional suspended animation.",
    author: "Brian Eggert",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2 block">Film Criticism</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Latest Reviews</h2>
          </div>
          <Link 
            href="#" 
            className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="uppercase tracking-wider">View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.title} {...review} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 sm:hidden text-center">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-primary"
          >
            <span className="uppercase tracking-wider">View All Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
