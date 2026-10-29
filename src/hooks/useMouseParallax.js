import { useEffect, useRef } from 'react'

export function useMouseParallax(intensity = 0.03) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let raf = null
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      targetX = (e.clientX - cx) * intensity
      targetY = (e.clientY - cy) * intensity
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      el.style.setProperty('--parallax-x', `${currentX}px`)
      el.style.setProperty('--parallax-y', `${currentY}px`)
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [intensity])

  return ref
}
