## EchoVerse (Techno Blogs)

EchoVerse is now converted to a **Next.js (App Router)** project from static HTML/CSS/JS.

## Run locally

1. Use Node.js 24 (`.nvmrc` and `.node-version` are set to `24`)
2. Install dependencies:
   - `npm install`
3. Start dev server:
   - `npm run dev`
4. Open:
   - `http://localhost:3000`

## Immediate Action: Node.js 24 Upgrade for Vercel

Vercel notified that Node.js 20 builds will fail after **October 1**.

### What is already done in this repo
- Added `/home/runner/work/EchoVerse/EchoVerse/.nvmrc` with `24`
- Added `/home/runner/work/EchoVerse/EchoVerse/.node-version` with `24`
- Added `package.json -> engines.node: 24.x` for deployment runtime alignment

These files align local development/runtime tooling to Node 24.

### Required action in Vercel dashboard (project: `technoblogs`)
1. Open Vercel project settings for `technoblogs`
2. Set Node.js version to **24.x**
3. Trigger a fresh deployment
4. Verify build and deployment succeed

## Delivery Plan (Implementation Backlog)

### Milestone 1 — Runtime Stability
- [ ] Set Node 24 in Vercel dashboard
- [ ] Redeploy and verify production build health
- [ ] Record deployment verification notes

### Milestone 2 — UI Foundation Overhaul
- [ ] Define design tokens (color, typography, spacing, breakpoints)
- [ ] Normalize layout and reusable UI sections
- [ ] Improve mobile responsiveness and accessibility
- [ ] Improve performance basics (assets, loading behavior)

### Milestone 3 — Core Blog Feature Expansion
- [ ] Content flow improvements
- [ ] Search support
- [ ] Categories/tags navigation
- [ ] Author-focused views
- [ ] Comments integration
- [ ] Auth/profile improvements
- [ ] SEO and social sharing improvements

### Milestone 4 — Engineering Hardening
- [ ] Add CI checks (build/static validation)
- [ ] Add dependency/security workflow
- [ ] Add deployment safety checks and rollback guidance

## Next.js routes
- `/` landing page
- `/main` home/blog page
- `/about` about page
- `/contact` contact page

## Notes
- Legacy root HTML files have been replaced by Next.js routes.
- Styling is reused from existing CSS under `/home/runner/work/EchoVerse/EchoVerse/Componets/Css`.
- Static images are served from `/home/runner/work/EchoVerse/EchoVerse/public/Componets/Image`.
 