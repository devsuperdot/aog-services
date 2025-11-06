'use client'

interface IndustrialImageProps {
  src: string
  alt: string
  className?: string
  overlay?: 'dark' | 'gradient-top' | 'gradient-bottom' | 'none'
}

/**
 * Industrial image component with uniform grayscale filter
 * All AOG images use consistent filters:
 * - grayscale(100%) - Full black and white
 * - contrast(1.1) - Slightly increased contrast
 * - brightness(0.9) - Slightly darkened
 */
export const IndustrialImage = ({
  src,
  alt,
  className = '',
  overlay = 'gradient-top',
}: IndustrialImageProps) => {
  const overlayClasses = {
    dark: 'bg-black/40',
    'gradient-top': 'bg-gradient-to-t from-black/60 via-black/20 to-transparent',
    'gradient-bottom': 'bg-gradient-to-b from-black/60 via-black/20 to-transparent',
    none: '',
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: `url(${src})`,
          filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
        }}
      >
        {/* Overlay for consistency and text readability */}
        {overlay !== 'none' && (
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        )}
      </div>
    </div>
  )
}
