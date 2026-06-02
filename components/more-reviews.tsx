import Image from "next/image"
import Link from "next/link"

const moreReviews = [
  {
    title: "Backrooms",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Backrooms-movie-still-2.png",
  },
  {
    title: "Witness for the Prosecution",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Witness-for-the-Prosecution-movie-poster.png",
  },
  {
    title: "Chum",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Chum-movie-still-2.png",
  },
  {
    title: "The Philadelphia Story",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/The-Philadelphia-Story-movie-poster.png",
  },
  {
    title: "Pressure",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/Pressure-movie-still-2.png",
  },
  {
    title: "I Love Boosters",
    image: "https://www.deepfocusreview.com/wp-content/uploads/2026/05/I-Love-Boosters-movie-still.png",
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
