"use client"

import { ReviewCard } from "./review-card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

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
  {
    title: "The Brutalist",
    excerpt: "Brady Corbet's ambitious epic about an architect's journey through post-war America is a towering achievement.",
    author: "Brian Eggert",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2065&auto=format&fit=crop",
  },
  {
    title: "Nosferatu",
    excerpt: "Robert Eggers delivers a visually stunning and deeply atmospheric reimagining of the classic vampire tale.",
    author: "Brian Eggert",
    image: "https://images.unsplash.com/photo-1509248961725-9d3c0c797e6e?q=80&w=2022&auto=format&fit=crop",
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
