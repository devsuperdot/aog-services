'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ClipboardCheck,
  Shield,
  GraduationCap,
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
  FileText,
  Users,
  Zap
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * QuickAccessSection Component
 *
 * Interactive service selector with detailed information and quick actions
 * Allows users to explore services, compare options, and take immediate action
 */

interface ServiceDetail {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  gradient: string
  duration: string
  certValidity: string
  features: string[]
  quickActions: {
    label: string
    href: string
    primary?: boolean
  }[]
  stats: {
    icon: LucideIcon
    value: string
    label: string
  }[]
}

const services: ServiceDetail[] = [
  {
    id: 'inspeccion',
    title: 'Inspección Industrial',
    description: 'Ensayos no destructivos certificados para equipos críticos',
    icon: ClipboardCheck,
    color: 'text-blue-600',
    gradient: 'from-blue-50 to-cyan-50',
    duration: '1-3 días',
    certValidity: '1 año',
    features: [
      'Ultrasonido de espesores',
      'Líquidos penetrantes',
      'Partículas magnéticas',
      'Inspección visual avanzada',
      'Radiografía industrial',
      'Corrientes inducidas'
    ],
    stats: [
      { icon: Clock, value: '24-48h', label: 'Respuesta' },
      { icon: FileText, value: '100%', label: 'Reportes digitales' },
      { icon: Users, value: '50+', label: 'Técnicos cert.' }
    ],
    quickActions: [
      { label: 'Solicitar Inspección', href: '/get-quote?service=inspeccion', primary: true },
      { label: 'Ver Métodos', href: '/services/inspection' }
    ]
  },
  {
    id: 'certificacion',
    title: 'Certificación de Equipos',
    description: 'Validación profesional de equipos de izaje y maquinaria',
    icon: Shield,
    color: 'text-header-accent',
    gradient: 'from-teal-50 to-cyan-50',
    duration: '1-2 días',
    certValidity: '6-12 meses',
    features: [
      'Grúas móviles y torre',
      'Montacargas industriales',
      'Plataformas elevadoras',
      'Aparejos y eslingas',
      'Brazos articulados',
      'Equipos de levante'
    ],
    stats: [
      { icon: CheckCircle2, value: '99.8%', label: 'Aprobación' },
      { icon: Calendar, value: '24/7', label: 'Disponibilidad' },
      { icon: Zap, value: '2h', label: 'Servicio express' }
    ],
    quickActions: [
      { label: 'Agendar Certificación', href: '/get-quote?service=certificacion', primary: true },
      { label: 'Equipos Soportados', href: '/services/certification' }
    ]
  },
  {
    id: 'capacitacion',
    title: 'Capacitación Certificada',
    description: 'Cursos especializados con validez oficial nacional',
    icon: GraduationCap,
    color: 'text-purple-600',
    gradient: 'from-purple-50 to-pink-50',
    duration: '1-5 días',
    certValidity: '2 años',
    features: [
      'Seguridad industrial',
      'RigPass certificado',
      'Trabajos en alturas',
      'Espacios confinados',
      'Primeros auxilios',
      'Operación de equipos'
    ],
    stats: [
      { icon: Users, value: '5,000+', label: 'Egresados' },
      { icon: Calendar, value: 'Online', label: 'Disponible' },
      { icon: FileText, value: 'STPS', label: 'Validez oficial' }
    ],
    quickActions: [
      { label: 'Ver Calendario', href: '/services/training', primary: true },
      { label: 'Catálogo Completo', href: '/services/training#catalog' }
    ]
  }
]

export default function QuickAccessSection(): React.ReactElement {
  const [selectedService, setSelectedService] = useState<string>(services[0].id)
  const activeService = services.find(s => s.id === selectedService) || services[0]
  const ServiceIcon = activeService.icon

  return (
    <section className="relative bg-white py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-header-accent/20 bg-header-accent/5 px-4 py-1.5 text-sm font-medium text-header-accent">
            <Zap size={14} />
            <span>Acceso Rápido a Servicios</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            ¿Qué servicio necesitas?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Selecciona el servicio que necesitas y obtén información detallada al instante
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {services.map((service) => {
            const Icon = service.icon
            const isActive = selectedService === service.id

            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`
                  group flex items-center gap-3 rounded-xl border-2 px-6 py-4 text-left transition-all
                  ${isActive
                    ? 'border-header-accent bg-header-accent text-white shadow-lg shadow-header-accent/25'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }
                `}
              >
                <div className={`
                  flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all
                  ${isActive
                    ? 'bg-white/20'
                    : 'bg-gray-100 group-hover:bg-gray-200'
                  }
                `}>
                  <Icon size={20} className={isActive ? 'text-white' : 'text-gray-600'} />
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </div>
                  <div className={`hidden text-xs sm:block ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                    {service.duration} • Cert. válida {service.certValidity}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Service Details */}
        <div className={`overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br ${activeService.gradient} shadow-xl transition-all duration-300`}>
          <div className="grid gap-0 md:grid-cols-[1fr_auto]">
            {/* Left: Service Information */}
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg">
                  <ServiceIcon size={32} className={activeService.color} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
                    {activeService.title}
                  </h3>
                  <p className="text-base text-gray-600 md:text-lg">
                    {activeService.description}
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="mb-8 grid grid-cols-3 gap-4">
                {activeService.stats.map((stat, idx) => {
                  const StatIcon = stat.icon
                  return (
                    <div key={idx} className="rounded-xl bg-white/60 p-4 backdrop-blur-sm">
                      <div className="mb-1 flex items-center gap-2">
                        <StatIcon size={16} className={activeService.color} />
                        <div className="text-xs font-medium text-gray-600">{stat.label}</div>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    </div>
                  )
                })}
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-700">
                  Servicios Incluidos
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${activeService.color}`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col gap-3 sm:flex-row">
                {activeService.quickActions.map((action, idx) => (
                  <Link
                    key={idx}
                    href={action.href}
                    className={`
                      group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all
                      ${action.primary
                        ? 'bg-header-accent text-white shadow-lg shadow-header-accent/25 hover:bg-header-accent-dark'
                        : 'border-2 border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                      }
                    `}
                  >
                    {action.label}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden items-center justify-center border-l border-gray-200 bg-white/30 p-8 md:flex md:w-64">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                    <ServiceIcon size={48} className={activeService.color} />
                  </div>
                </div>
                <div className="mb-2 text-4xl font-bold text-gray-900">
                  {activeService.duration}
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Duración típica
                </div>
                <div className="rounded-lg bg-white/80 p-3">
                  <div className="text-xs font-medium text-gray-600">Certificado válido</div>
                  <div className="text-lg font-bold text-gray-900">{activeService.certValidity}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            ¿No encuentras lo que buscas?{' '}
            <Link href="/contact" className="font-semibold text-header-accent hover:underline">
              Contáctanos para servicios personalizados
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
