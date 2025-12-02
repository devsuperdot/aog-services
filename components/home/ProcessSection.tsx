'use client'

import React from 'react'
import { FileText, Calendar, ClipboardCheck, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * ProcessSection Component
 *
 * Displays the step-by-step process for working with AOG Services
 */

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Solicitud',
    description: 'Contáctenos para conocer sus necesidades específicas de inspección, certificación o capacitación.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Programación',
    description: 'Agendamos la fecha y hora que mejor se adapte a sus operaciones, minimizando tiempos de inactividad.',
    icon: Calendar,
  },
  {
    number: '03',
    title: 'Evaluación',
    description: 'Nuestro equipo de expertos realiza la inspección o capacitación con los más altos estándares de calidad.',
    icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'Certificación',
    description: 'Entregamos documentación oficial con validez nacional e internacional en tiempo récord.',
    icon: Award,
  },
]

export default function ProcessSection(): React.ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-header-text md:text-4xl">
            ¿Cómo Trabajamos?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-header-text-secondary">
            Un proceso simple y eficiente para garantizar la seguridad y cumplimiento de sus operaciones
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="absolute left-0 right-0 top-20 hidden h-0.5 bg-gradient-to-r from-transparent via-header-border to-transparent lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="relative">
                  {/* Card */}
                  <div className="group relative rounded-2xl border border-header-border bg-white p-8 transition-all duration-300 hover:border-header-accent hover:shadow-xl">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-header-accent to-header-accent-dark text-lg font-bold text-white shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 text-header-accent transition-all duration-300 group-hover:scale-110 group-hover:from-header-accent group-hover:to-header-accent-dark group-hover:text-white">
                      <Icon size={32} />
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-bold text-header-text">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-header-text-secondary">
                      {step.description}
                    </p>

                    {/* Decorative gradient */}
                    <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-teal-100/30 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-header-text-secondary">
            ¿Listo para comenzar?
          </p>
          <a
            href="/get-quote"
            className="inline-flex items-center gap-2 rounded-full bg-header-accent px-8 py-3 text-base font-semibold text-white transition-all hover:bg-header-accent-dark hover:shadow-lg"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  )
}
