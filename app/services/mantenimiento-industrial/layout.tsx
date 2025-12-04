import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Mantenimiento Industrial Integral | AOG Services',
  description:
    'Servicios de mantenimiento industrial integral para la industria petrolera. Mantenimiento preventivo, correctivo, reparación de componentes y optimización de equipos. AOG Services Villahermosa.',
  keywords: [
    'mantenimiento industrial',
    'mantenimiento preventivo',
    'mantenimiento correctivo',
    'reparación equipos industriales',
    'optimización equipos',
    'industria petrolera',
    'AOG Services',
    'Villahermosa',
    'Tabasco',
  ],
  openGraph: {
    title: 'Mantenimiento Industrial Integral | AOG Services',
    description:
      'Servicios de mantenimiento industrial integral para maximizar la eficiencia de tus equipos.',
    url: `${CONTACT_INFO.website}/services/mantenimiento-industrial`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mantenimiento Industrial Integral | AOG Services',
    description:
      'Servicios de mantenimiento industrial integral para la industria petrolera.',
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/mantenimiento-industrial`,
  },
}

export default function MantenimientoIndustrialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
