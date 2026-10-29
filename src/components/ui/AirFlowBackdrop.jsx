export default function AirFlowBackdrop({ variant = 'default' }) {
  return (
    <div className={`airflow-backdrop airflow-backdrop--${variant}`} aria-hidden="true">
      <div className="airflow-backdrop__blur airflow-backdrop__blur--1" />
      <div className="airflow-backdrop__blur airflow-backdrop__blur--2" />
      <svg className="airflow-backdrop__wave" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0 40 Q360 10 720 40 T1440 40 V80 H0 Z" fill="rgba(247,248,250,0.6)" />
      </svg>
    </div>
  )
}
