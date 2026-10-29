import { useRef, useEffect, useState } from 'react'
import { useParams, Link } from '../router'
import { companyInfo } from '../data/siteData'
import serviceDetails from '../data/serviceDetails.json'
import PageHero from '../components/layout/PageHero'
import SectionShell from '../components/layout/SectionShell'
import { useCursorGlow } from '../hooks/useCursorGlow'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ScrollBlock({ children, className = '', delay = 0 }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`sd-reveal ${visible ? 'sd-reveal--visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function FeatureCard({ item, index }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.2 })
  return (
    <article
      ref={ref}
      className={`sd-feature ${visible ? 'sd-feature--visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="sd-feature__num">{String(index + 1).padStart(2, '0')}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  )
}

function GalleryTrack({ images, title }) {
  const trackRef = useRef(null)

  return (
    <ScrollBlock className="sd-gallery">
      <div className="sd-gallery__head">
        <h2>{title}</h2>
        <span className="sd-gallery__hint">Scroll →</span>
      </div>
      <div ref={trackRef} className="sd-gallery__track">
        {images.map((src, i) => (
          <figure key={src} className="sd-gallery__slide">
            <img src={src} alt={`${title} ${i + 1}`} loading="lazy" width="900" height="650" />
          </figure>
        ))}
      </div>
    </ScrollBlock>
  )
}

function ProcessTrack({ steps }) {
  return (
    <ScrollBlock className="sd-process">
      <h2 className="sd-section-title">Our Process</h2>
      <div className="sd-process__track">
        {steps.map((step, i) => (
          <article key={step.step} className="sd-process__step">
            <span className="sd-process__num">{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {i < steps.length - 1 && <span className="sd-process__line" aria-hidden="true" />}
          </article>
        ))}
      </div>
    </ScrollBlock>
  )
}

function BrandsMarquee({ brands }) {
  const doubled = [...brands, ...brands]
  return (
    <ScrollBlock className="sd-brands">
      <h2 className="sd-section-title">Brand Solutions We Support</h2>
      <p className="sd-brands__sub">Factory-certified service for every major AC brand in India</p>
      <div className="sd-brands__marquee" aria-label="Supported brands">
        <div className="sd-brands__track">
          {doubled.map((brand, i) => (
            <span key={`${brand}-${i}`} className="sd-brands__item">{brand}</span>
          ))}
        </div>
      </div>
    </ScrollBlock>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const detail = serviceDetails[slug]
  const heroRef = useCursorGlow()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!detail) {
    return (
      <div className="page-section">
        <PageHero variant="whisper" title="Service Not Found" breadcrumb="Not Found" />
        <SectionShell>
          <div className="sd-not-found">
            <Link to="/services" className="btn btn--primary">Back to Services</Link>
          </div>
        </SectionShell>
      </div>
    )
  }

  return (
    <div className="page-section service-detail">
      <div className="sd-progress" aria-hidden="true">
        <span className="sd-progress__bar" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <PageHero
        variant="pulse"
        eyebrow={detail.eyebrow}
        title={detail.title}
        subtitle={detail.tagline}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: detail.title },
        ]}
      />

      {/* Hero visual + stats */}
      <section className="sd-hero page-shell" ref={heroRef} aria-label={`${detail.title} overview`}>
        <div className="sd-hero__glow" aria-hidden="true" />
        <div className="sd-hero__inner container">
          <ScrollBlock className="sd-hero__visual" delay={100}>
            <div className="sd-hero__image-wrap">
              <img src={detail.heroImage} alt={detail.title} loading="eager" width="1400" height="800" />
              <div className="sd-hero__image-overlay" aria-hidden="true" />
            </div>
          </ScrollBlock>

          <ScrollBlock className="sd-hero__overview-block" delay={150}>
            <p className="sd-hero__overview">{detail.overview}</p>
            <div className="sd-hero__actions">
              <Link to="/contact" className="btn btn--primary">Book {detail.title}</Link>
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="btn btn--outline">{companyInfo.phone}</a>
            </div>
          </ScrollBlock>

          <ScrollBlock className="sd-stats" delay={200}>
            <dl className="sd-stats__grid">
              {detail.stats.map((s) => (
                <div key={s.label} className="sd-stats__item">
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </ScrollBlock>
        </div>
      </section>

      {/* Features */}
      <SectionShell variant="muted">
        <ScrollBlock>
          <h2 className="sd-section-title sd-section-title--center">What Makes Our {detail.title} Different</h2>
        </ScrollBlock>
        <div className="sd-features">
          {detail.features.map((f, i) => (
            <FeatureCard key={f.title} item={f} index={i} />
          ))}
        </div>
      </SectionShell>

      {/* Gallery scroll */}
      <SectionShell>
        <GalleryTrack images={detail.gallery} title="Service In Action" />
      </SectionShell>

      {/* Process */}
      <SectionShell variant="muted">
        <ProcessTrack steps={detail.process} />
      </SectionShell>

      {/* Included + Pricing */}
      <SectionShell>
        <div className="sd-split">
          <ScrollBlock className="sd-included">
            <h2 className="sd-section-title">What&apos;s Included</h2>
            <ul className="sd-included__list">
              {detail.included.map((item, i) => (
                <li key={item} style={{ transitionDelay: `${i * 60}ms` }}>
                  <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8l3.5 3.5L13 5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollBlock>

          <ScrollBlock className="sd-pricing-card frost-card" delay={150}>
            <span className="sd-pricing-card__label">Pricing</span>
            <p className="sd-pricing-card__note">{detail.pricingNote}</p>
            <Link to="/contact" className="btn btn--primary sd-pricing-card__btn">Get a Quote</Link>
            <Link to="/pricing" className="sd-pricing-card__link">View all plans →</Link>
          </ScrollBlock>
        </div>
      </SectionShell>

      {/* Brands */}
      <SectionShell variant="muted">
        <BrandsMarquee brands={detail.brands} />
      </SectionShell>

      {/* CTA */}
      <SectionShell>
        <ScrollBlock className="sd-cta">
          <h2>Ready to schedule {detail.title.toLowerCase()}?</h2>
          <p>Certified engineers available across 50+ cities — same-day slots when you book before noon.</p>
          <div className="sd-cta__actions">
            <Link to="/contact" className="btn btn--primary">Book Service Now</Link>
            <Link to="/services" className="btn btn--outline">All Services</Link>
          </div>
        </ScrollBlock>
      </SectionShell>
    </div>
  )
}
