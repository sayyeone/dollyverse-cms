'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, ArrowRight, Clock, Palette, Truck } from 'lucide-react'
import { buildWaUrl } from '../../data/contact'

const guarantees = [
  {
    icon: Clock,
    title: 'Respon cepat',
    desc: 'Tim kami siap membantu',
  },
  {
    icon: Palette,
    title: 'Konsultasi desain gratis',
    desc: 'Sesuai kebutuhanmu',
  },
  {
    icon: Truck,
    title: 'Pengiriman ke seluruh Indonesia',
    desc: 'Aman dan terpercaya',
  },
]

export default function ClosingCta() {
  return (
    <section
      id="cta-penutup"
      className="relative overflow-hidden bg-[#0F1015] py-24 md:py-32 text-white border-t border-white/5"
      aria-label="CTA penutup"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#8A63FF]/10 blur-[140px] pointer-events-none" />

      {/* Decorative ambient curves on left and right */}
      <div className="absolute left-6 top-1/3 -translate-y-1/2 w-48 h-48 border-4 border-white/5 rounded-full blur-xs pointer-events-none -rotate-12 hidden md:block" />
      <div className="absolute right-8 top-1/3 -translate-y-1/2 w-64 h-64 border-4 border-[#8A63FF]/10 rounded-full blur-xs pointer-events-none rotate-45 hidden md:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-heading font-extrabold tracking-[0.2em] uppercase text-[#8A63FF] mb-3"
        >
          SIAP PESAN?
        </motion.span>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-1"
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Yuk, Wujudkan Desainmu <br />
            <span className="text-[#8A63FF] relative inline-block">
              Bersama Kami
              <span className="inline-block ml-3 text-gold text-2xl md:text-3xl font-mono select-none">
                彡
              </span>
            </span>
          </h2>

          <p className="text-white/60 font-sans text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Chat WhatsApp sekarang, konsultasikan desain, jenis produk, hingga estimasi pengiriman. Tim kami siap membantu!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          {/* Button 1: WhatsApp */}
          <a
            href={buildWaUrl('Halo Dollyverse, saya ingin konsultasi dan pesan sablon/merchandise!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#8A63FF] hover:bg-[#784eed] text-white font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-[#8A63FF]/30 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MessageCircle size={18} className="fill-white" />
            <span>Pesan via WhatsApp</span>
            <ArrowRight size={16} />
          </a>

          {/* Button 2: Lihat Produk */}
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-bold text-sm sm:text-base transition-all duration-200 backdrop-blur-md group hover:border-white/30"
          >
            <span>Lihat Produk Kami</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* 3 Guarantees Row with Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 mt-16 border-t border-white/10 w-full text-left"
        >
          {guarantees.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-11 h-11 rounded-xl bg-[#8A63FF]/15 text-[#8A63FF] flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-white/50 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
