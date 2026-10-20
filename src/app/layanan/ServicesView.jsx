'use client';
// src/pages/Services.jsx
import { motion } from 'framer-motion'
import { Shirt, Users, GraduationCap, CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { services, orderSteps } from '@/data/services'
import { buildWaUrl } from '@/data/contact'

const icons = { Shirt, Users, GraduationCap }

export default function ServicesView() {
  return (
    <>
      

      {/* Page header */}
      <div className="pt-24 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 to-violet/10" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionHeading
              eyebrow="Layanan Kami"
              title="Apa yang Bisa Kami Kerjakan?"
              subtitle="Tiga layanan utama untuk semua kebutuhan sablon dan merchandise kamu."
              light
            />
          </motion.div>
        </div>
      </div>

      <main className="bg-white">
        {/* Services detail */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
            {services.map((service, i) => {
              const Icon = icons[service.icon]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
                >
                  {/* Icon panel */}
                  <div className={`p-10 rounded-3xl bg-gradient-to-br from-indigo/10 to-violet/10 border border-indigo/20 flex flex-col items-start gap-4 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <div className="w-16 h-16 rounded-2xl bg-indigo/10 flex items-center justify-center text-indigo">
                      <Icon size={32} />
                    </div>
                    <h2 className="font-heading font-extrabold text-navy text-2xl md:text-3xl leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed">{service.description}</p>
                    <a
                      href={buildWaUrl(service.waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-indigo to-violet text-white font-semibold px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                    >
                      Tanya via WhatsApp
                    </a>
                  </div>

                  {/* Detail list */}
                  <ul className="flex flex-col gap-3">
                    {service.detail.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-violet mt-0.5 shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Cara Pesan */}
        <section className="py-16 md:py-20 bg-lilac/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionHeading
              eyebrow="Cara Pesan"
              title="4 Langkah Mudah"
              align="center"
              className="mb-12"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {orderSteps.map(({ step, title, desc }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo to-violet text-white font-heading font-extrabold text-xl flex items-center justify-center shadow-lg">
                    {step}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-base">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kapasitas */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-4">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-indigo">Kapasitas</span>
            <h2 className="font-heading font-extrabold text-navy text-3xl md:text-4xl">
              Hingga <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-violet">200 kaos/hari</span>
            </h2>
            <p className="text-gray-500 max-w-lg leading-relaxed">
              Dengan mesin DTF, sublim, dan tim sablon manual yang berpengalaman, kami siap menangani pesanan dari satuan hingga ribuan pcs.
            </p>
            <a
              href={buildWaUrl('Halo Dollyverse, saya ingin tanya kapasitas produksi dan estimasi waktu pengerjaan.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-indigo to-violet text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Diskusikan Kebutuhan Kamu
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

