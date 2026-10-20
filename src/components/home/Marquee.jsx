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
            className={`whitespace-nowrap font-heading font-extrabold uppercase tracking-wider px-5 md:px-6 ${
              isStar
                ? 'text-gold text-lg md:text-xl drop-shadow-sm select-none'
                : text === 'DOLLYVERSE'
                ? 'text-white text-sm sm:text-base md:text-lg'
                : 'text-white/80 text-sm sm:text-base md:text-lg'
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
      className="bg-navy border-y border-white/15 py-3.5 md:py-4 overflow-hidden select-none shadow-inner"
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
