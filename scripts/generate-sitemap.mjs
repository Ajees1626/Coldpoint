import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const distDir = join(root, 'dist')
const siteUrl = 'https://coldpoint.in'
const lastmod = new Date().toISOString().split('T')[0]

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/brands',
  '/service-areas',
  '/pricing',
  '/blog',
  '/contact',
]

const serviceSlugs = [
  'ac-installation',
  'ac-uninstallation',
  'ac-repair',
  'ac-gas-filling',
  'ac-maintenance',
  'ac-amc-service',
  'ac-cleaning',
  'commercial-ac-service',
]

const blogSlugs = [
  'ac-not-cooling-reasons',
  'ac-maintenance-tips',
  'inverter-vs-non-inverter',
]

const imageMap = {
  '/': ['/image/home1_result.webp', '/image/home2_result.webp', '/image/logo.webp'],
  '/services': ['/image/sr1.webp', '/image/sr2.webp', '/image/sr3.webp', '/image/sr4.webp'],
  '/brands': [
    '/image/b1_result.webp', '/image/b2_result.webp', '/image/b3_result.webp',
    '/image/b4_result.webp', '/image/b5_result.webp', '/image/b6_result.webp',
  ],
  '/blog': ['/image/bg1_result.webp', '/image/bg2_result.webp', '/image/bg3_result.webp'],
  '/blog/ac-not-cooling-reasons': ['/image/bg1_result.webp'],
  '/blog/ac-maintenance-tips': ['/image/bg2_result.webp'],
  '/blog/inverter-vs-non-inverter': ['/image/bg3_result.webp'],
}

serviceSlugs.forEach((slug, i) => {
  imageMap[`/services/${slug}`] = [`/image/sr${(i % 4) + 1}.webp`]
})

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildUrlEntry(path, priority, changefreq) {
  const loc = `${siteUrl}${path === '/' ? '/' : path}`
  const images = imageMap[path] ?? []

  const imageTags = images
    .map(
      (img) => `
    <image:image>
      <image:loc>${escapeXml(`${siteUrl}${img}`)}</image:loc>
      <image:title>${escapeXml(`Cold Point — ${path}`)}</image:title>
    </image:image>`,
    )
    .join('')

  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${imageTags}
  </url>`
}

const urls = [
  ...staticRoutes.map((path) => buildUrlEntry(path, path === '/' ? '1.0' : '0.8', path === '/' ? 'weekly' : 'monthly')),
  ...serviceSlugs.map((slug) => buildUrlEntry(`/services/${slug}`, '0.9', 'monthly')),
  ...blogSlugs.map((slug) => buildUrlEntry(`/blog/${slug}`, '0.7', 'monthly')),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`

if (!existsSync(distDir)) {
  console.error('Build output missing. Run "vite build" first.')
  process.exit(1)
}

writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8')
writeFileSync(join(root, 'public', 'sitemap.xml'), sitemap, 'utf8')

console.log(`✓ Sitemap generated (${urls.length} URLs) → dist/sitemap.xml`)
