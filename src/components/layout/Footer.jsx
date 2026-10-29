import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from '../icons/SocialIcons'
import PageCoolingFlow from '../ui/PageCoolingFlow'
import { Link } from '../../router'
import { acServices, companyInfo, serviceAreas } from '../../data/siteData'

const quickLinks = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Brands', path: '/brands' },
  { label: 'Locations', path: '/service-areas' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const socialLinks = [
  { label: 'Instagram', href: companyInfo.social.instagram, Icon: FaInstagram },
  { label: 'Facebook', href: companyInfo.social.facebook, Icon: FaFacebookF },
  { label: 'Twitter', href: companyInfo.social.twitter, Icon: FaXTwitter },
  { label: 'WhatsApp', href: `https://wa.me/${companyInfo.whatsapp}`, Icon: FaWhatsapp },
  { label: 'LinkedIn', href: companyInfo.social.linkedin, Icon: FaLinkedinIn },
  { label: 'YouTube', href: companyInfo.social.youtube, Icon: FaYoutube },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <PageCoolingFlow layout="footer" />

        <div className="site-footer__content">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo" aria-label="Cold Point Home">
              <img
                src={companyInfo.logo}
                alt="Cold Point"
                className="site-footer__logo-img"
                width="280"
                height="64"
              />
            </Link>

            <p>
              India's trusted cooling partner for residential, commercial, and industrial
              environments — precision engineering since 2010.
            </p>

            <div className="site-footer__contact">
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a>
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              <span>{companyInfo.address}</span>
            </div>

            <div className="site-footer__social">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="site-footer__col site-footer__col--links">
            <h3>Services</h3>
            <ul>
              {acServices.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col site-footer__col--links">
            <h3>Locations</h3>
            <ul>
              {serviceAreas.map((area) => (
                <li key={area.city}><Link to="/service-areas">{area.city}</Link></li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col site-footer__col--links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {year} Cold Point HVAC Services Pvt. Ltd.</p>
          <div className="site-footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <span>{companyInfo.hours}</span>
          </div>
        </div>

        <p className="site-footer__credit">
          Developed by{' '}
          <a href="https://pixdotsolutions.com" target="_blank" rel="noopener noreferrer">Pixdot</a>
        </p>
        </div>
      </div>
    </footer>
  )
}
