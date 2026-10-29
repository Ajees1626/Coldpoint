# Cold Point — Full SEO & Technical Audit Report

**Domain:** https://coldpoint.in  
**Audit date:** 22 June 2026  
**Stack:** React 19 + Vite 8 SPA (client-side rendered)  
**Auditor scope:** Technical SEO · Performance · Accessibility · Security · Code Quality · Mobile

---

## Executive Summary

The Cold Point frontend was rebuilt as a modern React SPA. Before this audit, **all 19 indexable URLs shared one static `<title>` and meta description**, had **no sitemap, robots.txt, structured data, or server configuration**, and **unknown URLs silently rendered the Home page** (soft 404).

This implementation adds **production-ready SEO infrastructure**, **per-page metadata**, **JSON-LD schemas**, **sitemap + robots.txt**, **Apache `.htaccess`**, **performance optimizations**, **accessibility fixes**, and **proper 404 handling**.

> **Note:** The live site at coldpoint.in currently serves a legacy WordPress site (Chennai-based content). This audit and implementation target the **new React application** ready for deployment to coldpoint.in.

---

## 1. Technical SEO — Status

### Implemented ✅

| Item | Implementation |
|------|----------------|
| Unique title tags (19 pages) | `src/seo/pageMeta.js` + `resolveSeo.js` |
| Unique meta descriptions | Per route + dynamic service/blog pages |
| Canonical URLs | `applySeo.js` — `<link rel="canonical">` |
| Open Graph tags | og:title, description, url, type, image, locale |
| Twitter Cards | summary_large_image + site handle |
| Robots meta | index/noindex per page (404 = noindex) |
| Organization schema | JSON-LD `@type: Organization` |
| Local Business / HVAC schema | JSON-LD `@type: HVACBusiness` |
| Service schema | Per service detail page |
| FAQ schema | Home + Contact pages |
| Breadcrumb schema | All inner pages |
| Article schema | Blog posts |
| WebSite + WebPage schema | All pages |
| Heading hierarchy | H1 via Hero/PageHero; sections use H2/H3 |
| Duplicate metadata fix | Dynamic `SeoManager` replaces static-only head |
| hreflang | `en-IN` + `x-default` (single-language site) |
| lang attribute | `en-IN` on `<html>`, updated on route change |

### Page Title Map

| URL | Title |
|-----|-------|
| `/` | Cold Point \| AC Repair, Installation & HVAC Services in India |
| `/about` | About Cold Point \| Certified HVAC Experts Since 2010 |
| `/services` | AC Services \| Repair, Installation, AMC & Maintenance \| Cold Point |
| `/services/:slug` | {Service} in India \| Cold Point |
| `/brands` | AC Brands We Service \| Daikin, LG, Samsung & More \| Cold Point |
| `/service-areas` | Service Areas \| AC Service in Mumbai, Delhi, Bangalore & More |
| `/pricing` | AC Service Pricing & AMC Plans \| Transparent Rates |
| `/blog` | HVAC Blog \| AC Tips, Maintenance & Energy Savings |
| `/blog/:slug` | {Article Title} \| Cold Point Blog |
| `/contact` | Contact Cold Point \| Book AC Service \| 24/7 Support |
| 404 | Page Not Found \| Cold Point (noindex) |

---

## 2. Sitemap — Status ✅

**File:** `public/sitemap.xml` (auto-regenerated on build via `scripts/generate-sitemap.mjs`)

- 19 URLs included (8 static + 8 services + 3 blog posts)
- `<lastmod>` on every URL
- Image sitemap extension (`xmlns:image`) on key pages
- Priority + changefreq set per Google guidelines
- Referenced in `robots.txt`

**Build command:** `npm run build` (runs sitemap generator after Vite build)

---

## 3. Robots.txt — Status ✅

**File:** `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /dist/
Disallow: /node_modules/
Sitemap: https://coldpoint.in/sitemap.xml
```

---

## 4. .htaccess — Status ✅

**File:** `public/.htaccess`

| Rule | Status |
|------|--------|
| Force HTTPS | ✅ 301 redirect |
| Force non-www canonical | ✅ coldpoint.in |
| Trailing slash removal | ✅ |
| SPA fallback (index.html) | ✅ |
| GZIP compression | ✅ mod_deflate |
| Brotli (if available) | ✅ mod_brotli |
| Browser caching | ✅ mod_expires + Cache-Control |
| Security headers (CSP, HSTS, X-Frame, etc.) | ✅ |
| Sensitive file protection | ✅ .env, .git, package.json |
| WebP MIME type | ✅ |

---

## 5. Language & International SEO ✅

- Primary language: **English (India)**
- `<html lang="en-IN">` in index.html, updated dynamically
- hreflang: `en-IN` + `x-default` pointing to canonical URL
- No multilingual content — hreflang limited to single locale (correct)

---

## 6. Performance Optimization

### Implemented ✅

| Optimization | File / Location |
|--------------|-----------------|
| Route-level code splitting (lazy pages) | `PageTransition.jsx` |
| Vendor chunk separation | `vite.config.js` manualChunks |
| CSS minification | Vite build (default) |
| Hero LCP image: eager + fetchPriority high | `Hero.jsx` |
| Lazy loading on non-LCP images | Throughout components |
| Font preconnect + preload | `index.html` |
| prefers-reduced-motion | `global.css` |
| GZIP/Brotli + cache headers | `.htaccess` |

### Remaining Recommendations (Medium Priority)

