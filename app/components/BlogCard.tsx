"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Post } from "../data/posts";
import CategoryBadge from "./CategoryBadge";

interface BlogCardProps {
  post: Post;
  variant?: "default" | "featured" | "compact";
}

export default function BlogCard({
  post,
  variant = "default",
}: BlogCardProps) {
  const displayAuthor =
    !post.author || post.author.includes("Builder") ? "Anonymous" : post.author;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-100, 100], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / (rect.width / 2) * 100);
    y.set((e.clientY - centerY) / (rect.height / 2) * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <motion.article
      className={`post-card ${isFeatured ? "featured" : ""} ${isCompact ? "compact" : ""}`}
      id={`post-${post.slug}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg)`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        z: isCompact ? 20 : 40,
        scale: isCompact ? 1.01 : 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="post-card-glow" aria-hidden="true" />
      <div className="post-card-border" aria-hidden="true" />

      <div className="post-card-content" style={{ transformStyle: "preserve-3d" }}>
        {isFeatured && (
          <div className="post-card-badge" aria-label="Featured article">
            <span className="badge badge-magenta">✦ Featured</span>
          </div>
        )}

        <header className="post-card-header">
          <CategoryBadge categorySlug={post.category} size="sm" />
          <div className="post-card-meta">
            <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
            <span className="meta-separator" aria-hidden="true">·</span>
            <span className="read-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readTime}
            </span>
          </div>
        </header>

        <h3 className="post-card-title">
          <Link href={`/blog/${post.slug}`} aria-label={`Read: ${post.title}`}>
            {post.title}
          </Link>
        </h3>

        {!isCompact && (
          <p className="post-card-excerpt">{post.excerpt}</p>
        )}

        <footer className="post-card-footer">
          <div className="post-card-tags" aria-label="Tags">
            {post.tags.slice(0, isCompact ? 2 : 4).map((tag) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                className="tag-link"
                aria-label={`View posts tagged #${tag}`}
              >
                <span className="tag-icon" aria-hidden="true">#</span>
                {tag}
              </Link>
            ))}
            {post.tags.length > (isCompact ? 2 : 4) && (
              <span className="tag-more" aria-label={`And ${post.tags.length - (isCompact ? 2 : 4)} more tags`}>
                +{post.tags.length - (isCompact ? 2 : 4)}
              </span>
            )}
          </div>

          <div className="post-card-author" aria-label={`Author: ${displayAuthor}`}>
            <div className="author-avatar" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="author-name">{displayAuthor}</span>
          </div>
        </footer>
      </div>
    </motion.article>
  );
}