'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, Users, Award, BookOpen, Target, CheckCircle2, ArrowRight } from 'lucide-react'
import { TypeWriter, CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'
import ImageWithPlaceholder from '@/components/aog/ImageWithPlaceholder'
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
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Link
                  href="/resources"
                  className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/5"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  <span>Volver a recursos</span>
                </Link>

                <h1 className="mb-8 overflow-hidden text-[clamp(2rem,8vw,7rem)] font-extralight leading-[0.95] tracking-tight text-white">
                  <TypeWriter text="Capacitación" delay={0.5} speed={0.12} />
                  <br />
                  <span className="text-aog-primary">
                    <TypeWriter text="Especializada" delay={1.4} speed={0.12} />
                  </span>
                </h1>

                <div className="mb-8 h-px w-24 bg-aog-primary" />

                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  Programas de capacitación y desarrollo de personal diseñados para mejorar
                  competencias técnicas en la industria petrolera
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <TechButton href="/contact" variant="primary" size="lg">
                    Solicitar información
                  </TechButton>
                  <TechButtonDiagonal href="#programs">Ver programas</TechButtonDiagonal>
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
                <div className="relative h-full border-2 border-aog-primary/30 bg-gradient-to-br from-neutral-900 to-black">
                  <ImageWithPlaceholder
                    src="/images/aog/training-hero.jpeg"
                    alt="Capacitación Técnica"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="grayscale"
                    placeholderIcon={
                      <div className="mx-auto mb-4 h-32 w-32 rounded-full border-2 border-aog-primary/30 bg-gradient-to-br from-aog-primary/10 to-transparent p-8">
                        <GraduationCap className="h-full w-full text-aog-primary" strokeWidth={1} />
                      </div>
                    }
                    placeholderText="Imagen: Capacitación en Campo"
                    placeholderSubtext="Dimensión recomendada: 1200x1600px"
                  />

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

const ProgramsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const programs = [
    {
      icon: Target,
      title: 'Operación de Equipos',
      description:
        'Capacitación especializada en operación y mantenimiento de equipos de control de sólidos y equipos periféricos.',
      duration: '40 horas',
      level: 'Técnico',
    },
    {
      icon: Award,
      title: 'Seguridad Operacional',
      description:
        'Programas de certificación en seguridad operacional conforme a estándares internacionales de la industria petrolera.',
      duration: '32 horas',
      level: 'Todos los niveles',
    },
    {
      icon: BookOpen,
      title: 'Mantenimiento Preventivo',
      description:
        'Entrenamiento en técnicas de mantenimiento preventivo y correctivo para maximizar la vida útil de equipos.',
      duration: '48 horas',
      level: 'Técnico-Avanzado',
    },
    {
      icon: Users,
      title: 'Liderazgo Operacional',
      description:
        'Desarrollo de competencias de liderazgo para supervisores y coordinadores de operaciones de campo.',
      duration: '24 horas',
      level: 'Supervisores',
    },
  ]

  return (
    <section id="programs" ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Programas de Capacitación
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
            {isInView && <CodeReveal text="Desarrollo Profesional" delay={0.2} />}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 transition-all hover:border-aog-primary hover:bg-gray-50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-aog-primary/30 transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <program.icon className="h-7 w-7 text-aog-primary" strokeWidth={1.5} />
              </div>

              <h3 className="mb-4 text-2xl font-light text-black">{program.title}</h3>
              <p className="mb-6 text-sm font-light leading-relaxed text-black/50">
                {program.description}
              </p>

              <div className="flex gap-4">
                <div className="flex-1 border-l-2 border-aog-primary pl-3">
                  <div className="mb-1 text-xs font-light uppercase tracking-wider text-black/40">
                    Duración
                  </div>
                  <div className="font-light text-black">{program.duration}</div>
                </div>
                <div className="flex-1 border-l-2 border-black/20 pl-3">
                  <div className="mb-1 text-xs font-light uppercase tracking-wider text-black/40">
                    Nivel
                  </div>
                  <div className="font-light text-black">{program.level}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const BenefitsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const benefits = [
    'Instructores certificados con experiencia en campo',
    'Contenido actualizado conforme a estándares internacionales',
    'Certificaciones reconocidas en la industria',
    'Entrenamiento teórico y práctico',
    'Programas personalizables según necesidades',
    'Soporte post-capacitación',
  ]

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Ventajas
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-white">
            {isInView && <CodeReveal text="Excelencia en Capacitación" delay={0.2} />}
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-start gap-3 border-l-2 border-aog-primary/30 bg-white/5 p-6"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-aog-primary" strokeWidth={1.5} />
              <span className="font-light text-white/80">{benefit}</span>
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
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 text-center sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center border-2 border-aog-primary bg-white">
            <GraduationCap className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-black">
            Invierte en
            <br />
            tu equipo
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-black/60">
            Solicita información sobre nuestros programas de capacitación o cotiza un programa
            personalizado para tu empresa.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Solicitar cotización
            </TechButton>
            <TechButtonDiagonal href="/services">Ver servicios</TechButtonDiagonal>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function TrainingPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ProgramsSection />
      <BenefitsSection />
      <CTASection />
    </main>
  )
}
