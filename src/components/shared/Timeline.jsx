'use client';
// src/components/shared/Timeline.jsx

export default function Timeline({ items }) {
  return (
    <ol className="relative border-l-2 border-violet/30 flex flex-col gap-0">
      {items.map((item, i) => (
        <li key={i} className="ml-6 pb-10 last:pb-0">
          {/* Dot */}
          <span className="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-violet ring-4 ring-lilac" />

          {/* Year badge */}
          <span className="inline-block mb-1.5 text-xs font-bold tracking-widest uppercase text-indigo bg-lilac px-2.5 py-0.5 rounded-full">
            {item.year}
          </span>

          <h3 className="font-heading font-bold text-navy text-lg mb-1">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </li>
      ))}
    </ol>
  )
}

