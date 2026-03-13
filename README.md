# claudeseoskill.com — Demo Website

Marketing and demo site for the [Claude SEO Skill](https://github.com/SNLabat/SEO-GEO-AEO-Skill), built by Alex Labat.

## Overview

Static HTML/CSS/JS site showcasing the Claude SEO Skill — a Claude AI Skill that performs SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) audits, then auto-generates a downloadable DOCX and PDF report.

## Files

```
├── index.html       # Single-page site (all sections)
├── styles.css       # Design system + component styles
├── script.js        # Mobile nav, tab switcher, FAQ accordion, scroll animations
├── favicon.svg      # Claude-orange SVG favicon
├── robots.txt       # Crawl directives
├── sitemap.xml      # XML sitemap for claudeseoskill.com
└── .claude/
    └── launch.json  # Dev server config (python http.server on port 3456)
```

## Running Locally

```bash
/opt/homebrew/bin/python3 -m http.server 3456
```

Then open [http://localhost:3456](http://localhost:3456).

Or use Claude Code's preview server:

```
/preview start "Claude SEO Skill Website"
```

## Design System

| Token | Value | Usage |
|---|---|---|
| Claude Orange | `#D97757` | Primary brand, buttons, accents |
| Background Cream | `#FAF8F4` | Page background |
| Navy | `#1B2A4A` | Report cover, dark CTA section |
| Score Green | `#16A34A` | Score 8–10 |
| Score Amber | `#D97706` | Score 5–7 |
| Score Red | `#DC2626` | Score 1–4 |
| Font (UI) | Inter | All UI text |
| Font (accent) | Lora italic | Hero headline accent |

## Page Sections

1. **Hero** — Headline, GitHub download CTA, "See a Demo" CTA
2. **Trust bar** — 4 key capabilities
3. **Features** — 6 cards: SEO Audit, GEO Audit, AEO Audit, Structured Data, Content Quality, DOCX+PDF Report
4. **How It Works** — 5 steps: Download → Choose mode → Paste URL → Chat recap → Download report
5. **Audit Types** — SEO vs GEO vs AEO comparison cards
6. **Demo** — 3 tabs: Chat Recap · Priority Matrix · Report Preview
7. **FAQ** — 7 accordion questions with FAQPage JSON-LD schema
8. **CTA** — Dark navy section with GitHub download button
9. **Footer** — Nav links + GitHub + Anthropic attribution

## SEO Implementation

- Full meta tags, Open Graph, and Twitter Card
- 3 JSON-LD schemas: `WebSite`, `SoftwareApplication`, `FAQPage`
- Semantic HTML5 (`<main>`, `<article>`, `<section>`, `<nav>`)
- Proper heading hierarchy (single H1, descriptive H2/H3)
- `robots.txt` and `sitemap.xml` pointing to `claudeseoskill.com`
- Canonical URL tag
- `aria-*` attributes throughout for accessibility
- Skip-nav link for keyboard users

## Deploying to claudeseoskill.com

This is a fully static site — no build step required. Upload all files (except `.claude/`) to any static host:

- **Netlify** — drag and drop the folder into the Netlify dashboard
- **Vercel** — `vercel --prod` from the project directory
- **GitHub Pages** — push to a `gh-pages` branch
- **Registrar hosting** — upload via FTP/SFTP

Update `sitemap.xml` `<lastmod>` date after any content changes.

## Related

- **The Skill:** [github.com/SNLabat/SEO-GEO-AEO-Skill](https://github.com/SNLabat/SEO-GEO-AEO-Skill)
- **Live site:** [claudeseoskill.com](https://claudeseoskill.com)
- **Powered by:** [Anthropic Claude](https://anthropic.com)
