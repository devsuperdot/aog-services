import React from 'react'
import Link from 'next/link'
import { Zap, Building2, Workflow, Shield, GraduationCap, Headphones } from 'lucide-react'

export const metadata = {
  title: 'Soluciones | AOG Services',
  description: 'Soluciones especializadas por industria y capacitación',
}

const solutions = [
  {
    title: 'Sector Petrolero',
    description: 'Soluciones especializadas para oil & gas',
    href: '/solutions/oil-gas',
    icon: Zap,
    category: 'Por Industria',
  },
  {
    title: 'Construcción',
    description: 'Servicios para la industria de la construcción',
    href: '/solutions/construction',
    icon: Building2,
    category: 'Por Industria',
  },
  {
    title: 'Sector Industrial',
    description: 'Inspecciones y certificaciones industriales',
    href: '/solutions/industrial',
    icon: Workflow,
    category: 'Por Industria',
  },
  {
    title: 'Seguridad Industrial',
    description: 'Cursos de seguridad básica y avanzada',
    href: '/solutions/safety-training',
    icon: Shield,
    category: 'Capacitación',
  },
  {
    title: 'Operación de Equipos',
    description: 'Capacitación para operadores certificados',
    href: '/solutions/equipment-training',
    icon: GraduationCap,
    category: 'Capacitación',
  },
  {
    title: 'Primeros Auxilios',
    description: 'RCP y manejo de emergencias',
    href: '/solutions/first-aid',
    icon: Headphones,
    category: 'Capacitación',
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-gradient-to-br from-header-accent/5 to-transparent blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-header-text md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">
                Soluciones
              </span>{' '}
              Personalizadas
            </h1>
            <p className="text-lg text-header-text-secondary md:text-xl">
              Adaptadas a las necesidades específicas de cada industria
            </p>
          </div>
        </div>
      </section>

      <section className="bg-header-bg py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              return (
                <Link
                  key={idx}
                  href={solution.href}
                  className="group relative overflow-hidden rounded-2xl border border-header-border bg-white p-8 transition-all duration-300 hover:border-header-accent hover:shadow-xl"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-header-accent/10 to-transparent blur-2xl transition-all group-hover:from-header-accent/20" />

                  <div className="relative">
                    <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 p-3">
                      <Icon size={28} className="text-header-accent" />
                    </div>

                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-header-accent">
                      {solution.category}
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-header-text">
                      {solution.title}
                    </h3>

                    <p className="text-base leading-relaxed text-header-text-secondary">
                      {solution.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
