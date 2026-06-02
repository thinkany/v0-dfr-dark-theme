"use client"

import { ReviewCard } from "./review-card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

const reviews = [
  {
    title: "Backrooms",
    excerpt: "A terrifying descent into liminal spaces that proves less is more in modern horror filmmaking.",
    author: "Brian Eggert",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Backrooms-movie-still-2.png",
  },
  {
    title: "Chum",
    excerpt: "A visceral thriller that keeps audiences on the edge of their seats from start to finish.",
    author: "Brian Eggert",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Chum-movie-still-2.png",
  },
  {
    title: "Pressure",
    excerpt: "A taut, claustrophobic thriller that explores the depths of human endurance and survival.",
    author: "Brian Eggert",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Pressure-movie-still-2.png",
  },
  {
    title: "Power Ballad",
    excerpt: "An electrifying musical journey through the glory days of arena rock and personal redemption.",
    author: "Brian Eggert",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Power-Ballad-Movie-Still-2.png",
  },
  {
    title: "Passenger",
    excerpt: "A gripping character study that examines isolation and connection in unexpected ways.",
    author: "Brian Eggert",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Passenger-movie-still-1.png",
  },
  {
    title: "Corporate Retreat",
    excerpt: "A darkly comic take on workplace culture that cuts deeper than expected.",
    author: "Brian Eggert",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Corporate-Retreat-movie-still-1.png",
  },
]

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollSpeed = 0.5 // pixels per frame
    let animationId: number

    const animate = () => {
      if (!isPaused && scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
        
        setScrollPosition((prev) => {
          const newPosition = prev + scrollSpeed
          // Reset to beginning when reaching the end
          if (newPosition >= maxScroll) {
            return 0
          }
          return newPosition
        })
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  // Apply scroll position
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition
    }
  }, [scrollPosition])

  const scroll = (direction: "left" | "right") => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const cardWidth = 320 // approximate card width + gap
    const newPosition = direction === "left" 
      ? Math.max(0, scrollPosition - cardWidth)
      : Math.min(scrollContainer.scrollWidth - scrollContainer.clientWidth, scrollPosition + cardWidth)
    
    setScrollPosition(newPosition)
  }

  return (
    <section id="reviews" className="py-12 md:py-[72px] bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2 block">Film Criticism</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Latest Reviews</h2>
          </div>
          <div className="flex items-center gap-4">
            {/* Navigation Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link 
              href="#" 
              className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="uppercase tracking-wider">View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <div key={review.title} className="flex-shrink-0 w-[280px] sm:w-[300px]">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="mt-8 sm:hidden flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-border rounded-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-border rounded-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-primary"
          >
            <span className="uppercase tracking-wider">View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
