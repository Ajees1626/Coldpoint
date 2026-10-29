import { acServices } from './siteData'

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: acServices.map((service) => ({
      label: service.title,
      path: `/services/${service.slug}`,
    })),
  },
  { label: 'Brands', path: '/brands' },
  { label: 'Locations', path: '/service-areas' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Book Service', path: '/contact', cta: true },
]
