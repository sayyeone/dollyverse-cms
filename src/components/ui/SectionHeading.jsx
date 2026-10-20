'use client';
// src/components/ui/SectionHeading.jsx

/**
 * SectionHeading â€” eyebrow label + heading h2 + optional subtitle
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  light = false,  // light text for dark backgrounds
  className = '',
}) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const textColor = light ? 'text-white' : 'text-navy'
  const eyebrowColor = light ? 'text-violet' : 'text-indigo'
  const subtitleColor = light ? 'text-white/70' : 'text-gray-500'

  return (
    <div className={`flex flex-col gap-2 ${alignCls} ${className}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold tracking-[0.15em] uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight ${textColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-base md:text-lg leading-relaxed max-w-xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

