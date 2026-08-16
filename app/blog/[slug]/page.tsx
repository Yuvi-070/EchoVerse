import { Metadata } from "next";
import { getPostBySlug } from "../../data/posts";
import BlogClient from "./BlogClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | ECHO-VERSE",
      robots: "noindex",
    };
  }

  const baseUrl = "https://echoverse.vercel.app";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | ECHO-VERSE`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: postUrl,
      siteName: "ECHO-VERSE",
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "article:published_time": new Date(post.date).toISOString(),
      "article:modified_time": new Date(post.date).toISOString(),
      "article:author": post.author,
      "article:section": post.category,
      "article:tag": post.tags.join(","),
    },
  };
}

export default function BlogPage({ params }: PageProps) {
  return <BlogClient params={params} />;
}