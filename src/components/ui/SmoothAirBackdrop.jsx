const AC_CONFIG = {
  'ac-cool': { speed: 1, flakes: 48, wisps: 10, streams: 8 },
  breeze: { speed: 1.1, flakes: 42, wisps: 9, streams: 7 },
  duct: { speed: 0.95, flakes: 52, wisps: 11, streams: 8 },
  vortex: { speed: 1.05, flakes: 40, wisps: 8, streams: 6 },
  radial: { speed: 1, flakes: 46, wisps: 10, streams: 7 },
  frost: { speed: 0.88, flakes: 56, wisps: 12, streams: 9 },
  draft: { speed: 1.08, flakes: 44, wisps: 9, streams: 7 },
  stream: { speed: 1.02, flakes: 45, wisps: 10, streams: 7 },
  pulse: { speed: 0.92, flakes: 50, wisps: 11, streams: 8 },
  whisper: { speed: 1.15, flakes: 32, wisps: 7, streams: 5 },
}

function windFromOrigin(originPct, scale = 1) {
  const fromCenter = originPct - 50
  const windX = fromCenter * (5.2 + Math.abs(fromCenter) * 0.08) * scale
  const windY = (220 + Math.abs(fromCenter) * 2.4) * scale
  const angle = Math.atan2(windY, windX) * (180 / Math.PI)
  return { windX, windY, angle, fromCenter }
}

function buildIceFlakes(count, windScale = 1) {
  return Array.from({ length: count }, (_, i) => {
    const zone = i % 6
    let origin
    if (zone === 0 || zone === 1) origin = 40 + ((i * 3.7) % 20)
    else if (zone === 2) origin = 8 + ((i * 5.3) % 28)
    else if (zone === 3) origin = 64 + ((i * 4.7) % 28)
    else origin = 32 + ((i * 2.9) % 36)

    const { windX, windY, angle } = windFromOrigin(origin, windScale)
    const kind = i % 7 === 0 ? 'spark' : i % 4 === 0 ? 'blue' : 'white'

    return {
      id: i,
      left: `${origin}%`,
      size: kind === 'spark' ? 2 + (i % 2) : 3 + (i % 3),
      kind,
      delay: `${-(i * 0.16) % 4.2}s`,
      duration: `${2.6 + (i % 6) * 0.3}s`,
      windX,
      windY,
      angle,
      sway: (i % 2 === 0 ? 1 : -1) * (5 + (i % 4)),
    }
  })
}

function buildIceWisps(count, windScale = 1) {
  return Array.from({ length: count }, (_, i) => {
    const origin = i % 2 === 0 ? 36 + (i * 5) % 14 : 50 + (i * 4) % 14
    const { windX, windY, angle } = windFromOrigin(origin + (i % 3 === 0 ? -12 : 12), windScale)

    return {
      id: i,
      left: `${origin}%`,
      w: 10 + (i % 4) * 4,
      h: 6 + (i % 3) * 3,
      delay: `${-(i * 0.48) % 3.2}s`,
      duration: `${3.2 + (i % 4) * 0.45}s`,
      windX: windX * 1.1,
      windY,
      angle,
    }
  })
}

function buildWindStreams(count, windScale = 1) {
  return Array.from({ length: count }, (_, i) => {
    const origin = 44 + (i * 14) / Math.max(count - 1, 1) * 1.2
    const { windX, windY, angle } = windFromOrigin(origin, windScale)

    return {
      id: i,
      left: `${origin}%`,
      delay: `${-(i * 0.32) % 2.8}s`,
      duration: `${2 + (i % 3) * 0.25}s`,
      windX,
      windY,
      angle,
    }
  })
}

export default function SmoothAirBackdrop({ variant = 'ac-cool' }) {
  const cfg = AC_CONFIG[variant] ?? AC_CONFIG['ac-cool']
  const windScale = cfg.windScale ?? 1
  const flakes = buildIceFlakes(cfg.flakes, windScale)
  const wisps = buildIceWisps(cfg.wisps, windScale)
  const streams = buildWindStreams(cfg.streams, windScale)

  return (
    <div
      className={`page-hero__ac-air page-hero__ac-air--${variant}`}
      aria-hidden="true"
      style={{ '--air-speed': cfg.speed }}
    >
      <div className="page-hero__ac-ambient" />

      <div className="page-hero__ac-unit">
        <svg viewBox="0 0 200 52" className="page-hero__ac-unit-svg">
          <defs>
            <linearGradient id="ac-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#eef2fa" />
            </linearGradient>
          </defs>
          <rect x="8" y="4" width="184" height="44" rx="8" fill="url(#ac-body)" stroke="rgba(48,47,129,0.18)" strokeWidth="1.5" />
          <rect x="16" y="12" width="168" height="22" rx="4" fill="rgba(48,47,129,0.04)" />
          {[0, 1, 2, 3, 4, 5].map((line) => (
            <line
              key={line}
              x1="22"
              y1={16 + line * 3.2}
              x2="178"
              y2={16 + line * 3.2}
              stroke="rgba(48,47,129,0.14)"
              strokeWidth="1.2"
              strokeLinecap="round"
              className="page-hero__ac-louver"
              style={{ animationDelay: `${line * 0.12}s` }}
            />
          ))}
          <circle cx="178" cy="10" r="3" fill="#4ade80" className="page-hero__ac-led" />
          <rect x="16" y="36" width="168" height="3" rx="1.5" fill="rgba(48,47,129,0.08)" />
        </svg>
      </div>

      <div className="page-hero__ac-cone">
        <div className="page-hero__ac-cone-core" />

        <div className="page-hero__ac-wind-streams">
          {streams.map((s) => (
            <span
              key={s.id}
              className="page-hero__ac-wind-stream"
              style={{
                left: s.left,
                animationDelay: s.delay,
                animationDuration: `calc(${s.duration} / var(--air-speed, 1))`,
                '--wind-x': `${s.windX}px`,
                '--wind-y': `${s.windY}px`,
                '--wind-angle': `${s.angle}deg`,
              }}
            />
          ))}
        </div>

        <div className="page-hero__ac-ice-wisps">
          {wisps.map((w) => (
            <span
              key={w.id}
              className="page-hero__ac-ice-wisp"
              style={{
                left: w.left,
                width: w.w,
                height: w.h,
                animationDelay: w.delay,
                animationDuration: `calc(${w.duration} / var(--air-speed, 1))`,
                '--wind-x': `${w.windX}px`,
                '--wind-y': `${w.windY}px`,
                '--wind-sway': `${w.angle > 0 ? 6 : -6}px`,
              }}
            />
          ))}
        </div>

        <div className="page-hero__ac-ice-flakes">
          {flakes.map((f) => (
            <span
              key={f.id}
              className={`page-hero__ac-ice-flake page-hero__ac-ice-flake--${f.kind}`}
              style={{
                left: f.left,
                width: f.size,
                height: f.size,
                animationDelay: f.delay,
                animationDuration: `calc(${f.duration} / var(--air-speed, 1))`,
                '--wind-x': `${f.windX}px`,
                '--wind-y': `${f.windY}px`,
                '--wind-sway': `${f.sway}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
