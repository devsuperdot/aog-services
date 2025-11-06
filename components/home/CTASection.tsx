'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, Sparkles, Shield } from 'lucide-react'

/**
 * CTASection Component
 *
 * Modern, tech-forward call-to-action section with glassmorphism and gradient effects
 */

export default function CTASection(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20 md:py-28">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Floating gradient orbs */}
      <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-gradient-to-r from-header-accent/20 to-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-teal-400/20 to-header-accent/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Main card with glassmorphism */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white/60 p-12 shadow-2xl backdrop-blur-xl md:p-16">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-header-accent/5 via-transparent to-cyan-400/5" />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-header-accent/20 bg-header-accent/10 px-4 py-2 text-sm font-semibold text-header-accent backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-header-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-header-accent"></span>
              </span>
              Disponibles 24/7 • Respuesta Inmediata
            </div>

            {/* Heading with gradient text */}
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              ¿Listo para Cumplir con los{' '}
              <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">
                más Altos Estándares?
              </span>
            </h2>

            {/* Description */}
            <p className="mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
              Únase a cientos de empresas que confían en OTC Petroleum para sus necesidades de
              inspección, certificación y capacitación. Obtenga una cotización personalizada hoy mismo.
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/get-quote"
                className="group inline-flex items-center gap-2 rounded-full bg-header-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-header-accent/25 transition-all hover:scale-105 hover:bg-header-accent-dark hover:shadow-xl hover:shadow-header-accent/40"
              >
                <Sparkles size={20} className="transition-transform group-hover:rotate-12" />
                Solicitar Cotización
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:scale-105 hover:border-header-accent hover:bg-gray-50"
              >
                <Shield size={20} />
                Contáctenos
              </Link>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href="tel:+529331234567"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-header-accent hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-header-accent to-cyan-600 text-white shadow-lg transition-all group-hover:scale-110">
                    <Phone size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-gray-500">Llámenos ahora</div>
                    <div className="text-lg font-bold text-gray-900">+52 933 123 4567</div>
                  </div>
                </div>
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-header-accent/0 via-header-accent/5 to-header-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>

              <a
                href="mailto:contacto@otcpetroleum.com"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-header-accent hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-header-accent text-white shadow-lg transition-all group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-gray-500">Escríbanos</div>
                    <div className="text-sm font-bold text-gray-900">contacto@otcpetroleum.com</div>
                  </div>
                </div>
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-header-accent/0 via-header-accent/5 to-header-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-gray-200 pt-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-header-accent" />
                <span>Certificados ISO</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-header-accent" />
                <span>15+ años de experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-header-accent" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
