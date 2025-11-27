'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Drill, Layers, CheckCircle2, Gauge, ArrowRight } from 'lucide-react'
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

const HeroSection = () => (
  <section className="relative min-h-[90vh] overflow-hidden bg-black pt-16">
    <TechBackground />
    <MinimalGridDark />
    <div className="relative z-10 flex min-h-[90vh] items-center px-4 py-20 sm:px-6 md:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <Link href="/solutions" className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/5">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" /><span>Volver a soluciones</span>
          </Link>
          <h1 className="mb-8 text-[clamp(2rem,8vw,7rem)] font-extralight leading-[0.95] tracking-tight text-white">
            <TypeWriter text="Producción" delay={0.5} speed={0.12} /><br />
            <span className="text-aog-primary"><TypeWriter text="Optimizada" delay={1.3} speed={0.12} /></span>
          </h1>
          <div className="mb-8 h-px w-24 bg-aog-primary" />
          <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
            Maximizamos la eficiencia en procesos de producción petrolera con control de sólidos y equipos especializados
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <TechButton href="/contact" variant="primary" size="lg">Solicitar información</TechButton>
            <TechButtonDiagonal href="#services">Ver servicios</TechButtonDiagonal>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Layers,
      title: 'Control de Sólidos de Alta Eficiencia',
      description:
        'Sistemas de separación de sólidos de última generación que maximizan la recuperación de fluidos y minimizan costos.',
      features: [
        'Separación hasta 99% de eficiencia',
        'Reducción del 40% en consumo de fluidos',
        'Equipos de última generación',
      ],
    },
    {
      icon: Drill,
      title: 'Equipos Periféricos Especializados',
      description:
        'Bombas, mezcladores y equipos auxiliares diseñados para optimizar procesos de producción.',
      features: [
        'Bombas centrífugas de alto rendimiento',
        'Mezcladores de fluidos',
        'Equipos de transferencia',
      ],
    },
    {
      icon: Gauge,
      title: 'Monitoreo y Optimización',
      description:
        'Sistemas de monitoreo en tiempo real para optimizar parámetros operacionales y reducir NPT.',
      features: [
        'Monitoreo 24/7 de parámetros',
        'Alertas de desviaciones',
        'Reportes de eficiencia',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Soporte Técnico Continuo',
      description:
        'Personal técnico especializado disponible 24/7 para garantizar operación continua y eficiente.',
      features: [
        'Soporte técnico 24/7',
        'Mantenimiento preventivo',
        'Respuesta inmediata',
      ],
    },
  ]

  return (
    <section id="services" ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
            Servicios para Producción
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
            {isInView && <CodeReveal text="Eficiencia Comprobada" delay={0.2} />}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 transition-all hover:border-aog-primary hover:bg-gray-50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-aog-primary/30 transition-all group-hover:border-aog-primary group-hover:bg-aog-primary/5">
                <service.icon className="h-7 w-7 text-aog-primary" strokeWidth={1.5} />
              </div>

              <h3 className="mb-4 text-2xl font-light text-black">{service.title}</h3>
              <p className="mb-6 text-sm font-light leading-relaxed text-black/50">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-aog-primary" />
                    <span className="text-sm font-light text-black/60">{feature}</span>
                  </div>
                ))}
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
    'Reducción de hasta 40% en costos de fluidos de perforación',
    'Eficiencia de separación del 99% en control de sólidos',
    'Mejora del 30% en tiempo de perforación',
    'Minimización de paradas no programadas (NPT)',
    'Equipos certificados y personal especializado',
    'Soporte técnico 24/7 en locación',
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
            Beneficios
          </div>
          <h2 className="mb-6 overflow-hidden text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-white">
            {isInView && <CodeReveal text="Resultados Medibles" delay={0.2} />}
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
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-aog-primary"
                strokeWidth={1.5}
              />
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
            <Drill className="h-8 w-8 text-aog-primary" strokeWidth={1.5} />
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-black">
            Maximiza tu
            <br />
            producción
          </h2>

          <p className="mx-auto mb-12 max-w-2xl font-light leading-relaxed text-black/60">
            Solicita información sobre nuestras soluciones de control de sólidos y equipos para
            optimizar tu producción petrolera.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Contactar ahora
            </TechButton>
            <TechButtonDiagonal href="/services">Ver servicios</TechButtonDiagonal>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ProductionPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <CTASection />
    </main>
  )
}
