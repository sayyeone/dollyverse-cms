'use client';
// src/components/home/Marquee.jsx
import { useReducedMotion } from '../../hooks/useReducedMotion'

const marqueeText = [
  'Dollyverse',
  'â—€â—€â—€',
  'Sablon Digital Murah',
  'â–¶â–¶â–¶',
  'Desain Otentik',
  'â—€â—€â—€',
  'Dari Kampung Dolly',
  'â–¶â–¶â–¶',
  'Kaos Custom Satuan',
  'â—€â—€â—€',
  'Merchandise Terjangkau',
  'â–¶â–¶â–¶',
]

export default function Marquee() {
  const reduced = useReducedMotion()

  const track = marqueeText.map((text, i) => (
    <span
      key={i}
      className={`whitespace-nowrap font-heading font-extrabold uppercase text-sm md:text-base tracking-widest px-4 ${
        text === 'â—€â—€â—€' || text === 'â–¶â–¶â–¶'
          ? 'text-gold'
          : text === 'Dollyverse'
          ? 'text-white'
          : 'text-white/60'
      }`}
    >
      {text}
    </span>
  ))

  return (
    <div
      id="marquee"
      className="bg-navy/90 border-y border-white/10 py-4 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`flex gap-0 ${reduced ? '' : 'animate-marquee'}`}
        style={reduced ? {} : { willChange: 'transform' }}
      >
        {/* Duplicated for seamless loop */}
        <div className="flex shrink-0 gap-0">{track}</div>
        <div className="flex shrink-0 gap-0" aria-hidden="true">{track}</div>
        <div className="flex shrink-0 gap-0" aria-hidden="true">{track}</div>
      </div>
    </div>
  )
}

