import { Link } from '../../router'

export default function CTABanner() {
  return (
    <section className="cta-band page-shell" aria-label="Schedule HVAC service">
      <div className="cta-band__inner container">
        <div className="cta-band__content">
          <span className="section-eyebrow">Get Started Today</span>
          <h2 className="cta-band__title">Need AC repair or installation?</h2>
          <p className="cta-band__text">
            Book a certified technician online or call our 24/7 support desk for emergency cooling issues.
          </p>
        </div>
        <div className="cta-band__actions">
          <Link to="/contact" className="btn btn--primary">Book Service Now</Link>
          <Link to="/pricing" className="btn btn--outline">View Pricing</Link>
        </div>
      </div>
    </section>
  )
}
