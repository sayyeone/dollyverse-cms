'use client';
// src/components/layout/Footer.jsx
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo to-violet flex items-center justify-center">
                <span className="text-white font-heading font-extrabold text-sm">D</span>
              </div>
              <span className="font-heading font-extrabold text-white text-lg">Dollyverse</span>
            </Link>
            <p className="text-white/50 text-xs">
              KUB Dollyverse â€” Putat Jaya, Surabaya
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
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-violet/50 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/10" />

        {/* Bottom row */}
        <p className="text-center text-white/30 text-xs">
          Â© {year} KUB Dollyverse. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  )
}



