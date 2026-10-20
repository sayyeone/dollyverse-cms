'use client';

import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { featuredProducts as defaultProducts } from '../../data/products'
import { buildWaUrl } from '../../data/contact'
import { urlFor } from '@/sanity/client'

function formatRupiah(n) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
}

const defaultProductImages = {
  'kaos-custom': '/product-kaos.png',
  'mug': '/product-mug.png',
  'tote-bag': '/product-totebag.png',
  'tumbler': '/product-tumbler.png',
}

export default function FeaturedProducts({ sanityProducts = [] }) {
  // Jika di Sanity ada produk featured, gunakan itu. Jika belum ada, gunakan mock default!
  const hasSanity = sanityProducts && sanityProducts.length > 0;
  
  const displayProducts = hasSanity
    ? sanityProducts.map((p) => ({
        id: p._id,
        name: p.name,
        category: p.category,
        price: p.price,
        priceLabel: p.priceLabel || 'Mulai dari',
        badge: p.badge,
        imageSrc: p.image ? urlFor(p.image)?.url() : '/product-kaos.png',
        imageAlt: p.imageAlt || p.name,
        waText: p.waText || `Halo Dollyverse, saya mau tanya harga untuk produk: ${p.name}`,
      }))
    : defaultProducts.map((p) => ({
        id: p.id,
        name: p.name,
        category: p.category,
        price: p.price,
        priceLabel: p.priceLabel,
        badge: p.badge,
        imageSrc: defaultProductImages[p.id] || '/product-kaos.png',
        imageAlt: p.imageAlt,
        waText: p.waText,
      }));

  return (
    <section id="produk-unggulan" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Produk Unggulan"
              title="Custom Sesukamu, Mulai 1 Pcs"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="text" href="/produk">
              Lihat Semua Produk
            </Button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayProducts.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-lilac/60 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-lilac/40">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge>{product.badge}</Badge>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <span className="text-xs font-semibold text-indigo uppercase tracking-widest">
                  {product.category}
                </span>
                <h3 className="font-heading font-bold text-navy text-base leading-snug">
                  {product.name}
                </h3>
                <div className="mt-auto pt-2">
                  <div className="text-gray-400 text-xs">{product.priceLabel}</div>
                  <div className="font-heading font-extrabold text-indigo text-lg leading-none">
                    {formatRupiah(product.price)}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="px-4 pb-4">
                <a
                  href={buildWaUrl(product.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-2 rounded-xl border-2 border-indigo text-indigo text-sm font-semibold hover:bg-indigo hover:text-white transition-colors duration-200"
                >
                  Tanya Harga
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
