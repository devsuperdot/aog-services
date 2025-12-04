import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Energía e Iluminación Móvil | AOG Services',
  description:
    'Soluciones de energía e iluminación móvil para operaciones petroleras. Renta de generadores de energía, luminarias móviles y soporte técnico 24/7. AOG Services Villahermosa.',
  keywords: [
    'energía móvil',
    'iluminación móvil',
    'generadores energía',
    'renta generadores',
    'luminarias industriales',
    'operaciones petroleras',
    'soporte 24/7',
    'AOG Services',
    'Villahermosa',
    'Tabasco',
  ],
  openGraph: {
    title: 'Energía e Iluminación Móvil | AOG Services',
    description:
      'Soluciones de energía e iluminación móvil para operaciones en campo.',
    url: `${CONTACT_INFO.website}/services/energia-iluminacion`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energía e Iluminación Móvil | AOG Services',
    description:
      'Soluciones de energía e iluminación móvil para operaciones petroleras.',
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/energia-iluminacion`,
  },
}

export default function EnergiaIluminacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
