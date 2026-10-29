import { useMemo } from 'react'

function buildHomeCoolFlakes(count) {
  return Array.from({ length: count }, (_, i) => {
    const left = 1 + ((i * 5.3) % 98)
    const kind = i % 9 === 0 ? 'spark' : i % 6 === 0 ? 'blue' : 'white'

    return {
      id: i,
      left: `${left}%`,
      size: kind === 'spark' ? 2 + (i % 2) : 3 + (i % 4),
      kind,
      delay: `${-(i * 0.1) % 8}s`,
      duration: `${4.2 + (i % 7) * 0.45}s`,
      drift: (i % 2 === 0 ? -1 : 1) * (2 + (i % 5) * 2),
      opacity: 0.42 + (i % 6) * 0.07,
    }
  })
}

function buildFooterCoolFlakes(count) {
  return Array.from({ length: count }, (_, i) => {
    const left = 3 + ((i * 6.9) % 94)
    const kind = i % 8 === 0 ? 'spark' : i % 5 === 0 ? 'blue' : 'white'

    return {
      id: i,
      left: `${left}%`,
      size: kind === 'spark' ? 2 + (i % 2) : 3 + (i % 3),
      kind,
      delay: `${-(i * 0.13) % 5.5}s`,
      duration: `${3.8 + (i % 6) * 0.35}s`,
      drift: (i % 2 === 0 ? -1 : 1) * (3 + (i % 4) * 2),
      fall: 360 + (i % 7) * 35,
      opacity: 0.58 + (i % 5) * 0.08,
    }
  })
}

export default function PageCoolingFlow({ layout = 'home' }) {
  const isFooter = layout === 'footer'
  const flakes = useMemo(
    () => (isFooter ? buildFooterCoolFlakes(38) : buildHomeCoolFlakes(54)),
    [isFooter],
  )

  return (
    <div
      className={`site-cooling-flow${isFooter ? ' site-cooling-flow--footer' : ''}`}
      aria-hidden="true"
    >
      <div className="site-cooling-flow__ambient" />
      <div className="site-cooling-flow__flakes">
        {flakes.map((f) => (
          <span
            key={f.id}
            className={`site-cooling-flow__flake site-cooling-flow__flake--${f.kind}`}
            style={
              isFooter
                ? {
                    left: f.left,
                    width: f.size,
                    height: f.size,
                    animationDelay: f.delay,
                    animationDuration: f.duration,
                    '--cool-drift': `${f.drift}px`,
                    '--cool-fall': `${f.fall}px`,
                    '--cool-opacity': f.opacity,
                  }
                : {
                    left: f.left,
                    width: f.size,
                    height: f.size,
                    animationDelay: f.delay,
                    animationDuration: f.duration,
                    '--cool-drift': `${f.drift}px`,
                    '--cool-opacity': f.opacity,
                  }
            }
          />
        ))}
      </div>
    </div>
  )
}
