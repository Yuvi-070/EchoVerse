"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BlogCard from "../components/BlogCard";
import CategoryBadge from "../components/CategoryBadge";
import { getAllPosts, getAllTags, type Post } from "../data/posts";
import { categories } from "../data/categories";

export default function MainPage() {
  const [allPosts, setAllPosts] = useState<Post[]>(() => getAllPosts());
  const [allTags, setAllTags] = useState<{ name: string; count: number }[]>(() => getAllTags());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter posts
  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.author.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q.replace("#", "")));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = allPosts.find((p) => p.featured) || allPosts[0];
  const regularPosts = filteredPosts.filter((p) =>
    selectedCategory === "all" && !searchQuery ? p.id !== featuredPost?.id : true
  );

  return (
    <div className="site-shell" id="top">
      <SiteNav />

      <main className="container section-gap">
        {/* Page Hero Header */}
        <header className="hero-card mb-4 glass-card-3d">
          <div className="hero-content">
            <div className="eyebrow">⚡ REAL-TIME TECHNO FEED</div>
            <h1>Explore Registered Articles</h1>
            <p className="text-secondary" style={{ fontSize: "1.05rem" }}>
              Deep dives into systems programming, AI models, WebGPU, zero-trust security, and cloud infrastructure — registered by builders worldwide.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-magenta" href="/write">
                ✦ Write Anonymous Article
              </Link>
              <Link className="btn btn-outline" href="/categories">
                📂 Browse {categories.length} Categories
              </Link>
            </div>
          </div>
        </header>

        {/* Search & Category Filter Section */}
        <section className="card p-xl mb-xl">
          <div className="d-flex flex-wrap gap-lg align-items-end mb-lg">
            <div className="search-wrapper" style={{ flex: "1 1 300px" }}>
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="form-input"
                placeholder="Search title, #hashtag, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="tag-pill"
                  style={{ position: "absolute", right: "0.5rem", top: "50%", transform: "translateY(-50%)", padding: "0.25rem 0.5rem" }}
                >
                  ✕
                </button>
              )}
            </div>
            <Link href="/write" className="btn btn-magenta">✦ Write Article</Link>
          </div>

          <div className="filter-bar">
            <button className={`tag-pill ${selectedCategory === "all" ? "active" : ""}`} onClick={() => setSelectedCategory("all")}>
              All ({allPosts.length})
            </button>
            {categories.map((cat) => (
              <button key={cat.slug} className={`tag-pill ${selectedCategory === cat.slug ? "active" : ""}`} onClick={() => setSelectedCategory(cat.slug)}>
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="mt-lg">
            <div className="font-mono text-xs uppercase tracking-widest text-dim mb-sm">#Quick Tags</div>
            <div className="d-flex flex-wrap gap-sm">
              {allTags.slice(0, 12).map((t) => (
                <button key={t.name} className="tag-pill" onClick={() => setSearchQuery(`#${t.name}`)}>
                  #{t.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post Spotlight (if on all and no search query) */}
        {selectedCategory === "all" && !searchQuery && featuredPost && (
          <section className="mb-4">
            <div className="featured-post glass-card-3d">
              <div>
                <div className="mb-2 d-flex align-items-center gap-2">
                  <CategoryBadge categorySlug={featuredPost.category} />
                  <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                    {featuredPost.date} · {featuredPost.readTime}
                  </span>
                </div>
                <h2 style={{ fontSize: "1.6rem", margin: "0.6rem 0" }}>
                  <Link href={`/blog/${featuredPost.slug}`} style={{ color: "inherit" }}>
                    {featuredPost.title}
                  </Link>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  {featuredPost.excerpt}
                </p>
                <div className="mt-3">
                  <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary">
                    Read Article →
                  </Link>
                </div>
              </div>

              <div>
                <div
                  style={{
                    background: "rgba(5, 12, 28, 0.7)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--accent-cyan)",
                    minHeight: "180px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ color: "var(--text-muted)", marginBottom: "0.5rem" }}>
 {/* KEY HASHTAGS & AUTHOR */}
                  </div>
                  <div className="d-flex flex-wrap gap-1 mb-2">
                    {featuredPost.tags.map((t) => (
                      <Link
                        key={t}
                        href={`/tags/${encodeURIComponent(t)}`}
                        className="tag"
                      >
                        #{t}
                      </Link>
                    ))}
                  </div>
                  <div style={{ color: "var(--accent-magenta)", marginTop: "0.5rem" }}>
                    ✍ Author: {featuredPost.author === "Anonymous Builder" ? "Anonymous" : featuredPost.author}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>
              {selectedCategory !== "all"
                ? `${categories.find((c) => c.slug === selectedCategory)?.name || ""} Articles`
                : searchQuery
                ? `Results matching "${searchQuery}"`
                : "Latest Registered Articles"}
            </h3>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              Showing {regularPosts.length} posts
            </span>
          </div>

          {regularPosts.length > 0 ? (
            <div className="posts-grid">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="empty-state section-card p-5 text-center">
              <span className="empty-state-icon" style={{ fontSize: "3rem" }}>🔍</span>
              <h3>No techno articles found</h3>
              <p>Try searching for a different keyword or clear your filters.</p>
              <button
                className="btn btn-outline mt-3"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Floating Action Button */}
      <Link href="/write" className="fab" title="Write Anonymous Post">
        ✍
      </Link>

      <SiteFooter />
    </div>
  );
}
