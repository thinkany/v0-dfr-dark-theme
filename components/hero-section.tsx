import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative">
      {/* 16:9 Letterbox Container */}
      <div className="relative w-full aspect-video">
        {/* Featured Image */}
        <Image
          src="/images/alpha-hero.jpg"
          alt="Alpha movie scene"
          fill
          className="object-cover"
          priority
        />
        {/* Cinematic letterbox bars (subtle darkening at top/bottom) */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/90 to-transparent" />
        {/* Side gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end pb-8 md:pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium uppercase tracking-wider rounded-sm">
                  Featured
                </span>
                <span className="text-muted-foreground text-sm">Latest Review</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-4 text-balance">
                Alpha
              </h1>

              <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed max-w-xl line-clamp-2 md:line-clamp-none">
                French director Julia Ducournau&apos;s powerful new film asks viewers to extend compassion to people suffering from illness and addiction.
              </p>

              <div className="flex items-center gap-4 mb-6">
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
        </div>
      </div>
    </section>
  )
}
