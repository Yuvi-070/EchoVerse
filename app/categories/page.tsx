"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { categories } from "../data/categories";
import { getAllPosts, getAllTags, type Post } from "../data/posts";

export default function CategoriesPage() {
  const [posts, setPosts] = useState<Post[]>(() => getAllPosts());
  const [allTags, setAllTags] = useState<{ name: string; count: number }[]>(() => getAllTags());

  return (
    <div className="site-shell" id="top">
      <SiteNav />

      <main className="container section-gap">
        <header className="mb-4">
          <div className="eyebrow">📂 Domain Taxonomy</div>
          <h1>Browse by Category</h1>
          <p className="text-secondary">
            Select a technical category to explore its dedicated blog hub, articles, and sub-topics.
          </p>
        </header>

        {/* Category Cards Grid */}
        <div className="categories-grid mb-5">
          {categories.map((cat) => {
            const count = posts.filter((p) => p.category === cat.slug).length;

            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="category-card card-tilt-3d"
                style={{
                  borderColor: `${cat.color}33`,
                  background: cat.gradient,
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="category-icon">{cat.icon}</span>
                  <span
                    className="category-count"
                    style={{
                      color: cat.color,
                      borderColor: `${cat.color}44`,
                      background: "rgba(0,0,0,0.3)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    {count} {count === 1 ? "article" : "articles"}
                  </span>
                </div>
                <h3 style={{ color: "#fff", fontSize: "1.25rem", margin: "0.4rem 0" }}>
                  {cat.name}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", margin: 0 }}>
                  {cat.description}
                </p>
                <div className="mt-3 text-end" style={{ color: cat.color, fontSize: "0.85rem", fontWeight: 600 }}>
                  View Category Hub →
                </div>
              </Link>
            );
          })}
        </div>

        {/* Popular #Hashtag Topics */}
        <section className="card p-xl mt-xl">
          <div className="d-flex align-items-start gap-lg mb-lg">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center text-xl">🏷️</div>
            <div>
              <h3 className="m-0">Popular #Hashtag Topics</h3>
              <p className="m-0 text-secondary" style={{ fontSize: "0.9rem" }}>
                Click any hashtag to explore specific developer topics across all categories.
              </p>
            </div>
          </div>

          <div className="grid grid-auto-sm" style={{ gap: "var(--space-sm)" }}>
            {allTags.map((t) => (
              <Link
                key={t.name}
                href={`/tags/${encodeURIComponent(t.name)}`}
                className="tag-pill"
              >
                <span>#{t.name}</span>
                <span style={{ fontSize: "0.65rem", opacity: 0.7, marginLeft: "auto" }}>{t.count}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
