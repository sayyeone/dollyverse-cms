'use client';
// src/components/ui/Badge.jsx

export default function Badge({ children, variant = 'gold', className = '' }) {
  const variants = {
    gold: 'bg-gold text-ink',
    violet: 'bg-violet text-white',
    indigo: 'bg-indigo text-white',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

