'use client';
// src/components/ui/Card.jsx
import Badge from './Badge'

/**
 * Card â€” generic card component
 * Slot: image (url/alt), title, subtitle, description, badge, footer (actions)
 */
export default function Card({
  image,
  imageAlt = '',
  badge,
  title,
  subtitle,
  description,
  footer,
  className = '',
  onClick,
}) {
  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-lilac/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Image */}
      {image && (
        <div className="relative aspect-square overflow-hidden bg-lilac">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badge && (
            <div className="absolute top-3 left-3">
              <Badge>{badge}</Badge>
            </div>
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        {subtitle && (
          <span className="text-xs font-semibold text-indigo uppercase tracking-widest">
            {subtitle}
          </span>
        )}
        {title && (
          <h3 className="font-heading font-bold text-navy text-lg leading-snug">{title}</h3>
        )}
        {description && (
          <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
        )}
      </div>

      {/* Footer */}
      {footer && <div className="px-4 pb-4">{footer}</div>}
    </div>
  )
}

