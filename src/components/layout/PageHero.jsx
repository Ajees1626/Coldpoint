import { Link } from '../../router'
import { Reveal } from '../ui/Motion'
import PageHeroBackdrop from '../ui/PageHeroBackdrop'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  breadcrumbs,
  variant,
}) {
  const trail = breadcrumbs ?? (breadcrumb ? [{ label: breadcrumb }] : [])

  return (
    <section className={`page-hero ${variant ? `page-hero--${variant}` : ''}`} aria-labelledby="page-hero-title">
      <div className="page-hero__wrap container">
        <div className="page-hero__inner">
          {variant && <PageHeroBackdrop variant={variant} />}

          <div className="page-hero__content">
            {trail.length > 0 && (
              <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                {trail.map((item, index) => (
                  <span key={`${item.label}-${index}`} className="page-hero__crumb">
                    <span aria-hidden="true">/</span>
                    {item.to ? (
                      <Link to={item.to}>{item.label}</Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}

            <Reveal>
              {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}
              <h1 id="page-hero-title" className="page-hero__title">{title}</h1>
              {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
