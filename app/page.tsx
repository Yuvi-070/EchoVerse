"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import BlogCard from "./components/BlogCard";
import { getFeaturedPosts, getAllPosts, getAllTags, type Post } from "./data/posts";
import { categories } from "./data/categories";

export default function Home() {
  const [text, setText] = useState("");
  const [postsCount, setPostsCount] = useState<number>(() => getAllPosts().length);
  const [tagsCount, setTagsCount] = useState<number>(() => getAllTags().length);
  const [recentPosts, setRecentPosts] = useState<Post[]>(() => getAllPosts().slice(0, 3));

  const target = "Where Code Resonates & Tech Knowledge Reverberates";

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const type = setInterval(() => {
        i += 1;
        setText(target.slice(0, i));
        if (i >= target.length) clearInterval(type);
      }, 35);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const featured = getFeaturedPosts();

  return (
    <div className="site-shell" id="top">
      <SiteNav />

      <main className="landing-shell">
        {/* Background 3D Ambient Orbs */}
        <div className="ambient-orb orb-1" aria-hidden="true" />
        <div className="ambient-orb orb-2" aria-hidden="true" />

        {/* Logo / Brand */}
        <div className="text-center mb-2xl">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-xl mb-6">
            <span className="text-2xl">⚡</span>
            <span className="font-display text-2xl tracking-tight">ECHO<span className="text-fuchsia-500">—</span>VERSE</span>
            <span className="font-mono text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">v2.5</span>
          </div>
          <h1 className="hero-title" style={{ margin: "0 auto 1rem", maxWidth: "900px" }}>
            Where Code Resonates & Tech Knowledge Reverberates
          </h1>
          <p className="hero-subtitle" style={{ margin: "0 auto 2rem", maxWidth: "680px" }}>
            Open-source techno blogging platform for software engineers, security researchers, and systems builders.
          </p>
        </div>

        {/* Command Preview Card */}
        <div className="card landing-code-card mx-auto" style={{ maxWidth: "800px", background: "var(--bg-card)", border: "1px solid var(--border-default)", backdropFilter: "blur(20px)" }}>
          <div className="d-flex align-items-center justify-content-between px-lg py-md border-bottom" style={{ borderColor: "var(--border-subtle)" }}>
            <div className="d-flex align-items-center gap-sm">
              <span className="dot-btn red" />
              <span className="dot-btn yellow" />
              <span className="dot-btn green" />
              <span className="font-mono text-xs ml-md" style={{ color: "var(--text-muted)" }}>terminal — echoverse v2.5</span>
            </div>
            <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>live</span>
          </div>
          <div className="p-xl">
            <pre className="m-0" style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
              <code style={{ color: "var(--text-muted)" }}>$ </code>
              <code style={{ color: "var(--neural-cyan)" }}>npx echoverse --exec</code>
              <code style={{ color: "var(--text-primary)" }}>&nbsp;{text}</code>
            </pre>
            <div className="mt-lg d-flex flex-wrap gap-sm">
              <span className="badge badge-cyan">anonymous</span>
              <span className="badge badge-magenta">markdown</span>
              <span className="badge badge-green">ai copilot</span>
            </div>
          </div>
        </div>

        <div className="landing-actions text-center">
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-2">
            <Link className="btn btn-primary" href="/main">
              ⚡ Explore All {postsCount} Articles
            </Link>

            <Link className="btn btn-magenta" href="/write">
              ✦ Post Anonymously
            </Link>

            <Link className="btn btn-outline" href="/categories">
              📂 Browse {categories.length} Domains
            </Link>
          </div>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-4" style={{ maxWidth: "900px", margin: "var(--space-2xl) auto 0" }}>
          {[
            { value: postsCount, label: "Registered Blogs", icon: "📚" },
            { value: categories.length, label: "Core Tech Domains", icon: "🧭" },
            { value: tagsCount, label: "Active #Hashtags", icon: "🏷️" },
            { value: "100%", label: "Open & Anonymous", icon: "🔓" },
          ].map((s, i) => (
            <div key={i} className="card text-center p-lg" style={{ background: "var(--bg-glass)", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "var(--space-xs)" }}>{s.icon}</div>
              <div className="stat-number" style={{ fontSize: "2rem", marginBottom: "var(--space-xs)" }}>{s.value}</div>
              <div className="stat-label" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-dim)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Featured Posts Section */}
      <section className="container section-gap">
        <div className="section-header d-flex justify-content-between align-items-end flex-wrap gap-2">
          <div>
            <div className="eyebrow">🔥 CURATED SPOTLIGHT</div>
            <h2 style={{ margin: 0 }}>Featured Deep Dives</h2>
          </div>
          <Link href="/main" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
            View Feed ({postsCount}) →
          </Link>
        </div>

        <div className="posts-grid mt-3">
          {featured.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Domain Highlights */}
      <section className="container section-gap mb-5">
        <div className="feature-rail">
          <article className="mini-feature card-tilt-3d">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span style={{ fontSize: "1.8rem" }}>🤖</span>
              <h3 style={{ margin: 0 }}>AI & Machine Learning</h3>
            </div>
            <p>From mathematical foundations to LLM inference pipelines, vector databases, and quantization.</p>
          </article>

          <article className="mini-feature card-tilt-3d">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span style={{ fontSize: "1.8rem" }}>⚡</span>
              <h3 style={{ margin: 0 }}>Systems & Security</h3>
            </div>
            <p>Rust vs Go benchmarks, zero-trust paradigms, C++ JSI internals, and supply chain defense.</p>
          </article>

          <article className="mini-feature card-tilt-3d">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span style={{ fontSize: "1.8rem" }}>✍️</span>
              <h3 style={{ margin: 0 }}>Pure & Anonymous</h3>
            </div>
            <p>Publish your technical learnings instantly. No accounts, no paywalls, pure developer knowledge.</p>
          </article>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
