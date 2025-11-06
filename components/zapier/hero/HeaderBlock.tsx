'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Award, CheckCircle2 } from 'lucide-react'

/**
 * HeaderBlock Component
 *
 * Minimalist and elegant hero for OTC Oilfield - Tech-forward design
 */

export default function HeaderBlock(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Turquoise accent gradient */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-gradient-to-br from-header-accent/5 to-transparent blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:py-40">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-header-accent/20 bg-header-accent/5 px-4 py-1.5 text-sm font-medium text-header-accent">
          <Shield size={14} />
          <span>Certificados ISO 9001 • ISO 14001 • ISO 45001</span>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          {/* Left: Text Content */}
          <div>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Seguridad y
              <br />
              <span className="bg-gradient-to-r from-header-accent to-header-accent-light bg-clip-text text-transparent">
                Certificación
              </span>
              <br />
              Industrial
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Inspección, certificación y capacitación especializada para la industria petrolera con validez nacional e internacional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/get-quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-header-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-header-accent-dark hover:shadow-lg hover:shadow-header-accent/25"
              >
                Solicitar Cotización
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                Ver Servicios
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-header-accent">15+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-header-accent">10K+</div>
                <div className="text-sm text-gray-600">Certificaciones</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-header-accent">99.8%</div>
                <div className="text-sm text-gray-600">Tasa de aprobación</div>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="relative space-y-4">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-header-accent/30 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-header-accent/10">
                  <Shield size={24} className="text-header-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Inspección Certificada</h3>
                  <p className="text-sm text-gray-600">Ensayos no destructivos</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-header-accent" />
                  Ultrasonido acuático
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-header-accent" />
                  Líquidos penetrantes
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-header-accent" />
                  Partículas magnéticas
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-header-accent/30 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-header-accent/10">
                  <Award size={24} className="text-header-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Capacitación Profesional</h3>
                  <p className="text-sm text-gray-600">Validez oficial</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-header-accent" />
                  Seguridad industrial
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-header-accent" />
                  RigPass certificado
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-header-accent" />
                  Trabajos en alturas
                </li>
              </ul>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-header-accent/10 to-transparent blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
