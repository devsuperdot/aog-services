'use client'

import React from 'react'
import Image from 'next/image'

/**
 * TrustedByCarousel Component
 *
 * Displays companies that trust OTC Petroleum
 */

interface CompanyLogo {
  name: string
  logo: string
  width: number
  height: number
}

const companies: CompanyLogo[] = [
  {
    name: 'Pemex',
    logo: 'https://logo.clearbit.com/pemex.com',
    width: 180,
    height: 60,
  },
  {
    name: 'Shell',
    logo: 'https://logo.clearbit.com/shell.com',
    width: 150,
    height: 60,
  },
  {
    name: 'Chevron',
    logo: 'https://logo.clearbit.com/chevron.com',
    width: 180,
    height: 60,
  },
  {
    name: 'BP',
    logo: 'https://logo.clearbit.com/bp.com',
    width: 120,
    height: 60,
  },
  {
    name: 'Total Energies',
    logo: 'https://logo.clearbit.com/totalenergies.com',
    width: 180,
    height: 60,
  },
  {
    name: 'Halliburton',
    logo: 'https://logo.clearbit.com/halliburton.com',
    width: 195,
    height: 60,
  },
  {
    name: 'Schlumberger',
    logo: 'https://logo.clearbit.com/slb.com',
    width: 195,
    height: 60,
  },
  {
    name: 'Baker Hughes',
    logo: 'https://logo.clearbit.com/bakerhughes.com',
    width: 180,
    height: 60,
  },
]

export default function TrustedByCarousel(): React.ReactElement {
  return (
    <section className="overflow-hidden bg-header-bg py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center text-base font-medium text-header-text-secondary md:mb-12 md:text-lg">
          Empresas líderes que confían en nosotros
        </div>
        <div className="relative">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-header-bg to-transparent md:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-header-bg to-transparent md:w-40" />

          {/* Scrolling companies - without cards */}
          <div className="flex animate-scroll gap-12 md:gap-20 lg:gap-24">
            {[...companies, ...companies, ...companies].map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="flex h-20 shrink-0 items-center justify-center px-4 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-24"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="h-auto w-auto max-h-14 object-contain md:max-h-16 lg:max-h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
