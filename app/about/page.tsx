import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="site-shell" id="top">
      <SiteNav />

      <main className="container section-gap">
        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="eyebrow">ABOUT ECHO—VERSE</div>
            <h1>Empowering Open Technical Knowledge</h1>
            <p>
              EchoVerse was built on a simple premise: engineering insights, performance benchmarks, and post-mortems should be accessible to everyone without paywalls, sign-ups, or invasive tracking.
            </p>
            <p>
              Whether you&apos;re a junior dev learning neural networks from scratch or a principal engineer detailing a zero-trust migration, your experience deserves a voice.
            </p>
            <div className="hero-actions mt-3">
              <Link href="/write" className="btn btn-magenta">
                ✦ Write an Anonymous Post
              </Link>
              <a
                href="https://github.com/Yuvi-070/Techno-Blogs"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                ⭐ View on GitHub
              </a>
            </div>
          </div>

          <div>
            <div className="info-card">
              <h3 style={{ color: "var(--accent-cyan)", marginBottom: "1rem" }}>
 {/* ARCHITECTURE & MISSION */}
              </h3>
              <p style={{ fontSize: "0.95rem" }}>
                Originally launched as a static HTML website, EchoVerse was upgraded into a full Next.js application built with TypeScript and modern server rendering.
              </p>
              <div
                style={{
                  background: "rgba(0, 240, 255, 0.05)",
                  borderLeft: "3px solid var(--accent-cyan)",
                  padding: "0.75rem 1rem",
                  margin: "1rem 0",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "var(--accent-cyan)",
                }}
              >
                &quot;Where Words Resonate and Stories Reverberate.&quot;
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0 }}>
                Maintainer: Yuvraj Tale · Built with passion for open-source technical education.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-4">
          <div className="section-header">
            <h2>Core Platform Principles</h2>
            <p>The core values that guide EchoVerse&apos;s design and functionality.</p>
          </div>

          <div className="about-values">
            <article className="value-card">
              <span className="value-icon">🔓</span>
              <h3>100% Anonymous</h3>
              <p>Publish without creating an account. No email address, passwords, or personal details required.</p>
            </article>

            <article className="value-card">
              <span className="value-icon">⚡</span>
              <h3>Techno Focus</h3>
              <p>Curated around engineering, systems programming, AI/ML, cloud architecture, and cybersecurity.</p>
            </article>

            <article className="value-card">
              <span className="value-icon">💡</span>
              <h3>Open Source</h3>
              <p>The entire codebase is open for contributions on GitHub. Inspect, fork, or improve it.</p>
            </article>

            <article className="value-card">
              <span className="value-icon">🚫</span>
              <h3>Zero Paywalls</h3>
              <p>All articles, benchmarks, and tutorials remain free forever. No popups or medium-style lockers.</p>
            </article>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border-color)" }}>
          <h3>Tech Stack & Infrastructure</h3>
          <p className="text-muted">Built using modern web technologies for speed and developer ergonomics.</p>
          <div className="tech-stack">
            <span className="tech-pill">⚡ Next.js 16 (App Router)</span>
            <span className="tech-pill">⚛️ React 19</span>
            <span className="tech-pill">📘 TypeScript 5</span>
            <span className="tech-pill">🎨 Vanilla CSS Tokens</span>
            <span className="tech-pill">💻 JetBrains Mono</span>
            <span className="tech-pill">💾 LocalStorage API</span>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
