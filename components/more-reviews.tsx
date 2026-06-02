import Image from "next/image"
import Link from "next/link"

const moreReviews = [
  {
    title: "Tow",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Ready or Not 2",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "The Gates",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2126&auto=format&fit=crop",
  },
  {
    title: "undertone",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Bushido",
    image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "The Bride!",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2070&auto=format&fit=crop",
  },
]

export function MoreReviews() {
  return (
    <section className="py-12 md:py-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2 block">Archive</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">More Reviews</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {moreReviews.map((review) => (
            <Link key={review.title} href="#" className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-sm">
                <Image
                  src={review.image}
                  alt={review.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span className="font-serif text-sm text-foreground text-balance">{review.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
