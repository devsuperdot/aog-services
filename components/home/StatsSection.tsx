'use client'

import React from 'react'
import { Users, CheckCircle, Award, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * StatsSection Component
 *
 * Displays key statistics and achievements of AOG Services
 */

interface Stat {
  value: string
  label: string
  icon: LucideIcon
  suffix?: string
}

const stats: Stat[] = [
  {
    value: '15',
    suffix: '+',
    label: 'Años de Experiencia',
    icon: TrendingUp,
  },
  {
    value: '500',
    suffix: '+',
    label: 'Clientes Satisfechos',
    icon: Users,
  },
  {
    value: '10,000',
    suffix: '+',
    label: 'Certificaciones Emitidas',
    icon: Award,
  },
  {
    value: '99.8',
    suffix: '%',
    label: 'Tasa de Aprobación',
    icon: CheckCircle,
  },
]

export default function StatsSection(): React.ReactElement {
  return (
    <section className="bg-gradient-to-br from-header-accent via-header-accent-dark to-teal-700 py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                    <Icon size={28} />
                  </div>
                </div>

                {/* Value */}
                <div className="mb-2 text-5xl font-bold text-white md:text-6xl">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-4xl md:text-5xl">{stat.suffix}</span>
                  )}
                </div>

                {/* Label */}
                <div className="text-base font-medium text-white/90 md:text-lg">
                  {stat.label}
                </div>

                {/* Decorative gradient */}
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-all duration-300 group-hover:scale-150" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
