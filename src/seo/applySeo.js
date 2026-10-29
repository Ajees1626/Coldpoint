const MANAGED_ATTR = 'data-seo-managed'

function upsertMeta(selector, attributes, content) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
    element.setAttribute(MANAGED_ATTR, 'true')
    document.head.appendChild(element)
    return
  }
  element.setAttribute('content', content)
}

function upsertLink(rel, href, extra = {}) {
  let selector = `link[rel="${rel}"]`
  if (extra.hreflang) selector += `[hreflang="${extra.hreflang}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    element.setAttribute(MANAGED_ATTR, 'true')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
  Object.entries(extra).forEach(([key, value]) => element.setAttribute(key, value))
}

export function applySeo(seo) {
  document.title = seo.title
  document.documentElement.lang = seo.locale?.split('-')[0] ?? 'en'

  upsertMeta('meta[name="description"]', { name: 'description' }, seo.description)
  upsertMeta('meta[name="robots"]', { name: 'robots' }, seo.robots)

  if (seo.keywords) {
    upsertMeta('meta[name="keywords"]', { name: 'keywords' }, seo.keywords)
  }

  upsertLink('canonical', seo.canonical)
  upsertLink('alternate', seo.canonical, { hreflang: seo.alternateLocale })
  upsertLink('alternate', seo.canonical, { hreflang: 'x-default' })

  const ogTags = {
    'og:title': seo.title,
    'og:description': seo.description,
    'og:url': seo.canonical,
    'og:type': seo.ogType,
    'og:site_name': 'Cold Point',
    'og:locale': seo.locale,
    'og:image': seo.image,
    'og:image:alt': seo.title,
  }

  Object.entries(ogTags).forEach(([property, content]) => {
    upsertMeta(`meta[property="${property}"]`, { property }, content)
  })

  const twitterTags = {
    'twitter:card': 'summary_large_image',
    'twitter:site': '@coldpointhvac',
    'twitter:title': seo.title,
    'twitter:description': seo.description,
    'twitter:image': seo.image,
  }

  Object.entries(twitterTags).forEach(([name, content]) => {
    upsertMeta(`meta[name="${name}"]`, { name }, content)
  })
}

export function cleanupManagedHeadTags() {
  document.head.querySelectorAll(`[${MANAGED_ATTR}="true"]`).forEach((node) => node.remove())
}
