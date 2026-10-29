import { useEffect, useRef } from 'react'
import { useInView } from '../../hooks/useInView'

export function Reveal({ children, delay = 0, className = '', y = 32 }) {
  const [ref, inView] = useInView({ threshold: 0.12, rootMargin: '-60px' })

  return (
    <div
      ref={ref}
      className={`motion-reveal ${inView ? 'motion-reveal--visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay * 80}ms`,
        '--motion-y': `${y}px`,
      }}
    >
      {children}
    </div>
  )
}

export function StaggerGroup({ children, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.08, rootMargin: '-50px' })

  return (
    <div
      ref={ref}
      className={`motion-stagger ${inView ? 'motion-stagger--visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return <div className={`motion-stagger__item ${className}`}>{children}</div>
}

export function MotionDiv({ children, className = '', ...rest }) {
  return (
    <div className={`motion-float motion-float--medium ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}

export function HoverLift({ children, className = '', as: Tag = 'article' }) {
  return <Tag className={`motion-hover-lift ${className}`}>{children}</Tag>
}

export function AnimateSwap({ activeKey, children, className = '' }) {
  const prevKey = useRef(activeKey)

  useEffect(() => {
    prevKey.current = activeKey
  }, [activeKey])

  return (
    <div key={activeKey} className={`motion-swap ${className}`}>
      {children}
    </div>
  )
}

export function ParallaxWrap({ children, className = '', strength = 20 }) {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength
    e.currentTarget.style.setProperty('--px', `${x}px`)
    e.currentTarget.style.setProperty('--py', `${y}px`)
  }

  const handleLeave = (e) => {
    e.currentTarget.style.setProperty('--px', '0px')
    e.currentTarget.style.setProperty('--py', '0px')
  }

  return (
    <div
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}
