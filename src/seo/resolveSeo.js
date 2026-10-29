import { acServices, blogPosts, companyInfo, serviceAreas } from '../data/siteData'
import serviceDetails from '../data/serviceDetails.json'
import { staticPageMeta } from './pageMeta'
import { absoluteAsset, absoluteUrl, siteConfig } from './siteConfig'
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildHvacServiceSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
} from './schema'

const routeMetaKey = {
  home: 'home',
  about: 'about',
  services: 'services',
  'service-detail': 'services',
  brands: 'brands',
  'service-areas': 'service-areas',
  pricing: 'pricing',
  blog: 'blog',
  'blog-post': 'blog',
  contact: 'contact',
  'not-found': 'not-found',
}

const homeFaqs = [
  {
    question: 'Does Cold Point offer same-day AC repair?',
    answer: 'Yes. Book before noon and a certified technician can reach your location the same day across our service cities.',
  },
  {
    question: 'Which AC brands does Cold Point service?',
    answer: 'We service Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Mitsubishi, Hitachi, Haier, Whirlpool, Godrej, and Panasonic.',
  },
  {
    question: 'Does Cold Point provide commercial HVAC services?',
    answer: 'Yes. We handle VRF, cassette, ducted, and central AC systems for offices, retail, hotels, and industrial facilities.',
  },
  {
    question: 'Is there a warranty on AC repairs?',
    answer: 'Every repair and installation includes a 30-day workmanship warranty with OEM-compatible parts.',
  },
]

const contactFaqs = [
  {
    question: 'What are Cold Point service hours?',
    answer: `We operate ${companyInfo.hours} for bookings and emergency support.`,
  },
  {
    question: 'How can I book an AC service?',
    answer: 'Book online via our contact form, call us, or message on WhatsApp for the fastest response.',
  },
  {
    question: 'Which cities does Cold Point cover?',
    answer: 'We serve Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, and Chennai with expanding coverage.',
  },
]

function breadcrumbsForRoute(routeKey, pathname, params, title) {
  const items = [{ name: 'Home', path: '/' }]

  switch (routeKey) {
    case 'about':
      items.push({ name: 'About', path: '/about' })
      break
    case 'services':
      items.push({ name: 'Services', path: '/services' })
      break
    case 'service-detail':
      items.push({ name: 'Services', path: '/services' })
      items.push({ name: title, path: pathname })
      break
    case 'brands':
      items.push({ name: 'Brands', path: '/brands' })
      break
    case 'service-areas':
      items.push({ name: 'Service Areas', path: '/service-areas' })
      break
    case 'pricing':
      items.push({ name: 'Pricing', path: '/pricing' })
      break
    case 'blog':
      items.push({ name: 'Blog', path: '/blog' })
      break
    case 'blog-post':
      items.push({ name: 'Blog', path: '/blog' })
      items.push({ name: title, path: pathname })
      break
    case 'contact':
      items.push({ name: 'Contact', path: '/contact' })
      break
    default:
      break
  }

  return items
}

export function resolveSeo(pathname, params = {}, routeKey = 'home') {
  const metaKey = routeMetaKey[routeKey] ?? 'home'
  let meta = staticPageMeta[metaKey] ?? staticPageMeta.home
  let title = meta.title
  let description = meta.description
  let image = siteConfig.defaultOgImage
  let robots = meta.robots
  let ogType = meta.ogType
  let schemas = []
  let faqs = null

  if (routeKey === 'service-detail' && params.slug) {
    const detail = serviceDetails[params.slug]
    const listing = acServices.find((s) => s.slug === params.slug)

    if (detail && listing) {
      title = `${detail.title} in India | ${siteConfig.name}`
      description = `${detail.overview.slice(0, 155)}… Book certified ${detail.title.toLowerCase()} with same-day availability.`
      image = detail.heroImage ?? image
      faqs = detail.faqs ?? null
      schemas.push(buildHvacServiceSchema(detail, listing))
    } else {
      title = staticPageMeta['not-found'].title
      description = staticPageMeta['not-found'].description
      robots = 'noindex, follow'
      routeKey = 'not-found'
    }
  }

  if (routeKey === 'blog-post' && params.slug) {
    const post = blogPosts.find((p) => p.slug === params.slug)
    if (post) {
      title = `${post.title} | ${siteConfig.name} Blog`
      description = post.excerpt
      image = post.image
      schemas.push(buildArticleSchema(post, pathname))
    } else {
      title = staticPageMeta['not-found'].title
      description = staticPageMeta['not-found'].description
      robots = 'noindex, follow'
      routeKey = 'not-found'
    }
  }

  if (routeKey === 'not-found') {
    meta = staticPageMeta['not-found']
    title = meta.title
    description = meta.description
    robots = meta.robots
  }

  const canonical = absoluteUrl(pathname)
  const crumbs = breadcrumbsForRoute(routeKey, pathname, params, title.split('|')[0].trim())

  schemas = [
    buildOrganizationSchema(),
    buildLocalBusinessSchema(),
    buildWebSiteSchema(),
    buildWebPageSchema({ title, description, pathname, image }),
    buildBreadcrumbSchema(crumbs),
    ...schemas,
  ]

  if (routeKey === 'home') {
    faqs = homeFaqs
  }
  if (routeKey === 'contact') {
    faqs = contactFaqs
  }
  if (faqs?.length) {
    schemas.push(buildFaqSchema(faqs))
  }

  return {
    title,
    description,
    keywords: meta.keywords,
    canonical,
    image: absoluteAsset(image),
    robots,
    ogType,
    locale: siteConfig.defaultLocale,
    alternateLocale: siteConfig.defaultLocale,
    schemas,
    breadcrumbs: crumbs,
  }
}
