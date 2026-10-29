import PageHero from '../components/layout/PageHero'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  return (
    <div className="page-section">
      <PageHero
        variant="ac-cool"
        eyebrow="Reach Out"
        title="Contact Us"
        subtitle="Book a service, request a quote, or ask our experts anything about your AC."
        breadcrumb="Contact"
      />
      <Contact />
    </div>
  )
}
