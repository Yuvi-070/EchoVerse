<div align="center">

# ⚡ ECHO—VERSE

**An Open-Source, Anonymous Technical Blogging Platform for Software Engineers & Builders.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind-Free](https://img.shields.io/badge/CSS-Custom_Design_System-06B6D4?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Three.js](https://img.shields.io/badge/Three.js-r160-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![NVIDIA Nemotron](https://img.shields.io/badge/NVIDIA-Nemotron_3_Ultra-76B900?style=for-the-badge&logo=nvidia&logoColor=white)](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Deployment](https://img.shields.io/badge/Vercel-Node_24.x-black?style=for-the-badge&logo=vercel)](https://vercel.com)

[🔗 Live Demo](https://echoverse.vercel.app) · [📝 Write Anonymously](https://echoverse.vercel.app/write) · [🏷️ Browse Categories](https://echoverse.vercel.app/categories) · [🤖 AI Copilot](https://echoverse.vercel.app/write)

</div>

---

## ✨ Feature Highlights

### 🤖 **AI-Powered Writing Assistant (Nemotron 3 Ultra)**
- **Suggest Titles** — Generate catchy, SEO-friendly technical titles from your content
- **Generate Excerpts** — Auto-create compelling 1-2 sentence summaries
- **Suggest Tags** — AI-recommended relevant hashtags for discoverability
- **Polish Content** — Improve clarity, flow, and technical precision while preserving your voice
- Powered by **NVIDIA Nemotron 3 Ultra (550B params)** via free `build.nvidia.com` API
- Server-side proxy keeps your API key secure

### 🎨 **Immersive 3D Experience**
- **Dynamic WebGL Background** — 2,500 animated particles, floating gradient orbs, infinite grid tunnel
- **3D Card Tilt** — Blog cards respond to mouse movement with perspective transforms
- **Page Transitions** — Smooth 3D flip/zoom transitions between routes via Framer Motion
- **Glassmorphism UI** — Layered translucency, custom CSS variables, cyberpunk color palette

### ✍️ **Professional Markdown Editor**
- **Live Split Preview** — Real-time rendering as you type
- **Full Toolbar** — Headings, bold/italic/code, lists, tables, links, images, quotes, tasks
- **Syntax Highlighting** — Prism.js with Okaidia theme for 100+ languages
- **GFM Support** — Tables, task lists, strikethrough, auto-linking
- **Fullscreen & Focus Modes** — Distraction-free writing

### 🌗 **Theme System**
- **Light / Dark / System** — Persisted in `localStorage`, respects OS preference
- **Instant Switch** — No flash, CSS variable driven
- **3D Background Adapts** — Opacity adjusts for light mode readability

### 📖 **Enhanced Reading Experience**
- **Reading Progress Bar** — Fixed top indicator with smooth animation
- **Auto Table of Contents** — Generated from `##` headings, sticky on scroll
- **AI Article Summarizer** — One-click TL;DR powered by Nemotron
- **Share Links** — Native Web Share API + clipboard fallback

### 🔍 **Discovery & SEO**
- **Real-time Search** — Fuzzy title/tag filtering on main feed
- **Category Hubs** — 10 dedicated domains (AI/ML, Web Dev, Cybersecurity, Cloud/DevOps, Open Source, Systems, Tutorials, Mobile/Edge, Data/Analytics, Dev Environment)
- **Hashtag Pages** — `/tags/<tag>` aggregation across all categories
- **RSS 2.0 Feed** — `/rss.xml` auto-generated from latest posts
- **Sitemap** — `/sitemap.xml` for search engines
- **JSON-LD Schema** — `BlogPosting` structured data per article
- **Open Graph / Twitter Cards** — Rich social previews

### ⚡ **Performance & Architecture**
- **Next.js 16 App Router** — React 19, Server Components, Streaming
- **Hybrid Rendering** — SSG for static pages, SSR for dynamic feeds
- **Zero-Dependency CSS** — Custom design system, no Tailwind/bootstrap
- **Edge-Ready** — Deployable to Vercel Edge Functions

---

## 📁 Project Structure

```
EchoVerse/
├── app/
│   ├── api/
│   │   └── ai/route.ts          # Nemotron 3 Ultra proxy (server-side)
│   ├── blog/[slug]/             # Article reader + AI summarizer + TOC
│   ├── categories/
│   │   └── [slug]/              # Category hub pages
│   ├── components/
│   │   ├── BlogCard.tsx         # 3D tilt card (Framer Motion)
│   │   ├── CategoryBadge.tsx
│   │   ├── PageTransition.tsx   # 3D route transitions
│   │   ├── SiteFooter.tsx
│   │   ├── SiteNav.tsx          # Nav + ThemeToggle
│   │   ├── ThemeProvider.tsx    # Theme context + persistence
│   │   ├── ThemeToggle.tsx      # Light/Dark/System selector
│   │   ├── ThreeDBackground.tsx # Three.js particle/orb/grid scene
│   │   └── ReadingProgress.tsx  # Top progress bar + TOC
│   ├── contact/
│   ├── data/
│   │   ├── categories.ts        # 10 domain definitions
│   │   └── posts.ts             # Post types + localStorage persistence
│   ├── main/                    # Blog feed with search/filter
│   ├── tags/[tag]/              # Hashtag aggregation pages
│   ├── write/                   # Markdown editor + AI Copilot
│   ├── globals.css              # Design tokens + all styles
│   ├── layout.tsx               # Root layout + providers
│   └── page.tsx                 # Landing with live stats
├── public/
│   ├── favicon.ico
│   └── manifest.json
├── .env.local                   # NVIDIA_API_KEY (gitignored)
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** `20.x` or `24.x`
- **npm** `10.x`+
- **NVIDIA API Key** — Free from [build.nvidia.com](https://build.nvidia.com/settings/api-keys)

### Installation

```bash
# 1. Clone
git clone https://github.com/Yuvi-070/Techno-Blogs.git
cd EchoVerse

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.local.example .env.local
# Edit .env.local and add your key:
# NVIDIA_API_KEY=nvapi-your-free-key

# 4. Run dev server
npm run dev
# → http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## 🔧 Configuration

### Environment Variables (`.env.local`)

| Variable | Required | Description |
|----------|----------|-------------|
| `NVIDIA_API_KEY` | Yes | Free API key from [build.nvidia.com](https://build.nvidia.com/settings/api-keys) for Nemotron 3 Ultra |

### Adding Default Posts
Edit `app/data/posts.ts` — add to `builtInPosts` array with:
```typescript
{
  id: "unique-id",
  slug: "kebab-case-title",
  title: "Your Article Title",
  category: "ai-ml", // matches categories.ts slug
  author: "Anonymous",
  date: "Aug 16, 2026",
  readTime: "8 min read",
  excerpt: "One-sentence hook...",
  content: `# Heading\n\nMarkdown content...`,
  tags: ["tag1", "tag2"],
  featured: true,
}
```

---

## 🛣️ Routes

| Route | Description |
|-------|-------------|
| `/` | Landing — live stats, featured posts, terminal effect |
| `/main` | Blog feed — real-time search, tag filter, infinite scroll |
| `/categories` | Domain hub overview — 10 category cards |
| `/categories/[slug]` | Category feed — e.g. `/categories/ai-ml` |
| `/tags/[tag]` | Hashtag aggregation — e.g. `/tags/rust` |
| `/blog/[slug]` | Article — AI summarizer, TOC, progress bar, share |
| `/write` | **Markdown editor + AI Copilot** — publish anonymously |
| `/about` | Architecture, values, tech stack |
| `/contact` | Form + FAQ accordion |
| `/rss.xml` | RSS 2.0 feed (auto-generated) |
| `/sitemap.xml` | Sitemap (auto-generated) |

---

## 🧠 AI Copilot Usage

On `/write`, the **Nemotron 3 Ultra Copilot** panel provides:

| Button | Action | Input Used |
|--------|--------|------------|
| ✨ Suggest Title | Generates catchy title | Category + Content |
| ✨ Generate Excerpt | Creates 1-2 sentence summary | Title + Content |
| ✨ Suggest Tags | Recommends 5 relevant tags | Category + Content |
| ✨ Polish Content | Rewrites for clarity/flow | Full Content |

> **Tip:** Write a rough draft first, then use **Polish** to refine. Use **Suggest Title** after you have content.

---

## 🎨 Customization

### Design Tokens (`globals.css:10-55`)
```css
:root {
  --accent-cyan: #00f0ff;
  --accent-magenta: #e930ff;
  --bg-primary: #030712;
  --font-mono: "JetBrains Mono", ...;
  --radius-xl: 2rem;
  /* ... */
}
```

### Categories (`app/data/categories.ts`)
Add/modify the 10 domain hubs — each has `slug`, `name`, `icon`, `color`, `gradient`, `description`.

### 3D Background (`app/components/ThreeDBackground.tsx`)
Adjust particle count, orb count, grid density, animation speeds, colors.

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next@16` | React framework (App Router) |
| `react@19` | UI library |
| `three` + `@react-three/fiber` + `@react-three/drei` | 3D WebGL background |
| `framer-motion` | 3D card tilt, page transitions |
| `@uiw/react-md-editor` | Markdown editor with live preview |
| `prismjs` | Syntax highlighting |
| `date-fns` | Date formatting |

---

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- New default articles in `posts.ts`
- Additional categories
- 3D background variants
- AI prompt tuning
- Accessibility enhancements
- Performance optimizations

```bash
# 1. Fork
# 2. Create branch: git checkout -b feature/YourFeature
# 3. Commit: git commit -m 'Add YourFeature'
# 4. Push: git push origin feature/YourFeature
# 5. Open Pull Request
```

---

## 📄 License

MIT License — see [`LICENSE`](LICENSE) for details.

---

## 🙏 Acknowledgments

- **NVIDIA** — Free Nemotron 3 Ultra API via [build.nvidia.com](https://build.nvidia.com)
- **Vercel** — Zero-config deployment for Next.js
- **Three.js / React Three Fiber** — Declarative 3D
- **Framer Motion** — Animation primitives
- **UIW** — React Markdown Editor
- **Prism.js** — Syntax highlighting
- **JetBrains Mono** — Technical typography

---

<div align="center">

**Built with ❤️ by [Yuvraj Tale](https://github.com/Yuvi-070)**

⭐ Star this repo if you find it useful!

</div>