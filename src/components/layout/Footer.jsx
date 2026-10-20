'use client';

import Link from 'next/link'
import { Camera, Play, MessageCircle } from 'lucide-react'

const socialLinks = [
  { href: 'https://instagram.com/dollyverse.id', Icon: Camera, label: 'Instagram Dollyverse' },
  { href: 'https://youtube.com/@dollyverse', Icon: Play, label: 'YouTube Dollyverse' },
  { href: 'https://wa.me/6281234567890', Icon: MessageCircle, label: 'WhatsApp Dollyverse' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center group">
              <img
                src="/logo-2.png"
                alt="Logo KUB Dollyverse"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-xs">
              KUB Dollyverse — Putat Jaya, Surabaya
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { to: '/', label: 'Beranda' },
              { to: '/tentang', label: 'Tentang' },
              { to: '/produk', label: 'Produk' },
              { to: '/layanan', label: 'Layanan' },
              { to: '/kontak', label: 'Kontak' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                href={to}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {year} KUB Dollyverse. Semua hak dilindungi.</p>
          <p>Sablon Digital DTF & Sublimasi Surabaya</p>
        </div>
      </div>
    </footer>
  )
}
