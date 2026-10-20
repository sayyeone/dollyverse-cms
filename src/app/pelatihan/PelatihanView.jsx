'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Layers,
  Wrench,
  BookOpen
} from 'lucide-react';
import { buildWaUrl } from '@/data/contact';

const curriculum = [
  {
    step: '01',
    title: 'Pengenalan Bahan & Alat',
    desc: 'Mengenal karakteristik kain katun, tinta plastisol, rubber, serta prinsip kerja mesin cetak DTF dan sublimasi.',
    icon: Layers,
  },
  {
    step: '02',
    title: 'Setting Desain Siap Cetak',
    desc: 'Praktik layouting, separasi warna di CorelDraw/Photoshop, dan teknik rip software untuk cetak digital.',
    icon: BookOpen,
  },
  {
    step: '03',
    title: 'Praktik Sablon Manual & Digital',
    desc: 'Hands-on langsung afdruk screen, gesut pasta sablon, operasional mesin DTF, dan teknik heat press presisi.',
    icon: Wrench,
  },
  {
    step: '04',
    title: 'Finishing & Strategi Usaha',
    desc: 'Quality control, packaging kaos, kalkulasi HPP produk, serta trik pemasaran kaos custom satuan hingga pesanan massal.',
    icon: Award,
  },
];

const packages = [
  {
    name: 'Kelas Reguler Komunitas',
    badge: 'Paling Populer',
    desc: 'Cocok untuk pemula dan pemuda yang ingin memiliki keahlian sablon praktis dari nol.',
    duration: '2 Hari Pelatihan Intensif',
    location: 'Wisma Barbara Lt. 3 Surabaya',
    benefits: [
      'Modul lengkap teknik sablon DTF & Manual',
      'Praktik langsung dengan alat workshop',
      'Kaos hasil cetak sendiri dibawa pulang',
      'Sertifikat resmi pelatihan KUB Dollyverse',
      'Grup mentoring WhatsApp seumur hidup',
    ],
    waMessage: 'Halo Dollyverse, saya tertarik mendaftar Kelas Reguler Pelatihan Sablon!',
  },
  {
    name: 'Pelatihan Instansi & Komunitas',
    badge: 'Custom Jadwal',
    desc: 'Program khusus kelompok kerja, sekolah kejuruan, karang taruna, atau CSR instansi pemerintah.',
    duration: 'Fleksibel (Sesuai Kesepakatan)',
    location: 'Workshop Dollyverse / Lokasi Mitra',
    benefits: [
      'Kurikulum disesuaikan kebutuhan peserta',
      'Instruktur praktisi berpengalaman',
      'Alat dan bahan praktik disediakan penuh',
      'Studi kasus wirausaha sosial mandiri',
      'Dokumentasi & sertifikat untuk setiap peserta',
    ],
    waMessage: 'Halo Dollyverse, kami ingin konsultasi jadwal Pelatihan Sablon untuk Instansi/Kelompok.',
  },
];

