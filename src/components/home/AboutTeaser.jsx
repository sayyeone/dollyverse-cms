'use client';

import { motion } from 'framer-motion'
import StatCounter from '../shared/StatCounter'
import { Sparkles, Award, ShieldCheck, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutTeaser({ settings }) {
  const stats = [
    { 
      value: settings?.statCapacity || 200, 
      suffix: '+', 
      unit: 'kaos / hari', 
      label: 'Kapasitas produksi sablon digital' 
    },
    { 
      value: settings?.statMembers || 10, 
      suffix: '', 
      unit: 'anggota tim', 
      label: 'Pemuda RW 12 Putat Jaya' 
    },
    { 
      value: settings?.statLocations || 2, 
      suffix: '', 
      unit: 'pusat produksi', 
      label: 'Workshop terpadu di Surabaya' 
    },
  ];

  return (
    <section
      id="tentang-singkat"
      className="relative py-20 md:py-28 bg-white border-t border-gray-200/60 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white group">
                <img
                  src="/sura-baya.png"
                  alt="Aktivitas Pemuda KUB Dollyverse"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-gold text-ink text-xs font-semibold px-3 py-1 rounded-full w-max mb-2">
                    <Sparkles size={13} />
                    <span>Dollyverse Empowering</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white leading-snug">
                    Karya Warga Putat Jaya
                  </h3>
                  <p className="text-white/80 font-sans text-xs md:text-sm mt-1 leading-relaxed">
                    Mengubah stereotype kawasan lama menjadi pusat kreativitas sablon digital & merchandise.
                  </p>
                </div>
              </div>

              {/* Floating Stat Pill Badge */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -bottom-5 -right-2 md:-right-4 bg-white p-3.5 rounded-xl border border-gray-200 shadow-lg flex items-center gap-3 max-w-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/15 border border-gold/40 text-ink flex items-center justify-center shrink-0">
                  <Award size={20} className="text-ink" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-ink text-xs">Kualitas Terjamin</p>
                  <p className="font-sans text-[11px] text-gray-500">Hasil sablon rapi & presisi</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text & Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-7"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-indigo font-sans text-xs font-semibold uppercase tracking-[0.12em] bg-lilac/60 px-3 py-1 rounded-full w-max">
                <ShieldCheck size={14} />
                Cerita KUB Dollyverse
              </span>

              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-[32px] text-ink leading-tight">
                Membangun Kemandirian Ekonomi dari <span className="text-indigo">Kampung Dolly</span>
              </h2>

              <p className="font-sans font-normal text-gray-600 text-base leading-[1.65]">
                Dollyverse adalah kelompok usaha bersama pemuda RW 12 Putat Jaya, Surabaya. Kami melayani pembuatan kaos custom satuan, sablon komunitas, merchandise acara, dan pelatihan keterampilan sablon digital secara berkala.
              </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {stats.map(({ value, suffix, unit, label }) => (
                <div
                  key={label}
                  className="flex flex-col p-4 rounded-xl bg-[#FAF9F5] border border-gray-200/80 shadow-2xs"
                >
                  <div className="font-heading font-extrabold text-ink text-2xl md:text-3xl leading-none">
                    <StatCounter value={value} suffix={suffix} />
                  </div>
                  <div className="text-indigo font-semibold text-xs md:text-sm mt-1">{unit}</div>
                  <div className="text-gray-500 font-sans text-[11px] md:text-xs mt-0.5 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-1">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 bg-ink hover:bg-navy text-white font-sans font-semibold text-sm px-6 py-3 rounded-full shadow-xs hover:shadow-md transition-all"
              >
                <span>Pelajari Kisah Selengkapnya</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
