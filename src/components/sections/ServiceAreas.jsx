import { Link } from '../../router'
import { serviceAreas } from '../../data/siteData'
import ServiceIcon from '../icons/ServiceIcon'
import { StaggerGroup, StaggerItem, Reveal } from '../ui/Motion'
import SectionShell from '../layout/SectionShell'

export default function ServiceAreas() {
  return (
    <SectionShell variant="muted" ariaLabelledby="areas-heading">
      <Reveal>
        <header className="section-header section-header--center">
          <span className="section-eyebrow">National Coverage</span>
          <h2 id="areas-heading" className="section-title">Service Locations</h2>
          <p className="section-subtitle">
            Rapid-response teams stationed across major Indian metros and industrial corridors.
          </p>
        </header>
      </Reveal>

      <div className="areas__layout">
        <div className="areas__map frost-card" aria-hidden="true">
          <div className="areas__map-bg">
            <div className="areas__map-glow areas__map-glow--1" />
            <div className="areas__map-glow areas__map-glow--2" />
            <div className="areas__map-glow areas__map-glow--3" />
          </div>

          {serviceAreas.map((area) => (
            <div
              key={area.city}
              className="areas__map-pin"
              style={{ top: `${area.mapTop}%`, left: `${area.mapLeft}%` }}
            >
              <span className="areas__map-dot" />
              <span className="areas__map-label">{area.city}</span>
            </div>
          ))}

          <div className="areas__map-overlay">
            <ServiceIcon name="location" size={20} />
            <span>50+ Cities Covered</span>
          </div>
        </div>

        <StaggerGroup className="areas__cards">
          {serviceAreas.map((area) => (
            <StaggerItem key={area.city}>
              <article className="areas__card frost-card">
                <div className="areas__card-head">
                  <h3>{area.city}</h3>
                  <span className="areas__card-badge">Active</span>
                </div>
                <p className="areas__zones">{area.zones}</p>
                <span className="areas__response">
                  <ServiceIcon name="sameday" size={16} />
                  Avg. response: {area.response}
                </span>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <div className="areas__cta">
        <Link to="/contact" className="btn btn--outline">View All Locations</Link>
      </div>
    </SectionShell>
  )
}
