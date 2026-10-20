'use client';
// src/pages/Contact.jsx
import { motion } from 'framer-motion'
import { MapPin, Camera, Play, MessageCircle, ExternalLink } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { locations, socials, marketplaces, buildWaUrl } from '@/data/contact'

const socialIcons = { Instagram: Camera, Youtube: Play, MessageCircle }

export default function ContactView() {
  return (
    <>
      

      {/* Page header */}
      <div className="pt-24 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 to-violet/10" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionHeading
              eyebrow="Hubungi Kami"
              title="Yuk, Ngobrol dengan Kami"
              subtitle="Kami senang mendengar cerita dan kebutuhanmu. Chat WhatsApp atau datang langsung ke workshop."
              light
            />
          </motion.div>
        </div>
      </div>

      <main id="kontak" className="bg-white">
        {/* Lokasi Produksi */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionHeading
              eyebrow="Lokasi Produksi"
              title="Dua Pusat Produksi"
              className="mb-10"
            />
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-lilac overflow-hidden shadow-sm"
                >
                  {/* Map placeholder */}
                  <div className="h-48 bg-lilac/40 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <MapPin size={40} className="mx-auto mb-2 text-indigo/40" />
                      <p className="text-sm">Peta akan tersedia segera</p>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-navy text-lg mb-1">{loc.name}</h3>
                    <p className="text-gray-500 text-sm mb-3 leading-relaxed">{loc.address}</p>
                    {/* Service tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {loc.services.map((s) => (
                        <span key={s} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-lilac text-indigo">
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-indigo text-sm font-semibold hover:text-violet transition-colors"
                    >
                      <MapPin size={14} /> Buka di Google Maps <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontak & Sosial */}
        <section className="py-16 md:py-20 bg-lilac/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Social media */}
              <div>
                <SectionHeading
                  eyebrow="Media Sosial"
                  title="Temukan Kami Di Sini"
                  className="mb-6"
                />
                <div className="flex flex-col gap-4">
                  {socials.map((s) => {
                    const Icon = socialIcons[s.icon]
                    return (
                      <a
                        key={s.id}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-lilac hover:border-indigo/40 hover:shadow-md transition-all duration-200 group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-indigo/10 flex items-center justify-center text-indigo group-hover:bg-indigo group-hover:text-white transition-colors duration-200">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-navy text-sm">{s.label}</div>
                          <div className="text-gray-400 text-xs">{s.handle}</div>
                        </div>
                        <ExternalLink size={14} className="ml-auto text-gray-300 group-hover:text-indigo transition-colors" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Marketplace */}
              <div>
                <SectionHeading
                  eyebrow="Marketplace"
                  title="Belanja Online"
                  className="mb-6"
                />
                <div className="flex flex-col gap-4">
                  {marketplaces.map((m) => (
                    <a
                      key={m.id}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-lilac hover:border-indigo/40 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-indigo/10 flex items-center justify-center font-heading font-extrabold text-indigo text-sm">
                        {m.label.slice(0, 2)}
                      </div>
                      <div className="font-semibold text-navy text-sm">{m.label}</div>
                      <ExternalLink size={14} className="ml-auto text-gray-300 group-hover:text-indigo transition-colors" />
                    </a>
                  ))}
                </div>

                {/* Direct WA CTA */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo to-violet text-white">
                  <h3 className="font-heading font-bold text-lg mb-2">Langsung Chat Kami</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    Butuh info cepat atau mau konsultasi desain? Chat WhatsApp, kami balas dalam hitungan menit.
                  </p>
                  <a
                    id="kontak-wa-btn"
                    href={buildWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-indigo font-semibold px-6 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
                  >
                    Buka WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

