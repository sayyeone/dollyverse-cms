'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '../shared/Lightbox';
import { urlFor } from '@/sanity/client';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const defaultBentoItems = [
  {
    id: 1,
    title: 'Produksi Sablon DTF & Sublim',
    subtitle: 'Kapasitas hingga 200 kaos/hari dengan presisi tinggi di workshop Putat Jaya Surabaya.',
    category: 'Workshop',
    tag: 'PRODUKSI',
    src: '/gallery-produksi.png',
    span: 'col-span-12 md:col-span-8 row-span-2',
    aspect: 'min-h-[340px] md:min-h-[440px]',
  },
  {
    id: 2,
    title: 'Bazar & Pameran UMKM Surabaya',
    subtitle: 'Memperkenalkan produk lokal dan merchandise karya pemuda RW 12.',
    category: 'Komunitas',
    tag: 'BAZAR',
    src: '/gallery-bazar.png',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'min-h-[220px]',
  },
  {
    id: 3,
    title: 'Pelatihan Sablon Warga',
    subtitle: 'Diadakan di Wisma Barbara Lt. 3 untuk membangun kemandirian ekonomi kreatif pemuda.',
    category: 'Edukasi',
    tag: 'PELATIHAN',
    src: '/gallery-pelatihan.png',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'min-h-[220px]',
  },
  {
    id: 4,
    title: 'Kaos Custom Satuan & Desain Otentik',
    subtitle: 'Tanpa minimum order, melayani pesanan individu, kaos kelas, hingga apparel komunitas.',
    category: 'Katalog',
    tag: 'BEST SELLER',
    src: '/product-kaos.png',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'min-h-[260px]',
  },
  {
    id: 5,
    title: 'Merchandise & Suvenir Acara',
    subtitle: 'Mug custom, totebag canvas, dan tumbler dengan hasil cetak awet dan warna tajam.',
    category: 'Merch',
    tag: 'MERCHANDISE',
    src: '/product-totebag.png',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'min-h-[260px]',
  },
  {
    id: 6,
    title: 'Mug & Aksesoris Sablon Presisi',
    subtitle: 'Cocok untuk merchandise kantor, souvenir wisuda, dan hadiah personal.',
    category: 'Merch',
    tag: 'SOUVENIR',
    src: '/product-mug.png',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'min-h-[260px]',
  },
];

export default function BentoGallery({ sanityGallery = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const items = defaultBentoItems.map((item, index) => {
    if (sanityGallery && sanityGallery[index]) {
      const g = sanityGallery[index];
      return {
        ...item,
        title: g.title || item.title,
        src: g.image ? urlFor(g.image)?.url() : item.src,
        alt: g.alt || item.title,
      };
    }
    return item;
  });

  const lightboxImages = items.map((i) => ({ src: i.src, alt: i.title }));

  const handlePrev = () =>
    setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length);

  const handleNext = () =>
    setLightboxIndex((i) => (i + 1) % lightboxImages.length);

  return (
    <section id="galeri-bento" className="py-20 md:py-28 bg-[#FAF9F5] border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lilac/70 text-indigo font-heading font-bold text-xs uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              Dokumentasi & Portofolio
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Aksi Nyata & <span className="text-indigo">Hasil Karya Kami</span>
            </h2>
            <p className="text-gray-600 font-sans text-sm md:text-base mt-2 max-w-xl">
              Arahkan kursor pada kartu foto untuk melihat detail cerita di balik setiap karya.
            </p>
          </motion.div>

          <div className="text-xs text-gray-500 font-sans">
            Klik foto untuk memperbesar tampilan (Lightbox)
          </div>
        </div>

        {/* BENTO GRID WITH GLASSMORPHISM HOVER REVEAL */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setLightboxIndex(index)}
              className={`${item.span} ${item.aspect} relative rounded-3xl overflow-hidden group cursor-pointer border border-white/60 bg-white shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              {/* Clean Image Background without harsh pre-scrim */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Minimal permanent top tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white font-heading font-semibold text-xs tracking-wider border border-white/15">
                  {item.tag}
                </span>
              </div>

              {/* Top-right Lightbox Icon Button */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 border border-white/25">
                <ArrowUpRight size={16} />
              </div>

              {/* GLASSMORPHISM HOVER REVEAL CARD
                  - Normal state: Tersembunyi di bawah (translate-y-full / opacity-0)
                  - Hover state: Meluncur naik mulus dengan efek kaca blur (backdrop-blur-xl)
              */}
              <div className="absolute inset-x-3 bottom-3 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
                <div className="rounded-2xl p-4 md:p-5 bg-ink/75 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col gap-1.5 text-white">
                  <span className="text-[#b8e820] font-sans font-bold text-[11px] md:text-xs tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-base md:text-lg text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/85 font-sans text-xs md:text-sm leading-relaxed line-clamp-3">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
