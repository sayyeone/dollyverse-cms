'use client';

import Link from 'next/link'
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'

// Custom SVG Icons for Brands (Instagram, TikTok, YouTube)
function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15"/>
    </svg>
  );
}

function TiktokIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0C10] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-12">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <img
                src="/logo-2.png"
                alt="Logo KUB Dollyverse"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm">
              Sablon digital DTF & sublimasi untuk kaos, merchandise, seragam, dan kebutuhan komunitas, instansi, maupun event.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/dollyverse.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Dollyverse"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#8A63FF] hover:border-[#8A63FF] transition-all duration-200"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://tiktok.com/@dollyverse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Dollyverse"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#8A63FF] hover:border-[#8A63FF] transition-all duration-200"
              >
                <TiktokIcon size={15} />
              </a>
              <a
                href="https://youtube.com/@dollyverse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Dollyverse"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#8A63FF] hover:border-[#8A63FF] transition-all duration-200"
              >
                <YoutubeIcon size={16} />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Dollyverse"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#8A63FF] hover:border-[#8A63FF] transition-all duration-200"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Menu Navigasi (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/produk" className="hover:text-white transition-colors">Produk</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">Layanan</Link></li>
              <li><Link href="/#galeri-bento" className="hover:text-white transition-colors">Portofolio</Link></li>
              <li><Link href="/kontak" className="hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Col 3: Layanan Kami (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Layanan Kami
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-white/60">
              <li><Link href="/layanan" className="hover:text-white transition-colors">Kaos Satuan</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">Pesanan Kelompok / Seragam</Link></li>
              <li><Link href="/layanan#pelatihan" className="hover:text-white transition-colors">Pelatihan Sablon</Link></li>
            </ul>
          </div>

          {/* Col 4: Bantuan (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Bantuan
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-white/60">
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">Cara Pemesanan</Link></li>
              <li><Link href="/kontak" className="hover:text-white transition-colors">Estimasi Pengiriman</Link></li>
              <li><Link href="/tentang" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="/tentang" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          {/* Col 5: Kontak & Alamat (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Kontak & Alamat
            </h4>
            <ul className="space-y-3 font-sans text-xs text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#8A63FF] shrink-0 mt-0.5" />
                <span>Putat Jaya, Kec. Sawahan, Surabaya, Jawa Timur 60255</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#8A63FF] shrink-0" />
                <a href="https://wa.me/6281234567890" className="hover:text-white transition-colors">+62 812-3456-7890</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#8A63FF] shrink-0" />
                <a href="mailto:dollyverse.id@gmail.com" className="hover:text-white transition-colors">dollyverse.id@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-white/40">
                <Clock size={15} className="text-[#8A63FF] shrink-0 mt-0.5" />
                <div>
                  <p>Senin – Sabtu</p>
                  <p>09.00 – 17.00 WIB</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/40">
          <p>© {year} KUB Dollyverse. Semua hak dilindungi.</p>
          <div className="flex items-center gap-2">
            <span>Sablon Digital DTF & Sublimasi Surabaya</span>
            <span className="w-4 h-0.5 bg-[#8A63FF] rounded-full inline-block" />
          </div>
        </div>

      </div>
    </footer>
  )
}
