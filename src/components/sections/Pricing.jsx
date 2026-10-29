import { Link } from '../../router'

import { pricingPlans } from '../../data/siteData'

import { StaggerGroup, StaggerItem, Reveal } from '../ui/Motion'

import SectionShell from '../layout/SectionShell'



export default function Pricing() {

  return (

    <SectionShell variant="muted" ariaLabelledby="pricing-heading">

      <Reveal>

        <header className="section-header section-header--center">

          <span className="section-eyebrow">Service Plans</span>

          <h2 id="pricing-heading" className="section-title">Transparent enterprise pricing</h2>

          <p className="section-subtitle">

            Predictable rates with no hidden fees — structured for clarity and long-term value.

          </p>

        </header>

      </Reveal>



      <StaggerGroup className="pricing__grid">

        {pricingPlans.map((plan) => (

          <StaggerItem key={plan.name}>

            <article className={`pricing__card ${plan.featured ? 'pricing__card--featured' : ''}`}>

              {plan.featured && <span className="pricing__badge">Recommended</span>}

              <div className="pricing__card-inner frost-card">

                <h3>{plan.name}</h3>

                <div className="pricing__price">

                  <span>{plan.price}</span>

                  <small>{plan.period}</small>

                </div>

                <ul>

                  {plan.features.map((f) => (

                    <li key={f}>

                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">

                        <path d="M3 8l4 4 6-7" fill="none" stroke="currentColor" strokeWidth="1.5" />

                      </svg>

                      {f}

                    </li>

                  ))}

                </ul>

                <Link

                  to="/contact"

                  className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'} pricing__cta`}

                >

                  Get started

                </Link>

              </div>

            </article>

          </StaggerItem>

        ))}

      </StaggerGroup>

    </SectionShell>

  )

}

