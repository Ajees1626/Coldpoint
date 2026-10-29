import { Link } from '../router'
import PageHero from '../components/layout/PageHero'
import { acServices } from '../data/siteData'
import ServiceIcon from '../components/icons/ServiceIcon'
import { StaggerGroup, StaggerItem } from '../components/ui/Motion'

const iconMap = {
  'ac-installation': 'install',
  'ac-uninstallation': 'maintenance',
  'ac-repair': 'repair',
  'ac-gas-filling': 'gas',
  'ac-maintenance': 'maintenance',
  'ac-amc-service': 'warranty',
  'ac-cleaning': 'cleaning',
  'commercial-ac-service': 'commercial',
}

export default function ServicesPage() {
  return (
    <div className="page-section">
      <PageHero
        variant="duct"
        eyebrow="Our Expertise"
        title="AC Services"
        subtitle="End-to-end air conditioning solutions for residential and commercial spaces."
        breadcrumb="AC Services"
      />

      <section className="section-block section-block--white page-shell">
        <div className="container">
          <StaggerGroup className="page-content-grid">
            {acServices.map((service) => (
              <StaggerItem key={service.slug}>
                <article className="page-card">
                  <div className="service-icon-wrap">
                    <ServiceIcon name={iconMap[service.slug] || 'repair'} size={26} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-flex font-heading text-[0.8125rem] font-medium text-primary-dark"
                  >
                    View details →
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  )
}
