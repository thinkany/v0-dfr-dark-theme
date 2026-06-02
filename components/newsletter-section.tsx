"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="subscribe" className="py-12 md:py-[72px] bg-card border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4 block">Stay Connected</span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
          Subscribe to Deep Focus
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Get the latest reviews, essays, and film criticism delivered directly to your inbox. Join our community of cinephiles.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-primary">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <span className="text-lg">Thanks for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors group"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
