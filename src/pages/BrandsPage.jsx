import PageHero from '../components/layout/PageHero'
import Brands from '../components/sections/Brands'

export default function BrandsPage() {
  return (
    <div className="page-section">
      <PageHero
        variant="vortex"
        eyebrow="Multi-Brand Expertise"
        title="Brands We Service"
        subtitle="Factory-trained technicians for every major AC brand available in India."
        breadcrumb="Brands"
      />
      <Brands />
    </div>
  )
}
