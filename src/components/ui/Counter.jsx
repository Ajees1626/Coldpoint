import { useEffect, useRef, useState } from 'react'
import { useInView } from '../../hooks/useInView'

export default function Counter({ end, suffix = '', duration = 2000 }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const numericEnd = parseInt(end, 10)
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericEnd))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, end, duration])

  return (
    <span ref={ref} className="counter-value">
      {count}{suffix}
    </span>
  )
}
