export const acServices = [
  { slug: 'ac-installation', title: 'AC Installation', description: 'Professional split & window AC installation with optimal placement and safety checks.' },
  { slug: 'ac-uninstallation', title: 'AC Uninstallation', description: 'Safe removal and relocation of AC units without damage to walls or wiring.' },
  { slug: 'ac-repair', title: 'AC Repair', description: 'Expert diagnosis and repair for all AC brands — cooling, noise, and leak issues.' },
  { slug: 'ac-gas-filling', title: 'AC Gas Filling', description: 'Precise refrigerant top-up with leak detection for maximum cooling efficiency.' },
  { slug: 'ac-maintenance', title: 'AC Maintenance', description: 'Seasonal tune-ups, filter cleaning, and performance optimization.' },
  { slug: 'ac-amc-service', title: 'AC AMC Service', description: 'Annual maintenance contracts with priority support and discounted repairs.' },
  { slug: 'ac-cleaning', title: 'AC Cleaning', description: 'Deep cleaning of indoor & outdoor units for healthier air and better cooling.' },
  { slug: 'commercial-ac-service', title: 'Commercial AC Service', description: 'VRF, cassette, and central AC solutions for offices and retail spaces.' },
]

export const mainServices = [
  {
    id: 'install',
    slug: 'ac-installation',
    title: 'AC Installation',
    description: 'Precision mounting with duct planning, vacuum testing, and full electrical safety compliance.',
    icon: 'install',
    image: '/image/sr1.webp',
    tag: 'New Setup',
  },
  {
    id: 'repair',
    slug: 'ac-repair',
    title: 'AC Repair',
    description: 'Same-day diagnosis and repair for compressor, PCB, capacitor, and cooling system failures.',
    icon: 'repair',
    image: '/image/sr2.webp',
    tag: 'Emergency Fix',
  },
  {
    id: 'maintenance',
    slug: 'ac-maintenance',
    title: 'AC Maintenance',
    description: 'Preventive tune-ups, filter service, and performance checks that extend unit life and cut bills.',
    icon: 'maintenance',
    image: '/image/sr3.webp',
    tag: 'Preventive Care',
  },
  {
    id: 'commercial',
    slug: 'commercial-ac-service',
    title: 'Commercial HVAC',
    description: 'Enterprise VRF, cassette, and central AC servicing for offices, hotels, and retail chains.',
    icon: 'commercial',
    image: '/image/sr4.webp',
    tag: 'Enterprise Scale',
  },
]

export const whyChooseUs = [
  { title: 'Certified Technicians', description: 'Factory-trained experts with verified credentials and 8+ years average experience.', icon: 'certified' },
  { title: 'Same Day Service', description: 'Book before noon and get a technician at your doorstep the same day.', icon: 'sameday' },
  { title: 'Genuine Spare Parts', description: 'OEM-compatible parts with warranty — no cheap substitutes, ever.', icon: 'parts' },
  { title: 'Affordable Pricing', description: 'Transparent quotes with no hidden charges. Pay only for what you need.', icon: 'pricing' },
  { title: '24/7 Support', description: 'Round-the-clock helpline for emergencies and post-service assistance.', icon: 'support' },
  { title: 'Service Warranty', description: '30-day workmanship guarantee on every repair and installation.', icon: 'warranty' },
]

export const brandPartners = [
  { name: 'Daikin', image: '/image/b1_result.webp', accent: '#0097D7' },
  { name: 'LG', image: '/image/b2_result.webp', accent: '#A50034' },
  { name: 'Samsung', image: '/image/b3_result.webp', accent: '#1428A0' },
  { name: 'Voltas', image: '/image/b4_result.webp', accent: '#0066B3' },
  { name: 'Blue Star', image: '/image/b5_result.webp', accent: '#0054A6' },
  { name: 'Hitachi', image: '/image/b6_result.webp', accent: '#E60027' },
  { name: 'Carrier', image: '/image/b7_result.webp', accent: '#0066CC' },
  { name: 'Mitsubishi', image: '/image/b8_result.webp', accent: '#E60012' },
  { name: 'Haier', image: '/image/b9_result.webp', accent: '#0066B2' },
  { name: 'Whirlpool', image: '/image/b10_result.webp', accent: '#FFB81C' },
  { name: 'Godrej', image: '/image/b11_result.webp', accent: '#006838' },
  { name: 'Panasonic', image: '/image/b12_result.webp', accent: '#004098' },
]

export const brands = brandPartners.map((b) => b.name)

export const howItWorks = [
  { step: 1, title: 'Book Service', description: 'Schedule online, via call, or WhatsApp in under 60 seconds.' },
  { step: 2, title: 'Technician Assigned', description: 'A certified expert is dispatched with tools and genuine parts.' },
  { step: 3, title: 'Inspection', description: 'Thorough diagnosis with a clear explanation before any work begins.' },
  { step: 4, title: 'Repair Complete', description: 'Quality-checked fix with digital invoice and warranty certificate.' },
]

