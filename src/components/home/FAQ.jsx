'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-gray-200/80">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lilac/70 text-indigo font-heading font-bold text-xs uppercase tracking-wider">
            <HelpCircle size={14} />
            Pertanyaan Umum
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-ink">
            Kerap Ditanyakan <span className="text-indigo">(FAQ)</span>
          </h2>
          <p className="text-gray-600 font-sans text-sm md:text-base max-w-lg">
            Hal-hal yang sering ditanyakan seputar pemesanan kaos custom, sablon, dan cara order.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-indigo/40 bg-lilac/10 shadow-sm'
                    : 'border-gray-200/90 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 select-none focus:outline-none"
                >
                  <span className="font-heading font-bold text-base md:text-lg text-ink">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-indigo text-white rotate-180' : 'bg-gray-100 text-ink'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
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
                      <div className="px-5 pb-6 md:px-6 pt-0 text-gray-600 font-sans text-sm md:text-base leading-relaxed border-t border-gray-100 mt-2 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
