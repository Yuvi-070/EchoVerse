"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import CategoryBadge from "../../components/CategoryBadge";
import BlogCard from "../../components/BlogCard";
import ReadingProgress, { useReadingProgress } from "../../components/ReadingProgress";
import { getPostBySlug, getPostsByCategory, type Post } from "../../data/posts";
import Script from "next/script";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface ArticleContentProps {
  post: Post;
  relatedPosts: Post[];
}

function generateJsonLd(post: Post) {
  const baseUrl = "https://echoverse.vercel.app";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}/og-image.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "ECHO-VERSE",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };
}

function ArticleContent({ post, relatedPosts }: ArticleContentProps) {
  const { progress, headings, activeId } = useReadingProgress();

  const copyShareLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const [copied, setCopied] = useState(false);

  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd(post)) }}
      />
      <header className="article-header">
        <div className="mb-3">
          <CategoryBadge categorySlug={post.category} />
        </div>
        <h1>{post.title}</h1>
        <div className="article-meta">
          <span>✍ Posted by {post.author}</span>
          <span className="article-meta-divider" />
          <span>📅 {post.date}</span>
          <span className="article-meta-divider" />
          <span>⏱️ {post.readTime}</span>
        </div>
      </header>

      <AISummarizer post={post} />

      <div className="article-layout">
        <article className="article-body">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={idx} id={`heading-${idx}`}>{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={idx} id={`heading-${idx}`}>{paragraph.replace("### ", "")}</h3>;
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </article>

        <aside className="toc-sidebar-wrapper">
          <ReadingProgress />
        </aside>
      </div>

      {/* Tags */}
      <div className="article-tags">
        <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>
          TAGS:
        </span>
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>

      {/* Article Actions */}
      <div className="d-flex justify-content-between align-items-center mt-4 pt-3" style={{ borderTop: "1px solid var(--border-color)" }}>
        <button className="btn btn-ghost" onClick={copyShareLink}>
          {copied ? "✓ Link Copied!" : "🔗 Share Article"}
        </button>
        <Link href="/write" className="btn btn-magenta">
          ✦ Write Response Post
        </Link>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <h3 className="h4 mb-3">More in {post.category.toUpperCase()}</h3>
          <div className="related-grid">
            {relatedPosts.map((rel) => (
              <BlogCard key={rel.id} post={rel} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-4 text-center">
        <Link href="/main" className="btn btn-outline">
          ← Back to All Posts
        </Link>
      </div>
    </>
  );
}

function AISummarizer({ post }: { post: Post }) {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateSummary = async () => {
    if (summary) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "excerpt", title: post.title, content: post.content, category: post.category }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Failed to generate summary");
      setSummary(data.result.trim().slice(0, 300));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-summarizer">
      <div className="ai-summarizer-head">
        <span className="ai-summarizer-badge">🤖</span>
        <div>
          <strong>AI Summary (Nemotron 3 Ultra)</strong>
          <span className="text-muted">One-click TL;DR powered by NVIDIA</span>
        </div>
      </div>

      {loading ? (
        <span className="ai-summarizer-loading">Generating summary...</span>
      ) : summary ? (
        <>
          <div className="ai-summarizer-content">
            <p>{summary}</p>
          </div>
          <div className="ai-summarizer-actions">
            <button
              className="btn btn-ghost ai-summarizer-btn"
              onClick={() => { setSummary(""); generateSummary(); }}
            >
              🔄 Regenerate
            </button>
          </div>
        </>
      ) : (
        <div className="ai-summarizer-actions">
          <button
            className="btn btn-primary ai-summarizer-btn"
            onClick={generateSummary}
          >
            ✨ Generate TL;DR
          </button>
        </div>
      )}

      {error && <p className="ai-summarizer-error">{error}</p>}
    </div>
  );
}

export default function BlogClient({ params }: PageProps) {
  const resolvedParams = use(params);
  const [post, setPost] = useState<Post | null | undefined>(() => getPostBySlug(resolvedParams.slug) || null);

  if (post === null) {
    notFound();
  }

  if (!post) {
    return (
      <div className="site-shell">
        <SiteNav />
        <main className="container section-gap text-center">
          <p>Loading techno article...</p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="site-shell" id="top">
      <SiteNav />

      <main className="article-container">
        <ArticleContent post={post} relatedPosts={relatedPosts} />
      </main>

      <SiteFooter />
    </div>
  );
}