export const pricingPlans = [
  {
    name: 'Basic Service',
    price: '₹499',
    period: 'per visit',
    features: ['General inspection', 'Filter cleaning', 'Cooling check', 'Basic report'],
    featured: false,
  },
  {
    name: 'Annual AMC',
    price: '₹2,999',
    period: 'per year',
    features: ['4 scheduled visits', 'Priority booking', '15% off repairs', '24/7 helpline', 'Free gas top-up check'],
    featured: true,
  },
  {
    name: 'Deep Clean',
    price: '₹1,299',
    period: 'per unit',
    features: ['Coil cleaning', 'Anti-bacterial spray', 'Drain flush', 'Performance tune-up'],
    featured: false,
  },
]

export const testimonials = [
  { name: 'Rajesh Mehta', location: 'Mumbai', rating: 5, text: 'Technician arrived within 2 hours. Fixed my Daikin split AC cooling issue permanently. Transparent pricing and professional attitude.' },
  { name: 'Priya Sharma', location: 'Delhi', rating: 5, text: 'Best AMC service I have used. They remember my service schedule and always send certified technicians. Highly recommend Cold Point.' },
  { name: 'Amit Patel', location: 'Ahmedabad', rating: 5, text: 'Our office VRF system was down during peak summer. Cold Point team restored cooling overnight. Exceptional commercial service.' },
  { name: 'Sneha Reddy', location: 'Hyderabad', rating: 5, text: 'Gas filling was done with proper pressure testing. No more recurring issues. The warranty certificate gave me peace of mind.' },
]

export const serviceAreas = [
  { city: 'Mumbai', zones: 'Andheri, Bandra, Powai, Thane', response: '45 min', mapTop: 58, mapLeft: 22 },
  { city: 'Delhi NCR', zones: 'Gurgaon, Noida, Dwarka, Saket', response: '60 min', mapTop: 18, mapLeft: 38 },
  { city: 'Bangalore', zones: 'Whitefield, Koramangala, Indiranagar', response: '50 min', mapTop: 72, mapLeft: 42 },
  { city: 'Hyderabad', zones: 'Gachibowli, Banjara Hills, Hitech City', response: '55 min', mapTop: 52, mapLeft: 48 },
  { city: 'Pune', zones: 'Hinjewadi, Kothrud, Viman Nagar', response: '50 min', mapTop: 48, mapLeft: 28 },
  { city: 'Chennai', zones: 'OMR, Anna Nagar, T Nagar', response: '60 min', mapTop: 78, mapLeft: 55 },
]

export const blogPosts = [
  { slug: 'ac-not-cooling-reasons', title: '7 Reasons Your AC Is Not Cooling Properly', excerpt: 'From dirty filters to low refrigerant — diagnose common cooling issues before calling a technician.', date: 'Jun 10, 2026', dateISO: '2026-06-10', readTime: '5 min', image: '/image/bg1_result.webp' },
  { slug: 'ac-maintenance-tips', title: 'Summer AC Maintenance Checklist for Indian Homes', excerpt: 'Prepare your air conditioner for peak summer with this expert-approved maintenance guide.', date: 'Jun 5, 2026', dateISO: '2026-06-05', readTime: '7 min', image: '/image/bg2_result.webp' },
  { slug: 'inverter-vs-non-inverter', title: 'Inverter vs Non-Inverter AC: Which Saves More?', excerpt: 'A data-driven comparison of energy consumption, upfront cost, and long-term savings.', date: 'May 28, 2026', dateISO: '2026-05-28', readTime: '6 min', image: '/image/bg3_result.webp' },
]

export const beforeAfter = [
  { before: '/image/before1.1_result.webp', after: '/image/after%201.1_result.webp', label: 'Coil Deep Clean' },
  { before: '/image/before%201.2_result.webp', after: '/image/after%201.2_result.webp', label: 'Outdoor Unit Service' },
]

export const companyInfo = {
  name: 'Cold Point',
  legalName: 'Cold Point HVAC Services Pvt. Ltd.',
  tagline: 'Enterprise HVAC',
  domain: 'https://coldpoint.in',
  logo: '/image/logo.webp',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'care@coldpoint.in',
  address: '42, Cooling Tower Road, Andheri East, Mumbai — 400069',
  hours: 'Mon – Sun: 7:00 AM – 11:00 PM',
  social: {
    instagram: 'https://instagram.com/coldpointhvac',
    facebook: 'https://facebook.com/coldpointhvac',
    twitter: 'https://twitter.com/coldpointhvac',
    linkedin: 'https://linkedin.com/company/coldpointhvac',
    youtube: 'https://youtube.com/@coldpointhvac',
  },
}
