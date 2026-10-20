'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/sanity/client";

export default function Hero({ settings }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Ambil gambar hero dari Sanity bila ada, jika belum pakai /mockup-2.png
  const mockupImageSrc = settings?.heroMockupImage 
    ? urlFor(settings.heroMockupImage)?.url() 
    : "/mockup-2.png";

  const headline = settings?.heroHeadline || "Dari Kampung Dolly, untuk Cerita Baru.";
  const subheadline = settings?.heroSubheadline || "Custom t-shirt, merchandise, dan pelatihan kreatif untuk mendukung ekonomi warga RW 12 Putat Jaya, Surabaya.";

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 md:pt-28 pb-10 overflow-hidden bg-[#FAF9F5] text-ink flex flex-col justify-center"
      aria-label="Hero section"
    >
      {/* Ambient Blur Glow Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[85vw] h-[550px] bg-gradient-to-b from-[#b8e820]/25 via-violet/15 to-transparent blur-3xl pointer-events-none z-0 rounded-full" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold/15 blur-3xl pointer-events-none z-0 rounded-full" />

      {/* VERTICAL SERVICE INDEX */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        aria-label="Layanan kami"
        className="hidden xl:flex absolute top-44 right-10 2xl:right-[20%] flex-col z-30"
      >
        {[
          { label: 'Custom T-Shirt',   num: '01', href: '/produk' },
          { label: 'Merchandise',      num: '02', href: '/produk' },
          { label: 'Pelatihan Kreatif', num: '03', href: '/layanan' },
          { label: 'Komunitas',        num: '04', href: '/tentang' },
        ].map((item) => (
          <Link
            key={item.num}
            href={item.href}
            className="group flex items-center justify-between gap-8 pl-3 py-2.5 border-l border-ink/20 hover:border-[#b8e820] transition-colors duration-200"
          >
            <span className="font-heading font-semibold text-sm text-ink/70 group-hover:text-ink transition-colors duration-200 whitespace-nowrap">
              {item.label}
            </span>
            <span className="font-mono text-xs text-ink/40 group-hover:text-ink transition-colors duration-200 tabular-nums">
              /{item.num}
            </span>
          </Link>
        ))}
      </motion.nav>

      {/* ABSOLUTE BACKGROUND LAYER: "KUB" & "DOLLYVERSE." */}
      <div className="absolute top-28 md:top-32 lg:top-36 left-10 md:left-20 lg:left-32 xl:left-40 right-4 z-0 select-none pointer-events-none -rotate-2 origin-top-left">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading font-black text-ink tracking-tight text-[9vw] lg:text-[7vw] leading-[0.95] uppercase text-left block"
        >
          <span>KUB</span>
          <br />
          <span>
            DOLLYVERSE<span className="text-[#b8e820]">.</span>
          </span>
        </motion.h1>

        {/* Underline swoosh stroke */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="origin-left mt-2 ml-1 lg:ml-2 w-44 md:w-72 h-3 md:h-3.5 bg-[#b8e820] rounded-full shadow-sm"
        />
      </div>

      {/* MAIN CONTENT COMPOSITION */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full flex-1 flex flex-col justify-center pt-28 md:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-2 md:my-0">
          {/* LEFT CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-7 z-20 lg:-ml-32 xl:-ml-56 2xl:-ml-64 lg:pt-16"
          >
            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-ink leading-[1.05]">
                Dari Kampung Dolly,
                <br />
                <span className="text-navy">untuk Cerita Baru.</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm md:max-w-md lg:max-w-lg">
                {subheadline}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/produk"
                className="inline-flex items-center gap-3 bg-[#b8e820] hover:bg-[#c5f028] text-ink font-heading font-extrabold text-sm md:text-base lg:text-lg px-8 py-4 lg:px-10 lg:py-5 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Lihat Produk</span>
                <ArrowRight size={20} />
              </Link>

              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-3 group text-ink hover:text-indigo font-bold text-sm md:text-base lg:text-lg py-2 px-3 rounded-full transition-all"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-ink flex items-center justify-center bg-white/70 group-hover:bg-ink group-hover:text-white transition-all shadow-xs">
                  <Play size={20} className="ml-0.5 fill-current" />
                </div>
                <span>Video Profil</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE T-SHIRT SHOWCASE */}
          <div className="lg:col-span-7 relative flex flex-col items-center lg:items-end justify-center min-h-[380px] md:min-h-[460px] my-2 lg:my-0 z-20">
            <div className="relative z-20 flex items-center justify-end">
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <img
                  src={mockupImageSrc}
                  alt="Custom T-Shirt KUB Dollyverse"
                  className="w-76 sm:w-[440px] md:w-[540px] lg:w-[600px] xl:w-[680px] 2xl:w-[740px] h-auto max-w-none object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.24)] transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>

            {/* Bottom Right Floating Action Orb */}
            <Link
              href="/layanan"
              className="absolute -bottom-6 right-0 lg:right-4 z-30 w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#b8e820] text-ink font-heading font-black text-xs md:text-sm p-4 flex flex-col items-center justify-center text-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border-4 border-white"
            >
              <span className="text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </span>
              <span>Lihat Prosesnya?</span>
            </Link>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL LIGHTBOX */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ink border border-white/10 rounded-3xl overflow-hidden max-w-3xl w-full p-6 relative shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10"
              >
                <X size={20} />
              </button>
              <h3 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-2">
                <Sparkles className="text-[#b8e820]" size={20} />
                Profil KUB Dollyverse Surabaya
              </h3>
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Video Profil Dollyverse"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-white/60 text-sm mt-4 text-center">
                Melihat langsung semangat pemuda RW 12 Putat Jaya merintis usaha
                sablon digital bernilai sosial.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
