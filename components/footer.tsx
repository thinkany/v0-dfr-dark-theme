import Link from "next/link"

const footerLinks = {
  browse: [
    { href: "#", label: "Reviews" },
    { href: "#", label: "The Definitives" },
    { href: "#", label: "Features" },
    { href: "https://www.patreon.com/deepfocusreview", label: "Patreon" },
    { href: "#", label: "Archive" },
  ],
  connect: [
    { href: "#", label: "Twitter" },
    { href: "#", label: "Letterboxd" },
    { href: "#", label: "RSS Feed" },
    { href: "#", label: "Podcast" },
  ],
  more: [
    { href: "#about-dfr", label: "About DFR" },
    { href: "#contact", label: "Contact" },
    { href: "#support-dfr", label: "Support DFR" },
    { href: "#critic-of-the-year", label: "IFCA's 2024 Critic of the Year" },
    { href: "#bibliography", label: "Bibliography" },
    { href: "https://www.teepublic.com/stores/deep-focus-review", label: "TeePublic Store" },
    { href: "#friends-and-critics", label: "Friends and Fellow Critics" },
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
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link 
                href="https://letterboxd.com/deepfocusreview" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Letterboxd"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.29 16.752c-.748-.792-1.207-1.859-1.207-3.034 0-1.147.438-2.191 1.156-2.978a5.073 5.073 0 0 0-.398 1.975c0 1.487.651 2.823 1.683 3.741a3.635 3.635 0 0 1-1.234.296zm3.71.957c-1.001 0-1.929-.32-2.686-.864a5.057 5.057 0 0 0 2.686.768c.973 0 1.888-.275 2.663-.752a3.634 3.634 0 0 1-2.663.848zm3.71-.957a3.635 3.635 0 0 1-1.234-.296c1.032-.918 1.683-2.254 1.683-3.741 0-.689-.14-1.345-.398-1.941.718.783 1.156 1.819 1.156 2.944 0 1.175-.459 2.242-1.207 3.034zM12 20.418c-4.617 0-8.418-3.8-8.418-8.418 0-4.617 3.8-8.418 8.418-8.418 4.617 0 8.418 3.8 8.418 8.418 0 4.617-3.8 8.418-8.418 8.418zm0-18.836C6.26 1.582.582 6.26.582 12c0 5.74 4.678 10.418 10.418 10.418 5.74 0 10.418-4.678 10.418-10.418C22.418 6.26 17.74 1.582 12 1.582z"/>
                </svg>
              </Link>
              <Link 
                href="https://bsky.app/profile/deepfocusreview.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Bluesky"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
                </svg>
              </Link>
              <Link 
                href="https://linkedin.com/in/brianeggert" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
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

          {/* More */}
          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-4">More</h4>
            <ul className="space-y-3">
              {footerLinks.more.map((link) => (
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
