'use client';

import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function MobileMenu({ isOpen, open, onClose, links, currentPath }) {
  const isMenuOpen = isOpen ?? open

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-full bg-navy shadow-2xl flex flex-col transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header with /logo-2.png */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-black/20">
          <img
            src="/logo-2.png"
            alt="Logo KUB Dollyverse"
            className="h-8 w-auto object-contain"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
            aria-label="Tutup menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-5 gap-1 flex-1">
          {links?.map((link) => {
            const active = currentPath === (link.href || link.to)
            return (
              <Link
                key={link.href || link.to}
                href={link.href || link.to}
                onClick={onClose}
                className={`px-4 py-3 rounded-xl font-medium text-base transition-colors duration-200 ${
                  active
                    ? 'bg-indigo text-white font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Footer info */}
        <div className="p-5 border-t border-white/10 text-white/40 text-xs">
          KUB Dollyverse — Putat Jaya, Surabaya
        </div>
      </div>
    </>
  )
}
