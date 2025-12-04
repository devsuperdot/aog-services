import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Control de Sólidos | AOG Services',
  description:
    'Soluciones avanzadas de control de sólidos para la industria petrolera. Zarandas vibratorias, centrífugas decantadoras, mud cleaners y más. Optimiza tu proceso de perforación con AOG Services.',
  keywords: [
    'control de sólidos',
    'zarandas vibratorias',
    'shale shakers',
    'mud cleaner',
    'centrífugas decantadoras',
    'fluidos de perforación',
    'perforación petrolera',
    'AOG Services',
    'Villahermosa',
    'Tabasco',
  ],
  openGraph: {
    title: 'Control de Sólidos | AOG Services',
    description:
      'Soluciones avanzadas de control de sólidos para la industria petrolera. Maximiza la eficiencia de tu operación.',
    url: `${CONTACT_INFO.website}/services/control-solidos`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/aog/control-de-solidos-2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Control de Sólidos - AOG Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control de Sólidos | AOG Services',
    description:
      'Soluciones avanzadas de control de sólidos para la industria petrolera.',
    images: ['/images/aog/control-de-solidos-2.jpeg'],
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/control-solidos`,
  },
}

export default function ControlSolidosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
