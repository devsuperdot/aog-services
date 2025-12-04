import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Nosotros | AOG Services',
  description:
    'Conoce a AOG Services: líderes en soluciones vanguardistas para la industria del petróleo y gas. Nuestra misión, visión, valores y compromiso con la excelencia operativa.',
  keywords: [
    'sobre AOG Services',
    'empresa petrolera',
    'servicios petroleros México',
    'misión visión AOG',
    'valores corporativos',
    'industria petrolera Villahermosa',
    'AOG Services',
    'Tabasco',
  ],
  openGraph: {
    title: 'Nosotros | AOG Services',
    description:
      'Conoce a AOG Services: líderes en soluciones vanguardistas para la industria del petróleo y gas.',
    url: `${CONTACT_INFO.website}/about`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros | AOG Services',
    description:
      'Líderes en soluciones vanguardistas para la industria del petróleo y gas.',
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/about`,
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
