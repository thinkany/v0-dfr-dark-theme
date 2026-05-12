import Link from "next/link"

const footerLinks = {
  browse: [
    { href: "#", label: "Reviews" },
    { href: "#", label: "Definitives" },
    { href: "#", label: "Features" },
    { href: "#", label: "Archive" },
  ],
  connect: [
    { href: "#", label: "Twitter" },
    { href: "#", label: "Letterboxd" },
    { href: "#", label: "RSS Feed" },
    { href: "#", label: "Podcast" },
  ],
  support: [
    { href: "#", label: "Subscribe" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 md:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">DF</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              In-depth movie reviews and critical analysis. Thoughtful perspectives on cinema since 2007.
            </p>
          </div>

          {/* Browse */}
          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Browse</h4>
            <ul className="space-y-3">
              {footerLinks.browse.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Deep Focus Review. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
