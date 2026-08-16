"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BlogCard from "../../components/BlogCard";
import { getPostsByTag, getAllTags, type Post } from "../../data/posts";

interface PageProps {
  params: Promise<{ tag: string }>;
}

export default function TagDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const tagSlug = decodeURIComponent(resolvedParams.tag).toLowerCase();

  const [taggedPosts, setTaggedPosts] = useState<Post[]>(() => tagSlug ? getPostsByTag(tagSlug) : []);
  const [allTags, setAllTags] = useState<{ name: string; count: number }[]>(() => getAllTags());

  return (
    <div className="site-shell" id="top">
      <SiteNav />

      <main className="container section-gap">
        {/* Tag Header Banner */}
        <header className="hero-card mb-4">
          <div className="hero-content">
            <div className="eyebrow">🏷️ HASHTAG TOPIC SEARCH</div>
            <h1>#{tagSlug}</h1>
            <p className="text-secondary">
              All registered techno blog articles tagged with <strong>#{tagSlug}</strong>.
            </p>
            <div className="d-flex align-items-center gap-3 mt-3">
              <span className="text-muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem" }}>
                Matching posts: <strong style={{ color: "var(--accent-cyan)" }}>{taggedPosts.length}</strong>
              </span>
              <Link href="/main" className="btn btn-outline">
                ← Explore Main Feed
              </Link>
            </div>
          </div>
        </header>

        {/* Popular Tags Switcher */}
        <section className="mb-4">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              POPULAR HASHTAGS:
            </span>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {allTags.slice(0, 15).map((t) => (
              <Link
                key={t.name}
                href={`/tags/${encodeURIComponent(t.name)}`}
                className={`tag-pill-btn ${t.name === tagSlug ? "active" : ""}`}
              >
                #{t.name} <span className="tag-pill-count">{t.count}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Tagged Posts Grid */}
        <section>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Articles Tagged #{tagSlug}</h2>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              Showing {taggedPosts.length} {taggedPosts.length === 1 ? "post" : "posts"}
            </span>
          </div>

          {taggedPosts.length > 0 ? (
            <div className="posts-grid">
              {taggedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="empty-state section-card p-5 text-center">
              <span className="empty-state-icon" style={{ fontSize: "3rem" }}>🏷️</span>
              <h3>No articles tagged #{tagSlug} yet</h3>
              <p>Be the first author to publish an article on #{tagSlug}!</p>
              <Link href="/write" className="btn btn-magenta mt-3">
                ✦ Write Article Tagged #{tagSlug}
              </Link>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
