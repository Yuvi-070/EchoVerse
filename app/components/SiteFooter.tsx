import Link from "next/link";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigate: [
      { label: "Blog", href: "/main" },
      { label: "Categories", href: "/categories" },
      { label: "Write a Post", href: "/write" },
      { label: "About", href: "/about" },
    ],
    topics: [
      { label: "AI / ML", href: "/categories/ai-ml" },
      { label: "Web Dev", href: "/categories/web-dev" },
      { label: "Cybersecurity", href: "/categories/cybersecurity" },
      { label: "Cloud & DevOps", href: "/categories/cloud-devops" },
      { label: "Open Source", href: "/categories/open-source" },
      { label: "Systems", href: "/categories/programming" },
    ],
    connect: [
      { label: "GitHub", href: "https://github.com/Yuvi-070", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yuvraj-tale-m0705/", external: true },
      { label: "Instagram", href: "https://www.instagram.com/yuvi._7_/", external: true },
      { label: "Contact", href: "/contact", external: false },
    ],
  };

  const socialIcons = {
    github: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.36-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    instagram: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    email: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  };

  return (
    <footer className="footer" id="site-footer" role="contentinfo">
      <div className="footer-bg" aria-hidden="true">
        <div className="footer-orb orb-1" />
        <div className="footer-orb orb-2" />
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <Link href="/" className="footer-brand" aria-label="EchoVerse home">
                <span className="brand-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="6" fill="url(#gradBrandFooter)"/>
                    <path d="M8 14L12 18L20 10" stroke="url(#gradBrandFooter)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                      <linearGradient id="gradBrandFooter" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#00ffff"/>
                        <stop offset="100%" stop-color="#ff00aa"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="brand-text">ECHO<span className="brand-accent">—</span>VERSE</span>
              </Link>
              <p className="footer-desc">
                An open-source techno blog where developers share practical
                engineering stories, tutorials, and insights — anonymously.
                No login required.
              </p>
              <div className="footer-socials">
                <a href="https://github.com/Yuvi-070" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                  {socialIcons.github}
                </a>
                <a href="https://www.linkedin.com/in/yuvraj-tale-m0705/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  {socialIcons.linkedin}
                </a>
                <a href="https://www.instagram.com/yuvi._7_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                  {socialIcons.instagram}
                </a>
                <a href="/contact" aria-label="Contact" className="social-link">
                  {socialIcons.email}
                </a>
              </div>
            </div>

            <nav className="footer-col" aria-label="Navigate">
              <h4 className="footer-title">Navigate</h4>
              <ul className="footer-links">
                {footerLinks.navigate.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="footer-col" aria-label="Topics">
              <h4 className="footer-title">Topics</h4>
              <ul className="footer-links">
                {footerLinks.topics.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="footer-col" aria-label="Connect">
              <h4 className="footer-title">Connect</h4>
              <ul className="footer-links">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer-divider" aria-hidden="true" />

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Yuvraj Tale · Built with Next.js 16 · Open Source
            </p>
            <div className="footer-bottom-links">
              <a href="#top" className="footer-link" aria-label="Back to top">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="18" y1="15" x2="12" y2="9" />
                  <line x1="12" y1="9" x2="6" y2="15" />
                </svg>
                <span>Top</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}