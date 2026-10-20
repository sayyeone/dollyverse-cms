'use client';
// src/components/ui/Button.jsx
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Button component
 * @param {'primary'|'secondary'|'text'} variant
 * @param {string} href   - if set, renders as <Link> (internal) or <a> (external)
 * @param {boolean} external - open in new tab
 */
export default function Button({
  variant = 'primary',
  href,
  external = false,
  children,
  className = '',
  disabled = false,
  onClick,
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none'

  const variants = {
    primary:
      'bg-indigo text-white px-6 py-3 shadow-md hover:bg-violet hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm',
    secondary:
      'border-2 border-indigo text-indigo px-6 py-3 hover:bg-indigo hover:text-white hover:-translate-y-0.5 active:translate-y-0',
    text: 'text-indigo px-0 py-1 hover:text-violet group',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  const inner = (
    <>
      {children}
      {variant === 'text' && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
          {inner}
        </a>
      )
    }
    return (
      <Link href={href} className={cls} {...props}>
        {inner}
      </Link>
    )
  }

  return (
    <button type="button" className={cls} disabled={disabled} onClick={onClick} {...props}>
      {inner}
    </button>
  )
}



