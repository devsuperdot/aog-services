'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  Shield,
  Lightbulb,
  Award,
  Leaf,
  Users,
  Target,
  TrendingUp,
  Zap,
  Globe,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import { AOG_COMPANY, AOG_MISSION, AOG_VISION, AOG_VALUES } from '@/constants/aog'
import { TypeWriter, CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'

// Minimalist grid lines - dark version
const MinimalGridDark = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.02]">
    <div className="absolute left-0 top-0 h-px w-full bg-aog-primary" />
    <div className="absolute left-0 top-1/3 h-px w-full bg-aog-primary" />
    <div className="absolute left-0 top-2/3 h-px w-full bg-aog-primary" />
    <div className="absolute left-1/3 top-0 h-full w-px bg-aog-primary" />
    <div className="absolute left-2/3 top-0 h-full w-px bg-aog-primary" />
  </div>
)

// Minimalist grid lines - light version
const MinimalGridLight = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5">
    <div className="absolute left-0 top-0 h-px w-full bg-black" />
    <div className="absolute left-0 top-1/3 h-px w-full bg-black" />
    <div className="absolute left-0 top-2/3 h-px w-full bg-black" />
    <div className="absolute left-1/3 top-0 h-full w-px bg-black" />
    <div className="absolute left-2/3 top-0 h-full w-px bg-black" />
  </div>
)

// Animated Tech Background
const TechBackground = () => (
  <>
    {/* Gradient orbs */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/30 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/25 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.15, 0.35, 0.15],
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
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-aog-primary md:h-1.5 md:w-1.5"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [null, `${Math.random() * 100}%`],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  </>
)

