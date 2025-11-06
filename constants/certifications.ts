/**
 * Certifications and Standards
 * All company certifications and industry standards
 */

export const ISO_CERTIFICATIONS = [
  {
    code: 'ISO 9001:2015',
    name: 'Gestión de Calidad',
    description: 'Sistema de gestión de calidad certificado',
  },
  {
    code: 'ISO 14001:2015',
    name: 'Gestión Ambiental',
    description: 'Sistema de gestión ambiental certificado',
  },
  {
    code: 'ISO 45001:2018',
    name: 'Seguridad y Salud Ocupacional',
    description: 'Sistema de gestión de seguridad y salud en el trabajo',
  },
] as const

export const INDUSTRY_STANDARDS = [
  {
    code: 'ASME',
    name: 'American Society of Mechanical Engineers',
    scope: 'Códigos de construcción y presión',
  },
  {
    code: 'ASTM',
    name: 'American Society for Testing and Materials',
    scope: 'Estándares de materiales y métodos de prueba',
  },
  {
    code: 'AWS',
    name: 'American Welding Society',
    scope: 'Estándares de soldadura y certificación',
  },
  {
    code: 'API',
    name: 'American Petroleum Institute',
    scope: 'Estándares de la industria petrolera',
  },
  {
    code: 'NOM-005-STPS',
    name: 'Seguridad e Higiene',
    scope: 'Manejo, transporte y almacenamiento de sustancias',
  },
] as const

export const ACCREDITATIONS = [
  'STPS (Secretaría del Trabajo y Previsión Social)',
  'CONOCER (Consejo Nacional de Normalización y Certificación)',
  'ASNT (American Society for Nondestructive Testing)',
] as const

export const CERTIFICATIONS_BADGE_TEXT = 'Certificados ISO 9001 • ISO 14001 • ISO 45001'
