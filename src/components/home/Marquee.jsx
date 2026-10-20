'use client';

import { useReducedMotion } from '../../hooks/useReducedMotion'

const marqueeItems = [
  'DOLLYVERSE',
  '★',
  'SABLON DIGITAL MURAH',
  '★',
  'DESAIN OTENTIK',
  '★',
  'DARI KAMPUNG DOLLY',
  '★',
  'KAOS CUSTOM SATUAN',
  '★',
  'MERCHANDISE TERJANGKAU',
  '★',
]

export default function Marquee() {
  const reduced = useReducedMotion()

  const renderTrack = (keyPrefix) => (
    <div key={keyPrefix} className="flex shrink-0 items-center">
      {marqueeItems.map((text, i) => {
        const isStar = text === '★'
        return (
          <span
            key={`${keyPrefix}-${i}`}
            className={`whitespace-nowrap font-heading font-black uppercase tracking-wider px-6 md:px-8 ${
              isStar
                ? 'text-gold text-2xl md:text-3xl drop-shadow-sm select-none'
                : text === 'DOLLYVERSE'
                ? 'text-white text-lg sm:text-xl md:text-2xl'
                : 'text-white/80 text-lg sm:text-xl md:text-2xl'
            }`}
          >
            {text}
          </span>
        )
      })}
    </div>
  )

  return (
    <div
      id="marquee"
      className="bg-navy border-y-2 border-white/15 py-4 md:py-5 overflow-hidden select-none shadow-inner"
      aria-hidden="true"
    >
      <div
        className={`flex w-max items-center ${reduced ? '' : 'animate-marquee'}`}
        style={reduced ? {} : { willChange: 'transform' }}
      >
        {renderTrack('track-1')}
        {renderTrack('track-2')}
      </div>
    </div>
  )
}
