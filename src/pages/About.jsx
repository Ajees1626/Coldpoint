import PageHero from '../components/layout/PageHero'
import SectionShell from '../components/layout/SectionShell'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { Reveal } from '../components/ui/Motion'
import Counter from '../components/ui/Counter'

const milestones = [
  { value: '15', suffix: '+', label: 'Years of Excellence' },
  { value: '2500', suffix: '+', label: 'Corporate Clients' },
  { value: '15000', suffix: '+', label: 'Services Completed' },
  { value: '50', suffix: '+', label: 'Cities Covered' },
]

export default function About() {
  return (
    <div className="page-section">
      <PageHero
        variant="breeze"
        eyebrow="Our Story"
        title="About Cold Point"
        subtitle="A national HVAC company built on technical excellence, transparent pricing, and an unwavering commitment to customer comfort."
        breadcrumb="About Us"
      />

      <SectionShell>
        <Reveal>
          <article className="about-story frost-card">
            <p>
              Founded in 2010, Cold Point began with a simple mission: deliver air conditioning services
              that match the standards of global enterprises, accessible to every Indian household.
              Today, we are one of the most trusted names in AC repair, installation, and maintenance
              across 50+ cities.
            </p>
            <p>
              Our team of 200+ certified technicians undergoes continuous training on the latest
              inverter technology, VRF systems, and eco-friendly refrigerants. Every service call
              is backed by genuine spare parts, digital invoicing, and a 30-day workmanship warranty.
            </p>
            <h2 className="about-story__heading">Our Mission</h2>
            <p className="about-story__mission">
              To make professional cooling accessible, affordable, and absolutely reliable — so that
              no family or business suffers through a summer without comfort.
            </p>
          </article>
        </Reveal>
      </SectionShell>

      <SectionShell variant="muted">
        <div className="about-stats">
          {milestones.map((m) => (
            <Reveal key={m.label}>
              <div className="about-stats__item frost-card">
                <span className="about-stats__value">
                  <Counter end={m.value} suffix={m.suffix} />
                </span>
                <p className="about-stats__label">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <WhyChooseUs />
    </div>
  )
}
