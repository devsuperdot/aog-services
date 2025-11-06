'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Droplets,
  CheckCircle2,
  Zap,
  DollarSign,
  Leaf,
  Settings,
  Award,
  TrendingUp,
  Shield,
  ArrowRight,
} from 'lucide-react'
import { AOG_SERVICES } from '@/constants/aog'
import { TypeWriter, CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'
import {
  MinimalGridLinesDark as MinimalGridDark,
  MinimalGridLinesLight as MinimalGridLight,
} from '@/components/aog/GridBackgrounds'

// Get service data
const service = AOG_SERVICES.find((s) => s.id === 'control-solidos')!

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
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-aog-primary"
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
                  <TypeWriter text="Control de" delay={0.5} speed={0.12} />
                  <br />
                  <span className="text-aog-primary">
                    <TypeWriter text="Sólidos" delay={1.1} speed={0.12} />
                  </span>
                </h1>

                <div className="mb-8 h-px w-24 bg-aog-primary" />

                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  {service.description}
                </p>

                <p className="mb-12 max-w-2xl text-base font-light leading-relaxed text-white/50">
                  Nuestro sistema integral de control de sólidos maximiza la eficiencia del proceso
                  de perforación, reduciendo costos operativos y minimizando el impacto ambiental.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <TechButton href="/contact" variant="primary" size="lg">
                    Solicitar cotización
                  </TechButton>
                  <TechButtonDiagonal href="#equipment">Ver equipos</TechButtonDiagonal>
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
                  {/* Platform Image */}
                  <Image
                    src="/images/aog/platform-hero.jpg"
                    alt="Control de Sólidos"
                    fill
                    className="object-cover object-center opacity-70"
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

// Overview Section - WHITE
const OverviewSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-black/10 bg-gradient-to-br from-gray-100 to-gray-50">
              {/* Workers and Equipment Image */}
              <Image
                src="/images/aog/workers-equipment.jpg"
                alt="Sistema en Operación"
                fill
                className="object-cover object-center"
              />

              {/* Decorative corners */}
              <div className="absolute left-0 top-0 h-16 w-16 border-l-4 border-t-4 border-aog-primary/50" />
              <div className="absolute bottom-0 right-0 h-16 w-16 border-b-4 border-r-4 border-aog-primary/50" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
                Visión General
              </div>

              <h2 className="mb-8 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
                {isInView && (
                  <>
                    <CodeReveal text="Optimización" delay={0.2} />
                    <br />
                    <CodeReveal text="Integral" delay={0.5} />
                  </>
                )}
              </h2>

              <p className="mb-8 font-light leading-relaxed text-black/70">
                Nuestro sistema de control de sólidos está diseñado específicamente para la industria
                petrolera, ofreciendo soluciones que van desde zarandas vibratorias de alta eficiencia
                hasta centrífugas decantadoras de última generación.
              </p>

              <p className="mb-8 font-light leading-relaxed text-black/70">
                Cada componente del sistema ha sido seleccionado y configurado para trabajar en perfecta
                sincronía, garantizando la máxima remoción de sólidos mientras se preserva la integridad
                del fluido de perforación.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border-l-4 border-aog-primary bg-gradient-to-r from-aog-primary/5 to-transparent p-6">
                  <div className="mb-2 text-3xl font-light text-aog-primary">99%</div>
                  <div className="text-sm font-light text-black/60">Eficiencia de Separación</div>
                </div>
                <div className="border-l-4 border-black/20 bg-gradient-to-r from-gray-50 to-transparent p-6">
                  <div className="mb-2 text-3xl font-light text-black">-40%</div>
                  <div className="text-sm font-light text-black/60">Reducción de Costos</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Equipment Section - BLACK
const EquipmentSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="equipment" ref={ref} className="relative bg-black py-20 md:py-32 lg:py-40">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Línea de Equipos
          </div>
          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Componentes del Sistema
          </h2>
          <p className="mx-auto max-w-3xl font-light leading-relaxed text-white/60">
            Equipos de última generación diseñados para ofrecer el máximo rendimiento en condiciones
            de operación exigentes
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden border border-white/10 bg-black transition-all hover:border-aog-primary hover:bg-neutral-950"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-neutral-900 to-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Droplets className="h-16 w-16 text-aog-primary/30" strokeWidth={1} />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                {/* Badge */}
                <div className="absolute right-4 top-4 border border-aog-primary/30 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-wider text-aog-primary">
                  Equipo {idx + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-light text-white">{feature}</h3>
                <p className="mb-4 text-sm font-light leading-relaxed text-white/50">
                  Tecnología avanzada para optimización de procesos de separación de sólidos en
                  fluidos de perforación.
                </p>

                <div className="flex items-center gap-2 text-xs font-light uppercase tracking-wider text-aog-primary">
                  <span>Ver especificaciones</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
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

  const benefitIcons = [
    { icon: Zap, label: service.benefits[0] },
    { icon: DollarSign, label: service.benefits[1] },
    { icon: Leaf, label: service.benefits[2] },
    { icon: Settings, label: service.benefits[3] },
    { icon: Award, label: service.benefits[4] },
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
            {isInView && <CodeReveal text="Beneficios del Sistema" delay={0.2} />}
          </h2>
          <p className="max-w-3xl font-light leading-relaxed text-black/60">
            Implementar nuestro sistema de control de sólidos genera valor inmediato en múltiples
            aspectos de la operación
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-5">
          {benefitIcons.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 text-center transition-all hover:border-aog-primary hover:bg-gray-50"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border-2 border-aog-primary/30 bg-white transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <benefit.icon className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-light leading-relaxed text-black">{benefit.label}</h3>
            </motion.div>
          ))}
        </div>

        {/* Image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="relative aspect-[21/9] overflow-hidden border-2 border-black/10 bg-gradient-to-br from-gray-100 to-gray-50">
            {/* Panoramic Platform Image */}
            <Image
              src="/images/aog/platform-hero.jpg"
              alt="Sistema Completo en Operación"
              fill
              className="object-cover object-center"
            />

            {/* Decorative frame */}
            <div className="absolute left-0 top-0 h-24 w-24 border-l-4 border-t-4 border-aog-primary/30" />
            <div className="absolute bottom-0 right-0 h-24 w-24 border-b-4 border-r-4 border-aog-primary/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Technical Specs Section - BLACK
const TechnicalSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const specs = [
    { label: 'Capacidad de Procesamiento', value: '1000+ GPM' },
    { label: 'Eficiencia de Separación', value: '> 95%' },
    { label: 'Tamaño de Corte', value: '2-5 micrones' },
    { label: 'Presión de Trabajo', value: '75-125 PSI' },
    { label: 'Consumo Energético', value: 'Optimizado' },
    { label: 'Certificaciones', value: 'API / ISO' },
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
            Especificaciones
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Datos Técnicos
          </h2>
        </motion.div>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="border border-white/10 bg-black p-8"
            >
              <div className="mb-2 text-sm font-light uppercase tracking-wider text-white/40">
                {spec.label}
              </div>
              <div className="text-3xl font-light text-aog-primary">{spec.value}</div>
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
            <Shield className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-black">
            Optimiza tu operación
            <br />
            hoy mismo
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-black/60">
            Solicita una cotización personalizada o agenda una visita técnica para evaluar cómo
            nuestro sistema puede transformar tu proceso de perforación.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Solicitar cotización
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
export default function ControlSolidosPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <OverviewSection />
      <EquipmentSection />
      <BenefitsSection />
      <TechnicalSection />
      <CTASection />
    </main>
  )
}
