## EchoVerse (Techno Blogs)

EchoVerse is an open-source blogging website currently built as a static HTML/CSS/JS project.

## Immediate Action: Node.js 24 Upgrade for Vercel

Vercel notified that Node.js 20 builds will fail after **October 1**.

### What is already done in this repo
- Added `/home/runner/work/EchoVerse/EchoVerse/.nvmrc` with `24`
- Added `/home/runner/work/EchoVerse/EchoVerse/.node-version` with `24`

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

## Current Project Structure
- HTML pages in repository root:
  - `index.html`
  - `main.html`
  - `about.html`
  - `contact.html`
- CSS/JS assets under:
  - `/home/runner/work/EchoVerse/EchoVerse/Componets/Css`
  - `/home/runner/work/EchoVerse/EchoVerse/Componets/JavaScript`
 