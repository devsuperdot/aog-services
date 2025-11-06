'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithPlaceholderProps {
  src: string
  alt: string
  placeholderIcon: React.ReactNode
  placeholderText: string
  placeholderSubtext?: string
  className?: string
  priority?: boolean
  sizes?: string
}

export default function ImageWithPlaceholder({
  src,
  alt,
  placeholderIcon,
  placeholderText,
  placeholderSubtext,
  className = '',
  priority = false,
  sizes,
}: ImageWithPlaceholderProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <>
      {/* Image - hidden until loaded */}
      <div className={imageError ? 'hidden' : ''}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover object-center transition-opacity duration-500 ${
            imageLoaded ? 'opacity-70' : 'opacity-0'
          } ${className}`}
          priority={priority}
          sizes={sizes}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true)
            setImageLoaded(false)
          }}
        />
      </div>

      {/* Placeholder - only shown if image hasn't loaded or errored */}
      {(!imageLoaded || imageError) && (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="text-center">
            {placeholderIcon}
            <p className="text-sm font-light uppercase tracking-wider text-white/30">
              {placeholderText}
            </p>
            {placeholderSubtext && (
              <p className="mt-2 text-xs font-light text-white/20">{placeholderSubtext}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
