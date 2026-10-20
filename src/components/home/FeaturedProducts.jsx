'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { urlFor } from '@/sanity/client';

const defaultCatalog = [
  {
    num: '01',
    name: 'KAOS CUSTOM',
    desc: 'Regular & oversized',
    imageSrc: '/product-kaos.png',
  },
  {
    num: '02',
    name: 'POLO SHIRT',
    desc: 'Untuk komunitas dan kantor',
    imageSrc: '/mockup-1.png',
  },
  {
    num: '03',
    name: 'HOODIE',
    desc: 'Nyaman, desain bebas',
    imageSrc: '/product-kaos.png',
  },
  {
    num: '04',
    name: 'JERSEY',
    desc: 'Untuk tim dan event',
    imageSrc: '/product-kaos.png',
  },
  {
    num: '05',
    name: 'TOTE BAG',
    desc: 'Canvas dan drill',
    imageSrc: '/product-totebag.png',
  },
  {
    num: '06',
    name: 'MUG & TUMBLER',
    desc: 'Souvenir acara & kantor',
    imageSrc: '/product-mug.png',
  },
];

export default function FeaturedProducts({ sanityProducts = [] }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const hasSanity = sanityProducts && sanityProducts.length > 0;
  const products = hasSanity
    ? sanityProducts.map((p, idx) => ({
        num: String(idx + 1).padStart(2, '0'),
        name: p.name.toUpperCase(),
        desc: p.category || 'Custom merchandise',
        imageSrc: p.image ? urlFor(p.image)?.url() : '/product-kaos.png',
      }))
    : defaultCatalog;

  return (
    <section id="produk-unggulan" className="py-20 md:py-28 bg-[#FAF9FF] relative overflow-hidden border-t border-purple-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-violet/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-indigo/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ECE7FE] text-indigo text-xs font-heading font-extrabold px-4 py-1.5 rounded-full w-max shadow-2xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
              <span>PRODUK UNGGULAN</span>
            </div>

            {/* Headline with Block Badge Sticker */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              PILIH PRODUK <br />
              <span className="inline-block bg-[#8A63FF] text-white px-4 py-1 rounded-xl shadow-sm -rotate-1 mt-1">
                CUSTOMMU.
              </span>
              <span className="inline-block ml-3 text-gold text-2xl md:text-3xl font-mono select-none">
                彡
              </span>
            </h2>
          </div>

          {/* Right Button */}
          <div>
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-indigo/30 bg-white hover:bg-indigo hover:text-white text-indigo font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-2xs hover:shadow-md group"
            >
              <span>Lihat Semua Produk</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ================= CAROUSEL / HORIZONTAL SCROLL CARDS ================= */}
        <div className="relative">
          
          {/* Navigation Arrows (Float Left & Right) */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-[40%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-purple-100 text-indigo items-center justify-center hover:bg-indigo hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Scroll ke kiri"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-[40%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-purple-100 text-indigo items-center justify-center hover:bg-indigo hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Scroll ke kanan"
          >
            <ChevronRight size={22} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 md:gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((item) => (
              <motion.article
                key={item.num}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-2xl p-3 md:p-3.5 border-2 border-navy/90 shadow-[0_8px_0_0_#2F3552] flex flex-col justify-between snap-start group"
              >
                {/* Image Window Frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Body */}
                <div className="p-3 pt-4 space-y-1">
                  {/* Number 01-05 */}
                  <span className="font-heading font-black text-xl md:text-2xl text-[#8A63FF] block leading-none">
                    {item.num}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-black text-base md:text-lg text-ink leading-tight pt-1">
                    {item.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-sans text-xs md:text-sm text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Purple Progress Line Accent */}
          <div className="w-full h-1.5 bg-gray-200/80 rounded-full overflow-hidden mt-2">
            <div className="w-1/3 h-full bg-[#8A63FF] rounded-full" />
          </div>

        </div>

      </div>
    </section>
  );
}
