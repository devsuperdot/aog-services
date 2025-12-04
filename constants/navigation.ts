/**
 * Navigation Structure
 * Main navigation menus and links
 */

import {
  Shield,
  Award,
  FileCheck,
  Microscope,
  Wrench,
  HardHat,
  Gauge,
  Target,
  Leaf,
  TrendingUp,
  MapPin,
  type LucideIcon,
} from 'lucide-react'

export interface MegaMenuItem {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

export interface MegaMenuSection {
  category: string
  items: MegaMenuItem[]
}

export const SERVICES_MENU: MegaMenuSection[] = [
  {
    category: 'Inspección y Certificación',
    items: [
      {
        icon: Microscope,
        title: 'Ensayos No Destructivos',
        description: 'Ultrasonido, partículas magnéticas, líquidos penetrantes',
        href: '/services/ndt-testing',
      },
      {
        icon: Shield,
        title: 'Inspección Visual',
        description: 'Inspección directa, remota, videoscopia',
        href: '/services/visual-inspection',
      },
      {
        icon: FileCheck,
        title: 'Certificación de Personal',
        description: 'Certificaciones reconocidas internacionalmente',
        href: '/services/personnel-certification',
      },
      {
        icon: Gauge,
        title: 'Radiografía Industrial',
        description: 'Inspección interna de equipos y estructuras',
        href: '/services/radiography',
      },
    ],
  },
  {
    category: 'Equipo Especializado',
    items: [
      {
        icon: Wrench,
        title: 'Equipo de Levante',
        description: 'Inspección y certificación de grúas y equipos',
        href: '/services/lifting-equipment',
      },
      {
        icon: HardHat,
        title: 'Maquinaria Pesada',
        description: 'Certificación de equipos industriales',
        href: '/services/heavy-machinery',
      },
    ],
  },
]


export const ABOUT_MENU: MegaMenuSection[] = [
  {
    category: 'Nosotros',
    items: [
      {
        icon: Target,
        title: 'Misión y Visión',
        description: 'Nuestro propósito y objetivos',
        href: '/about/mission-vision',
      },
      {
        icon: Award,
        title: 'Política de Calidad',
        description: 'Compromiso con la excelencia',
        href: '/about/quality-policy',
      },
      {
        icon: Shield,
        title: 'Seguridad y Salud',
        description: 'Cultura de seguridad integral',
        href: '/about/safety-health',
      },
    ],
  },
  {
    category: 'Compromiso',
    items: [
      {
        icon: Leaf,
        title: 'Medio Ambiente',
        description: 'Responsabilidad ambiental',
        href: '/about/environment',
      },
      {
        icon: TrendingUp,
        title: 'Mejora Continua',
        description: 'Innovación y desarrollo',
        href: '/about/continuous-improvement',
      },
      {
        icon: MapPin,
        title: 'Ubicaciones',
        description: 'Presencia nacional',
        href: '/about/locations',
      },
    ],
  },
]

export interface NavLink {
  label: string
  href: string
  hasDropdown?: boolean
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'Servicios', href: '/services', hasDropdown: true },
  { label: 'Nosotros', href: '/about', hasDropdown: true },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Carreras', href: '/careers' },
  { label: 'Contacto', href: '/contact' },
]

export const FOOTER_LINKS = {
  services: [
    { label: 'Ensayos No Destructivos', href: '/services/ndt-testing' },
    { label: 'Inspección Visual', href: '/services/visual-inspection' },
    { label: 'Certificación de Personal', href: '/services/personnel-certification' },
    { label: 'Radiografía Industrial', href: '/services/radiography' },
  ],
  company: [
    { label: 'Nosotros', href: '/about' },
    { label: 'Carreras', href: '/careers' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'Contacto', href: '/contact' },
  ],
  legal: [
    { label: 'Privacidad', href: '/privacy' },
    { label: 'Términos y Condiciones', href: '/terms' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'Avisos Legales', href: '/legal-notices' },
  ],
} as const
