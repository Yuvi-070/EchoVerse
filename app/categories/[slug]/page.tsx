"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BlogCard from "../../components/BlogCard";
import { categories, getCategoryBySlug } from "../../data/categories";
import { getPostsByCategory, type Post } from "../../data/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.slug;
  const categoryObj = getCategoryBySlug(categorySlug);

  const [categoryPosts, setCategoryPosts] = useState<Post[]>(() => categorySlug ? getPostsByCategory(categorySlug) : []);

  if (!categoryObj) {
    notFound();
  }

  return (
    <div className="site-shell" id="top">
      <SiteNav />

      <main className="container section-gap">
        {/* Category Header Banner */}
        <header
          className="hero-card mb-4"
          style={{
            background: categoryObj.gradient,
            borderColor: `${categoryObj.color}44`,
          }}
        >
          <div className="hero-content">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span style={{ fontSize: "2.5rem" }}>{categoryObj.icon}</span>
              <span
                className="category-badge"
                style={{
                  color: categoryObj.color,
                  borderColor: categoryObj.color,
                  background: "rgba(0,0,0,0.4)",
                  fontSize: "0.85rem",
                }}
              >
                Category Hub
              </span>
            </div>
            <h1 style={{ color: "#fff", marginBottom: "0.5rem" }}>
              {categoryObj.name} Articles
            </h1>
            <p className="text-secondary" style={{ maxWidth: "700px", fontSize: "1.05rem" }}>
              {categoryObj.description}
            </p>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mt-4 pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <span className="text-muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
                Total registered blogs: <strong style={{ color: categoryObj.color, fontSize: "1.1rem" }}>{categoryPosts.length}</strong>
              </span>
              <Link href="/write" className="btn btn-magenta">
                ✦ Write in {categoryObj.name}
              </Link>
            </div>
          </div>
        </header>

        {/* Other Categories Switcher */}
        <div className="filter-bar mb-4 overflow-x-auto">
          <Link href="/categories" className="filter-chip">
            ← All Categories
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className={`filter-chip ${cat.slug === categorySlug ? "active" : ""}`}
              style={{
                borderColor: cat.slug === categorySlug ? cat.color : undefined,
                color: cat.slug === categorySlug ? cat.color : undefined,
              }}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        {/* Category Articles Grid */}
        <section>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>{categoryObj.name} Publications</h2>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              {categoryPosts.length} {categoryPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {categoryPosts.length > 0 ? (
            <div className="posts-grid">
              {categoryPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="empty-state section-card p-5 text-center">
              <span className="empty-state-icon" style={{ fontSize: "3rem" }}>📭</span>
              <h3>No articles registered in {categoryObj.name} yet</h3>
              <p>Be the first anonymous author to post in this category!</p>
              <Link href="/write" className="btn btn-magenta mt-3">
                ✦ Post First Article in {categoryObj.name}
              </Link>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
