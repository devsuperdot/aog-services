'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  TrendingUp,
  Target,
  BarChart3,
  Gauge,
  Zap,
  ArrowRight,
  Cpu,
  Activity,
} from 'lucide-react'
import { TypeWriter, CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'
import {
  MinimalGridLinesDark as MinimalGridDark,
  MinimalGridLinesLight as MinimalGridLight,
} from '@/components/aog/GridBackgrounds'

// Animated Tech Background
const TechBackground = () => (
  <>
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/25 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  </>
)

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black pt-16">
      <TechBackground />
      <MinimalGridDark />

      <div className="relative z-10 flex min-h-[90vh] items-center px-4 py-20 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Link
                  href="/solutions"
                  className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/5"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  <span>Volver a soluciones</span>
                </Link>

                <h1 className="mb-8 overflow-hidden text-[clamp(2rem,8vw,7rem)] font-extralight leading-[0.95] tracking-tight text-white">
                  <TypeWriter text="Optimización" delay={0.5} speed={0.12} />
                  <br />
                  <span className="text-aog-primary">
                    <TypeWriter text="Operacional" delay={1.2} speed={0.12} />
                  </span>
                </h1>

                <div className="mb-8 h-px w-24 bg-aog-primary" />

                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  Maximizamos la eficiencia de sus operaciones mediante análisis avanzado, tecnología de
                  punta y metodologías probadas
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <TechButton href="/contact" variant="primary" size="lg">
                    Solicitar información
                  </TechButton>
                  <TechButtonDiagonal href="#features">Ver soluciones</TechButtonDiagonal>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative h-[400px] md:h-[500px] lg:h-[600px]"
              >
                <div className="relative flex h-full items-center justify-center border-2 border-aog-primary/30 bg-gradient-to-br from-neutral-900 to-black">
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 border-aog-primary/30 bg-gradient-to-br from-aog-primary/10 to-transparent">
                      <TrendingUp className="h-16 w-16 text-aog-primary" strokeWidth={1} />
                    </div>
                    <div className="text-sm font-light uppercase tracking-wider text-white/40">
                      Optimización de Procesos
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-aog-primary" />
                  <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-aog-primary" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section
const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: BarChart3,
      title: 'Análisis de Rendimiento',
      description:
        'Monitoreo continuo y análisis de datos operacionales para identificar oportunidades de mejora.',
    },
    {
      icon: Target,
      title: 'Optimización de Procesos',
      description:
        'Rediseño y mejora de flujos de trabajo para maximizar la productividad y reducir tiempos muertos.',
    },
    {
      icon: Gauge,
      title: 'Control de Eficiencia',
      description:
        'Sistemas de medición y control que garantizan el máximo rendimiento de equipos y personal.',
    },
    {
      icon: Cpu,
      title: 'Automatización Inteligente',
      description:
        'Implementación de tecnologías que automatizan tareas repetitivas y optimizan recursos.',
    },
    {
      icon: Activity,
      title: 'Monitoreo en Tiempo Real',
      description:
        'Sistemas de visualización y alertas que permiten respuestas rápidas ante desviaciones.',
    },
    {
      icon: Zap,
      title: 'Mejora Continua',
      description:
        'Metodologías ágiles que aseguran la evolución constante de sus operaciones.',
    },
  ]

  return (
    <section id="features" ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Características
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
            {isInView && <CodeReveal text="Soluciones de Optimización" delay={0.2} />}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 transition-all hover:border-aog-primary hover:bg-gray-50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-aog-primary/30 transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <feature.icon className="h-7 w-7 text-aog-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-xl font-light text-black">{feature.title}</h3>
              <p className="text-sm font-light leading-relaxed text-black/50">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Benefits Section
const BenefitsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const benefits = [
    { label: 'Reducción de Costos', value: 'Hasta 30%' },
    { label: 'Aumento de Productividad', value: 'Hasta 40%' },
    { label: 'Tiempo de Inactividad', value: '-50%' },
    { label: 'ROI Promedio', value: '12 meses' },
  ]

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Resultados Comprobados
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Impacto en sus Operaciones
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-white/10 bg-black p-8 text-center transition-all hover:border-aog-primary hover:bg-neutral-950"
            >
              <motion.div
                className="mb-4 text-5xl font-light text-aog-primary"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
              >
                {benefit.value}
              </motion.div>
              <div className="text-sm font-light uppercase tracking-wider text-white/60">
                {benefit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 text-center sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center border-2 border-aog-primary bg-white">
            <TrendingUp className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-black">
            Optimice su
            <br />
            operación hoy
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-black/60">
            Solicite un análisis gratuito de sus operaciones y descubra cómo podemos ayudarle a
            alcanzar nuevos niveles de eficiencia.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Solicitar análisis
            </TechButton>
            <TechButtonDiagonal href="/services">Ver servicios</TechButtonDiagonal>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function OptimizationSolutionPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
    </main>
  )
}
