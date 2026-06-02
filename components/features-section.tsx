import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Mic, Heart } from "lucide-react"

const features = [
  {
    title: "MSPIFF45",
    subtitle: "April 8-19",
    description: "Festival Coverage: MSPIFF returns with a lineup of over 200 films from around the world.",
    icon: Calendar,
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/KARE-11-5-30-26.png",
  },
  {
    title: "The CineFiles",
    subtitle: "Episode 22",
    description: "Reviews of Project Hail Mary, Tow, and Ready or Not 2: Here I Come.",
    icon: Mic,
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Saying-Goodbye-to-The-CineFiles.png",
  },
  {
    title: "Support DFR",
    subtitle: "Join Us",
    description: "Support independent film criticism. Access exclusive writing. Connect with our community.",
    icon: Heart,
    image: "https://www.deepfocusreview.com/wp-content/uploads/2024/10/about-2024.png",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-[72px] bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2 block">Beyond the Screen</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Features & More</h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link 
              key={feature.title} 
              href="#"
              className="group relative bg-card border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">{feature.subtitle}</span>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs text-primary uppercase tracking-wider">
                  Learn More
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
