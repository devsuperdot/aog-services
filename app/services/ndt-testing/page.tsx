import React from 'react'
import Link from 'next/link'
import {
  Radio,
  Droplet,
  Magnet,
  Waves,
  Eye,
  CheckCircle2,
  Shield,
  Building2,
  Zap,
  Wrench,
  GraduationCap,
  FileCheck,
  TrendingUp,
  Users
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ensayos No Destructivos | OTC Petroleum',
  description: 'Ultrasonido, líquidos penetrantes y partículas magnéticas para detección de fallas',
}

const ndtMethods = [
  {
    icon: Waves,
    name: 'Ultrasonido Industrial',
    description: 'Detección de discontinuidades internas mediante ondas ultrasónicas de alta frecuencia.',
    applications: [
      'Medición de espesores',
      'Detección de grietas internas',
      'Evaluación de soldaduras',
      'Inspección de materiales compuestos'
    ],
    standards: ['ASME Sec. V', 'AWS D1.1', 'API 510']
  },
  {
    icon: Droplet,
    name: 'Líquidos Penetrantes',
    description: 'Identificación de discontinuidades superficiales abiertas en materiales no porosos.',
    applications: [
      'Detección de grietas superficiales',
      'Inspección de piezas fundidas',
      'Verificación post-soldadura',
      'Control de calidad de manufactura'
    ],
    standards: ['ASME Sec. V', 'ASTM E1417', 'ISO 3452']
  },
  {
    icon: Magnet,
    name: 'Partículas Magnéticas',
    description: 'Localización de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos.',
    applications: [
      'Inspección de soldaduras',
      'Detección de grietas por fatiga',
      'Control de piezas forjadas',
      'Verificación de engranajes y ejes'
    ],
    standards: ['ASME Sec. V', 'ASTM E1444', 'ISO 9934']
  },
  {
    icon: Radio,
    name: 'Radiografía Industrial',
    description: 'Evaluación interna de componentes mediante rayos X o rayos gamma.',
    applications: [
      'Inspección de soldaduras críticas',
      'Detección de porosidad interna',
      'Análisis de fundiciones',
      'Verificación de ensambles'
    ],
    standards: ['ASME Sec. V', 'ASTM E1742', 'ISO 17636']
  },
  {
    icon: Eye,
    name: 'Inspección Visual',
    description: 'Examen directo o remoto de superficies para detectar discontinuidades visibles.',
    applications: [
      'Inspección general de equipos',
      'Detección de corrosión',
      'Verificación dimensional',
      'Inspección con videoscopio'
    ],
    standards: ['ASME Sec. V', 'API 510', 'ASTM E165']
  }
]

const benefits = [
  {
    icon: Shield,
    title: 'Sin Daño al Material',
    description: 'Las piezas inspeccionadas mantienen su integridad y pueden seguir en servicio'
  },
  {
    icon: CheckCircle2,
    title: 'Alta Confiabilidad',
    description: 'Detección precisa de fallas antes de que causen problemas mayores'
  },
  {
    icon: TrendingUp,
    title: 'Ahorro de Costos',
    description: 'Prevención de fallas catastróficas y optimización del mantenimiento'
  },
  {
    icon: FileCheck,
    title: 'Cumplimiento Normativo',
    description: 'Certificados con validez oficial según normas nacionales e internacionales'
  }
]

const industries = [
  {
    icon: Zap,
    name: 'Petróleo y Gas',
    description: 'Tuberías, tanques de almacenamiento, plataformas offshore'
  },
  {
    icon: Building2,
    name: 'Construcción',
    description: 'Estructuras metálicas, puentes, edificaciones industriales'
  },
  {
    icon: Wrench,
    name: 'Manufactura',
    description: 'Piezas críticas, componentes automotrices, maquinaria pesada'
  },
  {
    icon: Zap,
    name: 'Generación de Energía',
    description: 'Turbinas, calderas, intercambiadores de calor'
  }
]

