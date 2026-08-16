"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`nav-bar ${scrolled ? "scrolled" : ""}`}
        id="site-nav"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          <Link className="nav-brand" href="/" aria-label="EchoVerse home">
            <span className="brand-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="gradLogo" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stopColor="#00ffff"/>
                    <stop offset="100%" stopColor="#ff00aa"/>
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.04)" stroke="url(#gradLogo)" strokeWidth="1"/>
                <path d="M8 16l4 4 12-8" stroke="url(#gradLogo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="8" r="2" fill="#00ffff"/>
              </svg>
            </span>
            <span className="brand-text">ECHO<span className="brand-accent">—</span>VERSE</span>
          </Link>

          <div className="nav-links" role="menubar">
            <Link className="nav-link" href="/main" role="menuitem">Blog</Link>
            <Link className="nav-link" href="/categories" role="menuitem">Categories</Link>
            <Link className="nav-link" href="/about" role="menuitem">About</Link>
            <Link className="nav-link" href="/contact" role="menuitem">Contact</Link>
          </div>

          <div className="nav-actions">
            <ThemeToggle />
            <Link href="/write" className="btn btn-magenta nav-write" role="button">
              <span className="btn-icon" aria-hidden="true">✦</span>
              <span className="btn-text">Write</span>
            </Link>
          </div>

          <button
            className="nav-hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(true)}
          >
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile nav overlay */}
      <div
        id="mobile-nav"
        className={`nav-mobile ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="nav-mobile-inner">
          <button
            className="nav-mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <nav className="nav-mobile-links">
            <Link href="/main" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/categories" onClick={() => setMobileOpen(false)}>Categories</Link>
            <Link href="/write" onClick={() => setMobileOpen(false)}><span className="write-prefix">✦</span> Write a Post</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </nav>
          <div className="nav-mobile-actions">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}