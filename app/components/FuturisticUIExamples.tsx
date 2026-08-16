"use client";

import Link from "next/link";

/**
 * Reference snippets for a Tailwind-based futuristic redesign.
 * These components use Tailwind utility classes for glassmorphism,
 * neon accents, and mobile-first responsiveness.
 * Paste into a Tailwind-enabled project or use as inspiration for
 * the existing CSS design system.
 */

// Navbar example with glassmorphism
export function FuturisticNavbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight">
          ECHO<span className="text-fuchsia-500">—</span>VERSE
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-mono">
          <Link href="/main" className="text-slate-300 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded">Blog</Link>
          <Link href="/categories" className="text-slate-300 hover:text-cyan-400">Categories</Link>
          <Link href="/about" className="text-slate-300 hover:text-cyan-400">About</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/write" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 font-semibold hover:brightness-110">
            Write
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Sidebar example
export function FuturisticSidebar() {
  return (
    <aside className="hidden lg:sticky lg:top-24 lg:block w-72">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-4">
        <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-3">Table of Contents</h3>
        <nav className="space-y-1 text-sm">
          <a className="block px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">Intro</a>
          <a className="block px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">Setup</a>
        </nav>
      </div>
    </aside>
  );
}

// Card example
export function FuturisticCard({ title, excerpt }: { title: string; excerpt: string }) {
  return (
    <article className="group relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-slate-400 text-sm line-clamp-3">{excerpt}</p>
    </article>
  );
}

// Form example
export function FuturisticForm() {
  return (
    <form className="space-y-5 max-w-xl">
      <div>
        <label className="font-mono text-xs uppercase tracking-widest text-slate-400">Title</label>
        <input className="mt-1 w-full rounded-xl bg-slate-950/70 border border-white/10 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20" placeholder="Enter title" />
      </div>
      <button className="w-full rounded-full bg-cyan-400 text-slate-950 font-semibold py-3 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
        Publish
      </button>
    </form>
  );
}

// Button variants
export function ButtonGroup() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 font-semibold shadow-[0_0_20px_rgba(0,255,255,0.3)]">
        Primary
      </button>
      <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/5 border border-white/10 text-slate-200 hover:border-cyan-400/50">
        Secondary
      </button>
      <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-slate-300 hover:text-cyan-400">
        Ghost
      </button>
    </div>
  );
}
