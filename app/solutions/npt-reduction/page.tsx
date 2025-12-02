'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Clock, Zap, TrendingUp, Target, BarChart3, Award, ArrowRight } from 'lucide-react'
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
          >
            <Link
              href="/solutions"
              className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/5"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              <span>Volver a soluciones</span>
            </Link>

            <h1 className="mb-8 overflow-hidden text-[clamp(2rem,8vw,7rem)] font-extralight leading-[0.95] tracking-tight text-white">
              <TypeWriter text="Reducción de" delay={0.5} speed={0.12} />
              <br />
              <span className="text-aog-primary">
                <TypeWriter text="NPT" delay={1.4} speed={0.12} />
              </span>
            </h1>

            <div className="mb-8 h-px w-24 bg-aog-primary" />

            <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
              Minimizamos el tiempo no productivo (NPT) maximizando la eficiencia operativa y
              la productividad del pozo
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <TechButton href="/contact" variant="primary" size="lg">
                Solicitar análisis
              </TechButton>
              <TechButtonDiagonal href="#features">Ver soluciones</TechButtonDiagonal>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Clock,
      title: 'Monitoreo en Tiempo Real',
      description:
        'Sistemas de monitoreo continuo para identificar y resolver problemas antes de que generen tiempo no productivo.',
    },
    {
      icon: Zap,
      title: 'Mantenimiento Preventivo',
      description:
        'Programas de mantenimiento programado que previenen fallas de equipos y reducen paradas inesperadas.',
    },
    {
      icon: Target,
      title: 'Optimización de Procesos',
      description:
        'Análisis y mejora continua de procesos operacionales para maximizar la eficiencia de perforación.',
    },
    {
      icon: BarChart3,
      title: 'Análisis de Datos',
      description:
        'Recopilación y análisis de datos operacionales para identificar patrones y oportunidades de mejora.',
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
            {isInView && <CodeReveal text="Maximiza la Productividad" delay={0.2} />}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
            <TrendingUp className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-white">
            Optimiza tu
            <br />
            productividad
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-white/60">
            Agenda una consultoría para identificar oportunidades de reducción de NPT y mejorar la
            eficiencia de tus operaciones.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Solicitar consultoría
            </TechButton>
            <TechButtonDiagonal href="/services">Ver servicios</TechButtonDiagonal>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function NPTReductionPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  )
}
