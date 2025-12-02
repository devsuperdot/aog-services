'use client'

import React from 'react'
import Link from 'next/link'
import { Shield, GraduationCap, ClipboardCheck, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * ServicesSection Component
 *
 * Displays the three main service categories of AOG Services:
 * - Inspección
 * - Certificación
 * - Capacitación
 */

interface Service {
  title: string
  description: string
  icon: LucideIcon
  href: string
  features: string[]
}

const services: Service[] = [
  {
    title: 'Inspección',
    description: 'Ensayos no destructivos y evaluación especializada de equipos industriales',
    icon: ClipboardCheck,
    href: '/services/inspection',
    features: [
      'Ultrasonido Industrial',
      'Líquidos Penetrantes',
      'Partículas Magnéticas',
      'Inspección Visual',
      'Radiografía Industrial',
    ],
  },
  {
    title: 'Certificación',
    description: 'Validación profesional de equipos de izaje y maquinaria pesada',
    icon: Shield,
    href: '/services/certification',
    features: [
      'Grúas Móviles',
      'Brazos Articulados',
      'Plataformas Auto-elevables',
      'Montacargas',
      'Aparejos y Accesorios',
    ],
  },
  {
    title: 'Capacitación',
    description: 'Programas de formación especializada para la industria petrolera',
    icon: GraduationCap,
    href: '/services/training',
    features: [
      'Seguridad Industrial',
      'RigPass',
      'Trabajos en Alturas',
      'Primeros Auxilios',
      'Operación de Equipos',
    ],
  },
]

export default function ServicesSection(): React.ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-header-text md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-header-text-secondary">
            Soluciones integrales para la industria petrolera, construcción e industrial
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-header-border bg-white p-8 transition-all duration-300 hover:border-header-accent hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 text-header-accent transition-all duration-300 group-hover:scale-110 group-hover:from-header-accent group-hover:to-header-accent-dark group-hover:text-white group-hover:shadow-lg">
                  <Icon size={32} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-bold text-header-text">
                  {service.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-header-text-secondary">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li
                      key={featureIdx}
                      className="flex items-start text-sm text-header-text-secondary"
                    >
                      <span className="mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-header-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-header-accent transition-all group-hover:gap-3"
                >
                  Conocer más
                  <ArrowRight size={16} />
                </Link>

                {/* Decorative gradient */}
                <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-teal-100/50 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
