'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, 
  ShieldCheck, 
  Coins, 
  BookOpen, 
  Settings, 
  MessageSquare, 
  ArrowRight
} from 'lucide-react'

const features = [
  {
    num: '01',
    icon: Users,
    title: 'Berangkat dari Komunitas',
    desc: 'Dikelola oleh dan untuk warga Kampung Dolly.',
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'Kualitas Tetap Terjaga',
    desc: 'Menggunakan bahan dan proses sablon yang terstandar.',
  },
  {
    num: '03',
    icon: Coins,
    title: 'Harga Terjangkau',
    desc: 'Solusi sablon dan merchandise dengan harga ramah komunitas.',
  },
  {
    num: '04',
    icon: BookOpen,
    title: 'Belajar dan Tumbuh Bersama',
    desc: 'Menyediakan pelatihan keterampilan bagi warga.',
  },
  {
    num: '05',
    icon: Settings,
    title: 'Produksi Fleksibel',
    desc: 'Melayani pemesanan dari satuan hingga jumlah besar.',
  },
  {
    num: '06',
    icon: MessageSquare,
    title: 'Konsultasi yang Mudah',
    desc: 'Tim kami siap membantu melalui WhatsApp.',
  },
]

export default function WhyUs() {
  return (
    <section id="kenapa-kami" className="py-20 md:py-28 bg-[#FBFBFE] relative overflow-hidden border-t border-purple-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-indigo/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-violet/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* ================= SISI KIRI ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Eyebrow Pill Badge - serasi 100% dengan Cerita Kampung Dolly */}
            <div className="inline-flex items-center gap-2 bg-[#ECE7FE] text-indigo text-xs font-heading font-extrabold px-4 py-1.5 rounded-full w-max shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
              <span>KENAPA DOLLYVERSE</span>
            </div>

            {/* Heading - serasi 100% font-black text-indigo */}
            <div className="space-y-1 relative">
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
                Beda dari <br />
                <span className="text-indigo">yang Lain</span>
              </h2>
            </div>

            {/* Subtext Body - serasi font-sans text-gray-600 */}
            <p className="font-sans font-normal text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
              Kami percaya bahwa sablon bukan sekadar produk, tapi juga kesempatan untuk tumbuh bersama komunitas. Dollyverse hadir dengan pendekatan yang lebih inklusif, terjangkau, dan berdampak nyata bagi warga Kampung Dolly.
            </p>

            {/* Visual Photo Card with Tape & Annotation */}
            <div className="relative pt-6 max-w-sm">
              <div className="absolute -top-1 left-2 z-20 text-[11px] font-sans font-semibold text-gray-400 rotate-[-8deg] flex items-center gap-1 pointer-events-none">
                <span>Dari Komunitas Untuk Komunitas</span>
                <span className="text-sm">⤵</span>
              </div>

              {/* Purple Washi Tape Decor */}
              <div className="absolute top-2 right-12 z-20 w-16 h-5 bg-indigo/70 rotate-[12deg] shadow-xs backdrop-blur-xs rounded-xs" />

              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white rotate-[-3deg] hover:rotate-0 transition-transform duration-500 group">
                <img
                  src="/gallery-produksi.png"
                  alt="Proses sablon manual dan digital KUB Dollyverse"
                  className="w-full h-52 object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-indigo/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>


          {/* ================= SISI KANAN (6 ROW LIST CARDS 01-06) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-3.5"
          >
            {features.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-md hover:border-indigo/20 transition-all duration-300 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Icon Box serasi dengan lilac / indigo */}
                    <div className="w-11 h-11 rounded-xl bg-lilac/70 text-indigo flex items-center justify-center shrink-0 group-hover:bg-indigo group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-ink group-hover:text-indigo transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="font-sans text-gray-500 text-xs sm:text-sm mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Number Tag 01-06 */}
                  <span className="font-heading font-black text-xs sm:text-sm text-indigo/60 group-hover:text-indigo transition-colors duration-200 shrink-0">
                    {item.num}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
