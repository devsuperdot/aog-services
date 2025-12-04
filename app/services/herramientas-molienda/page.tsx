'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Wrench,
  CheckCircle2,
  Zap,
  DollarSign,
  Leaf,
  Shield,
  Award,
  TrendingUp,
  Target,
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
const service = AOG_SERVICES.find((s) => s.id === 'herramientas-molienda')!

// Animated Tech Background
const TechBackground = () => (
  <>
    {/* Gradient orbs */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/40 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/35 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>

    {/* Animated grid lines */}
    <div className="pointer-events-none absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-aog-primary/60 to-transparent"
          style={{ top: `${(i + 1) * 12}%` }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: [0, 0.6, 0], x: ['-100%', '100%'] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'linear',
          }}
        />
      ))}
    </div>

    {/* Floating particles */}
    <div className="pointer-events-none absolute inset-0">
      {[...Array(30)].map((_, i) => {
        // Use deterministic values based on index to avoid hydration mismatch
        const seed = (i + 1) * 5.9
        const xPos = ((seed * 17) % 100)
        const yPosStart = ((seed * 11) % 100)
        const yPosEnd = ((seed * 23) % 100)
        const duration = 3 + ((seed * 7) % 4)
        const delay = (seed * 13) % 3

        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute h-2 w-2 rounded-full bg-aog-primary shadow-lg shadow-aog-primary/50"
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
    <section className="relative min-h-[70vh] overflow-hidden bg-black pt-32">
      <TechBackground />
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-20 sm:px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column - Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12"
            >
              {/* Service badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-aog-primary/10 px-4 py-2"
              >
                <Wrench className="h-4 w-4 text-aog-primary" />
                <span className="text-xs font-light uppercase tracking-[0.2em] text-white/80">
                  Servicio Especializado
                </span>
              </motion.div>

              <h1 className="mb-8 overflow-hidden text-[clamp(2rem,6.5vw,5.5rem)] font-extralight leading-[0.95] tracking-[-0.02em] text-white">
                <TypeWriter text="Herramientas de" delay={0.4} speed={0.1} />
                <br />
                <TypeWriter text="Molienda y Pesca" delay={0.8} speed={0.1} />
              </h1>

              <div className="mb-8 h-px w-24 bg-aog-primary" />

              <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-white/60">
                {service.description}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <TechButton href="/contact" variant="primary" size="lg">
                  Solicitar cotización
                </TechButton>
                <TechButtonDiagonal href="/services">
                  Ver todos los servicios
                </TechButtonDiagonal>
              </div>
            </motion.div>
          </div>

          {/* Right column - Icon feature card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="sticky top-32"
            >
              <div className="group relative overflow-hidden border-2 border-aog-primary/30 bg-gradient-to-br from-neutral-900 to-black p-12">
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-aog-primary" />
                <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-aog-primary" />

                {/* Icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full bg-aog-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  <motion.div
                    className="relative flex h-24 w-24 items-center justify-center border-2 border-aog-primary/50 bg-aog-primary/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Wrench className="h-12 w-12 text-aog-primary" strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 text-4xl font-light text-aog-primary">9</div>
                    <div className="text-sm font-light uppercase tracking-wider text-white/60">
                      Tipos de Herramientas
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <div className="mb-2 text-4xl font-light text-aog-primary">24/7</div>
                    <div className="text-sm font-light uppercase tracking-wider text-white/60">
                      Soporte Técnico
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <div className="mb-2 text-4xl font-light text-aog-primary">100%</div>
                    <div className="text-sm font-light uppercase tracking-wider text-white/60">
                      Confiabilidad
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Equipment Section - WHITE
const EquipmentSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const equipment = [
    {
      name: 'Molinos',
      description: 'Herramientas de molienda para remoción de obstrucciones metálicas y no metálicas',
      icon: Target,
    },
    {
      name: 'Escariadores',
      description: 'Equipos para limpieza y calibración del diámetro interno del pozo',
      icon: TrendingUp,
    },
    {
      name: 'Cepillos Escariadores',
      description: 'Herramientas especializadas para limpieza de paredes de pozos',
      icon: Shield,
    },
    {
      name: 'Magnetos de Sarta',
      description: 'Dispositivos magnéticos para captura de partículas metálicas',
      icon: Zap,
    },
    {
      name: 'Herramientas de Pesca',
      description: 'Equipos especializados para recuperación de objetos en pozos',
      icon: Wrench,
    },
    {
      name: 'Canastas Chatarreras',
      description: 'Sistemas de captura y remoción de escombros del pozo',
      icon: CheckCircle2,
    },
    {
      name: 'Martillos Hidromecánicos',
      description: 'Herramientas de impacto para liberación de sartas atascadas',
      icon: Award,
    },
    {
      name: 'Canastilla de Transporte',
      description: 'Equipos seguros para transporte y manejo de herramientas',
      icon: Shield,
    },
  ]

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
            Catálogo de Equipos
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1] tracking-tight text-black">
            {isInView && (
              <>
                <CodeReveal text="Herramientas" delay={0.2} />
                <br />
                <CodeReveal text="Especializadas" delay={0.5} />
              </>
            )}
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-black/60">
            Equipamiento completo para operaciones de molienda, pesca y limpieza de pozos petroleros
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {equipment.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden border border-black/5 bg-white p-6 transition-all hover:border-aog-primary/30 hover:shadow-xl"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/5 to-transparent transition-transform duration-500 group-hover:translate-x-0" />

                {/* Content */}
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-aog-primary/30 bg-aog-primary/5 transition-colors group-hover:bg-aog-primary/10">
                    <Icon className="h-6 w-6 text-aog-primary" strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-2 text-lg font-light text-black group-hover:text-aog-primary">
                    {item.name}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-black/50">
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Benefits Section - BLACK
const BenefitsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const benefits = [
    {
      icon: Zap,
      title: 'Eficiencia Operativa',
      description: 'Acelera las operaciones de limpieza, molienda y pesca reduciendo tiempos de inactividad',
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Reduce riesgos operacionales mediante herramientas confiables y probadas',
    },
    {
      icon: DollarSign,
      title: 'Reducción de Costos',
      description: 'Mejora la eficiencia y reduce costos operacionales significativamente',
    },
    {
      icon: TrendingUp,
      title: 'Versatilidad',
      description: 'Herramientas adaptables a diversas condiciones y tipos de pozos',
    },
    {
      icon: Award,
      title: 'Calidad y Confiabilidad',
      description: 'Equipos fabricados con materiales de alta calidad para una larga vida útil',
    },
  ]

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
            Ventajas Competitivas
          </div>
          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1] tracking-tight text-white">
            Beneficios Clave
          </h2>
          <p className="max-w-3xl text-base font-light leading-relaxed text-white/60">
            Nuestras herramientas de molienda y pesca ofrecen soluciones confiables para maximizar la productividad de tus operaciones
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-aog-primary/50"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-500 group-hover:translate-x-0" />

                {/* Content */}
                <div className="relative">
                  <div className="mb-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
                      <Icon className="h-7 w-7 text-aog-primary" />
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-light text-white">{benefit.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-white/60">
                    {benefit.description}
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Applications Section - WHITE
const ApplicationsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const applications = [
    {
      title: 'Terminación de Pozos',
      description:
        'Limpieza y preparación de pozos para la etapa de producción, eliminando obstrucciones y residuos',
      features: ['Molinos de fondo', 'Escariadores', 'Cepillos de limpieza'],
    },
    {
      title: 'Operaciones de Pesca',
      description:
        'Recuperación de herramientas perdidas y objetos atascados en el pozo utilizando equipos especializados',
      features: ['Herramientas de pesca', 'Canastas chatarreras', 'Magnetos de sarta'],
    },
    {
      title: 'Mantenimiento de Pozos',
      description:
        'Servicios de mantenimiento preventivo y correctivo para mantener la integridad del pozo',
      features: ['Martillos hidromecánicos', 'Herramientas de calibración', 'Equipos de limpieza'],
    },
  ]

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
            Casos de Uso
          </div>
          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1] tracking-tight text-black">
            Aplicaciones
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-black/60">
            Soluciones especializadas para cada etapa del proceso de perforación y producción
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {applications.map((app, idx) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative overflow-hidden border border-black/10 bg-gradient-to-br from-white to-black/[0.02] p-8"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-aog-primary/30 transition-all duration-500 group-hover:w-2" />

              {/* Content */}
              <div className="relative pl-4">
                <h3 className="mb-4 text-2xl font-light text-black group-hover:text-aog-primary">
                  {app.title}
                </h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-black/60">
                  {app.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {app.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-aog-primary" />
                      <span className="text-sm font-light text-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
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

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="border-l-2 border-aog-primary pl-8 md:pl-12 lg:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
              Contacto
            </div>

            <h2 className="mb-8 text-[clamp(2rem,5vw,4rem)] font-light leading-[1] tracking-tight text-white">
              ¿Listo para Optimizar tus Operaciones?
            </h2>

            <p className="mb-12 max-w-2xl text-base font-light leading-relaxed text-white/60 md:text-lg">
              Nuestro equipo de expertos está listo para ayudarte a seleccionar las herramientas perfectas
              para tus necesidades específicas. Contáctanos para una consulta personalizada.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <TechButton href="/contact" variant="primary" size="lg">
                Solicitar cotización
              </TechButton>
              <TechButtonDiagonal href="/services">
                Ver otros servicios
              </TechButtonDiagonal>
              <TechButton href="/about" variant="secondary" size="lg" icon="chevron">
                Conocer empresa
              </TechButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main Component
export default function HerramientasMoliendaPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <EquipmentSection />
      <BenefitsSection />
      <ApplicationsSection />
      <CTASection />
    </main>
  )
}
