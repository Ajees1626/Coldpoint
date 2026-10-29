import PageHero from '../components/layout/PageHero'
import ServiceAreas from '../components/sections/ServiceAreas'

export default function ServiceAreasPage() {
  return (
    <div className="page-section">
      <PageHero
        variant="radial"
        eyebrow="Nationwide Coverage"
        title="Service Locations"
        subtitle="Rapid-response AC service teams across India's major metropolitan regions."
        breadcrumb="Service Locations"
      />
      <ServiceAreas />
    </div>
  )
}
