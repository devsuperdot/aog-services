'use client'

import React from 'react'
import { Shield, CheckCircle2 } from 'lucide-react'

/**
 * CertificationsSection Component
 *
 * Displays certifications, accreditations and quality commitments
 */

interface Certification {
  name: string
  description: string
}

const certifications: Certification[] = [
  {
    name: 'ISO 9001:2015',
    description: 'Sistema de Gestión de Calidad',
  },
  {
    name: 'ISO 14001:2015',
    description: 'Sistema de Gestión Ambiental',
  },
  {
    name: 'ISO 45001:2018',
    description: 'Seguridad y Salud en el Trabajo',
  },
  {
    name: 'STPS',
    description: 'Secretaría del Trabajo y Previsión Social',
  },
  {
    name: 'ASNT',
    description: 'American Society for Nondestructive Testing',
  },
  {
    name: 'API',
    description: 'American Petroleum Institute',
  },
]

const commitments: string[] = [
  'Cumplimiento estricto de requisitos legales y normativos',
  'Protección del medio ambiente y prevención de la contaminación',
  'Salud y seguridad de nuestro personal',
  'Mejora continua del sistema de gestión integral',
  'Uso sostenible de recursos',
  'Prevención de lesiones y bienestar laboral',
]

export default function CertificationsSection(): React.ReactElement {
  return (
    <section className="bg-header-bg py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Certifications */}
          <div>
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 text-header-accent">
                  <Shield size={24} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-header-text md:text-4xl">
                  Certificaciones
                </h2>
              </div>
              <p className="text-lg text-header-text-secondary">
                Acreditaciones y validaciones nacionales e internacionales
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-header-border bg-white p-6 transition-all duration-300 hover:border-header-accent hover:shadow-lg"
                >
                  <div className="mb-2 text-lg font-bold text-header-text">
                    {cert.name}
                  </div>
                  <div className="text-sm text-header-text-secondary">
                    {cert.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Commitments */}
          <div>
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 text-header-accent">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-header-text md:text-4xl">
                  Nuestro Compromiso
                </h2>
              </div>
              <p className="text-lg text-header-text-secondary">
                Política de gestión integral para la excelencia operacional
              </p>
            </div>

            <div className="space-y-4">
              {commitments.map((commitment, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-teal-50">
                    <CheckCircle2 size={16} className="text-header-accent" />
                  </div>
                  <p className="flex-1 text-base leading-relaxed text-header-text">
                    {commitment}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality Statement */}
            <div className="mt-8 rounded-xl border-l-4 border-header-accent bg-teal-50 p-6">
              <p className="text-sm italic leading-relaxed text-header-text">
                "Trabajamos garantizando niveles óptimos de desempeño en nuestros servicios,
                satisfaciendo plenamente los requerimientos y expectativas de nuestros clientes,
                siendo éticos, amigables con el planeta y responsables en aspectos ambientales."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
