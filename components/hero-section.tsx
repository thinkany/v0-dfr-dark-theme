import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-end pb-16 md:pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
          alt="Cinema atmosphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium uppercase tracking-wider rounded-sm">
              Featured
            </span>
            <span className="text-muted-foreground text-sm">Latest Review</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6 text-balance">
            Alpha
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl">
            French director Julia Ducournau&apos;s powerful new film asks viewers to extend compassion to people suffering from illness and addiction.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground">Review by</span>
            <span className="text-sm text-foreground font-medium">Brian Eggert</span>
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all group"
          >
            <span className="text-sm uppercase tracking-wider font-medium">Read Full Review</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
