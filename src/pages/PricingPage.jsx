import PageHero from '../components/layout/PageHero'
import Pricing from '../components/sections/Pricing'

export default function PricingPage() {
  return (
    <div className="page-section">
      <PageHero
        variant="frost"
        eyebrow="Honest Pricing"
        title="Service Pricing"
        subtitle="Transparent rates with no hidden charges. Choose the plan that fits your needs."
        breadcrumb="Pricing"
      />
      <Pricing />
    </div>
  )
}
