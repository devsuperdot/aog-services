'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  Shield,
  Heart,
  Users,
  AlertTriangle,
  FileCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
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
                  href="/about"
                  className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/5"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  <span>Volver a acerca de</span>
                </Link>

                <h1 className="mb-8 overflow-hidden text-[clamp(2rem,8vw,7rem)] font-extralight leading-[0.95] tracking-tight text-white">
                  <TypeWriter text="Seguridad" delay={0.5} speed={0.12} />
                  <br />
                  <span className="text-aog-primary">
                    <TypeWriter text="y Salud" delay={1.2} speed={0.12} />
                  </span>
                </h1>

                <div className="mb-8 h-px w-24 bg-aog-primary" />

                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  La seguridad de nuestro personal y clientes es nuestra máxima prioridad en cada
                  operación que realizamos
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <TechButton href="/contact" variant="primary" size="lg">
                    Solicitar información
                  </TechButton>
                  <TechButtonDiagonal href="#policies">Ver políticas</TechButtonDiagonal>
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
                      <Shield className="h-16 w-16 text-aog-primary" strokeWidth={1} />
                    </div>
                    <div className="text-sm font-light uppercase tracking-wider text-white/40">
                      Seguridad y Salud Ocupacional
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

// Policies Section
const PoliciesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const policies = [
    {
      icon: Shield,
      title: 'Protección Integral',
      description:
        'Sistemas de protección personal y colectiva que garantizan la seguridad en cada fase operativa.',
    },
    {
      icon: Heart,
      title: 'Salud Ocupacional',
      description:
        'Programas de vigilancia médica y prevención de enfermedades laborales para todo el personal.',
    },
    {
      icon: Users,
      title: 'Capacitación Continua',
      description:
        'Entrenamiento regular en seguridad, primeros auxilios y respuesta a emergencias.',
    },
    {
      icon: AlertTriangle,
      title: 'Gestión de Riesgos',
      description:
        'Identificación, evaluación y control proactivo de riesgos operacionales.',
    },
    {
      icon: FileCheck,
      title: 'Auditorías Regulares',
      description:
        'Inspecciones periódicas de seguridad y evaluación de cumplimiento normativo.',
    },
    {
      icon: Award,
      title: 'Certificaciones HSE',
      description:
        'Acreditaciones internacionales en sistemas de gestión de seguridad y salud.',
    },
  ]

  return (
    <section id="policies" ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Nuestras Políticas
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
            {isInView && <CodeReveal text="Pilares de Seguridad" delay={0.2} />}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy, idx) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 transition-all hover:border-aog-primary hover:bg-gray-50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-aog-primary/30 transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <policy.icon className="h-7 w-7 text-aog-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-xl font-light text-black">{policy.title}</h3>
              <p className="text-sm font-light leading-relaxed text-black/50">{policy.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '0', label: 'Accidentes Fatales', icon: Target },
    { number: '24/7', label: 'Supervisión HSE', icon: Zap },
    { number: '100%', label: 'Personal Certificado', icon: Award },
    { number: '1000+', label: 'Horas de Entrenamiento', icon: Users },
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
            Indicadores de Seguridad
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-white/10 bg-black p-8 text-center transition-all hover:border-aog-primary hover:bg-neutral-950"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-aog-primary/30 bg-black transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/10">
                <stat.icon className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
              </div>
              <motion.div
                className="mb-2 text-5xl font-light text-aog-primary md:text-6xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm font-light uppercase tracking-wider text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Commitment Section
const CommitmentSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const commitments = [
    'Cero tolerancia a condiciones inseguras',
    'Derecho de detención de trabajos riesgosos',
    'Equipos de protección de última generación',
    'Planes de respuesta a emergencias actualizados',
    'Cultura de seguridad proactiva',
    'Cumplimiento estricto de normativas internacionales',
  ]

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Nuestro Compromiso
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light text-black">
            Principios de Seguridad
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {commitments.map((commitment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-start gap-4 border-l-2 border-aog-primary/30 bg-gray-50 p-6 transition-all hover:border-aog-primary hover:bg-white"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-aog-primary" strokeWidth={2} />
              <p className="font-light text-black/70">{commitment}</p>
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
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 text-center sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center border-2 border-aog-primary bg-black">
            <Shield className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-white">
            Seguridad es
            <br />
            nuestra prioridad
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-white/60">
            Conozca más sobre nuestros programas de seguridad y cómo protegemos a nuestro equipo y
            sus operaciones.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Solicitar información
            </TechButton>
            <TechButtonDiagonal href="/services">Ver servicios</TechButtonDiagonal>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function SafetyPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <PoliciesSection />
      <StatsSection />
      <CommitmentSection />
      <CTASection />
    </main>
  )
}
