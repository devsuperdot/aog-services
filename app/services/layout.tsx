import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Servicios | AOG Services',
  description:
    'Soluciones integrales para la industria del petróleo y gas. Control de sólidos, equipos periféricos, herramientas de molienda, mantenimiento industrial, servicios técnicos y energía móvil.',
  keywords: [
    'servicios petroleros',
    'control de sólidos',
    'equipos periféricos',
    'herramientas molienda',
    'mantenimiento industrial',
    'servicios técnicos',
    'energía móvil',
    'AOG Services',
    'Villahermosa',
    'Tabasco',
  ],
  openGraph: {
    title: 'Servicios | AOG Services',
    description:
      'Soluciones integrales para la industria del petróleo y gas. Desde control de sólidos hasta servicios técnicos especializados.',
    url: `${CONTACT_INFO.website}/services`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios | AOG Services',
    description:
      'Soluciones integrales para la industria del petróleo y gas.',
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/services`,
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
