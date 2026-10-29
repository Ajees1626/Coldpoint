import { useEffect, useState } from 'react'
import { Link } from '../../router'
import { companyInfo } from '../../data/siteData'
import { Reveal, MotionDiv, ParallaxWrap } from '../ui/Motion'
import SectionShell from '../layout/SectionShell'

const stats = [
  { value: '5000+', label: 'Services Completed' },
  { value: '4.9', label: 'Customer Rating' },
  { value: '24/7', label: 'Emergency Support' },
  { value: '15+', label: 'Years Experience' },
]

const trust = ['ISO 9001 Certified', 'OEM Parts Only', 'Factory-Trained Engineers']

const floatCards = [
  { value: '5000+', label: 'Services', position: 'hero__stat-card--1' },
  { value: '4.9', label: 'Rating', position: 'hero__stat-card--2' },
  { value: '24/7', label: 'Support', position: 'hero__stat-card--3' },
  { value: '15+', label: 'Years', position: 'hero__stat-card--4' },
]

const heroImages = [
  {
    src: '/image/home1_result.webp',
    alt: 'Certified HVAC engineer servicing a commercial cooling system',
  },
  {
    src: '/image/home2_result.webp',
    alt: 'Professional air conditioning unit installation',
  },
  {
    src: '/image/home3_result.webp',
    alt: 'Technician performing precision AC maintenance',
  },
  {
    src: '/image/home4_result.webp',
    alt: 'Industrial HVAC infrastructure servicing',
  },
  {
    src: '/image/home5_result.webp',
    alt: 'Outdoor AC unit professional service and repair',
  },
]

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <SectionShell className="hero floating-section--hero" ariaLabelledby="hero-heading">
      <div className="hero__airflow" aria-hidden="true">
        <div className="hero__blur hero__blur--1" />
        <div className="hero__blur hero__blur--2" />
        <svg className="hero__wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0 50 Q360 15 720 50 T1440 50 V100 H0 Z" fill="rgba(48,47,129,0.09)" />
        </svg>
      </div>

      <div className="hero__grid">
        <div className="hero__content">
          <Reveal>
            <span className="section-eyebrow">National HVAC Infrastructure</span>
          </Reveal>

          <Reveal delay={1}>
            <h1 id="hero-heading" className="hero__title">
              Enterprise-grade cooling for every environment
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="hero__subtitle">
              Precision AC repair, installation, and lifecycle maintenance — delivered by certified
              engineers with transparent service records and guaranteed workmanship.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <ul className="hero__trust">
              {trust.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={4}>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">Book Service</Link>
              <Link to="/services" className="btn btn--outline">Explore Services</Link>
            </div>
          </Reveal>

          <Reveal delay={5}>
            <dl className="hero__stats">
              {stats.map((item) => (
                <div key={item.label} className="hero__stat">
                  <dt className="hero__stat-value">{item.value}</dt>
                  <dd className="hero__stat-label">{item.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ParallaxWrap className="hero__visual" strength={12}>
          <MotionDiv className="hero__ring hero__ring--outer" aria-hidden="true" />
          <MotionDiv className="hero__ring hero__ring--inner" aria-hidden="true" />

          <div className="hero__image-stack">
            <div className="hero__image-blob hero__carousel">
              {heroImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  decoding={index === 0 ? 'sync' : 'async'}
                  width="720"
                  height="880"
                  className={`hero__carousel-slide ${index === activeImage ? 'hero__carousel-slide--active' : ''}`}
                />
              ))}
              <div className="hero__carousel-dots" aria-hidden="true">
                {heroImages.map((_, index) => (
                  <span
                    key={index}
                    className={`hero__carousel-dot ${index === activeImage ? 'hero__carousel-dot--active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {floatCards.map((card) => (
            <MotionDiv key={card.label} className={`hero__stat-card frost-card ${card.position}`}>
              <span className="hero__stat-card-value">{card.value}</span>
              <span className="hero__stat-card-label">{card.label}</span>
            </MotionDiv>
          ))}
        </ParallaxWrap>
      </div>

      <div className="hero__contact-strip">
        <span>Need immediate assistance?</span>
        <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a>
      </div>
    </SectionShell>
  )
}
