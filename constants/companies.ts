/**
 * Trusted Companies
 * Companies that trust AOG Services for their safety and certification needs
 */

export interface CompanyLogo {
  name: string
  logo: string
  width: number
  height: number
}

export const TRUSTED_COMPANIES: CompanyLogo[] = [
  {
    name: 'Pemex',
    logo: 'https://logo.clearbit.com/pemex.com',
    width: 180,
    height: 60,
  },
  {
    name: 'Shell',
    logo: 'https://logo.clearbit.com/shell.com',
    width: 150,
    height: 60,
  },
  {
    name: 'Chevron',
    logo: 'https://logo.clearbit.com/chevron.com',
    width: 170,
    height: 60,
  },
  {
    name: 'BP',
    logo: 'https://logo.clearbit.com/bp.com',
    width: 140,
    height: 60,
  },
  {
    name: 'ExxonMobil',
    logo: 'https://logo.clearbit.com/exxonmobil.com',
    width: 195,
    height: 60,
  },
  {
    name: 'Total',
    logo: 'https://logo.clearbit.com/total.com',
    width: 160,
    height: 60,
  },
  {
    name: 'Halliburton',
    logo: 'https://logo.clearbit.com/halliburton.com',
    width: 175,
    height: 60,
  },
  {
    name: 'Schlumberger',
    logo: 'https://logo.clearbit.com/slb.com',
    width: 190,
    height: 60,
  },
  {
    name: 'Baker Hughes',
    logo: 'https://logo.clearbit.com/bakerhughes.com',
    width: 165,
    height: 60,
  },
  {
    name: 'Weatherford',
    logo: 'https://logo.clearbit.com/weatherford.com',
    width: 185,
    height: 60,
  },
] as const

export const COMPANY_STATS = {
  yearsExperience: '15+',
  certificationsIssued: '10K+',
  approvalRate: '99.8%',
  clientsServed: '200+',
  trainedProfessionals: '5K+',
} as const
