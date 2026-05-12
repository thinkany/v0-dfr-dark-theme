import Image from "next/image"
import Link from "next/link"

interface ReviewCardProps {
  title: string
  excerpt: string
  author: string
  image: string
  href?: string
  featured?: boolean
}

export function ReviewCard({ title, excerpt, author, image, href = "#", featured = false }: ReviewCardProps) {
  return (
    <Link href={href} className="group block">
      <article className={`relative overflow-hidden ${featured ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className={`font-serif text-foreground mb-2 leading-tight group-hover:text-primary transition-colors text-balance ${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
            {title}
          </h3>
          <p className={`text-muted-foreground mb-4 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
            {excerpt}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Review by</span>
            <span className="text-xs text-foreground font-medium">{author}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
