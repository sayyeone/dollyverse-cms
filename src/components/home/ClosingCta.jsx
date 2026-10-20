'use client';
// src/components/home/ClosingCta.jsx
import { motion } from 'framer-motion'
import { buildWaUrl } from '../../data/contact'

export default function ClosingCta() {
  return (
    <section
      id="cta-penutup"
      className="relative overflow-hidden bg-ink py-20 md:py-28"
      aria-label="CTA penutup"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo/10 blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-violet/10 blur-2xl" />
      </div>

      {/* Arrow decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-gold/10 font-mono font-bold text-8xl select-none z-0">
        â—€â—€â—€
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-gold/10 font-mono font-bold text-8xl select-none z-0">
        â–¶â–¶â–¶
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-violet">
            Siap Pesan?
          </span>
          <h2 className="font-heading font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
          >
            Yuk, Wujudkan Desainmu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-gold">
              Bersama Kami
            </span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed">
            Chat WhatsApp sekarang â€” kami siap bantu dari konsultasi desain sampai pengiriman.
          </p>
        </motion.div>

        <motion.a
          id="closing-cta-wa"
          href={buildWaUrl()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo to-violet text-white font-semibold px-10 py-4 rounded-2xl shadow-2xl hover:shadow-violet/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-lg"
        >
          Pesan via WhatsApp
        </motion.a>
      </div>
    </section>
  )
}

