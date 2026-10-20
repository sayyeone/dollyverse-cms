'use client';
// src/components/home/WhyUs.jsx
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const cards = [
  {
    icon: 'ðŸ˜ï¸',
    title: 'Dari Kampung Dolly',
    desc: 'Lahir dari semangat warga untuk mengubah kawasan eks-lokalisasi lewat ekonomi kreatif.',
    accent: 'from-indigo/10 to-violet/10 border-indigo/20',
    iconBg: 'bg-indigo/10',
  },
  {
    icon: 'ðŸ’Ž',
    title: 'Murah, Tanpa Korbankan Kualitas',
    desc: 'Kaos custom satuan dan merchandise yang terjangkau untuk semua kalangan tanpa kompromi kualitas.',
    accent: 'from-gold/10 to-cream/50 border-gold/20',
    iconBg: 'bg-gold/10',
  },
  {
    icon: 'ðŸŽ“',
    title: 'Belajar dan Tumbuh Bersama',
    desc: 'Pelatihan sablon agar warga punya keterampilan dan peluang usaha mandiri yang berkelanjutan.',
    accent: 'from-violet/10 to-lilac/50 border-violet/20',
    iconBg: 'bg-violet/10',
  },
]

export default function WhyUs() {
  return (
    <section id="kenapa-kami" className="py-20 md:py-28 bg-lilac/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Kenapa Dollyverse"
            title="Beda dari yang Lain"
            align="center"
            className="mb-12"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, desc, accent, iconBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${accent} border hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-navy text-xl mb-3 leading-snug">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

              {/* Decorative arrow */}
              <div className="absolute bottom-6 right-6 text-gold/30 font-bold text-2xl font-mono select-none">
                â–¶
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

