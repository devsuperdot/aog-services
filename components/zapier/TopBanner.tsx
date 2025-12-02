'use client'

import { X, Shield, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

/**
 * TopBanner Component
 *
 * Promotional banner for AOG Services.
 * Features:
 * - Dismissible with localStorage persistence
 * - Relevant content for industrial certification business
 * - Brand colors
 * - Responsive design
 * - Accessible (ARIA labels, keyboard navigation)
 */

interface TopBannerProps {
  message?: string
  linkText?: string
  linkHref?: string
  storageKey?: string
  variant?: 'emergency' | 'promo' | 'announcement'
}

export default function TopBanner({
  message = 'Servicio de emergencia disponible 24/7 • Certificaciones express en 48 horas',
  linkText = 'Solicitar ahora →',
  linkHref = '/get-quote',
  storageKey = 'aog-banner-closed',
  variant = 'promo'
}: TopBannerProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Check if banner was previously dismissed
    if (typeof window !== 'undefined') {
      const wasClosed = localStorage.getItem(storageKey)
      setShow(!wasClosed)
    }
  }, [storageKey])

  if (!show) return null

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, 'true')
    }
    setShow(false)
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'emergency':
        return 'bg-red-600'
      case 'announcement':
        return 'bg-gray-900'
      default:
        return 'bg-gradient-to-r from-header-accent via-header-accent-dark to-header-accent'
    }
  }

  const getIcon = () => {
    switch (variant) {
      case 'emergency':
        return <Shield size={18} className="text-white" />
      case 'announcement':
        return <Clock size={18} className="text-white" />
      default:
        return <Shield size={18} className="text-white" />
    }
  }

  return (
    <div
      className={`relative flex w-full items-center justify-center px-4 py-2.5 sm:px-6 lg:px-8 ${getVariantStyles()}`}
      style={{ minHeight: '48px' }}
      role="banner"
      aria-label="Promotional announcement"
    >
      {/* Content */}
      <div className="flex flex-wrap items-center justify-center gap-2 pr-8 text-center sm:pr-10">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className="text-sm font-medium text-white sm:text-base">
            {message}
          </span>
        </div>
        <Link
          href={linkHref}
          className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30"
        >
          {linkText}
        </Link>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-white transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:right-6 lg:right-8"
        style={{ zIndex: 9999 }}
        aria-label="Dismiss announcement"
        type="button"
      >
        <X size={16} strokeWidth={2.5} aria-hidden="true" />
      </button>
    </div>
  )
}
