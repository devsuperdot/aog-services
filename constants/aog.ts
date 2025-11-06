/**
 * AOG Company Data
 * Enterprise Oil & Gas Services
 */

import {
  Shield,
  Zap,
  Award,
  Leaf,
  Users,
  Target,
  Droplets,
  Wrench,
  Search,
  Hammer,
  Settings,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react'

export const AOG_COMPANY = {
  name: 'AOG',
  fullName: 'AOG Services',
  tagline: 'Soluciones vanguardistas para la industria del petróleo y gas',
  location: 'Villahermosa, Tabasco; México',
  phone: {
    main: '993-112-0389',
    technical: '9931 147 2257',
    formatted: {
      main: '+52 993 112 0389',
      technical: '+52 9931 147 2257',
    },
  },
  email: {
    general: 'edgar.lopez@argasur.com',
    technical: 'javier.sanchez@argasur.com',
  },
  contact: {
    generalManager: {
      name: 'Carlos Edgar López Martínez',
      title: 'General Manager',
      email: 'edgar.lopez@argasur.com',
      phones: ['9931120389', '9931321730'],
    },
  },
} as const

export const AOG_MISSION = {
  title: 'Misión',
  content:
    'En AOG, nos enfocamos en proporcionar soluciones vanguardistas y servicios de excelencia para la industria del petróleo y gas, optimizando la eficiencia operativa y aumentando la productividad de nuestros clientes a través de prácticas responsables y sostenibles, con un firme compromiso con la seguridad y el medio ambiente, contribuyendo al progreso energético de México.',
}

export const AOG_VISION = {
  title: 'Visión',
  content:
    'AOG será líder en la prestación de servicios en la industria del petróleo y gas, destacándose por sus soluciones innovadoras y sostenibles, reconocidos por nuestra excelencia operativa y compromiso con la calidad, generando valor a nuestros clientes y a la sociedad, siendo el socio más confiable en el sector energético.',
}

interface Value {
  title: string
  description: string
  icon: LucideIcon
}

export const AOG_VALUES: Value[] = [
  {
    title: 'Seguridad',
    description:
      'Priorizaremos la seguridad en todas nuestras operaciones, garantizando un entorno protegido para nuestros empleados y clientes.',
    icon: Shield,
  },
  {
    title: 'Innovación',
    description:
      'Fomentaremos la innovación tecnológica y la mejora continua para ofrecer soluciones avanzadas a la industria del petróleo y gas.',
    icon: Lightbulb,
  },
  {
    title: 'Integridad',
    description:
      'Actuaremos con honestidad y ética en todas nuestras acciones, manteniendo la confianza y el respeto de nuestros clientes y socios.',
    icon: Award,
  },
  {
    title: 'Sostenibilidad',
    description:
      'Nos comprometemos a adoptar prácticas responsables que protejan el medio ambiente y beneficien a la sociedad.',
    icon: Leaf,
  },
  {
    title: 'Colaboración',
    description:
      'Promoveremos un ambiente de trabajo colaborativo, valorando la diversidad y el trabajo en equipo para alcanzar objetivos comunes.',
    icon: Users,
  },
  {
    title: 'Excelencia',
    description:
      'Nos esforzaremos por alcanzar la excelencia operativa, ofreciendo servicios de alta calidad que superen las expectativas de nuestros clientes.',
    icon: Target,
  },
]

interface Service {
  id: string
  slug: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  benefits: string[]
}

export const AOG_SERVICES: Service[] = [
  {
    id: 'control-solidos',
    slug: 'control-solidos',
    title: 'Soluciones de control de sólidos',
    description:
      'La línea de control de sólidos de fluidos de perforación de AOG está diseñada para optimizar el proceso de perforación de pozos petroleros, garantizando la eficiencia operativa y la integridad del pozo.',
    icon: Droplets,
    features: [
      'Shale Shakers (Zarandas Vibratorias)',
      'Mud Cleaner (Limpia Lodos)',
      'Centrifugas Decantadoras',
      'Distribuidor de Flujo',
      'Bombas Centrifugas',
      'Servicio Técnico y soporte 24/7',
      'Instalación y puesta en marcha',
      'Survey Mecánico',
      'Medición de fuerza gravitacional',
    ],
    benefits: [
      'Eficiencia Operativa: Minimiza el tiempo de inactividad y maximiza la productividad del pozo',
      'Costos Reducidos: Disminuye el gasto en fluidos de perforación y el manejo de desechos',
      'Protección Ambiental: Reduce el impacto ambiental mediante la eficiente gestión de desechos',
      'Flexibilidad: Sistemas adaptables a diferentes condiciones y tipos de pozos',
      'Calidad Garantizada: Equipos fabricados con materiales de alta durabilidad y resistencia',
    ],
  },
  {
    id: 'equipos-perifericos',
    slug: 'equipos-perifericos',
    title: 'Equipos periféricos de soporte para perforación',
    description:
      'La línea de equipos periféricos de apoyo a la perforación de AOG está diseñada para complementar y optimizar las operaciones de perforación de pozos petroleros, asegurando una operación eficiente, segura y rentable.',
    icon: Settings,
    features: [
      'Silos de almacenamiento',
      'Tanques de Almacenamiento verticales',
      'Tanque Almacenamiento para Diesel',
      'Desgasificador Atmosférico',
      'Separador Gas-Lodo',
      'Presas metálicas',
      'Cajas de recortes',
      'Compresores de Aire',
      'Tanques de Almacenamiento tipo Frac Tank',
      'Quemadores Ecológicos',
    ],
    benefits: [
      'Eficiencia Operativa: Optimiza las operaciones de perforación y reduce tiempos de inactividad',
      'Seguridad: Proporciona un entorno de trabajo seguro y conforme a las normas',
      'Reducción de Costos: Mejora la eficiencia y reduce costos operacionales y de mantenimiento',
      'Adaptabilidad: Equipos versátiles y adaptables a diferentes condiciones de operación',
      'Calidad y Durabilidad: Equipos fabricados con materiales de alta calidad para una larga vida útil',
    ],
  },
  {
    id: 'herramientas-molienda',
    slug: 'herramientas-molienda',
    title: 'Herramientas de molienda, pesca y limpieza de pozos',
    description:
      'La línea de herramientas de limpieza mecánica, molienda y pesca de AOG está diseñada para optimizar y asegurar el éxito en la terminación de pozos petroleros.',
    icon: Wrench,
    features: [
      'Molinos',
      'Escariadores',
      'Cepillos Escariadores',
      'Magnetos de Sarta',
      'Herramientas de Pesca',
      'Canastas Chatarreras',
      'Martillos Hidromecánicos',
      'Canastilla de Transporte de Herramientas',
      'Soporte técnico 24/7',
    ],
    benefits: [
      'Eficiencia Operativa: Acelera las operaciones de limpieza, molienda y pesca',
      'Seguridad: Reduce riesgos operacionales mediante herramientas confiables',
      'Reducción de Costos: Mejora la eficiencia y reduce costos operacionales',
      'Versatilidad: Herramientas adaptables a diversas condiciones y tipos de pozos',
      'Calidad y Confiabilidad: Equipos fabricados con materiales de alta calidad para una larga vida útil',
    ],
  },
  {
    id: 'mantenimiento',
    slug: 'mantenimiento-industrial',
    title: 'Mantenimiento industrial integral',
    description:
      'La línea de mantenimiento industrial de AOG está diseñada para maximizar la eficiencia, seguridad y vida útil de los equipos e instalaciones industriales.',
    icon: Wrench,
    features: [
      'Mantenimiento Preventivo de equipos',
      'Mantenimiento Correctivo de equipos',
      'Reparación y Reemplazo de Componentes',
      'Optimización y Modernización',
      'Mantenimiento General de Infraestructura',
    ],
    benefits: [
      'Eficiencia Operativa: Maximiza la disponibilidad y rendimiento de los equipos',
      'Seguridad: Asegura un entorno de trabajo seguro y conforme a las normativas',
      'Reducción de Costos: Minimiza los gastos operacionales y evita paradas no planificadas',
      'Vida Útil Prolongada: Aumenta la durabilidad de los equipos y las instalaciones',
      'Calidad y Confiabilidad: Servicios realizados por técnicos altamente capacitados',
    ],
  },
  {
    id: 'servicios-tecnicos',
    slug: 'servicios-tecnicos',
    title: 'Servicios técnicos especializados',
    description:
      'La línea de Servicios Técnicos Especializados de AOG está diseñada para proporcionar soluciones avanzadas y soporte técnico integral en la industria petrolera.',
    icon: Search,
    features: [
      'Consultoría Técnica',
      'Ingeniería de Proyectos',
      'Monitoreo y Diagnóstico de Equipos',
      'Optimización de Procesos',
      'Capacitación y Desarrollo de Personal',
      'Inspección y Certificación',
    ],
    benefits: [
      'Expertise Especializado: Acceso a conocimientos técnicos avanzados y experiencia en la industria',
      'Eficiencia Mejorada: Optimización de procesos y equipos para maximizar la productividad',
      'Seguridad: Aseguramiento del cumplimiento con normas y estándares de seguridad',
      'Reducción de Costos: Identificación de áreas de ahorro y mejora continua',
      'Calidad y Confiabilidad: Servicios realizados por profesionales altamente capacitados',
    ],
  },
  {
    id: 'energia-iluminacion',
    slug: 'energia-iluminacion',
    title: 'Energía e iluminación móvil',
    description:
      'La línea de Energía e Iluminación Móvil de AOG está diseñada para proporcionar soluciones de energía e iluminación confiables y móviles para operaciones en el sector petrolero y otros entornos industriales.',
    icon: Zap,
    features: [
      'Renta de Generadores de Energía',
      'Renta de Luminarias Móviles',
      'Soporte Técnico 24/7',
    ],
    benefits: [
      'Movilidad y Flexibilidad: Equipos diseñados para fácil transporte e instalación',
      'Confiabilidad: Equipos de alta calidad que garantizan un suministro continuo',
      'Eficiencia Operativa: Mejora la productividad y seguridad de las operaciones en campo',
      'Reducción de Costos: Elimina la necesidad de inversiones en infraestructura permanente',
      'Soporte Técnico: Servicio integral que incluye instalación, mantenimiento y soporte continuo',
    ],
  },
]
