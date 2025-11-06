import { MetadataRoute } from 'next'
import { CONTACT_INFO } from '@/constants'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = CONTACT_INFO.website

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/platform/'], // Disallow platform login/signup from indexing
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
