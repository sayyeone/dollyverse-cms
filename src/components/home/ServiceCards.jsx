'use client';
// src/components/home/ServiceCards.jsx
import { motion } from 'framer-motion'
import { Shirt, Users, GraduationCap } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const icons = { Shirt, Users, GraduationCap }

const cards = [
  {
    icon: 'Shirt',
    title: 'Kaos Satuan',
    desc: 'Pesan mulai 1 pcs tanpa minimum order. Cocok untuk hadiah, souvenir, atau ekspresi diri.',
    color: 'bg-indigo/10 text-indigo',
  },
  {
    icon: 'Users',
    title: 'Pesanan Kelompok / Seragam',
    desc: 'Seragam komunitas, instansi, atau event â€” harga makin hemat untuk pemesanan banyak.',
    color: 'bg-violet/10 text-violet',
  },
  {
    icon: 'GraduationCap',
    title: 'Pelatihan Sablon',
    desc: 'Belajar sablon dari nol bersama pengrajin berpengalaman. Dapat sertifikat dan bimbingan usaha.',
    color: 'bg-gold/10 text-amber-600',
  },
]

export default function ServiceCards() {
  return (
    <section id="layanan" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Layanan Kami"
              title="Apa yang Bisa Kami Bantu?"
              light
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="text" href="/layanan" className="text-violet hover:text-white">
              Lihat Detail Layanan
            </Button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, desc, color }, i) => {
            const Icon = icons[icon]
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3 leading-snug">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

