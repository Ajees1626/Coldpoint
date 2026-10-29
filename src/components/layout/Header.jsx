import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from '../../router'
import { navItems } from '../../data/navigation'
import { companyInfo } from '../../data/siteData'
import { useScrollHeader } from '../../hooks/useScrollHeader'

function ChevronIcon({ open }) {
  return (
    <svg
      className={`site-header__chevron ${open ? 'site-header__chevron--open' : ''}`}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden="true"
    >
      <path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function Header() {
  const scrolled = useScrollHeader(40)
  const { pathname } = useLocation()
  const headerRef = useRef(null)

  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  const mainNav = navItems.filter((item) => !item.cta)
  const ctaItem = navItems.find((item) => item.cta)

  const closeAll = () => {
    setOpenDropdown(null)
    setMobileOpen(false)
  }

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  const handleMobileDropdown = (label) => {
    setOpenDropdown((prev) => {
      const next = prev === label ? null : label
      if (next) {
        requestAnimationFrame(() => {
          headerRef.current
            ?.querySelector(`[data-mobile-dropdown="${label}"]`)
            ?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
        })
      }
      return next
    })
  }

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      if (prev) setOpenDropdown(null)
      return !prev
    })
  }

  useEffect(() => {
    if (!openDropdown) return

    const handleClickOutside = (e) => {
      if (!headerRef.current?.contains(e.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openDropdown])

  useEffect(() => {
    setOpenDropdown(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  return (
    <header
      ref={headerRef}
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
    >
      <div className="site-header__shell">
        {ctaItem && (
          <Link
            to={ctaItem.path}
            className="site-header__book-icon"
            aria-label="Book Service"
            onClick={closeAll}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M8 7V3m8 4V3M5 11h14M5 19h14M5 7h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
            </svg>
          </Link>
        )}

        <Link to="/" className="site-header__logo" aria-label="Cold Point Home">
          <img
            src={companyInfo.logo}
            alt="Cold Point"
            className="site-header__logo-img"
            width="240"
            height="56"
          />
        </Link>

        <nav className="site-header__nav" aria-label="Main navigation">
          <ul className="site-header__links">
            {mainNav.map((item) => (
              <li
                key={item.path + item.label}
                className={item.children ? 'site-header__item--dropdown' : ''}
              >
                {item.children ? (
                  <button
                    type="button"
                    className={`site-header__link site-header__link--trigger ${isActive(item.path) ? 'site-header__link--active' : ''}`}
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronIcon open={openDropdown === item.label} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`site-header__link ${isActive(item.path) ? 'site-header__link--active' : ''}`}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <div
                    className={`site-header__dropdown ${openDropdown === item.label ? 'site-header__dropdown--open' : ''}`}
                  >
                    <ul>
                      <li>
                        <Link to={item.path} onClick={closeAll}>All Services</Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link to={child.path} onClick={closeAll}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {ctaItem && (
          <Link to={ctaItem.path} className="btn btn--primary site-header__cta">
            {ctaItem.label}
          </Link>
        )}

        <button
          type="button"
          className="site-header__toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={toggleMobile}
        >
          <span className={`site-header__burger ${mobileOpen ? 'site-header__burger--open' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="site-header__mobile" aria-label="Mobile navigation">
          <ul>
            {mainNav.map((item) => (
              <li
                key={item.path + item.label}
                className={item.children ? 'site-header__mobile-item--dropdown' : ''}
                data-mobile-dropdown={item.children ? item.label : undefined}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="site-header__mobile-trigger"
                      onClick={() => handleMobileDropdown(item.label)}
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <ChevronIcon open={openDropdown === item.label} />
                    </button>
                    <div
                      className={`site-header__mobile-sub-wrap ${openDropdown === item.label ? 'site-header__mobile-sub-wrap--open' : ''}`}
                    >
                      <ul className="site-header__mobile-sub">
                        <li className="site-header__mobile-sub-heading">
                          <span>All AC Services</span>
                          <span className="site-header__mobile-sub-count">{item.children.length + 1}</span>
                        </li>
                        <li>
                          <Link to={item.path} onClick={closeAll}>View All Services</Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <Link to={child.path} onClick={closeAll}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link to={item.path} onClick={closeAll}>{item.label}</Link>
                )}
              </li>
            ))}
            {ctaItem && (
              <li className="site-header__mobile-cta-wrap">
                <Link to={ctaItem.path} className="btn btn--primary site-header__mobile-cta" onClick={closeAll}>
                  {ctaItem.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}
