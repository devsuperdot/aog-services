/**
 * Metadata Helper
 * Generates consistent metadata for all pages
 */

import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

interface PageMetadata {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  keywords?: string[]
}

export function generateMetadata({
  title,
  description,
  path,
  image = '/images/og-default.png',
  type = 'website',
  keywords = [],
}: PageMetadata): Metadata {
  const url = `${CONTACT_INFO.website}${path}`
  const fullTitle = `${title} | ${CONTACT_INFO.company.name}`

  const defaultKeywords = [
    'AOG Services',
    'servicios petroleros',
    'control de sólidos',
    'equipos de perforación',
    'industria del petróleo y gas',
    'mantenimiento industrial',
  ]

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: CONTACT_INFO.company.name }],
    creator: CONTACT_INFO.company.name,
    publisher: CONTACT_INFO.company.name,
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: CONTACT_INFO.company.name,
      locale: 'es_MX',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@aogservices',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Organization JSON-LD Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: CONTACT_INFO.company.name,
    legalName: CONTACT_INFO.company.legalName,
    description: CONTACT_INFO.company.tagline,
    url: CONTACT_INFO.website,
    logo: `${CONTACT_INFO.website}/images/aog-logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.phone.primary,
      contactType: 'customer service',
      email: CONTACT_INFO.email.general,
      areaServed: 'MX',
      availableLanguage: ['Spanish', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.zipCode,
      addressCountry: 'MX',
    },
    sameAs: Object.values(CONTACT_INFO.social),
  }
}

// Service JSON-LD Schema
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: CONTACT_INFO.company.name,
      url: CONTACT_INFO.website,
    },
    areaServed: {
      '@type': 'Country',
      name: 'México',
    },
    url: service.url,
  }
}
