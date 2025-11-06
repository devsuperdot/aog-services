'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { AOG_SERVICES } from '@/constants/aog'
import { MinimalGridLight, MinimalGridDark, CornerAccents } from '@/components/aog/GridBackgrounds'

// Hero Section
const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-[70vh] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aog/platform-hero.jpg"
          alt="AOG Services Platform"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <MinimalGridDark />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1600px] items-center px-4 py-20 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-aog-primary/10 px-4 py-2"
          >
            <span className="text-xs font-light uppercase tracking-[0.2em] text-white/80">
              Nuestros Servicios
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 font-light tracking-tight"
          >
            <span className="block text-4xl text-white/60 md:text-5xl lg:text-6xl">
              Soluciones
            </span>
            <span className="block text-5xl text-white md:text-6xl lg:text-7xl">
              Especializadas
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg"
          >
            Desde control de sólidos hasta servicios técnicos especializados, ofrecemos soluciones
            completas para maximizar la eficiencia en operaciones petroleras.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden border-2 border-aog-primary bg-aog-primary px-8 py-4 text-sm font-light uppercase tracking-[0.2em] text-white transition-all hover:bg-aog-primary/90"
            >
              <span className="relative">Solicitar Información</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />

              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-white/50 transition-all group-hover:border-white" />
              <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-white/50 transition-all group-hover:border-white" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner accents */}
      <CornerAccents variant="dark" />
    </section>
  )
}

// Overview Section
const OverviewSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-16 md:py-24">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6 text-3xl font-light tracking-tight text-black md:text-4xl"
          >
            Excelencia en Operaciones Petroleras
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-base font-light leading-relaxed text-black/60 md:text-lg"
          >
            Nuestra amplia gama de servicios está diseñada para cubrir todas las necesidades de la
            industria petrolera, desde equipos especializados hasta soporte técnico integral.
            Cada solución está optimizada para maximizar la eficiencia y seguridad de tus operaciones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              { number: '6', label: 'Categorías de Servicio' },
              { number: '24/7', label: 'Soporte Disponible' },
              { number: '100%', label: 'Compromiso con Calidad' },
            ].map((stat, index) => (
              <div key={index} className="border-l-2 border-aog-primary/30 pl-6 text-left">
                <div className="mb-2 text-4xl font-light text-aog-primary">{stat.number}</div>
                <div className="text-sm font-light uppercase tracking-wider text-black/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Services Grid Section
const ServicesGridSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl">
            Portfolio Completo de Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/60">
            Selecciona el servicio que necesitas para conocer más detalles
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AOG_SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full overflow-hidden border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-aog-primary/50"
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-500 group-hover:translate-x-0" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
                      <Icon className="h-7 w-7 text-aog-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="mb-3 text-xl font-light text-white group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 text-sm font-light leading-relaxed text-white/60">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="mb-6 space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-light text-white/50">
                          <ChevronRight className="h-3 w-3 flex-shrink-0 text-aog-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs font-light text-aog-primary">
                          +{service.features.length - 3} más
                        </li>
                      )}
                    </ul>

                    {/* Link arrow */}
                    <div className="flex items-center gap-2 text-sm font-light text-aog-primary">
                      <span>Ver detalles</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// CTA Section with Image
const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aog/workers-equipment.jpg"
          alt="AOG Workers"
          fill
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />
      </div>

      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-light tracking-tight text-black md:text-4xl lg:text-5xl">
              ¿Listo para Optimizar tus Operaciones?
            </h2>

            <p className="mb-12 text-base font-light leading-relaxed text-black/60 md:text-lg">
              Nuestro equipo de expertos está listo para ayudarte a seleccionar las soluciones perfectas
              para tus necesidades específicas. Contáctanos para una consulta personalizada.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden border-2 border-aog-primary bg-aog-primary px-8 py-4 text-sm font-light uppercase tracking-[0.2em] text-white transition-all hover:bg-aog-primary/90"
              >
                <span className="relative">Contactar ahora</span>
                <ChevronRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />

                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-white/50 transition-all group-hover:border-white" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-white/50 transition-all group-hover:border-white" />
              </Link>

              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 overflow-hidden border-2 border-aog-primary bg-transparent px-8 py-4 text-sm font-light uppercase tracking-[0.2em] text-aog-primary transition-all hover:bg-aog-primary hover:text-white"
              >
                <span className="relative">Conocer más</span>
                <ChevronRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main Component
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <OverviewSection />
      <ServicesGridSection />
      <CTASection />
    </main>
  )
}