| Issue | Recommendation |
|-------|----------------|
| CSR-only rendering | Add prerender (vite-plugin-ssr) or SSR for crawlers |
| Google Fonts render-blocking | Self-host Inter + Poppins or use `font-display: swap` |
| Large CSS bundle (~4000 lines) | Purge unused Tailwind in production (verify `@tailwindcss/vite` tree-shaking) |
| Image assets not in repo | Deploy `/image/` folder to CDN with WebP + responsive srcset |
| No service worker | Add offline shell PWA (optional) |

### Core Web Vitals Targets

| Metric | Expected Impact |
|--------|-----------------|
| LCP | Improved via hero fetchPriority + eager load |
| INP | Improved via lazy route chunks (smaller initial JS) |
| CLS | Images have width/height attributes (existing + maintained) |

---

## 7. Accessibility Audit

### Implemented ✅

| Item | Status |
|------|--------|
| Skip to main content link | `App.jsx` |
| Focus-visible outlines | `global.css` |
| Keyboard navigation | Header dropdowns use buttons with aria-expanded |
| Mobile menu aria-expanded | Header |
| Screen reader loading state | Page loader with aria-live |
| Semantic HTML | main, nav, footer, article, time |
| Alt text on images | Hero, services, blog (existing) |
| prefers-reduced-motion | Disables cooling/particle animations |
| Touch targets ≥ 44px | Header toggle updated to 44×44px |
| Breadcrumb aria-label | PageHero |

### Remaining (Low–Medium)

| Issue | Fix |
|-------|-----|
| Blog posts thin content | Expand article body copy (SEO + a11y) |
| Color contrast on muted text | Verify 4.5:1 ratio on `--color-text-muted` |
| Visible FAQ sections | Add on-page FAQ accordions matching schema (Home/Contact) |
| Form labels | Verify Contact form has explicit `<label>` associations |

---

## 8. Security

### Implemented via .htaccess ✅

- Content-Security-Policy
- Strict-Transport-Security (HSTS)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy

### Recommendations

| Item | Notes |
|------|-------|
| Secure cookies | N/A — no auth cookies currently |
| CSP `'unsafe-inline'` | Required for Vite/React; tighten when using nonces |
| Subresource Integrity | Add SRI if loading third-party scripts beyond fonts |

---

## 9. Code Quality

### Implemented ✅

- Centralized SEO module (`src/seo/`)
- Removed soft-404 (Home fallback → proper NotFound page)
- Lazy-loaded page components
- Reusable schema builders
- Build-time sitemap generation
- public/ folder for static deploy assets

### File Structure Added

```
frontend/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── .htaccess
│   └── favicon.svg
├── scripts/
│   └── generate-sitemap.mjs
└── src/
    ├── seo/
    │   ├── siteConfig.js
    │   ├── pageMeta.js
    │   ├── resolveSeo.js
    │   ├── schema.js
    │   └── applySeo.js
    ├── components/seo/
    │   └── SeoManager.jsx
    └── pages/
        └── NotFound.jsx
```

---

## 10. Mobile Optimization ✅

- Responsive breakpoints: 639px / 1023px / 1279px (existing)
- Mobile navigation with body scroll lock
- Touch targets: floating actions 48px, header toggle 44px
- viewport meta tag configured
- Mobile-first Tailwind utilities throughout

---

## Priority Fixes Summary

### 🔴 High (Deploy blockers)

| # | Issue | Status |
|---|-------|--------|
| 1 | No per-page meta tags | ✅ Fixed |
| 2 | No sitemap/robots.txt | ✅ Fixed |
| 3 | No SPA server rewrite | ✅ .htaccess |
| 4 | Soft 404 showing Home | ✅ NotFound page |
| 5 | No structured data | ✅ JSON-LD |
| 6 | Deploy image assets to `/image/` | ⚠️ Deploy required |

### 🟡 Medium

| # | Issue | Status |
|---|-------|--------|
| 7 | CSR-only — crawler rendering | 📋 Recommend prerender |
| 8 | Blog thin content | 📋 Expand articles |
| 9 | /pricing not in main nav | 📋 Optional nav add |
| 10 | Self-host fonts | 📋 Performance |

### 🟢 Low

| # | Issue | Status |
|---|-------|--------|
| 11 | meta keywords tag | Present (harmless, ignored by Google) |
| 12 | Visible FAQ UI | Schema only — add UI optional |
| 13 | Web manifest / PWA | Not implemented |

---

## Deployment Checklist

1. Run `npm run build` — outputs `dist/` + regenerates `sitemap.xml`
2. Upload `dist/` contents to web root
3. Ensure `public/robots.txt`, `sitemap.xml`, `.htaccess` are deployed
4. Upload `/image/` assets referenced across the site
5. Verify HTTPS + non-www redirect
6. Submit sitemap in Google Search Console: `https://coldpoint.in/sitemap.xml`
7. Request indexing for key URLs after deploy
8. Monitor Core Web Vitals in Search Console

---

## JSON-LD Schemas Deployed

Every page includes (via `SeoManager`):

1. **Organization** — company identity, social profiles
2. **HVACBusiness** (LocalBusiness) — address, geo, hours, area served
3. **WebSite** — site name, publisher
4. **WebPage** — page-specific name, description, image
5. **BreadcrumbList** — navigation trail
6. **Service** — on each `/services/:slug` page
7. **Article** — on each `/blog/:slug` page
8. **FAQPage** — on Home and Contact pages

---

*Report generated as part of production SEO implementation. Re-run audit after deploy and Search Console verification.*
