'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  Settings,
  CheckCircle2,
  Zap,
  DollarSign,
  Shield,
  TrendingUp,
  Award,
  Target,
  Users,
  FileCheck,
  ArrowRight,
} from 'lucide-react'
import { AOG_SERVICES } from '@/constants/aog'
import { TypeWriter, CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'
import ImageWithPlaceholder from '@/components/aog/ImageWithPlaceholder'
import {
  MinimalGridLinesDark as MinimalGridDark,
  MinimalGridLinesLight as MinimalGridLight,
} from '@/components/aog/GridBackgrounds'

// Get service data
const service = AOG_SERVICES.find((s) => s.id === 'servicios-tecnicos') || {
  title: 'Servicios Técnicos Especializados',
  description:
    'Soluciones avanzadas y soporte técnico integral para la industria petrolera',
}

// Animated Tech Background
const TechBackground = () => (
  <>
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/25 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/20 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>

    {/* Floating particles */}
    <div className="pointer-events-none absolute inset-0">
      {[...Array(25)].map((_, i) => {
        const seed = (i + 1) * 5.7
        const xPos = ((seed * 17) % 100)
        const yPosStart = ((seed * 11) % 100)
        const yPosEnd = ((seed * 23) % 100)
        const duration = 3 + ((seed * 7) % 4)
        const delay = (seed * 13) % 3

        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-aog-primary"
            initial={{
              x: `${xPos}%`,
              y: `${yPosStart}%`,
              opacity: 0,
            }}
            animate={{
              y: `${yPosEnd}%`,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: 'linear',
            }}
          />
        )
      })}
    </div>
  </>
)

