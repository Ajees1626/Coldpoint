import PageHero from '../components/layout/PageHero'
import SectionShell from '../components/layout/SectionShell'
import { Link } from '../router'

export default function NotFound() {
  return (
    <div className="page-section">
      <PageHero
        variant="whisper"
        title="Page Not Found"
        subtitle="The page you are looking for may have moved or no longer exists."
        breadcrumbs={[{ label: '404 Not Found' }]}
      />
      <SectionShell>
        <div className="not-found">
          <p className="not-found__text">
            Try visiting our services, pricing, or contact page to book AC service.
          </p>
          <div className="not-found__actions">
            <Link to="/services" className="btn btn--primary">Browse Services</Link>
            <Link to="/contact" className="btn btn--ghost">Contact Us</Link>
          </div>
        </div>
      </SectionShell>
    </div>
  )
}
