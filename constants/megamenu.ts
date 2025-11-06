/**
 * Mega Menu Data Structure for AOG
 * Oil & Gas Services Navigation
 */

import {
  Droplets,
  Settings,
  Hammer,
  Wrench,
  Search,
  Zap,
  Building2,
  Users,
  Target,
  Shield,
  Award,
  FileText,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'

export interface MegaMenuItem {
  title: string
  description?: string
  href: string
  icon?: LucideIcon
  badge?: string
}

export interface MegaMenuColumn {
  title: string
  items: MegaMenuItem[]
}

export interface MegaMenuSection {
  label: string
  columns: MegaMenuColumn[]
  featured?: {
    title: string
    description: string
    image?: string
    href: string
    cta: string
  }
}

/**
 * Servicios Mega Menu
 * Complete services offering organized by category
 */
export const SERVICIOS_MEGAMENU: MegaMenuSection = {
  label: 'Servicios',
  columns: [
    {
      title: 'Equipos de Perforación',
      items: [
        {
          title: 'Control de Sólidos',
          description: 'Sistemas de control de fluidos de perforación',
          href: '/services/control-solidos',
          icon: Droplets,
        },
        {
          title: 'Equipos Periféricos',
          description: 'Soporte completo para operaciones',
          href: '/services/equipos-perifericos',
          icon: Settings,
        },
        {
          title: 'Herramientas de Molienda',
          description: 'Limpieza y pesca de pozos',
          href: '/services/herramientas-molienda',
          icon: Hammer,
        },
      ],
    },
    {
      title: 'Servicios Operacionales',
      items: [
        {
          title: 'Mantenimiento Industrial',
          description: 'Preventivo y correctivo integral',
          href: '/services/mantenimiento-industrial',
          icon: Wrench,
        },
        {
          title: 'Servicios Técnicos',
          description: 'Consultoría y soporte especializado',
          href: '/services/servicios-tecnicos',
          icon: Search,
        },
        {
          title: 'Energía e Iluminación',
          description: 'Soluciones móviles confiables',
          href: '/services/energia-iluminacion',
          icon: Zap,
        },
      ],
    },
    {
      title: 'Soluciones Empresariales',
      items: [
        {
          title: 'Proyectos Llave en Mano',
          description: 'Soluciones completas de inicio a fin',
          href: '/solutions/turnkey',
          icon: Building2,
          badge: 'Nuevo',
        },
        {
          title: 'Optimización Operativa',
          description: 'Mejora continua de procesos',
          href: '/solutions/optimization',
          icon: TrendingUp,
        },
        {
          title: 'Seguridad y Cumplimiento',
          description: 'Certificaciones y normativas',
          href: '/solutions/safety',
          icon: Shield,
        },
      ],
    },
  ],
  featured: {
    title: '¿Necesita una solución personalizada?',
    description:
      'Nuestro equipo de expertos está listo para diseñar la solución perfecta para su operación petrolera.',
    href: '/contact',
    cta: 'Contactar a un experto',
  },
}

/**
 * Nosotros Mega Menu
 * Company information and corporate sections
 */
export const NOSOTROS_MEGAMENU: MegaMenuSection = {
  label: 'Nosotros',
  columns: [
    {
      title: 'Empresa',
      items: [
        {
          title: 'Acerca de AOG',
          description: 'Nuestra historia y experiencia',
          href: '/about',
          icon: Building2,
        },
        {
          title: 'Misión y Visión',
          description: 'Nuestro propósito y objetivos',
          href: '/about#mission-vision',
          icon: Target,
        },
        {
          title: 'Valores Corporativos',
          description: 'Principios que nos guían',
          href: '/about#values',
          icon: Award,
        },
        {
          title: 'Liderazgo',
          description: 'Nuestro equipo directivo',
          href: '/about#leadership',
          icon: Users,
        },
      ],
    },
    {
      title: 'Calidad y Seguridad',
      items: [
        {
          title: 'Certificaciones',
          description: 'Estándares y reconocimientos',
          href: '/about/certifications',
          icon: CheckCircle2,
        },
        {
          title: 'Seguridad Operacional',
          description: 'Protocolos y prácticas',
          href: '/about/safety',
          icon: Shield,
        },
        {
          title: 'Sostenibilidad',
          description: 'Compromiso ambiental',
          href: '/about/sustainability',
          icon: Lightbulb,
        },
      ],
    },
    {
      title: 'Contacto',
      items: [
        {
          title: 'Contactar',
          description: 'Comuníquese con nosotros',
          href: '/contact',
          icon: Mail,
        },
        {
          title: 'Ubicación',
          description: 'Villahermosa, Tabasco',
          href: '/contact#location',
          icon: MapPin,
        },
        {
          title: 'Soporte Técnico',
          description: 'Asistencia 24/7',
          href: '/contact#support',
          icon: Phone,
        },
      ],
    },
  ],
  featured: {
    title: 'Únete a nuestro equipo',
    description:
      'AOG busca profesionales talentosos para crecer juntos en la industria petrolera.',
    href: '/careers',
    cta: 'Ver oportunidades',
  },
}

/**
 * Soluciones Mega Menu
 * Industry-specific solutions and use cases
 */
export const SOLUCIONES_MEGAMENU: MegaMenuSection = {
  label: 'Soluciones',
  columns: [
    {
      title: 'Por Industria',
      items: [
        {
          title: 'Exploración y Perforación',
          description: 'Equipos para descubrimiento de yacimientos',
          href: '/solutions/exploration',
        },
        {
          title: 'Producción',
          description: 'Optimización de extracción',
          href: '/solutions/production',
        },
        {
          title: 'Refinación',
          description: 'Procesamiento y transformación',
          href: '/solutions/refining',
        },
        {
          title: 'Transporte y Distribución',
          description: 'Logística de hidrocarburos',
          href: '/solutions/transport',
        },
      ],
    },
    {
      title: 'Por Desafío',
      items: [
        {
          title: 'Reducción de NPT',
          description: 'Minimizar tiempo no productivo',
          href: '/solutions/npt-reduction',
        },
        {
          title: 'Control de Costos',
          description: 'Optimización financiera',
          href: '/solutions/cost-control',
        },
        {
          title: 'Cumplimiento Normativo',
          description: 'Regulaciones y estándares',
          href: '/solutions/compliance',
        },
        {
          title: 'Eficiencia Energética',
          description: 'Ahorro y sostenibilidad',
          href: '/solutions/energy-efficiency',
        },
      ],
    },
    {
      title: 'Recursos',
      items: [
        {
          title: 'Casos de Éxito',
          description: 'Proyectos destacados',
          href: '/case-studies',
          icon: Award,
        },
        {
          title: 'Documentación Técnica',
          description: 'Manuales y especificaciones',
          href: '/resources/documentation',
          icon: FileText,
        },
        {
          title: 'Capacitación',
          description: 'Programas de formación',
          href: '/resources/training',
          icon: Users,
        },
      ],
    },
  ],
  featured: {
    title: 'Catálogo de Productos 2025',
    description:
      'Descubra nuestra línea completa de equipos y servicios para la industria petrolera.',
    href: '/resources/catalog',
    cta: 'Descargar catálogo',
  },
}

/**
 * Mega Menu Configuration
 * Maps navigation items to their mega menu sections
 */
export const MEGA_MENU_CONFIG = {
  servicios: SERVICIOS_MEGAMENU,
  nosotros: NOSOTROS_MEGAMENU,
  soluciones: SOLUCIONES_MEGAMENU,
} as const

export type MegaMenuKey = keyof typeof MEGA_MENU_CONFIG
