import Hero from '../components/sections/Hero'

import Services from '../components/sections/Services'

import WhyChooseUs from '../components/sections/WhyChooseUs'

import Brands from '../components/sections/Brands'

import HowItWorks from '../components/sections/HowItWorks'

import Pricing from '../components/sections/Pricing'

import BeforeAfter from '../components/sections/BeforeAfter'

import Testimonials from '../components/sections/Testimonials'

import ServiceAreas from '../components/sections/ServiceAreas'

import Blog from '../components/sections/Blog'

import Contact from '../components/sections/Contact'
import PageCoolingFlow from '../components/ui/PageCoolingFlow'

export default function Home() {
  return (
    <div className="home-page">
      <PageCoolingFlow />

      <Hero />

      <Services />

      <WhyChooseUs />

      <Brands />

      <HowItWorks />

      <Pricing />

      <BeforeAfter />

      <Testimonials />

      <ServiceAreas />

      <Blog />

      <Contact />
    </div>
  )
}

