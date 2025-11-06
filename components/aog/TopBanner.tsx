'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative border-b border-white/5 bg-gradient-to-r from-aog-primary/10 via-transparent to-aog-primary/10">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-2 sm:px-6 md:px-12 lg:px-16">
        {/* Announcement Text */}
        <div className="flex flex-1 items-center justify-center gap-2 sm:gap-3">
          <div className="hidden h-1 w-1 animate-pulse bg-aog-primary sm:block" />
          <p className="text-center text-[10px] font-light uppercase tracking-[0.2em] text-white/70 sm:text-xs md:tracking-[0.25em]">
            <span className="text-aog-primary">Nuevo:</span>{' '}
            <span className="hidden sm:inline">Servicios de </span>
            Mantenimiento 24/7
          </p>
          <Link
            href="/contact"
            className="text-[10px] font-light uppercase tracking-[0.15em] text-white underline decoration-aog-primary/50 underline-offset-2 transition-colors hover:text-aog-primary sm:text-xs md:tracking-[0.2em]"
          >
            Contactar
          </Link>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-white/40 transition-colors hover:text-white"
          aria-label="Cerrar anuncio"
        >
          <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </button>
      </div>
    </div>
  )
}
