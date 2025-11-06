import React from 'react'
import Link from 'next/link'
import {
  Eye,
  Camera,
  Microscope,
  Binoculars,
  CheckCircle2,
  Shield,
  Award,
  Zap,
  Users,
  TrendingUp,
  FileCheck,
  ArrowRight,
  AlertTriangle,
  ClipboardCheck,
  Target,
  Layers,
  Video,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspección Visual | OTC Petroleum',
  description:
    'Evaluación detallada de equipos y estructuras industriales mediante inspección visual certificada. Detección temprana de defectos y fallas.',
}

const inspectionTypes = [
  {
    icon: Eye,
    name: 'Inspección Visual Directa',
    description:
      'Evaluación directa a simple vista de superficies accesibles, identificando discontinuidades, corrosión, deformaciones y deterioro.',
    applications: [
      'Soldaduras y uniones',
      'Superficies externas',
      'Estructuras metálicas',
      'Recubrimientos',
    ],
  },
  {
    icon: Binoculars,
    name: 'Inspección Visual Remota (RVI)',
    description:
      'Utilización de equipos ópticos especializados para inspeccionar áreas de difícil acceso sin necesidad de desmantelamiento.',
    applications: [
      'Interior de tanques',
      'Tuberías y ductos',
      'Torres y chimeneas',
      'Espacios confinados',
    ],
  },
  {
    icon: Camera,
    name: 'Videoscopía Industrial',
    description:
      'Inspección mediante cámaras flexibles de alta resolución que permiten visualizar y grabar el interior de componentes y equipos.',
    applications: [
      'Motores y turbinas',
      'Intercambiadores de calor',
      'Sistemas de tubería',
      'Calderas',
    ],
  },
  {
    icon: Microscope,
    name: 'Inspección con Aumento',
    description:
      'Evaluación detallada utilizando equipos de magnificación para detectar microfisuras, picaduras y defectos superficiales.',
    applications: [
      'Acabados superficiales',
      'Grietas incipientes',
      'Desgaste por erosión',
      'Control de calidad',
    ],
  },
]

const inspectionAreas = [
  {
    icon: Layers,
    title: 'Estructuras Metálicas',
    items: [
      'Torres y plataformas',
      'Soportes y vigas',
      'Escaleras y pasamanos',
      'Tanques de almacenamiento',
    ],
  },
  {
    icon: Target,
    title: 'Soldaduras',
    items: [
      'Soldaduras de producción',
      'Reparaciones soldadas',
      'Uniones críticas',
      'Inspección pre-servicio',
    ],
  },
  {
    icon: Shield,
    title: 'Equipos a Presión',
    items: [
      'Calderas y recipientes',
      'Tuberías de proceso',
      'Válvulas y conexiones',
      'Sistemas de contención',
    ],
  },
  {
    icon: Video,
    title: 'Sistemas Internos',
    items: [
      'Interior de equipos',
      'Ductos y conductos',
      'Cámaras de combustión',
      'Intercambiadores',
    ],
  },
]

const benefits = [
  {
    icon: Zap,
    title: 'Detección Temprana',
    description:
      'Identificación oportuna de defectos antes de que se conviertan en fallas mayores.',
  },
  {
    icon: TrendingUp,
    title: 'Reducción de Costos',
    description:
      'Prevención de paros no programados y reparaciones costosas mediante mantenimiento predictivo.',
  },
  {
    icon: Shield,
    title: 'Seguridad Mejorada',
    description:
      'Evaluación continua del estado de equipos críticos para garantizar operación segura.',
  },
  {
    icon: FileCheck,
    title: 'Cumplimiento Normativo',
    description:
      'Documentación completa que cumple con estándares nacionales e internacionales.',
  },
  {
    icon: Users,
    title: 'Inspectores Certificados',
    description:
      'Personal calificado con certificaciones ASNT, AWS y otras reconocidas internacionalmente.',
  },
  {
    icon: Award,
    title: 'Informes Detallados',
    description:
      'Reportes técnicos completos con fotografías, mediciones y recomendaciones específicas.',
  },
]

const inspectionProcess = [
  {
    step: '01',
    title: 'Planeación',
    description:
      'Definición del alcance, áreas críticas y procedimientos específicos de inspección.',
  },
  {
    step: '02',
    title: 'Preparación de Superficie',
    description:
      'Limpieza y acondicionamiento del área para garantizar visibilidad óptima.',
  },
  {
    step: '03',
    title: 'Inspección Visual',
    description:
      'Evaluación sistemática siguiendo procedimientos establecidos y estándares aplicables.',
  },
  {
    step: '04',
    title: 'Registro Fotográfico',
    description:
      'Documentación visual de hallazgos, defectos y condiciones relevantes.',
  },
  {
    step: '05',
    title: 'Análisis y Evaluación',
    description:
      'Interpretación de resultados y clasificación de indicaciones según criterios de aceptación.',
  },
  {
    step: '06',
    title: 'Informe Técnico',
    description:
      'Elaboración de reporte detallado con conclusiones y recomendaciones.',
  },
]

