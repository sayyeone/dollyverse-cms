'use client';

import { motion } from 'framer-motion'
import StatCounter from '../shared/StatCounter'
import { Users, Box, Shirt, ArrowRight, Heart, TrendingUp, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function AboutTeaser({ settings }) {
  const statMembers = settings?.statMembers || 10
  const statLocations = settings?.statLocations || 2
  const statCapacity = settings?.statCapacity || 200

  return (
    <section
      id="tentang-singkat"
      className="relative py-20 md:py-28 bg-[#F8F7FF] overflow-hidden border-t border-purple-100"
    >
      {/* Decorative ambient background blobs */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 rounded-full bg-violet/10 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-indigo/5 blur-3xl pointer-events-none" />

      {/* Floating Sparkles Vector Decor */}
      <div className="absolute top-12 right-[36%] text-violet/40 pointer-events-none select-none hidden lg:block animate-pulse">
        âœ¦
      </div>
      <div className="absolute bottom-16 right-[15%] text-gold/50 pointer-events-none select-none hidden lg:block">
        âœ¦
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#ECE7FE] text-indigo text-xs font-heading font-extrabold px-4 py-1.5 rounded-full w-max shadow-2xs">
              <Users size={14} className="text-indigo" />
              <span>TENTANG KAMI</span>
            </div>

            {/* Heading */}
            <div className="space-y-2 relative">
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
                Cerita tentang <br />
                <span className="text-indigo">Kampung Dolly</span>
                <span className="inline-block ml-2 text-violet">âœ¦</span>
              </h2>
            </div>

            {/* Paragraph Body */}
            <p className="font-sans font-normal text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
              Dollyverse lahir dari semangat pemuda RW 12 Putat Jaya, Surabaya, untuk mengubah stigma menjadi peluang. Dari keterbatasan, kami mulai berkarya bersama, membangun keterampilan, dan menciptakan produk sablon yang bernilai bagi komunitas.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-3 bg-ink hover:bg-navy text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Kenalan Lebih Dekat</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* 3 Metric White Cards Row */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2">
              {/* Card 1 */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-xl bg-lilac/70 text-indigo flex items-center justify-center mb-2">
                  <Users size={16} />
                </div>
                <div>
                  <div className="font-heading font-black text-ink text-2xl md:text-3xl leading-none">
                    <StatCounter value={statMembers} suffix="" />
                  </div>
                  <div className="font-heading font-bold text-xs text-ink mt-1">anggota tim</div>
                  <div className="text-gray-400 font-sans text-[10px] md:text-[11px] mt-0.5 leading-tight">Pemuda RW 12</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-xl bg-lilac/70 text-indigo flex items-center justify-center mb-2">
                  <Box size={16} />
                </div>
                <div>
                  <div className="font-heading font-black text-ink text-2xl md:text-3xl leading-none">
                    <StatCounter value={statLocations} suffix="" />
                  </div>
                  <div className="font-heading font-bold text-xs text-ink mt-1">pusat produksi</div>
                  <div className="text-gray-400 font-sans text-[10px] md:text-[11px] mt-0.5 leading-tight">Workshop di Sby</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-xl bg-lilac/70 text-indigo flex items-center justify-center mb-2">
                  <Shirt size={16} />
                </div>
                <div>
                  <div className="font-heading font-black text-ink text-2xl md:text-3xl leading-none">
                    <StatCounter value={statCapacity} suffix="+" />
                  </div>
                  <div className="font-heading font-bold text-xs text-ink mt-1">kaos / hari</div>
                  <div className="text-gray-400 font-sans text-[10px] md:text-[11px] mt-0.5 leading-tight">Kapasitas sablon</div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* ================= RIGHT VISUAL COLLAGE WITH MASCOT ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center pt-8 pb-6 lg:py-0"
          >
            {/* Collage Container */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] flex items-center justify-center">

              {/* 1. Main Workshop Card (Centered Big Card) */}
              <div className="relative z-10 w-[78%] h-[82%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src="/gallery-produksi.png"
                  alt="Aktivitas Workshop Pemuda KUB Dollyverse"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="font-heading font-bold text-xs tracking-wide">Workshop Putat Jaya</span>
                </div>
              </div>

              {/* 2. Top-Right Angled Polaroid Card */}
              <div className="absolute -top-3 right-0 z-20 w-[42%] bg-white p-2.5 pb-4 rounded-2xl shadow-xl border-2 border-white rotate-[8deg] hover:rotate-2 transition-transform duration-300">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src="/gallery-bazar.png"
                    alt="Karya Warga Dollyverse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 3. Bottom-Right Angled Polaroid Card */}
              <div className="absolute -bottom-6 right-2 z-20 w-[46%] bg-white p-2.5 pb-4 rounded-2xl shadow-xl border-2 border-white rotate-[4deg] hover:rotate-0 transition-transform duration-300">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-2">
                  <img
                    src="/gallery-pelatihan.png"
                    alt="Pelatihan Sablon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[10px] md:text-xs font-heading font-bold text-ink leading-tight">
                  Lebih dari sekadar kerja, ini tentang kesempatan.
                </p>
                <div className="w-10 h-0.5 bg-violet mt-1 rounded-full" />
              </div>

              {/* 4. Top Floating Badge: "Dari Komunitas Untuk Komunitas" */}
              <div className="absolute top-2 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2.5 -rotate-[3deg]">
                <div className="w-6 h-6 rounded-lg bg-violet/15 text-indigo flex items-center justify-center">
                  <Heart size={14} className="fill-indigo" />
                </div>
                <div className="text-[11px] font-heading font-extrabold text-ink leading-tight">
                  Dari Komunitas <br />
                  <span className="text-gray-400 font-sans font-normal text-[10px]">Untuk Komunitas</span>
                </div>
              </div>

              {/* 5. Right Floating Badge: "Bertumbuh Bersama" */}
              <div className="absolute top-[42%] right-[-10px] z-30 bg-indigo text-white px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2">
                <TrendingUp size={15} className="text-[#8A63FF]" />
                <span className="text-xs font-heading font-bold">Bertumbuh Bersama</span>
              </div>

              {/* 6. MASCOT DOLLYVERSE (Peeking & Sitting in front of cards) */}
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 left-2 sm:-left-4 z-30 w-36 sm:w-44 md:w-52 pointer-events-none drop-shadow-[0_15px_25px_rgba(74,60,158,0.35)]"
              >
                <img
                  src="/mascot-1.png"
                  alt="Maskot KUB Dollyverse"
                  className="w-full h-auto object-contain select-none"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

