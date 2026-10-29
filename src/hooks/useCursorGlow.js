import { useEffect, useRef } from 'react'

export function useCursorGlow(enabled = true) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--cursor-x', `${x}px`)
      el.style.setProperty('--cursor-y', `${y}px`)
    }

    el.addEventListener('mousemove', onMove, { passive: true })
    return () => el.removeEventListener('mousemove', onMove)
  }, [enabled])

  return ref
}
