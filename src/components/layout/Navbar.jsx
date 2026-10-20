'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ArrowRight } from 'lucide-react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/produk', label: 'Produk' },
  { href: '/layanan', label: 'Custom' },
  { href: '/layanan#pelatihan', label: 'Pelatihan' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  const solid = scrollY > 40

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-gray-200/60'
            : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo with /logo-2.png */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded-lg"
            aria-label="KUB Dollyverse — Ke Beranda"
          >
            <img
              src="/logo-2.png"
              alt="Logo KUB Dollyverse"
              className="h-9 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200/60 shadow-xs">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    active
                      ? 'bg-ink text-white shadow-xs'
                      : 'text-ink/80 hover:text-ink hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <Link
              href="/produk"
              className="hidden sm:inline-flex items-center gap-2 bg-ink hover:bg-navy text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-200"
            >
              <span>Pesan Custom</span>
              <ArrowRight size={14} />
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 text-ink hover:bg-black/5 rounded-xl transition-colors"
              aria-label="Buka menu navigasi"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        currentPath={pathname}
      />
    </>
  )
}
