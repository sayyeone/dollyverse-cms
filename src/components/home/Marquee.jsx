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
            className={`whitespace-nowrap font-heading font-extrabold uppercase text-xs md:text-sm tracking-widest px-4 ${
              isStar
                ? 'text-gold text-sm md:text-base'
                : text === 'DOLLYVERSE'
                ? 'text-white'
                : 'text-white/70'
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
      className="bg-navy border-y border-white/10 py-3.5 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div
        className={`flex w-max ${reduced ? '' : 'animate-marquee'}`}
        style={reduced ? {} : { willChange: 'transform' }}
      >
        {renderTrack('track-1')}
        {renderTrack('track-2')}
      </div>
    </div>
  )
}