export default function VisualInspectionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-header-border bg-gradient-to-br from-header-accent/5 via-white to-cyan-50/30">
        {/* Decorative gradient orbs */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-header-accent/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-cyan-400/10 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-header-accent/20 bg-white/80 px-4 py-2 text-sm font-semibold text-header-accent shadow-sm backdrop-blur-sm">
              <Eye size={16} />
              Servicios de Inspección
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-header-text via-header-accent to-cyan-600 bg-clip-text text-4xl font-black text-transparent md:text-5xl lg:text-6xl">
              Inspección Visual Certificada
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-header-text-secondary md:text-xl">
              Evaluación detallada y documentada de equipos, estructuras y
              componentes industriales mediante técnicas de inspección visual
              directa y remota.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/get-quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-header-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-header-accent-dark hover:shadow-lg hover:shadow-header-accent/25"
              >
                Solicitar Inspección
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-header-border bg-white px-8 py-4 text-base font-semibold text-header-text transition-all hover:border-header-accent hover:bg-header-hover"
              >
                Contactar Especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Visual Inspection */}
      <section className="border-b border-header-border bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-header-accent/10 px-4 py-1.5 text-sm font-semibold text-header-accent">
                <AlertTriangle size={14} />
                Detección Temprana
              </div>
              <h2 className="mb-6 text-3xl font-bold text-header-text md:text-4xl">
                ¿Qué es la Inspección Visual?
              </h2>
              <p className="mb-6 text-base leading-relaxed text-header-text-secondary">
                La inspección visual es el método de ensayo no destructivo más
                utilizado en la industria. Consiste en la evaluación sistemática
                de materiales, componentes y estructuras mediante observación
                directa o con ayuda de equipos ópticos especializados.
              </p>
              <p className="mb-6 text-base leading-relaxed text-header-text-secondary">
                Este método permite detectar discontinuidades superficiales,
                corrosión, deformaciones, grietas, porosidad y otras
                irregularidades que puedan comprometer la integridad de equipos
                e instalaciones industriales.
              </p>
              <div className="rounded-xl border-l-4 border-header-accent bg-gradient-to-r from-teal-50 to-transparent p-6">
                <h3 className="mb-3 font-semibold text-header-text">
                  Estándares Aplicables:
                </h3>
                <ul className="space-y-2 text-sm text-header-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-header-accent" />
                    <span>ASME Section V - Visual Testing (VT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-header-accent" />
                    <span>
                      ASTM E165 - Standard Practice for Liquid Penetrant
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-header-accent" />
                    <span>AWS D1.1 - Structural Welding Code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-header-accent" />
                    <span>API 510/570/653 - Pressure Vessels & Tanks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Alta Efectividad',
                  description:
                    'Detecta hasta el 80% de defectos superficiales cuando se realiza correctamente.',
                },
                {
                  icon: Zap,
                  title: 'Bajo Costo',
                  description:
                    'Método económico que no requiere equipos costosos ni preparaciones complejas.',
                },
                {
                  icon: ClipboardCheck,
                  title: 'Aplicación Universal',
                  description:
                    'Aplicable a cualquier material, geometría y condición de servicio.',
                },
                {
                  icon: Shield,
                  title: 'No Invasivo',
                  description:
                    'No daña ni altera las propiedades del material inspeccionado.',
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex gap-4 rounded-xl border border-header-border bg-gradient-to-br from-gray-50 to-white p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-50">
                      <Icon size={24} className="text-header-accent" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-header-text">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-header-text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="border-b border-header-border bg-header-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              Tipos de Inspección Visual
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-header-text-secondary">
              Contamos con diferentes técnicas adaptadas a las necesidades
              específicas de cada aplicación industrial
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {inspectionTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-header-border bg-white shadow-sm transition-all hover:border-header-accent/30 hover:shadow-md"
                >
                  <div className="p-8">
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-50">
                        <Icon size={28} className="text-header-accent" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-header-text">
                          {type.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-header-text-secondary">
                          {type.description}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg border border-header-border bg-gradient-to-br from-gray-50 to-white p-4">
                      <h4 className="mb-3 text-sm font-semibold text-header-text">
                        Aplicaciones Comunes:
                      </h4>
                      <ul className="grid gap-2">
                        {type.applications.map((app, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-header-text-secondary"
                          >
                            <CheckCircle2
                              size={16}
                              className="shrink-0 text-header-accent"
                            />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Inspection Areas */}
      <section className="border-b border-header-border bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              Áreas de Aplicación
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-header-text-secondary">
              Inspección especializada para diferentes componentes y sistemas
              industriales
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {inspectionAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div
                  key={index}
                  className="rounded-xl border border-header-border bg-gradient-to-br from-gray-50 to-white p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-50">
                    <Icon size={24} className="text-header-accent" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-header-text">
                    {area.title}
                  </h3>
                  <ul className="space-y-2">
                    {area.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-header-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-header-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-header-border bg-header-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              Beneficios de la Inspección Visual
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-header-text-secondary">
              Ventajas competitivas al implementar programas de inspección visual
              certificada
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="rounded-xl border border-header-border bg-white p-6 transition-all hover:border-header-accent/30 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-50">
                    <Icon size={24} className="text-header-accent" />
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

      {/* Inspection Process */}
      <section className="border-b border-header-border bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text md:text-4xl">
              Proceso de Inspección
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-header-text-secondary">
              Metodología sistemática que garantiza resultados confiables y
              repetibles
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inspectionProcess.map((process, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-header-border bg-gradient-to-br from-gray-50 to-white p-6"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-header-accent to-header-accent-dark text-2xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-header-text">
                  {process.title}
                </h3>
                <p className="text-sm text-header-text-secondary">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-header-accent via-header-accent-dark to-cyan-600 py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            ¿Necesitas una Inspección Visual Certificada?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Nuestros inspectores certificados están listos para evaluar tus
            equipos y estructuras. Contáctanos para una cotización personalizada.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-header-accent transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Solicitar Cotización
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
