'use client';

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import { products as defaultProducts } from '@/data/products'
import { buildWaUrl } from '@/data/contact'
import { urlFor } from '@/sanity/client'

function formatRupiah(n) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(n)
}

const defaultImages = {
  'kaos-custom': '/product-kaos.png',
  mug: '/product-mug.png',
  'tote-bag': '/product-totebag.png',
  tumbler: '/product-tumbler.png',
  lanyard: '/product-kaos.png',
  topi: '/product-kaos.png',
}

export default function ProductsView({ sanityProducts = [] }) {
  const hasSanity = sanityProducts && sanityProducts.length > 0

  const items = hasSanity
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
        imageSrc: defaultImages[p.id] || '/product-kaos.png',
        imageAlt: p.imageAlt,
        waText: p.waText,
      }))

  return (
    <>
      <div className="pt-28 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 to-violet/10" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Produk Kami"
              title="Custom Sesukamu, Mulai 1 Pcs"
              subtitle="Pilih produk, chat WhatsApp, dan kami siap bantu wujudkan desainmu."
              light
            />
          </motion.div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((product, i) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-lilac/60 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
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

                <div className="p-5 flex flex-col gap-2 flex-1">
                  <span className="text-xs font-semibold text-indigo uppercase tracking-widest">
                    {product.category}
                  </span>
                  <h3 className="font-heading font-bold text-navy text-lg leading-snug">
                    {product.name}
                  </h3>
                  <div className="mt-auto pt-3">
                    <div className="text-gray-400 text-xs">{product.priceLabel}</div>
                    <div className="font-heading font-extrabold text-indigo text-xl leading-none">
                      {formatRupiah(product.price)}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <a
                    href={buildWaUrl(product.waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-2.5 rounded-xl border-2 border-indigo text-indigo text-sm font-semibold hover:bg-indigo hover:text-white transition-colors duration-200"
                  >
                    Tanya Harga
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