export default function NdtTestingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-gradient-to-br from-header-accent/5 to-transparent blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 px-4 py-1.5">
              <Shield size={16} className="text-header-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-header-accent">
                Servicios de Inspección
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-header-text md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">
                Ensayos No Destructivos
              </span>
            </h1>
            <p className="mb-8 text-lg text-header-text-secondary md:text-xl">
              Detección precisa de discontinuidades y defectos sin comprometer la integridad de sus equipos y estructuras
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-header-accent to-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
              >
                Solicitar Cotización
              </Link>
              <Link
                href="/platform/signup"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-header-border bg-white px-6 py-3 font-semibold text-header-text transition-all hover:border-header-accent hover:bg-header-hover"
              >
                <GraduationCap size={20} />
                Cursos de Capacitación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-header-bg py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              ¿Qué son los Ensayos No Destructivos?
            </h2>
            <p className="text-lg leading-relaxed text-header-text-secondary">
              Los Ensayos No Destructivos (END o NDT por sus siglas en inglés) son técnicas de inspección que permiten
              evaluar las propiedades de un material, componente o sistema sin causar daño. Son fundamentales para
              garantizar la seguridad, confiabilidad y calidad en industrias críticas como petróleo, gas, construcción
              y manufactura.
            </p>
          </div>
        </div>
      </section>

      {/* NDT Methods */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              Métodos de Inspección
            </h2>
            <p className="text-lg text-header-text-secondary">
              Ofrecemos los principales métodos de END certificados por organismos internacionales
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ndtMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-header-border bg-white p-6 transition-all duration-300 hover:border-header-accent hover:shadow-xl"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-header-accent/10 to-transparent blur-2xl transition-all group-hover:from-header-accent/20" />

                  <div className="relative">
                    <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 p-3">
                      <Icon size={28} className="text-header-accent" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-header-text">
                      {method.name}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-header-text-secondary">
                      {method.description}
                    </p>

                    <div className="mb-4">
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-header-accent">
                        Aplicaciones:
                      </div>
                      <ul className="space-y-1">
                        {method.applications.map((app, appIdx) => (
                          <li key={appIdx} className="flex items-start gap-2 text-sm text-header-text-secondary">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-header-accent" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-header-border pt-3">
                      <div className="text-xs text-header-text-secondary">
                        <span className="font-semibold">Normas: </span>
                        {method.standards.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-header-bg py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              Beneficios de los END
            </h2>
            <p className="text-lg text-header-text-secondary">
              Por qué elegir ensayos no destructivos para sus inspecciones
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-header-border bg-white p-6 text-center transition-all hover:border-header-accent hover:shadow-lg"
                >
                  <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 p-3">
                    <Icon size={32} className="text-header-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-header-text">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-header-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              Industrias que Servimos
            </h2>
            <p className="text-lg text-header-text-secondary">
              Experiencia comprobada en sectores críticos
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, idx) => {
              const Icon = industry.icon
              return (
                <div
                  key={idx}
                  className="group rounded-xl border border-header-border bg-white p-6 transition-all hover:border-header-accent hover:shadow-lg"
                >
                  <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 p-3 transition-all group-hover:scale-110">
                    <Icon size={28} className="text-header-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-header-text">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-header-text-secondary">
                    {industry.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-header-bg py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-header-text-secondary">
              Metodología probada para resultados confiables
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-20 hidden h-0.5 bg-gradient-to-r from-transparent via-header-border to-transparent lg:block" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: '01',
                  title: 'Evaluación Inicial',
                  description: 'Análisis de requerimientos y selección del método END apropiado'
                },
                {
                  number: '02',
                  title: 'Planificación',
                  description: 'Desarrollo del procedimiento de inspección según normas aplicables'
                },
                {
                  number: '03',
                  title: 'Ejecución',
                  description: 'Inspección realizada por personal certificado nivel II y III'
                },
                {
                  number: '04',
                  title: 'Reporte',
                  description: 'Documentación completa con resultados y recomendaciones'
                }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="group relative rounded-2xl border border-header-border bg-white p-6 transition-all duration-300 hover:border-header-accent hover:shadow-xl">
                    <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-header-accent to-header-accent-dark text-lg font-bold text-white shadow-lg">
                      {step.number}
                    </div>

                    <div className="mt-4">
                      <h3 className="mb-3 text-xl font-bold text-header-text">
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed text-header-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training CTA */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 top-0 h-[400px] w-[400px] bg-gradient-to-br from-header-accent/5 to-transparent blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="overflow-hidden rounded-2xl border border-header-border bg-white/50 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 px-4 py-1.5">
                  <GraduationCap size={16} className="text-header-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-header-accent">
                    Capacitación Profesional
                  </span>
                </div>

                <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
                  Certifícate en{' '}
                  <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">
                    Ensayos No Destructivos
                  </span>
                </h2>

                <p className="mb-6 text-lg text-header-text-secondary">
                  Ofrecemos cursos certificados por STPS y organismos internacionales. Conviértete en inspector END nivel I, II o III.
                </p>

                <div className="mb-8 space-y-3">
                  {[
                    'Cursos presenciales y en línea',
                    'Certificación internacional ASNT',
                    'Prácticas con equipos de última generación',
                    'Instructores con más de 15 años de experiencia'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-header-accent" />
                      <span className="text-sm text-header-text">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/platform/signup"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-header-accent to-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
                >
                  Ver Cursos Disponibles
                </Link>
              </div>

              <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 p-8 md:p-12">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Users size={80} className="mx-auto mb-6 text-header-accent opacity-20" />
                    <div className="mb-4 text-4xl font-bold text-header-accent">500+</div>
                    <div className="text-lg font-semibold text-header-text">
                      Profesionales Certificados
                    </div>
                    <div className="mt-2 text-sm text-header-text-secondary">
                      En los últimos 5 años
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-header-bg py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="rounded-2xl border border-header-border bg-white p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              ¿Necesita Inspección de END?
            </h2>
            <p className="mb-8 text-lg text-header-text-secondary">
              Nuestro equipo de inspectores certificados está listo para ayudarle
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-header-accent to-cyan-600 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg"
              >
                Solicitar Cotización
              </Link>
              <a
                href="tel:+522291234567"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-header-border bg-white px-8 py-3 font-semibold text-header-text transition-all hover:border-header-accent hover:bg-header-hover"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
