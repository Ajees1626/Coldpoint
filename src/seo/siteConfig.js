export const siteConfig = {
  name: 'Cold Point',
  legalName: 'Cold Point HVAC Services Pvt. Ltd.',
  url: 'https://coldpoint.in',
  defaultLocale: 'en-IN',
  language: 'en',
  defaultOgImage: '/image/home1_result.webp',
  twitterHandle: '@coldpointhvac',
  themeColor: '#302F81',
  phone: '+91-98765-43210',
  email: 'care@coldpoint.in',
  address: {
    street: '42, Cooling Tower Road, Andheri East',
    city: 'Mumbai',
    region: 'Maharashtra',
    postalCode: '400069',
    country: 'IN',
  },
  geo: {
    latitude: 19.1136,
    longitude: 72.8697,
  },
  priceRange: '₹₹',
  foundingDate: '2010',
  areaServed: ['Mumbai', 'Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai'],
}

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${normalized}`
}

export function absoluteAsset(path) {
  if (!path) return absoluteUrl(siteConfig.defaultOgImage)
  if (path.startsWith('http')) return path
  return absoluteUrl(path)
}
