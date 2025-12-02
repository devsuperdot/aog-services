'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  Award,
  Shield,
  CheckCircle2,
  FileCheck,
  Globe,
  Star,
  ArrowRight,
  Briefcase,
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
                  <TypeWriter text="Certificaciones" delay={0.5} speed={0.12} />
                  <br />
                  <span className="text-aog-primary">
                    <TypeWriter text="y Acreditaciones" delay={1.2} speed={0.12} />
                  </span>
                </h1>

                <div className="mb-8 h-px w-24 bg-aog-primary" />

                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  Nuestro compromiso con la excelencia está respaldado por certificaciones
                  internacionales y acreditaciones de la industria
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <TechButton href="/contact" variant="primary" size="lg">
                    Solicitar información
                  </TechButton>
                  <TechButtonDiagonal href="#certifications">Ver certificaciones</TechButtonDiagonal>
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
                      <Award className="h-16 w-16 text-aog-primary" strokeWidth={1} />
                    </div>
                    <div className="text-sm font-light uppercase tracking-wider text-white/40">
                      Certificaciones de Calidad
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

// Certifications Section
const CertificationsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015',
      category: 'Gestión de Calidad',
      description:
        'Certificación internacional que garantiza nuestros estándares de calidad en todos los procesos operativos y de gestión.',
    },
    {
      icon: Shield,
      title: 'ISO 45001:2018',
      category: 'Seguridad y Salud',
      description:
        'Sistema de gestión de seguridad y salud ocupacional que protege a nuestro personal y garantiza ambientes seguros.',
    },
    {
      icon: Globe,
      title: 'ISO 14001:2015',
      category: 'Gestión Ambiental',
      description:
        'Compromiso con la protección ambiental y prácticas sostenibles en todas nuestras operaciones.',
    },
    {
      icon: FileCheck,
      title: 'API Spec Q1/Q2',
      category: 'Calidad Petrolera',
      description:
        'Especificaciones del American Petroleum Institute para sistemas de calidad en manufactura y servicios.',
    },
    {
      icon: Star,
      title: 'OHSAS 18001',
      category: 'Seguridad Operacional',
      description:
        'Estándares internacionales de seguridad y salud ocupacional aplicados a la industria petrolera.',
    },
    {
      icon: Briefcase,
      title: 'Registro NACE',
      category: 'Control de Corrosión',
      description:
        'Acreditación en sistemas de control de corrosión y protección de activos petroleros.',
    },
  ]

  return (
    <section id="certifications" ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Estándares Internacionales
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
            {isInView && <CodeReveal text="Nuestras Certificaciones" delay={0.2} />}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 transition-all hover:border-aog-primary hover:bg-gray-50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-aog-primary/30 transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <cert.icon className="h-7 w-7 text-aog-primary" strokeWidth={1.5} />
              </div>
              <div className="mb-2 text-xs font-light uppercase tracking-wider text-aog-primary">
                {cert.category}
              </div>
              <h3 className="mb-4 text-xl font-light text-black">{cert.title}</h3>
              <p className="text-sm font-light leading-relaxed text-black/50">{cert.description}</p>
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
    {
      title: 'Auditorías Regulares',
      description: 'Evaluaciones periódicas para mantener los más altos estándares de calidad.',
    },
    {
      title: 'Mejora Continua',
      description: 'Procesos de actualización constante según evolución de normativas.',
    },
    {
      title: 'Capacitación Certificada',
      description: 'Personal entrenado y certificado según estándares internacionales.',
    },
    {
      title: 'Documentación Completa',
      description: 'Trazabilidad total de procesos y cumplimiento normativo.',
    },
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
            Nuestro Compromiso
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Mantenimiento de Estándares
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-white/10 bg-black p-8 transition-all hover:border-aog-primary hover:bg-neutral-950"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center border border-aog-primary/30 transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/10">
                <CheckCircle2 className="h-6 w-6 text-aog-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-lg font-light text-white">{commitment.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/50">
                {commitment.description}
              </p>
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
            <Award className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-black">
            Trabaje con
            <br />
            expertos certificados
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-black/60">
            Nuestras certificaciones garantizan la calidad, seguridad y excelencia en cada proyecto
            que emprendemos.
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

export default function CertificationsPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <CertificationsSection />
      <CommitmentSection />
      <CTASection />
    </main>
  )
}
