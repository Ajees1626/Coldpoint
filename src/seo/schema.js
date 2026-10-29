import { companyInfo } from '../data/siteData'
import { absoluteAsset, absoluteUrl, siteConfig } from './siteConfig'

const ORG_ID = `${siteConfig.url}/#organization`
const LOCAL_ID = `${siteConfig.url}/#localbusiness`
const WEBSITE_ID = `${siteConfig.url}/#website`

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteAsset(companyInfo.logo),
    email: companyInfo.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.foundingDate,
    sameAs: Object.values(companyInfo.social),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      email: companyInfo.email,
      areaServed: siteConfig.areaServed,
      availableLanguage: ['English', 'Hindi'],
    },
  }
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': LOCAL_ID,
    name: siteConfig.name,
    image: absoluteAsset(companyInfo.logo),
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: companyInfo.email,
    priceRange: siteConfig.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '23:00',
    },
    areaServed: siteConfig.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    parentOrganization: { '@id': ORG_ID },
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { '@id': ORG_ID },
    inLanguage: siteConfig.defaultLocale,
  }
}

export function buildWebPageSchema({ title, description, pathname, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(pathname)}#webpage`,
    url: absoluteUrl(pathname),
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': LOCAL_ID },
    inLanguage: siteConfig.defaultLocale,
    primaryImageOfPage: absoluteAsset(image),
  }
}

export function buildBreadcrumbSchema(items) {
  if (!items.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function buildHvacServiceSchema(detail, listing) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(`/services/${detail.slug}`)}#service`,
    name: detail.title,
    description: detail.overview,
    serviceType: 'HVAC Service',
    provider: { '@id': LOCAL_ID },
    areaServed: siteConfig.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl(`/services/${detail.slug}`),
      description: detail.pricingNote ?? listing.description,
    },
    image: absoluteAsset(detail.heroImage),
    url: absoluteUrl(`/services/${detail.slug}`),
  }
}

export function buildArticleSchema(post, pathname) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: absoluteAsset(post.image),
    datePublished: post.dateISO ?? post.date,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteAsset(companyInfo.logo),
      },
    },
    mainEntityOfPage: absoluteUrl(pathname),
    url: absoluteUrl(pathname),
  }
}

export function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
