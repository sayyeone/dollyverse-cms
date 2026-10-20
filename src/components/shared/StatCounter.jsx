'use client';
// src/components/shared/StatCounter.jsx
import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `value` when it enters the viewport
 */
export default function StatCounter({ value, suffix = '', duration = 1500 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {display.toLocaleString('id-ID')}
      {suffix}
    </span>
  )
}

