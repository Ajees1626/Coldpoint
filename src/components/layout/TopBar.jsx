import { companyInfo } from '../../data/siteData'

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar__inner container">
        <div className="top-bar__left">
          <span className="top-bar__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            24/7 Emergency AC Support
          </span>
          <span className="top-bar__divider" aria-hidden="true" />
          <span>{companyInfo.hours}</span>
        </div>
        <div className="top-bar__right">
          <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a>
          <span className="top-bar__divider" aria-hidden="true" />
          <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
        </div>
      </div>
    </div>
  )
}
