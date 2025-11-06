/**
 * AOG Contact Information
 * Single source of truth for all contact details across the site
 */

export const CONTACT_INFO = {
  company: {
    name: 'AOG',
    fullName: 'AOG Services',
    legalName: 'AOG Services S.A. de C.V.',
    tagline: 'Soluciones vanguardistas para la industria del petróleo y gas',
  },
  phone: {
    primary: '+52 993 112 0389',
    technical: '+52 9931 147 2257',
    formatted: {
      primary: '+52 993 112 0389',
      technical: '+52 9931 147 2257',
    },
  },
  email: {
    general: 'edgar.lopez@argasur.com',
    technical: 'javier.sanchez@argasur.com',
    sales: 'edgar.lopez@argasur.com',
  },
  address: {
    city: 'Villahermosa',
    state: 'Tabasco',
    country: 'México',
    full: 'Villahermosa, Tabasco, México',
  },
  social: {
    linkedin: 'https://linkedin.com/company/aog-services',
    facebook: 'https://facebook.com/aogservices',
  },
  hours: {
    weekday: 'Lunes a Viernes: 7:00 AM - 7:00 PM',
    saturday: 'Sábado: 8:00 AM - 2:00 PM',
    sunday: 'Domingo: Cerrado',
    emergency: 'Servicios de emergencia 24/7 disponibles',
  },
  website: 'https://aogservices.com',
  contact: {
    generalManager: {
      name: 'Carlos Edgar López Martínez',
      title: 'General Manager',
      email: 'edgar.lopez@argasur.com',
      phones: ['+52 9931 120 389', '+52 9931 321 730'],
    },
  },
} as const

export const EMERGENCY_CONTACT = {
  phone: '+52 993 112 0389',
  available: '24/7',
  description: 'Servicios de emergencia disponibles las 24 horas',
} as const
