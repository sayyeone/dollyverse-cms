'use client';
// src/pages/About.jsx
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Timeline from '@/components/shared/Timeline'
import Button from '@/components/ui/Button'
import { timeline, partners } from '@/data/timeline'
import { buildWaUrl } from '@/data/contact'

export default function AboutView() {
  return (
    <>
      

      {/* Page header */}
      <div className="pt-24 pb-16 bg-navy relative overflow-hidden">
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
              subtitle="Cerita lengkap KUB Dollyverse â€” siapa kami, dari mana kami berasal, dan ke mana kami menuju."
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
                <div className="space-y-4 text-gray-600 leading-relaxed">
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
                    Nama <em className="text-indigo">Dolly + universe = Dollyverse</em> â€” semesta kreativitas dari Kampung Dolly. Logo jempol melambangkan spirit perubahan dan jaminan kualitas. Maskot gabungan sura dan buaya menandakan ambisi menjadi usaha ikonik Surabaya.
                  </p>
                </div>
              </div>

              {/* Ciri khas cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'ðŸ‘', title: 'Custom Satuan', desc: 'Mulai 1 pcs, tanpa minimal order.' },
                  { icon: 'ðŸ’°', title: 'Harga Terjangkau', desc: 'Untuk semua kalangan.' },
                  { icon: 'ðŸŽ¨', title: 'Desain Otentik', desc: 'Menggambarkan transformasi Dolly.' },
                  { icon: 'ðŸš€', title: 'Kapasitas Tinggi', desc: 'Hingga 200 kaos per hari.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="p-5 rounded-2xl bg-lilac/40 border border-lilac">
                    <div className="text-2xl mb-2">{icon}</div>
                    <div className="font-bold text-navy text-sm mb-1">{title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
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
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <SectionHeading
                  eyebrow="Perjalanan Kami"
                  title="Dari Inisiasi ke Aksi"
                  subtitle="Bagaimana Dollyverse tumbuh dari ide menjadi usaha nyata yang memberdayakan warga."
                  className="mb-10"
                />
              </div>
              <div>
                <Timeline items={timeline} />
              </div>
            </div>
          </div>
        </section>

        {/* Mitra dan Dukungan */}
        <section className="py-16 md:py-20 bg-lilac/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionHeading
              eyebrow="Mitra dan Dukungan"
              title="Berdiri Bersama Banyak Pihak"
              subtitle="Dollyverse tidak berjalan sendiri. Terima kasih atas dukungan semua pihak yang telah membantu perjalanan kami."
              align="center"
              className="mb-10"
            />
            <div className="flex flex-wrap justify-center gap-4">
              {partners.map((name) => (
                <div
                  key={name}
                  className="px-5 py-3 rounded-xl bg-white border border-lilac text-navy font-semibold text-sm shadow-sm"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-xl mx-auto px-4 text-center flex flex-col items-center gap-6">
            <p className="text-gray-500 text-lg">Tertarik bekerja sama atau ingin tahu lebih banyak?</p>
            <a
              href={buildWaUrl('Halo Dollyverse, saya ingin tahu lebih lanjut tentang KUB Dollyverse.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo to-violet text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

