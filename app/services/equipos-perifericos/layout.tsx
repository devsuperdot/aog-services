import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Equipos Periféricos de Perforación | AOG Services',
  description:
    'Equipos periféricos de apoyo para perforación petrolera. Silos, tanques de almacenamiento, desgasificadores, separadores gas-lodo, compresores y más. Optimiza tus operaciones con AOG.',
  keywords: [
    'equipos periféricos',
    'perforación petrolera',
    'silos almacenamiento',
    'tanques diesel',
    'desgasificador',
    'separador gas-lodo',
    'compresores aire',
    'frac tanks',
    'AOG Services',
    'Villahermosa',
  ],
  openGraph: {
    title: 'Equipos Periféricos de Perforación | AOG Services',
    description:
      'Equipos periféricos de apoyo para perforación petrolera. Complementa y optimiza tus operaciones.',
    url: `${CONTACT_INFO.website}/services/equipos-perifericos`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equipos Periféricos de Perforación | AOG Services',
    description:
      'Equipos periféricos de apoyo para perforación petrolera.',
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/equipos-perifericos`,
  },
}

export default function EquiposPerifericosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
