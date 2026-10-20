'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shirt, Users, GraduationCap, ArrowRight } from 'lucide-react'

const serviceCards = [
  {
    num: '01',
    icon: Shirt,
    title: 'Kaos Satuan',
    desc: 'Pesan mulai 1 pcs tanpa minimum order. Cocok untuk hadiah, souvenir, atau ekspresi diri.',
    isFeatured: false,
    lineColor: 'bg-gold',
  },
  {
    num: '02',
    icon: Users,
    title: 'Pesanan Kelompok / Seragam',
    desc: 'Seragam komunitas, instansi, atau event — harga makin hemat untuk pemesanan banyak.',
    isFeatured: true, // Kartu tengah warna cream hangat dengan tombol aktif
    lineColor: 'bg-gold',
  },
  {
    num: '03',
    icon: GraduationCap,
    title: 'Pelatihan Sablon',
    desc: 'Belajar sablon dari nol bersama pengrajin berpengalaman. Dapat sertifikat dan bimbingan usaha.',
    isFeatured: false,
    lineColor: 'bg-gold',
  },
]

export default function ServiceCards() {
  return (
    <section id="layanan" className="py-24 md:py-32 bg-[#FBFBFE] relative overflow-hidden border-t border-purple-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[480px] h-[480px] rounded-full bg-violet/5 blur-3xl pointer-events-none" />

      {/* Decorative Dot Matrix in Bottom-Right */}
      <div className="absolute bottom-8 right-12 hidden lg:grid grid-cols-6 gap-2 text-indigo/20 pointer-events-none select-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ================= SISI KIRI (3 KARTU NEO-BORDER DENGAN SHADOW TEBAL) ================= */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6 relative">
            {/* Sparkle decorative lines on top left of first card */}
            <div className="absolute -top-6 -left-3 text-indigo text-lg font-mono font-black select-none pointer-events-none hidden sm:block">
              彡
            </div>

            {serviceCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.article
                  key={card.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`relative rounded-3xl p-6 sm:p-7 border-2 border-navy flex flex-col justify-between shadow-[0_8px_0_0_#2F3552] transition-transform duration-300 ${
                    card.isFeatured
                      ? 'bg-[#FEF6E4]' // Cream hangat khas kartu 02
                      : 'bg-white'
                  }`}
                >
                  {/* Top Row: Icon Box + Large Number */}
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center p-3 border border-indigo/20 shadow-xs ${
                      card.isFeatured ? 'bg-indigo text-white' : 'bg-[#ECE7FE] text-indigo'
                    }`}>
                      <Icon size={24} />
                    </div>

                    <span className="font-heading font-black text-3xl sm:text-4xl text-indigo/25 select-none leading-none">
                      {card.num}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3 flex-1 mb-8">
                    <h3 className="font-heading font-black text-xl text-ink leading-tight">
                      {card.title}
                    </h3>

                    {/* Small Accent Line */}
                    <div className="w-8 h-1 bg-gold rounded-full" />

                    <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Row: Link / Action */}
                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href="/layanan"
                      className="font-heading font-bold text-xs sm:text-sm text-indigo hover:text-navy transition-colors select-none"
                    >
                      Lihat Detail
                    </Link>

                    <Link
                      href="/layanan"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
                        card.isFeatured
                          ? 'bg-indigo text-white hover:bg-navy hover:scale-105'
                          : 'bg-[#ECE7FE] text-indigo hover:bg-indigo hover:text-white'
                      }`}
                      aria-label={`Detail ${card.title}`}
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>


          {/* ================= SISI KANAN (HEADLINE, BODY, & TOMBOL CTA) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#ECE7FE] text-indigo text-xs font-heading font-extrabold px-4 py-1.5 rounded-full w-max shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
              <span>LAYANAN KAMI</span>
            </div>

            {/* Heading */}
            <div className="relative">
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-ink leading-[1.15]">
                Apa yang Bisa <br />
                <span className="text-indigo">Kami Bantu?</span>
                <span className="inline-block ml-3 text-gold text-2xl md:text-3xl font-mono select-none">
                  彡
                </span>
              </h2>
            </div>

            {/* Paragraph Body */}
            <p className="font-sans font-normal text-gray-600 text-sm md:text-base leading-relaxed">
              Dollyverse menyediakan berbagai layanan untuk mendukung kebutuhan komunitas, instansi, sekolah, maupun individu dalam membuat produk sablon yang berkualitas.
            </p>

            {/* Main CTA Button */}
            <div className="pt-2">
              <Link
                href="/layanan"
                className="inline-flex items-center gap-3 bg-indigo hover:bg-navy text-white font-heading font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-indigo/30 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Lihat Detail Layanan</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
