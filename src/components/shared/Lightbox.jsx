'use client';
// src/components/shared/Lightbox.jsx
import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)

  // Focus trap & keyboard navigation
  useEffect(() => {
    if (index === null) return
    closeRef.current?.focus()

    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [index, onClose, onPrev, onNext])

  if (index === null || !images[index]) return null

  const { src, alt } = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Lightbox galeri"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Close button */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Tutup lightbox"
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
      >
        <X size={24} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Foto sebelumnya"
          className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Image */}
      <div className="relative z-10 max-w-[90vw] max-h-[85vh] flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
        {alt && (
          <p className="absolute -bottom-8 left-0 right-0 text-center text-white/60 text-sm">
            {alt}
          </p>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Foto berikutnya"
          className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
          {index + 1} / {images.length}
        </span>
      )}
    </div>
  )
}