// Hero Section - BLACK
const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black pt-16">
      <TechBackground />
      <MinimalGridDark />

      <div className="relative z-10 flex min-h-[90vh] items-center px-4 py-20 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Left column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Link
                  href="/services"
                  className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/5"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  <span>Volver a servicios</span>
                </Link>

                <h1 className="mb-8 overflow-hidden text-[clamp(2rem,8vw,7rem)] font-extralight leading-[0.95] tracking-tight text-white">
                  <TypeWriter text="Servicios" delay={0.5} speed={0.12} />
                  <br />
                  <span className="text-aog-primary">
                    <TypeWriter text="Técnicos" delay={1.2} speed={0.12} />
                  </span>
                </h1>

                <div className="mb-8 h-px w-24 bg-aog-primary" />

                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  {service.description}
                </p>

                <p className="mb-12 max-w-2xl text-base font-light leading-relaxed text-white/50">
                  Nuestros servicios abarcan desde la ingeniería y consultoría hasta la
                  implementación y optimización de sistemas, asegurando que sus operaciones sean
                  seguras, eficientes y rentables.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <TechButton href="/contact" variant="primary" size="lg">
                    Solicitar consultoría
                  </TechButton>
                  <TechButtonDiagonal href="#services">Ver servicios</TechButtonDiagonal>
                </div>
              </motion.div>
            </div>

            {/* Right column - Image placeholder */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative h-[400px] md:h-[500px] lg:h-[600px]"
              >
                {/* Image container with tech frame */}
                <div className="relative h-full border-2 border-aog-primary/30 bg-gradient-to-br from-neutral-900 to-black">
                  {/* [IMAGEN: Técnico con tablet realizando diagnóstico] */}
                  <ImageWithPlaceholder
                    src="/images/aog/tecnicos-1.jpeg"
                    alt="Servicios Técnicos Especializados"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="grayscale"
                    placeholderIcon={
                      <div className="mx-auto mb-4 h-32 w-32 rounded-full border-2 border-aog-primary/30 bg-gradient-to-br from-aog-primary/10 to-transparent p-8">
                        <Settings className="h-full w-full text-aog-primary" strokeWidth={1} />
                      </div>
                    }
                    placeholderText="Imagen: Servicios Técnicos"
                    placeholderSubtext="Dimensión recomendada: 1200x1600px"
                  />

                  {/* Corner accents */}
                  <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-aog-primary" />
                  <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-aog-primary" />

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-aog-primary to-transparent"
                    animate={{
                      y: ['0%', '100%'],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// Services Section - BLACK
const ServicesOfferedSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: 'Consultoría Técnica',
      description:
        'Asesoramiento experto para optimizar procesos, resolver problemas técnicos y mejorar la eficiencia operacional.',
      icon: Target,
    },
    {
      title: 'Ingeniería de Proyectos',
      description:
        'Diseño y desarrollo de proyectos de ingeniería adaptados a las necesidades específicas de cada operación.',
      icon: Settings,
    },
    {
      title: 'Monitoreo y Diagnóstico de Equipos',
      description:
        'Sistemas avanzados de monitoreo para detectar anomalías y prevenir fallas en equipos críticos.',
      icon: TrendingUp,
    },
    {
      title: 'Optimización de Procesos',
      description:
        'Análisis y mejora continua de procesos operacionales para maximizar productividad y reducir costos.',
      icon: Zap,
    },
    {
      title: 'Capacitación y Desarrollo de Personal',
      description:
        'Programas de entrenamiento especializado para mejorar competencias técnicas del personal operativo.',
      icon: Users,
    },
    {
      title: 'Inspección y Certificación',
      description:
        'Servicios de inspección técnica y certificación conforme a estándares nacionales e internacionales.',
      icon: FileCheck,
    },
  ]

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-black py-20 md:py-32 lg:py-40"
    >
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Equipos y Servicios
          </div>
          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Portafolio de Servicios
          </h2>
          <p className="mx-auto max-w-3xl font-light leading-relaxed text-white/60">
            Servicios realizados por profesionales altamente capacitados con herramientas de
            última generación
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden border border-white/10 bg-black p-8 transition-all hover:border-aog-primary hover:bg-neutral-950"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-aog-primary/30 transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <item.icon className="h-7 w-7 text-aog-primary" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="mb-4 text-xl font-light text-white">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/50">
                {item.description}
              </p>

              {/* Number badge */}
              <div className="absolute right-6 top-6 text-[10px] font-light tracking-[0.3em] text-white/20">
                {String(idx + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Benefits Section - WHITE
const BenefitsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const benefits = [
    {
      icon: Target,
      label: 'Expertise Especializado',
      description: 'Acceso a conocimientos técnicos avanzados y experiencia en la industria',
    },
    {
      icon: Zap,
      label: 'Eficiencia Mejorada',
      description: 'Optimización de procesos y equipos para maximizar la productividad',
    },
    {
      icon: Shield,
      label: 'Seguridad',
      description: 'Aseguramiento del cumplimiento con normas y estándares de seguridad',
    },
    {
      icon: DollarSign,
      label: 'Reducción de Costos',
      description: 'Identificación de áreas de ahorro y mejora continua de la eficiencia',
    },
    {
      icon: Award,
      label: 'Calidad y Confiabilidad',
      description: 'Servicios realizados por profesionales altamente capacitados',
    },
  ]

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32 lg:py-40">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Ventajas Clave
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
            {isInView && <CodeReveal text="Beneficios" delay={0.2} />}
          </h2>
          <p className="max-w-3xl font-light leading-relaxed text-black/60">
            Implementar nuestros servicios técnicos especializados genera valor inmediato en
            múltiples aspectos de la operación
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 text-center transition-all hover:border-aog-primary hover:bg-gray-50"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border-2 border-aog-primary/30 bg-white transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <benefit.icon className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-base font-light text-black">{benefit.label}</h3>
              <p className="text-xs font-light leading-relaxed text-black/50">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

// CTA Section - BLACK
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
            Optimiza tus
            <br />
            operaciones hoy
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-white/60">
            Solicita una consultoría técnica o agenda una evaluación para conocer cómo nuestros
            servicios especializados pueden transformar tu operación.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Solicitar consultoría
            </TechButton>
            <TechButtonDiagonal href="/services">Ver más servicios</TechButtonDiagonal>
            <TechButton href="/" variant="outline" size="lg">
              Ir al inicio
            </TechButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main page component
export default function ServiciosTecnicosPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ServicesOfferedSection />
      <BenefitsSection />
      <CTASection />
    </main>
  )
}
