'use client';

import { useReducedMotion } from '../../hooks/useReducedMotion'

const marqueeItems = [
  { text: 'DOLLYVERSE', isArrow: false },
  { text: '<<<', isArrow: true },
  { text: 'SABLON DIGITAL MURAH', isArrow: false },
  { text: '>>>', isArrow: true },
  { text: 'DESAIN OTENTIK', isArrow: false },
  { text: '<<<', isArrow: true },
  { text: 'DARI KAMPUNG DOLLY', isArrow: false },
  { text: '>>>', isArrow: true },
  { text: 'KAOS CUSTOM SATUAN', isArrow: false },
  { text: '<<<', isArrow: true },
  { text: 'MERCHANDISE TERJANGKAU', isArrow: false },
  { text: '>>>', isArrow: true },
]

export default function Marquee() {
  const reduced = useReducedMotion()

  const renderTrack = (keyPrefix) => (
    <div key={keyPrefix} className="flex shrink-0 items-center">
      {marqueeItems.map((item, i) => (
        <span
          key={`${keyPrefix}-${i}`}
          className={`whitespace-nowrap font-heading font-extrabold uppercase text-xs md:text-sm tracking-widest px-4 ${
            item.isArrow
              ? 'text-gold'
              : item.text === 'DOLLYVERSE'
              ? 'text-white'
              : 'text-white/70'
          }`}
        >
          {item.text}
        </span>
      ))}
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