export default function PelatihanView() {
  return (
    <div className="bg-[#FAF9FF] text-ink min-h-screen">
      
      {/* ================= HERO HEADER ================= */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-navy relative overflow-hidden text-white">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#8A63FF]/15 blur-[130px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-violet/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-[#8A63FF] text-xs font-heading font-extrabold uppercase tracking-wider">
                <GraduationCap size={15} />
                <span>PROGRAM PEMBERDAYAAN & EDUKASI</span>
              </div>

              {/* Title */}
              <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
                Belajar Sablon <br />
                <span className="text-[#8A63FF] relative inline-block">
                  Dari Nol Sampai Buka Usaha.
                </span>
              </h1>

              {/* Desc */}
              <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
                Dollyverse membuka pintu bagi siapa saja yang ingin belajar keterampilan sablon digital (DTF & sublim) dan sablon manual. Belajar langsung dari praktisi pemuda RW 12 Putat Jaya di pusat produksi eks-Wisma Barbara.
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={buildWaUrl('Halo Dollyverse, saya ingin tanya info pendaftaran pelatihan sablon!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#8A63FF] hover:bg-[#784eed] text-white font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-[#8A63FF]/30 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <MessageCircle size={18} />
                  <span>Daftar Pelatihan via WhatsApp</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#paket"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-heading font-bold text-sm sm:text-base transition-colors"
                >
                  <span>Lihat Pilihan Kelas</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column (Hero Photo Collage) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-white group rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/gallery-pelatihan.png"
                  alt="Suasana Pelatihan Sablon di Wisma Barbara"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8A63FF]">
                    <MapPin size={14} />
                    <span>Eks-Wisma Barbara Lt. 3, Surabaya</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mt-1">
                    Workshop Produksi & Pelatihan Terpadu
                  </h3>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3 text-ink">
                <div className="w-11 h-11 rounded-xl bg-lilac/70 text-indigo flex items-center justify-center shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <p className="font-heading font-black text-sm text-ink leading-tight">Bersertifikat</p>
                  <p className="font-sans text-xs text-gray-500">Bimbingan sampai mandiri</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ================= FASILITAS & KEUNGGULAN (3 METRIK) ================= */}
      <section className="py-12 bg-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF9FF] border border-purple-100">
              <div className="w-12 h-12 rounded-2xl bg-[#ECE7FE] text-indigo flex items-center justify-center shrink-0">
                <Users size={22} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-ink">Praktik 80% & Teori 20%</h4>
                <p className="font-sans text-xs text-gray-500 mt-0.5">Langsung pegang alat dan mesin nyata.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF9FF] border border-purple-100">
              <div className="w-12 h-12 rounded-2xl bg-[#ECE7FE] text-indigo flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-ink">Pusat Produksi Resmi</h4>
                <p className="font-sans text-xs text-gray-500 mt-0.5">Fasilitas workshop milik Pemkot Surabaya.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF9FF] border border-purple-100">
              <div className="w-12 h-12 rounded-2xl bg-[#ECE7FE] text-indigo flex items-center justify-center shrink-0">
                <Sparkles size={22} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-ink">Jaringan Komunitas</h4>
                <p className="font-sans text-xs text-gray-500 mt-0.5">Terkoneksi dengan vendor kaos & supplier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= KURIKULUM & MATERI ================= */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#ECE7FE] text-indigo text-xs font-heading font-extrabold px-4 py-1.5 rounded-full w-max shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
              <span>KURIKULUM TERPADU</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
              Materi yang Akan <span className="text-indigo">Kamu Kuasai</span>
            </h2>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
              Disusun secara sistematis agar peserta dari berbagai latar belakang bisa menyerap ilmu sablon dengan cepat dan aplikatif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-6 border-2 border-navy shadow-[0_6px_0_0_#2F3552] flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#ECE7FE] text-indigo flex items-center justify-center group-hover:bg-indigo group-hover:text-white transition-colors">
                        <Icon size={22} />
                      </div>
                      <span className="font-heading font-black text-2xl text-indigo/30 select-none">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-ink leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================= PAKET PELATIHAN ================= */}
      <section id="paket" className="py-20 md:py-28 bg-[#F4F1FD] border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-white text-indigo text-xs font-heading font-extrabold px-4 py-1.5 rounded-full w-max shadow-2xs border border-purple-100">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
              <span>PILIHAN KELAS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
              Pilih Program <span className="text-indigo">Sesuai Kebutuhanmu</span>
            </h2>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
              Tersedia kelas perorangan maupun paket pelatihan rombongan untuk lembaga dan komunitas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border-2 border-navy shadow-[0_8px_0_0_#2F3552] flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Badge & Title */}
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-[#ECE7FE] text-indigo font-heading font-bold text-xs uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                      <Calendar size={14} className="text-indigo" />
                      {pkg.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-2xl text-ink">
                      {pkg.name}
                    </h3>
                    <p className="font-sans text-gray-600 text-sm mt-2 leading-relaxed">
                      {pkg.desc}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 pt-2 border-t border-gray-100">
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-gray-400 block">
                      Benefit yang Didapat:
                    </span>
                    {pkg.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-gray-700">
                        <CheckCircle2 size={16} className="text-[#8A63FF] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-8 mt-8 border-t border-gray-100">
                  <a
                    href={buildWaUrl(pkg.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-indigo hover:bg-navy text-white font-heading font-bold text-sm py-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle size={17} />
                    <span>Konsultasi & Daftar Kelas</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="py-20 bg-ink text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-heading font-extrabold tracking-[0.2em] uppercase text-[#8A63FF]">
            SIAP MEMULAI?
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white">
            Waktunya Memiliki Keterampilan <br />
            <span className="text-[#8A63FF]">Kreatif yang Menghasilkan.</span>
          </h2>
          <p className="text-white/60 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Hubungi kami sekarang untuk cek jadwal batch pelatihan terdekat atau rancang kurikulum khusus untuk instansi Anda.
          </p>
          <div className="pt-2">
            <a
              href={buildWaUrl('Halo Dollyverse, saya mau tanya jadwal batch terdekat untuk pelatihan sablon!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#8A63FF] hover:bg-[#784eed] text-white font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-[#8A63FF]/30 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageCircle size={18} />
              <span>Tanya Jadwal Pelatihan</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
