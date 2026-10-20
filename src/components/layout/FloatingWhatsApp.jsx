'use client';
// src/components/layout/FloatingWhatsApp.jsx
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      id="floating-whatsapp"
      href="https://wa.me/6281234567890?text=Halo+Dollyverse%2C+saya+ingin+bertanya."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Dollyverse"
      className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 bg-gradient-to-br from-indigo to-violet rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform duration-200"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-violet/40 animate-ping" />
    </a>
  )
}

