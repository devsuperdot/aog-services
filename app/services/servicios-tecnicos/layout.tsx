import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Servicios Técnicos Especializados | AOG Services',
  description:
    'Servicios técnicos especializados para la industria petrolera. Consultoría técnica, ingeniería de proyectos, monitoreo de equipos, optimización de procesos y capacitación. AOG Services.',
  keywords: [
    'servicios técnicos',
    'consultoría técnica petrolera',
    'ingeniería de proyectos',
    'monitoreo equipos',
    'optimización procesos',
    'capacitación industrial',
    'inspección certificación',
    'AOG Services',
    'Villahermosa',
    'Tabasco',
  ],
  openGraph: {
    title: 'Servicios Técnicos Especializados | AOG Services',
    description:
      'Servicios técnicos especializados y soporte integral para la industria petrolera.',
    url: `${CONTACT_INFO.website}/services/servicios-tecnicos`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Técnicos Especializados | AOG Services',
    description:
      'Servicios técnicos especializados para la industria petrolera.',
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/servicios-tecnicos`,
  },
}

export default function ServiciosTecnicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
