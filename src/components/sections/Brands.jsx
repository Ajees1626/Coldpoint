import { brandPartners } from '../../data/siteData'
import { Reveal } from '../ui/Motion'
import SectionShell from '../layout/SectionShell'

export default function Brands() {
  const doubled = [...brandPartners, ...brandPartners]

  return (
    <SectionShell variant="muted" ariaLabelledby="brands-heading">
      <Reveal>
        <header className="section-header section-header--center">
          <span className="section-eyebrow">Authorized Partners</span>
          <h2 id="brands-heading" className="section-title">Brands We Service</h2>
          <p className="section-subtitle">
            Factory-certified technicians for every major air conditioning brand in India.
          </p>
        </header>
      </Reveal>

      <div className="brands__marquee" aria-label="Supported AC brands">
        <div className="brands__track">
          {doubled.map((brand, i) => (
            <article
              key={`${brand.name}-${i}`}
              className="brands__item brands__item--visual"
              style={{ '--brand-accent': brand.accent }}
            >
              <div className="brands__item-media">
                <img src={brand.image} alt={brand.name} loading="lazy" width="288" height="192" />
                <span className="brands__item-accent" aria-hidden="true" />
              </div>
              <span className="brands__item-name">{brand.name}</span>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
