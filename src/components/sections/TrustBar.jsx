const items = [
  { label: 'ISO 9001 Certified', icon: 'M9 12l2 2 4-4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' },
  { label: '200+ Certified Engineers', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
  { label: '50+ Cities Nationwide', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z' },
  { label: '30-Day Service Warranty', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
]

export default function TrustBar() {
  return (
    <div className="trust-bar page-shell" aria-label="Company credentials">
      <div className="trust-bar__inner container">
        {items.map((item) => (
          <div key={item.label} className="trust-bar__item">
            <span className="trust-bar__icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