// Hero Section - BLACK
const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-16">
      <TechBackground />
      <MinimalGridDark />

      <div className="relative z-10 flex min-h-screen items-center px-4 py-20 sm:px-6 md:px-12 md:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Left column - Main content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-aog-primary">
                  <Users className="h-3.5 w-3.5" />
                  <span>Acerca de nosotros</span>
                </div>

                <h1 className="mb-8 overflow-hidden text-[clamp(2.5rem,10vw,8rem)] font-extralight leading-[0.9] tracking-tight text-white">
                  <TypeWriter text="Líderes en" delay={0.5} speed={0.12} />
                  <br />
                  <span className="text-aog-primary">
                    <TypeWriter text="Innovación" delay={1.2} speed={0.12} />
                  </span>
                </h1>

                <div className="mb-8 h-px w-24 bg-aog-primary" />

                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  {AOG_COMPANY.tagline}
                </p>

                <p className="mb-12 max-w-2xl text-base font-light leading-relaxed text-white/50">
                  Con años de experiencia en la industria petrolera, AOG Services se ha consolidado
                  como un proveedor confiable de soluciones tecnológicas avanzadas y servicios
                  especializados que impulsan la eficiencia operativa de nuestros clientes.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <TechButton href="/services" variant="primary" size="lg">
                    Nuestros servicios
                  </TechButton>
                  <TechButtonDiagonal href="/contact">Contáctanos</TechButtonDiagonal>
                </div>
              </motion.div>
            </div>

            {/* Right column - Company info card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="border-2 border-aog-primary/30 bg-black p-8 md:p-12"
              >
                <h3 className="mb-8 text-2xl font-light text-white">Información Corporativa</h3>

                <div className="space-y-6">
                  <div className="border-l-2 border-aog-primary/50 pl-6">
                    <div className="mb-2 text-xs font-light uppercase tracking-wider text-white/40">
                      Empresa
                    </div>
                    <div className="text-xl font-light text-white">{AOG_COMPANY.fullName}</div>
                  </div>

                  <div className="border-l-2 border-aog-primary/50 pl-6">
                    <div className="mb-2 text-xs font-light uppercase tracking-wider text-white/40">
                      Ubicación
                    </div>
                    <div className="text-xl font-light text-white">{AOG_COMPANY.location}</div>
                  </div>

                  <div className="border-l-2 border-aog-primary/50 pl-6">
                    <div className="mb-2 text-xs font-light uppercase tracking-wider text-white/40">
                      Contacto
                    </div>
                    <div className="space-y-2">
                      <a
                        href={`tel:${AOG_COMPANY.phone.main}`}
                        className="block text-lg font-light text-white/80 transition-colors hover:text-aog-primary"
                      >
                        {AOG_COMPANY.phone.main}
                      </a>
                      <a
                        href={`mailto:${AOG_COMPANY.email.general}`}
                        className="block text-lg font-light text-white/80 transition-colors hover:text-aog-primary"
                      >
                        {AOG_COMPANY.email.general}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Mission & Vision Section - WHITE
const MissionVisionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32 lg:py-40">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20 lg:mb-24"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Propósito y Dirección
          </div>
          <h2 className="overflow-hidden text-[clamp(2rem,6vw,5rem)] font-light leading-[1] tracking-tight text-black">
            {isInView && (
              <>
                <CodeReveal text="Misión" delay={0.2} />
                <span className="text-black/30"> &amp; </span>
                <CodeReveal text="Visión" delay={0.5} />
              </>
            )}
          </h2>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid gap-px md:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative border-l-4 border-aog-primary bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 lg:p-16"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center border-2 border-aog-primary bg-white">
                <Target className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-light text-black">{AOG_MISSION.title}</h3>
            </div>
            <p className="font-light leading-relaxed text-black/70">{AOG_MISSION.content}</p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative border-l-4 border-black/20 bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 lg:p-16"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center border-2 border-black/20 bg-white">
                <Globe className="h-8 w-8 text-black/70" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-light text-black">{AOG_VISION.title}</h3>
            </div>
            <p className="font-light leading-relaxed text-black/70">{AOG_VISION.content}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Stats Section - BLACK
const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '6', label: 'Servicios Especializados', icon: Zap },
    { number: '24/7', label: 'Soporte Técnico', icon: Clock },
    { number: '100%', label: 'Compromiso con Seguridad', icon: Shield },
    { number: '15+', label: 'Años de Experiencia', icon: Award },
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
            Números que hablan
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Nuestra Trayectoria
          </h2>
        </motion.div>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-white/10 bg-black p-8 text-center transition-all hover:border-aog-primary hover:bg-neutral-950 md:p-12"
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

// Values Section - WHITE
const ValuesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32 lg:py-40">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Nuestros Principios
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,6vw,5rem)] font-light leading-[1] tracking-tight text-black">
            {isInView && <CodeReveal text="Valores Fundamentales" delay={0.2} />}
          </h2>
          <p className="max-w-3xl font-light leading-relaxed text-black/60">
            Estos valores guían cada decisión que tomamos y definen nuestra cultura organizacional,
            asegurando excelencia en cada proyecto que emprendemos.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3">
          {AOG_VALUES.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 transition-all hover:border-aog-primary hover:bg-gray-50 md:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-aog-primary/30 bg-white transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <value.icon className="h-7 w-7 text-aog-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-2xl font-light text-black">{value.title}</h3>
              <p className="font-light leading-relaxed text-black/60">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section - BLACK
const WhyChooseUsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reasons = [
    {
      title: 'Experiencia Comprobada',
      description:
        'Años de trayectoria en la industria petrolera nos respaldan, entregando soluciones confiables y efectivas.',
      icon: Award,
    },
    {
      title: 'Tecnología de Vanguardia',
      description:
        'Equipos y sistemas de última generación que garantizan eficiencia y resultados superiores.',
      icon: Zap,
    },
    {
      title: 'Equipo Altamente Calificado',
      description:
        'Profesionales expertos comprometidos con la excelencia y la mejora continua.',
      icon: Users,
    },
    {
      title: 'Enfoque en Seguridad',
      description:
        'Protocolos rigurosos y cultura de seguridad que protegen a nuestro personal y operaciones.',
      icon: Shield,
    },
    {
      title: 'Innovación Constante',
      description:
        'Desarrollo continuo de soluciones que se adaptan a las necesidades cambiantes del sector.',
      icon: Lightbulb,
    },
    {
      title: 'Compromiso Ambiental',
      description:
        'Prácticas sostenibles que minimizan el impacto ambiental de nuestras operaciones.',
      icon: Leaf,
    },
  ]

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32 lg:py-40">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Ventajas Competitivas
          </div>
          <h2 className="mb-6 text-[clamp(2rem,6vw,5rem)] font-light text-white">
            ¿Por qué elegir AOG?
          </h2>
          <p className="max-w-3xl font-light leading-relaxed text-white/60">
            Nos distinguimos por nuestra capacidad de entregar soluciones integrales que optimizan
            operaciones y generan valor sostenible para nuestros clientes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border-l-4 border-aog-primary/30 bg-black p-8 transition-all hover:border-aog-primary hover:bg-neutral-950"
            >
              <reason.icon
                className="mb-6 h-10 w-10 text-aog-primary"
                strokeWidth={1.5}
              />
              <h3 className="mb-4 text-xl font-light text-white">{reason.title}</h3>
              <p className="font-light leading-relaxed text-white/50">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section - WHITE
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
            Impulsemos juntos
            <br />
            la excelencia operativa
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-black/60">
            Descubre cómo nuestras soluciones pueden transformar tus operaciones petroleras y
            maximizar tu eficiencia. Estamos listos para ser tu socio estratégico.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Solicitar consulta
            </TechButton>
            <TechButtonDiagonal href="/services">Ver servicios</TechButtonDiagonal>
            <TechButton href="/" variant="outline" size="lg">
              Volver al inicio
            </TechButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main page component
export default function AboutPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <MissionVisionSection />
      <StatsSection />
      <ValuesSection />
      <WhyChooseUsSection />
      <CTASection />
    </main>
  )
}
