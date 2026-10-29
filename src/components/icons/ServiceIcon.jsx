const iconPaths = {
  install: (
    <>
      <rect x="6" y="10" width="20" height="14" rx="3" />
      <path d="M10 14h12M10 18h8" />
      <path d="M16 6v4" />
    </>
  ),
  repair: (
    <>
      <path d="M8 20l12-12" />
      <circle cx="18" cy="10" r="3" />
      <path d="M6 22l4-4" />
    </>
  ),
  gas: (
    <>
      <ellipse cx="16" cy="18" rx="8" ry="4" />
      <path d="M12 10c0-4 8-4 8 0v4c0 4-8 4-8 0v-4z" />
      <path d="M16 6v2" />
    </>
  ),
  maintenance: (
    <>
      <circle cx="16" cy="16" r="8" />
      <path d="M16 12v4l3 2" />
    </>
  ),
  cleaning: (
    <>
      <path d="M8 20c4-8 12-8 16 0" />
      <path d="M6 12c2-6 18-6 20 0" />
      <path d="M10 8c2-4 10-4 12 0" />
    </>
  ),
  commercial: (
    <>
      <rect x="4" y="8" width="24" height="18" rx="2" />
      <path d="M4 14h24M12 8V6M20 8V6" />
    </>
  ),
  certified: (
    <>
      <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" />
    </>
  ),
  sameday: (
    <>
      <circle cx="16" cy="16" r="10" />
      <path d="M16 10v6l4 2" />
    </>
  ),
  parts: (
    <>
      <rect x="6" y="6" width="8" height="8" rx="1" />
      <rect x="18" y="6" width="8" height="8" rx="1" />
      <rect x="6" y="18" width="8" height="8" rx="1" />
      <rect x="18" y="18" width="8" height="8" rx="1" />
    </>
  ),
  pricing: (
    <>
      <path d="M6 8h20v16H6z" />
      <path d="M10 14h12M10 18h8" />
      <circle cx="22" cy="10" r="4" />
    </>
  ),
  support: (
    <>
      <path d="M6 14c0-6 20-6 20 0v4c0 4-4 6-8 6h-4c-4 0-8-2-8-6v-4z" />
      <path d="M12 22h8" />
    </>
  ),
  warranty: (
    <>
      <path d="M16 4l10 4v6c0 8-10 12-10 12S6 22 6 14V8l10-4z" />
      <path d="M12 14l3 3 6-6" />
    </>
  ),
  phone: (
    <path d="M8 6c0 10 10 20 20 20l4-8-6-4c-4 2-8-2-10-6l-4-6-8 4z" />
  ),
  whatsapp: (
    <path d="M6 26c14-2 20-10 20-20C14 6 6 14 4 26l2 6 4-6zM14 18l4 4 8-8" />
  ),
  cooling: (
    <>
      <path d="M16 4v20" />
      <path d="M8 10l8-6 8 6" />
      <path d="M8 22l8 6 8-6" />
    </>
  ),
  airflow: (
    <>
      <path d="M4 16c6-8 18-8 24 0" />
      <path d="M6 20c5-6 14-6 20 0" />
    </>
  ),
  thermometer: (
    <>
      <rect x="14" y="4" width="4" height="18" rx="2" />
      <circle cx="16" cy="24" r="4" />
    </>
  ),
  location: (
    <>
      <path d="M16 4c-6 0-10 5-10 10c0 8 10 14 10 14s10-6 10-14c0-5-4-10-10-10z" />
      <circle cx="16" cy="14" r="3" />
    </>
  ),
}

export default function ServiceIcon({ name, size = 32, className = '' }) {
  const paths = iconPaths[name]
  if (!paths) return null

  const filled = name === 'phone' || name === 'whatsapp'

  return (
    <svg
      className={`service-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  )
}
