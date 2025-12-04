import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Herramientas de Molienda y Pesca | AOG Services',
  description:
    'Herramientas especializadas de molienda, pesca y limpieza de pozos petroleros. Molinos, escariadores, magnetos, herramientas de pesca y más. Soporte técnico 24/7 con AOG Services.',
  keywords: [
    'herramientas molienda',
    'pesca pozos petroleros',
    'molinos perforación',
    'escariadores',
    'magnetos de sarta',
    'limpieza pozos',
    'martillos hidromecánicos',
    'AOG Services',
    'Villahermosa',
    'Tabasco',
  ],
  openGraph: {
    title: 'Herramientas de Molienda y Pesca | AOG Services',
    description:
      'Herramientas especializadas de molienda, pesca y limpieza de pozos petroleros.',
    url: `${CONTACT_INFO.website}/services/herramientas-molienda`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herramientas de Molienda y Pesca | AOG Services',
    description:
      'Herramientas especializadas de molienda, pesca y limpieza de pozos petroleros.',
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/herramientas-molienda`,
  },
}

export default function HerramientasMoliendaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
