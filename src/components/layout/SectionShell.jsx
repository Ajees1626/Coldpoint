export default function SectionShell({
  children,
  className = '',
  variant = 'white',
  ariaLabelledby,
  id,
  as: Tag = 'section',
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`floating-section floating-section--${variant} ${className}`.trim()}
    >
      <div className="floating-section__airflow" aria-hidden="true">
        <svg className="floating-section__wave" viewBox="0 0 800 60" preserveAspectRatio="none">
          <path d="M0 30 Q200 8 400 30 T800 30 V60 H0 Z" fill="rgba(48,47,129,0.07)" />
        </svg>
      </div>
      <div className="floating-section__inner container">{children}</div>
    </Tag>
  )
}
