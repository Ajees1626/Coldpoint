import { siteConfig } from './siteConfig'

const brand = siteConfig.name

export const staticPageMeta = {
  home: {
    title: `${brand} | AC Repair, Installation & HVAC Services in India`,
    description:
      'Cold Point delivers certified AC repair, installation, gas filling, AMC, and commercial HVAC services across India. Same-day service, OEM parts, 24/7 support.',
    keywords: 'AC repair India, AC installation, HVAC services, AC maintenance, commercial AC service, Cold Point',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogType: 'website',
  },
  about: {
    title: `About ${brand} | Certified HVAC Experts Since 2010`,
    description:
      'Learn about Cold Point — India\'s trusted HVAC partner with factory-trained engineers, transparent pricing, and 5000+ completed services since 2010.',
    keywords: 'about Cold Point, HVAC company India, certified AC technicians',
    robots: 'index, follow',
    ogType: 'website',
  },
  services: {
    title: `AC Services | Repair, Installation, AMC & Maintenance | ${brand}`,
    description:
      'Explore 8 professional AC services — installation, repair, gas filling, maintenance, AMC, cleaning, and commercial HVAC. Book certified technicians online.',
    keywords: 'AC services, AC repair, AC installation, AC AMC, gas filling, AC cleaning',
    robots: 'index, follow',
    ogType: 'website',
  },
  brands: {
    title: `AC Brands We Service | Daikin, LG, Samsung & More | ${brand}`,
    description:
      'Cold Point services all major AC brands — Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Mitsubishi, Hitachi, and more with genuine spare parts.',
    keywords: 'AC brand service, Daikin repair, LG AC service, Samsung AC repair',
    robots: 'index, follow',
    ogType: 'website',
  },
  'service-areas': {
    title: `Service Areas | AC Service in Mumbai, Delhi, Bangalore & More | ${brand}`,
    description:
      'Cold Point provides same-day AC service across Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, and Chennai with 45–60 minute average response times.',
    keywords: 'AC service Mumbai, AC repair Delhi, AC service Bangalore, HVAC near me',
    robots: 'index, follow',
    ogType: 'website',
  },
  pricing: {
    title: `AC Service Pricing & AMC Plans | Transparent Rates | ${brand}`,
    description:
      'View Cold Point AC service pricing — basic inspection from ₹499, deep clean from ₹1,299, and annual AMC from ₹2,999. No hidden charges.',
    keywords: 'AC service price, AC AMC cost, AC repair charges India',
    robots: 'index, follow',
    ogType: 'website',
  },
  blog: {
    title: `HVAC Blog | AC Tips, Maintenance & Energy Savings | ${brand}`,
    description:
      'Expert articles on AC maintenance, cooling problems, inverter vs non-inverter ACs, and energy-saving tips from Cold Point certified engineers.',
    keywords: 'AC maintenance tips, AC not cooling, inverter AC guide',
    robots: 'index, follow',
    ogType: 'website',
  },
  contact: {
    title: `Contact ${brand} | Book AC Service | 24/7 Support`,
    description:
      'Contact Cold Point for AC repair, installation, or AMC. Call +91 98765 43210, WhatsApp, or book online. Mon–Sun 7 AM – 11 PM across India.',
    keywords: 'contact Cold Point, book AC service, AC helpline India',
    robots: 'index, follow',
    ogType: 'website',
  },
  'not-found': {
    title: `Page Not Found | ${brand}`,
    description: 'The page you requested could not be found. Browse Cold Point AC services, pricing, and service areas.',
    robots: 'noindex, follow',
    ogType: 'website',
  },
}
