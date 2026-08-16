import { getAllPosts } from "../data/posts";

const BASE_URL = "https://echoverse.vercel.app";

export async function GET() {
  const posts = getAllPosts().slice(0, 20);

  const rssItems = posts.map((post) => {
    const postUrl = `${BASE_URL}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();

    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("")}
      <author>anonymous@echoverse.dev</author>
    </item>`;
  }).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ECHO-VERSE — Techno Blog for Builders</title>
    <link>${BASE_URL}</link>
    <description>An open-source, anonymous techno blog where developers share practical engineering stories, tutorials, and community insights. No login required.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <generator>EchoVerse / Next.js 16</generator>
    <copyright>MIT License</copyright>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}