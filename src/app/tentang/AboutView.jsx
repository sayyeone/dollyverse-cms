'use client';

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Timeline from '@/components/shared/Timeline'
import Button from '@/components/ui/Button'
import { timeline, partners } from '@/data/timeline'
import { buildWaUrl } from '@/data/contact'
import { Shirt, Coins, Palette, Zap } from 'lucide-react'

const features = [
  { 
    icon: Shirt, 
    title: 'Custom Satuan', 
    desc: 'Mulai 1 pcs, tanpa minimal order.' 
  },
  { 
    icon: Coins, 
    title: 'Harga Terjangkau', 
    desc: 'Untuk semua kalangan.' 
  },
  { 
    icon: Palette, 
    title: 'Desain Otentik', 
    desc: 'Menggambarkan transformasi Dolly.' 
  },
  { 
    icon: Zap, 
    title: 'Kapasitas Tinggi', 
    desc: 'Hingga 200 kaos per hari.' 
  },
];

export default function AboutView() {
  return (
    <>
      {/* Page header */}
      <div className="pt-28 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 to-violet/10" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Transformasi Kampung Dolly Lewat Kreativitas"
              subtitle="Cerita lengkap KUB Dollyverse — siapa kami, dari mana kami berasal, dan ke mana kami menuju."
              light
            />
          </motion.div>
        </div>
      </div>

      <main className="bg-white">
        {/* Deskripsi Usaha */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <SectionHeading
                  eyebrow="Siapa Kami"
                  title="KUB Dollyverse"
                  className="mb-6"
                />
                <div className="space-y-4 text-gray-600 leading-relaxed font-sans text-sm md:text-base">
                  <p>
                    KUB Dollyverse beranggotakan <strong className="text-navy">10 orang pemuda</strong> dari RW 12 Kelurahan Putat Jaya, kawasan eks-lokalisasi Dolly, Kecamatan Sawahan, Surabaya.
                  </p>
                  <p>
                    Kami bergerak di bidang <strong className="text-navy">penjualan kaos berdesain otentik</strong>, jasa sablon kaos, merchandise (lanyard, mug, tumbler, sablon bolpoin, tote bag, topi, pin), dan jasa pelatihan sablon.
                  </p>
                  <p>
                    Dengan teknik <strong className="text-navy">DTF dan sublim</strong> (hingga 200 kaos per hari) serta sablon manual, kami beroperasi dari dua lokasi: Balai RW 12 dan eks-Wisma Barbara lantai 3.
                  </p>
                  <p>
                    Nama <em className="text-indigo">Dolly + universe = Dollyverse</em> — semesta kreativitas dari Kampung Dolly. Logo jempol melambangkan spirit perubahan dan jaminan kualitas. Maskot gabungan sura dan buaya menandakan ambisi menjadi usaha ikonik Surabaya.
                  </p>
                </div>
              </div>

              {/* Ciri khas cards dengan Lucide React Icons bersih */}
              <div className="grid grid-cols-2 gap-4">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="p-5 rounded-2xl bg-lilac/40 border border-lilac hover:border-indigo/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white text-indigo flex items-center justify-center mb-3 shadow-xs">
                      <Icon size={20} />
                    </div>
                    <div className="font-heading font-bold text-navy text-sm mb-1">{title}</div>
                    <div className="text-gray-500 font-sans text-xs leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="border-t border-lilac" />
        </div>

        {/* Timeline */}
        <section className="py-20 md:py-24 bg-lilac/20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionHeading
              eyebrow="Perjalanan Kami"
              title="Latar Belakang & Jejak Langkah"
              subtitle="Dari inisiasi warga hingga menjadi kelompok usaha sablon mandiri."
              className="mb-14"
            />
            <div className="max-w-3xl">
              <Timeline items={timeline} />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="border-t border-lilac" />
        </div>

        {/* Mitra & Dukungan */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionHeading
              eyebrow="Kolaborasi"
              title="Mitra & Dukungan"
              subtitle="Pihak-pihak yang telah mendukung perjalanan KUB Dollyverse."
              className="mb-12"
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {partners.map(({ name, role }) => (
                <div
                  key={name}
                  className="p-5 rounded-2xl border border-lilac bg-white shadow-xs hover:border-violet transition-colors flex flex-col justify-between"
                >
                  <span className="font-heading font-bold text-navy text-sm">{name}</span>
                  <span className="text-xs text-gray-400 mt-2">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-heading font-black text-2xl md:text-3xl mb-4 text-white">
              Ingin Bekerja Sama atau Memesan?
            </h2>
            <p className="text-white/70 mb-8 font-sans text-sm md:text-base">
              Kami siap melayani kebutuhan kaos custom, merchandise, maupun pelatihan sablon.
            </p>
            <Button
              variant="primary"
              href={buildWaUrl('Halo Dollyverse, saya ingin tahu lebih banyak tentang KUB Dollyverse!')}
              external
            >
              Hubungi via WhatsApp
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
