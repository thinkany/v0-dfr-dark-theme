import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function EssaySection() {
  return (
    <section id="essays" className="py-12 md:py-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2 block">In-Depth Analysis</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">The Definitives</h2>
        </div>

        {/* Featured Essay */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Link href="#" className="relative aspect-[16/10] overflow-hidden group">
            <Image
              src="https://www.deepfocusreview.com/wp-content/uploads/2026/05/Renoir-movie-still.png"
              alt="Renoir"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider rounded-sm">
                Essay
              </span>
            </div>
          </Link>

          <div className="lg:py-8">
            <span className="text-sm text-muted-foreground mb-4 block">2012 • Gilles Bourdos</span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-balance">
              Renoir
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Gilles Bourdos&apos; intimate portrait of the legendary painter Pierre-Auguste Renoir in his final years explores art, beauty, and the passing of creative genius from one generation to the next.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-medium text-sm">BE</span>
              </div>
              <div>
                <span className="block text-foreground text-sm font-medium">Brian Eggert</span>
                <span className="block text-muted-foreground text-xs">Film Critic</span>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all group"
            >
              <span className="text-sm uppercase tracking-wider font-medium">Read Essay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
