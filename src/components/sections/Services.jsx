import { useRef, useState, useEffect } from 'react'
import { Link } from '../../router'
import { mainServices } from '../../data/siteData'
import ServiceIcon from '../icons/ServiceIcon'
import { Reveal } from '../ui/Motion'
import SectionShell from '../layout/SectionShell'

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.35, rootMargin: '-20px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={`service-showcase ${visible ? 'service-showcase--visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={`/services/${service.slug}`} className="service-showcase__link">
        <div className="service-showcase__media">
          <img src={service.image} alt={service.title} loading="lazy" width="800" height="600" />
          <div className="service-showcase__overlay" aria-hidden="true" />
          <span className="service-showcase__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="service-showcase__tag">{service.tag}</span>
          <div className="service-showcase__icon">
            <ServiceIcon name={service.icon} size={24} />
          </div>
        </div>

        <div className="service-showcase__body">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <span className="service-showcase__cta">
            Explore service
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  )
}

export default function Services() {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  const scrollBy = (direction) => {
    trackRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' })
  }

  return (
    <SectionShell variant="muted" ariaLabelledby="services-heading">
      <Reveal>
        <header className="section-header services__header">
          <div>
            <span className="section-eyebrow">Core Capabilities</span>
            <h2 id="services-heading" className="section-title">Four pillars of cooling excellence</h2>
            <p className="section-subtitle">
              Installation, repair, maintenance, and commercial HVAC — each delivered with certified engineers and OEM-grade standards.
            </p>
          </div>
          <div className="services__controls" aria-hidden="true">
            <button type="button" className="services__nav" disabled={!canScrollLeft} onClick={() => scrollBy(-1)} aria-label="Previous service">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button type="button" className="services__nav" disabled={!canScrollRight} onClick={() => scrollBy(1)} aria-label="Next service">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </header>
      </Reveal>

      <div className="services__scroll-hint">
        <span>Scroll to explore</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>

      <div className="services__scroll-wrap">
        <div ref={trackRef} className="services__track">
          {mainServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      <div className="services__footer-cta">
        <Link to="/services" className="btn btn--outline">View all services</Link>
      </div>
    </SectionShell>
  )
}
