import { howItWorks } from '../../data/siteData'

import { StaggerGroup, StaggerItem, Reveal } from '../ui/Motion'

import SectionShell from '../layout/SectionShell'



export default function HowItWorks() {

  return (

    <SectionShell ariaLabelledby="timeline-heading">

      <Reveal>

        <header className="section-header section-header--center">

          <span className="section-eyebrow">Service Process</span>

          <h2 id="timeline-heading" className="section-title">How It Works</h2>

          <p className="section-subtitle">

            A structured workflow from booking to completion — transparent at every stage.

          </p>

        </header>

      </Reveal>



      <StaggerGroup className="timeline__steps">

        <div className="timeline__line" aria-hidden="true">

          <div className="timeline__line-progress" />

        </div>



        {howItWorks.map((step) => (

          <StaggerItem key={step.step}>

            <article className="timeline__step">

              <div className="timeline__number">{String(step.step).padStart(2, '0')}</div>

              <div className="timeline__step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

            </article>

          </StaggerItem>

        ))}

      </StaggerGroup>

    </SectionShell>

  )

}

