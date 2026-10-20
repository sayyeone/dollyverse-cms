'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah bisa pesan kaos custom satuan tanpa minimal order?',
    a: 'Bisa banget! Kami melayani pesanan mulai dari 1 pcs menggunakan teknologi cetak DTF (Direct to Film) berkualitas tinggi dengan harga yang sangat ramah kantong.',
  },
  {
    q: 'Teknik sablon apa saja yang tersedia di KUB Dollyverse?',
    a: 'Kami menyediakan sablon digital DTF (cepat, full-color, awet), sublimasi (khusus jersey/polyester), serta sablon manual/screen printing untuk kebutuhan pesanan partai besar di workshop kami.',
  },
  {
    q: 'Berapa lama proses pengerjaan pesanan kaos atau merchandise?',
    a: 'Untuk pesanan satuan (1-5 pcs), biasanya selesai dalam 1-2 hari kerja. Untuk pesanan kelompok/seragam partai banyak, estimasi pengerjaan 3-7 hari kerja tergantung kuantitas dan antrean.',
  },
  {
    q: 'Bagaimana jika saya belum punya desain yang siap cetak?',
    a: 'Tim kami siap membantu Anda menyusun layout atau merapikan file desain Anda agar siap dicetak secara presisi.',
  },
  {
    q: 'Di mana lokasi workshop Dollyverse jika ingin konsultasi langsung?',
    a: 'Kami memiliki 2 lokasi di Putat Jaya Surabaya: Balai RW 12 (pusat sablon digital & merchandise) dan eks-Wisma Barbara Lantai 3 (pusat sablon manual & pelatihan).',
  },
  {
    q: 'Apakah Dollyverse melayani pengiriman ke luar kota Surabaya?',
    a: 'Ya, kami melayani pengiriman ke seluruh wilayah Indonesia melalui ekspedisi terpercaya dengan packing yang aman dan rapi.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= SISI KIRI (STICKY HEADLINE) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-4"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#ECE7FE] text-indigo text-xs font-heading font-extrabold px-4 py-1.5 rounded-full w-max shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
              <span>PERTANYAAN UMUM</span>
            </div>

            {/* Title */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.1]">
              Frequently <br />
              <span className="text-indigo">asked</span> <br />
              questions
            </h2>

            <p className="font-sans text-gray-500 text-sm md:text-base leading-relaxed max-w-sm pt-2">
              Punya pertanyaan seputar proses sablon, estimasi waktu, atau konsultasi desain? Temukan jawabannya di sini.
            </p>
          </motion.div>


          {/* ================= SISI KANAN (MINIMALIST ACCORDION LIST) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 divide-y divide-gray-200/80 border-y border-gray-200/80"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6 sm:py-7 group transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left flex items-start justify-between gap-6 select-none focus:outline-none"
                  >
                    <span className={`font-heading font-bold text-base sm:text-lg md:text-xl transition-colors duration-200 ${
                      isOpen ? 'text-indigo' : 'text-ink group-hover:text-indigo'
                    }`}>
                      {faq.q}
                    </span>

                    <span className="shrink-0 mt-1 text-gray-400 group-hover:text-indigo transition-colors duration-200">
                      {isOpen ? (
                        <Minus size={20} className="text-indigo" />
                      ) : (
                        <Plus size={20} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed pt-3 pr-8">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
