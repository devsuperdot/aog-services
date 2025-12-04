import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Blog | AOG Services',
  description:
    'Artículos, análisis y tendencias sobre tecnología, seguridad y operaciones en el sector de petróleo y gas. Mantente informado con AOG Services.',
  keywords: [
    'blog petrolero',
    'noticias industria petrolera',
    'tecnología perforación',
    'seguridad industrial',
    'operaciones petroleras',
    'tendencias petróleo gas',
    'AOG Services',
    'Villahermosa',
  ],
  openGraph: {
    title: 'Blog | AOG Services',
    description:
      'Artículos, análisis y tendencias sobre tecnología, seguridad y operaciones en el sector de petróleo y gas.',
    url: `${CONTACT_INFO.website}/blog`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | AOG Services',
    description:
      'Artículos y tendencias sobre la industria del petróleo y gas.',
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/blog`,
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
