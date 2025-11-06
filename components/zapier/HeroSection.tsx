import React from 'react'
import HeaderBlock from './hero/HeaderBlock'
import QuickAccessSection from './hero/QuickAccessSection'
import TrustedByCarousel from './hero/TrustedByCarousel'

/**
 * HeroSection Component
 *
 * Main hero section with vertical guide lines that run through all sections
 * - Vertical lines act as "rails" delimiting content area
 * - Lines run continuously through HeaderBlock, QuickAccessSection, TrustedByCarousel
 * - Content constrained to 1280px centered container
 */

export default function HeroSection(): React.ReactElement {
  return (
    <div className="relative w-full bg-[#FFFEFB]">
      {/* Vertical Guide Lines - run through entire hero section, hidden on mobile */}
      <div className="pointer-events-none absolute inset-0 hidden justify-center lg:flex">
        <div className="relative w-full max-w-[1280px]">
          {/* Left guide line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gray-200"></div>
          {/* Right guide line */}
          <div className="absolute right-0 top-0 h-full w-px bg-gray-200"></div>
        </div>
      </div>

      {/* Content sections */}
      <HeaderBlock />
      <QuickAccessSection />
      <TrustedByCarousel />
    </div>
  )
}
