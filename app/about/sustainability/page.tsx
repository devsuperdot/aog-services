'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  Leaf,
  Recycle,
  Wind,
  Droplet,
  Sun,
  TreePine,
  ArrowRight,
  Target,
  Award,
  TrendingDown,
  Users,
  CheckCircle2,
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
                  <TypeWriter text="Sostenibilidad" delay={0.5} speed={0.12} />
                  <br />
                  <span className="text-aog-primary">
                    <TypeWriter text="Ambiental" delay={1.2} speed={0.12} />
                  </span>
                </h1>

                <div className="mb-8 h-px w-24 bg-aog-primary" />

                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  Comprometidos con la protección del medio ambiente y el desarrollo sostenible en
                  todas nuestras operaciones
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <TechButton href="/contact" variant="primary" size="lg">
                    Solicitar información
                  </TechButton>
                  <TechButtonDiagonal href="#initiatives">Ver iniciativas</TechButtonDiagonal>
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
                      <Leaf className="h-16 w-16 text-aog-primary" strokeWidth={1} />
                    </div>
                    <div className="text-sm font-light uppercase tracking-wider text-white/40">
                      Compromiso Ambiental
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

// Initiatives Section
const InitiativesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const initiatives = [
    {
      icon: Recycle,
      title: 'Gestión de Residuos',
      description:
        'Programas de reducción, reutilización y reciclaje de materiales en todas las operaciones.',
    },
    {
      icon: Droplet,
      title: 'Conservación del Agua',
      description:
        'Sistemas de tratamiento y reutilización de agua para minimizar el consumo de recursos hídricos.',
    },
    {
      icon: Wind,
      title: 'Control de Emisiones',
      description:
        'Monitoreo y reducción activa de emisiones atmosféricas mediante tecnologías limpias.',
    },
    {
      icon: Sun,
      title: 'Energía Eficiente',
      description:
        'Optimización energética y uso de fuentes renovables en nuestras instalaciones.',
    },
    {
      icon: TreePine,
      title: 'Reforestación',
      description:
        'Programas de compensación ambiental mediante plantación de árboles en zonas afectadas.',
    },
    {
      icon: Target,
      title: 'Objetivos Ambientales',
      description:
        'Metas cuantificables de reducción de impacto ambiental con evaluación periódica.',
    },
  ]

  return (
    <section id="initiatives" ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Nuestras Acciones
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
            {isInView && <CodeReveal text="Iniciativas Ambientales" delay={0.2} />}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, idx) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 transition-all hover:border-aog-primary hover:bg-gray-50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-aog-primary/30 transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <initiative.icon className="h-7 w-7 text-aog-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-xl font-light text-black">{initiative.title}</h3>
              <p className="text-sm font-light leading-relaxed text-black/50">
                {initiative.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Impact Section
const ImpactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const impacts = [
    { number: '-35%', label: 'Emisiones de CO₂', icon: TrendingDown },
    { number: '-40%', label: 'Consumo de Agua', icon: Droplet },
    { number: '85%', label: 'Residuos Reciclados', icon: Recycle },
    { number: '5000+', label: 'Árboles Plantados', icon: TreePine },
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
            Resultados Medibles
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light text-white">Impacto Ambiental</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-white/10 bg-black p-8 text-center transition-all hover:border-aog-primary hover:bg-neutral-950"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-aog-primary/30 bg-black transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/10">
                <impact.icon className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
              </div>
              <motion.div
                className="mb-2 text-5xl font-light text-aog-primary md:text-6xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
              >
                {impact.number}
              </motion.div>
              <div className="text-sm font-light uppercase tracking-wider text-white/60">
                {impact.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Commitments Section
const CommitmentsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const commitments = [
    'Cumplimiento estricto de normativas ambientales',
    'Monitoreo continuo de indicadores ambientales',
    'Capacitación ambiental para todo el personal',
    'Evaluación de impacto ambiental en proyectos',
    'Uso responsable de recursos naturales',
    'Inversión en tecnologías limpias',
    'Transparencia en reportes ambientales',
    'Colaboración con comunidades locales',
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
            Principios Ambientales
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="flex items-start gap-3 border-l-2 border-aog-primary/30 bg-gray-50 p-6 transition-all hover:border-aog-primary hover:bg-white"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-aog-primary"
                strokeWidth={2}
              />
              <p className="text-sm font-light text-black/70">{commitment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Recognition Section
const RecognitionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const recognitions = [
    {
      icon: Award,
      title: 'ISO 14001:2015',
      description: 'Certificación de gestión ambiental internacional',
    },
    {
      icon: Leaf,
      title: 'Empresa Carbono Neutral',
      description: 'Reconocimiento por compensación de huella de carbono',
    },
    {
      icon: Users,
      title: 'Responsabilidad Social',
      description: 'Programas comunitarios de educación ambiental',
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
            Reconocimientos
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Certificaciones Ambientales
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {recognitions.map((recognition, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-white/10 bg-black p-8 text-center transition-all hover:border-aog-primary hover:bg-neutral-950"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-aog-primary/30 transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/10">
                <recognition.icon className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-light text-white">{recognition.title}</h3>
              <p className="text-sm font-light text-white/50">{recognition.description}</p>
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
            <Leaf className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-black">
            Construyendo un
            <br />
            futuro sostenible
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-black/60">
            Conozca más sobre nuestras iniciativas ambientales y cómo trabajamos para minimizar
            nuestro impacto en el planeta.
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

export default function SustainabilityPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <InitiativesSection />
      <ImpactSection />
      <CommitmentsSection />
      <RecognitionSection />
      <CTASection />
    </main>
  )
}
