import { Metadata } from 'next'
import { CONTACT_INFO } from '@/constants'

export const metadata: Metadata = {
  title: 'Contacto | AOG Services',
  description:
    'Contáctanos para soluciones especializadas en la industria petrolera. Atención personalizada, cotizaciones y soporte técnico 24/7. AOG Services Villahermosa, Tabasco.',
  keywords: [
    'contacto AOG Services',
    'cotización servicios petroleros',
    'soporte técnico 24/7',
    'Villahermosa Tabasco',
    'servicios petroleros contacto',
    'AOG Services teléfono',
    'AOG Services email',
  ],
  openGraph: {
    title: 'Contacto | AOG Services',
    description:
      'Contáctanos para soluciones especializadas en la industria petrolera. Soporte técnico 24/7.',
    url: `${CONTACT_INFO.website}/contact`,
    siteName: CONTACT_INFO.company.fullName,
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | AOG Services',
    description:
      'Contáctanos para soluciones especializadas en la industria petrolera.',
  },
  alternates: {
    canonical: `${CONTACT_INFO.website}/contact`,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
