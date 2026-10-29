import { whyChooseUs } from '../../data/siteData'

import ServiceIcon from '../icons/ServiceIcon'

import { StaggerGroup, StaggerItem, Reveal } from '../ui/Motion'

import SectionShell from '../layout/SectionShell'



export default function WhyChooseUs() {

  return (

    <SectionShell ariaLabelledby="why-heading">

      <Reveal>

        <header className="section-header section-header--center">

          <span className="section-eyebrow">Why Cold Point</span>

          <h2 id="why-heading" className="section-title">Engineering trust at national scale</h2>

          <p className="section-subtitle">

            Six principles that define our approach to cooling infrastructure — built for homes, enterprises, and industry.

          </p>

        </header>

      </Reveal>



      <StaggerGroup className="why__numbered-list">

        {whyChooseUs.map((item, index) => (

          <StaggerItem key={item.title}>

            <article className="why__numbered-item">

              <div className="why__numbered-meta">

                <span className="why__story-number">{String(index + 1).padStart(2, '0')}</span>

                <div className="service-icon-wrap">

                  <ServiceIcon name={item.icon} size={24} />

                </div>

              </div>

              <div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </article>

          </StaggerItem>

        ))}

      </StaggerGroup>

    </SectionShell>

  )

}

