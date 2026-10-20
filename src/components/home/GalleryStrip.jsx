'use client';

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Lightbox from '../shared/Lightbox'
import { urlFor } from '@/sanity/client'

const defaultGalleryImages = [
  { src: '/gallery-produksi.png', alt: 'Proses produksi DTF di workshop Dollyverse' },
  { src: '/gallery-bazar.png', alt: 'Stand Dollyverse di bazar lokal Surabaya' },
  { src: '/gallery-pelatihan.png', alt: 'Pelatihan sablon di Wisma Barbara' },
  { src: '/product-kaos.png', alt: 'Kaos custom hasil produksi Dollyverse' },
]

export default function GalleryStrip({ sanityGallery = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const hasSanity = sanityGallery && sanityGallery.length > 0;
  const galleryImages = hasSanity
    ? sanityGallery.map((g) => ({
        src: g.image ? urlFor(g.image)?.url() : '/gallery-produksi.png',
        alt: g.alt || g.title || 'Foto Kegiatan Dollyverse',
      }))
    : defaultGalleryImages;

  const handlePrev = () =>
    setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)

  const handleNext = () =>
    setLightboxIndex((i) => (i + 1) % galleryImages.length)

  return (
    <section id="galeri" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionHeading
            eyebrow="Galeri"
            title="Lihat Aksi Kami"
            subtitle="Dari workshop hingga bazar — semangat Kampung Dolly dalam setiap karya."
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Buka foto: ${img.alt}`}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-lilac focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white/0 group-hover:text-white/90 font-bold text-sm transition-colors duration-300 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                  Perbesar
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}
