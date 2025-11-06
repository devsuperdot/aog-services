import 'styles/tailwind.css'
import { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import AOGHeader from 'components/aog/Header'
import AOGFooter from 'components/aog/Footer'
import TopBanner from 'components/aog/TopBanner'
import Chatbot from 'components/aog/Chatbot'
import { generateOrganizationSchema } from '@/lib/metadata'
import { CONTACT_INFO } from '@/constants'

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT_INFO.website),
  title: {
    default: 'AOG - Soluciones Vanguardistas para Petróleo y Gas',
    template: '%s | AOG Services',
  },
  description:
    'Soluciones vanguardistas y servicios de excelencia para la industria del petróleo y gas. Control de sólidos, equipos periféricos, herramientas de molienda, mantenimiento industrial, servicios técnicos especializados y energía móvil.',
  keywords: [
    'AOG',
    'AOG Services',
    'petróleo y gas',
    'control de sólidos',
    'equipos periféricos',
    'herramientas molienda',
    'mantenimiento industrial',
    'servicios técnicos petroleros',
    'energía móvil',
    'Villahermosa',
    'Tabasco',
    'perforación pozos petroleros',
  ],
  authors: [{ name: CONTACT_INFO.company.name }],
  creator: CONTACT_INFO.company.name,
  publisher: CONTACT_INFO.company.name,
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: CONTACT_INFO.website,
    siteName: CONTACT_INFO.company.fullName,
    title: 'AOG - Soluciones Vanguardistas para Petróleo y Gas',
    description:
      'Soluciones vanguardistas y servicios de excelencia para la industria del petróleo y gas en Villahermosa, Tabasco.',
    images: [
      {
        url: '/images/og-aog.png',
        width: 1200,
        height: 630,
        alt: 'AOG Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AOG - Soluciones Vanguardistas para Petróleo y Gas',
    description:
      'Soluciones vanguardistas y servicios de excelencia para la industria del petróleo y gas.',
    images: ['/images/og-aog.png'],
    creator: '@aogservices',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF6B35',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.className} bg-black`}>
        <TopBanner />
        <AOGHeader />
        {children}
        <AOGFooter />
        <Chatbot />
      </body>
    </html>
  )
}
