'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { FileText, TrendingUp, CheckCircle2, Award, ArrowRight } from 'lucide-react'
import { TypeWriter, CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'
import {
  MinimalGridLinesDark as MinimalGridDark,
  MinimalGridLinesLight as MinimalGridLight,
} from '@/components/aog/GridBackgrounds'

const TechBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/25 blur-3xl"
      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
)

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black pt-16">
      <TechBackground />
      <MinimalGridDark />

      <div className="relative z-10 flex min-h-[90vh] items-center px-4 py-20 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="mb-8 overflow-hidden text-[clamp(2rem,8vw,7rem)] font-extralight leading-[0.95] tracking-tight text-white">
              <TypeWriter text="Casos de" delay={0.5} speed={0.12} />
              <br />
              <span className="text-aog-primary">
                <TypeWriter text="Éxito" delay={1.2} speed={0.12} />
              </span>
            </h1>

            <div className="mx-auto mb-8 h-px w-24 bg-aog-primary" />

            <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
              Descubre cómo AOG ha transformado las operaciones de nuestros clientes a través de
              soluciones innovadoras y servicios de excelencia
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <TechButton href="/contact" variant="primary" size="lg">
                Solicitar información
              </TechButton>
              <TechButtonDiagonal href="#case-studies">Ver casos</TechButtonDiagonal>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const CaseStudiesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const caseStudies = [
    {
      title: 'Optimización de Control de Sólidos',
      client: 'Operador Petrolero Nacional',
      challenge:
        'Altos costos operativos debido a ineficiencias en el sistema de control de sólidos.',
      solution:
        'Implementación de sistema integral de control de sólidos con equipos de última generación.',
      results: [
        'Reducción del 40% en costos de fluidos de perforación',
        '99% de eficiencia en separación de sólidos',
        'Mejora del 30% en tiempo de perforación',
      ],
    },
    {
      title: 'Programa de Mantenimiento Preventivo',
      client: 'Compañía de Servicios Petroleros',
      challenge: 'Paradas no programadas frecuentes generando altos costos de NPT.',
      solution:
        'Diseño e implementación de programa integral de mantenimiento preventivo 24/7.',
      results: [
        'Reducción del 60% en paradas no programadas',
        'Aumento del 50% en vida útil de equipos',
        'Ahorro anual de $2M USD',
      ],
    },
    {
      title: 'Servicios Técnicos Especializados',
      client: 'Operador Internacional',
      challenge: 'Necesidad de optimizar procesos operacionales para mejorar eficiencia.',
      solution:
        'Consultoría técnica integral con monitoreo y optimización de procesos en tiempo real.',
      results: [
        'Incremento del 35% en productividad',
        '100% cumplimiento normativo',
        'Mejora continua en KPIs operacionales',
      ],
    },
  ]

  return (
    <section id="case-studies" ref={ref} className="relative bg-white py-20 md:py-32 lg:py-40">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Historias de Éxito
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
            {isInView && <CodeReveal text="Resultados Comprobados" delay={0.2} />}
          </h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="mx-auto max-w-4xl"
            >
              <div>
                <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
                  {study.client}
                </div>

                <h3 className="mb-6 text-3xl font-light text-black md:text-4xl">{study.title}</h3>

                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-light uppercase tracking-wider text-black/40">
                      Desafío
                    </h4>
                    <p className="font-light leading-relaxed text-black/70">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-light uppercase tracking-wider text-black/40">
                      Solución
                    </h4>
                    <p className="font-light leading-relaxed text-black/70">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-light uppercase tracking-wider text-black/40">
                    Resultados
                  </h4>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-aog-primary"
                          strokeWidth={1.5}
                        />
                        <span className="font-light text-black/70">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 text-center sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center border-2 border-aog-primary bg-black">
            <Award className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-white">
            Transforma tu
            <br />
            operación
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-white/60">
            Descubre cómo AOG puede ayudarte a alcanzar resultados similares en tus operaciones.
            Solicita una consultoría personalizada.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Contactar ahora
            </TechButton>
            <TechButtonDiagonal href="/services">Ver servicios</TechButtonDiagonal>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <CaseStudiesSection />
      <CTASection />
    </main>
  )
}
