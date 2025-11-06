'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Settings, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'
import { TypeWriter, CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'
import { AOG_SERVICES } from '@/constants/aog'
import {
  MinimalGridLinesDark as MinimalGridDark,
  MinimalGridLinesLight as MinimalGridLight,
} from '@/components/aog/GridBackgrounds'

// Get service data
const service = AOG_SERVICES.find((s) => s.id === 'equipos-perifericos')!

// Hero Section - BLACK
const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-[70vh] overflow-hidden bg-black pt-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-20 sm:px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column - Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
                Servicios AOG
              </div>
              <h1 className="mb-6 overflow-hidden text-[clamp(2.5rem,8vw,6rem)] font-extralight leading-[0.9] tracking-tight text-white">
                {isInView && (
                  <>
                    <CodeReveal text="Equipos" delay={0.2} />
                    <br />
                    <CodeReveal text="Periféricos" delay={0.5} />
                  </>
                )}
              </h1>
              <div className="mb-8 h-px w-20 bg-aog-primary" />
              <p className="max-w-2xl text-lg font-light leading-relaxed text-white/70">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <TechButton href="/contact" variant="primary" size="lg">
                Solicitar cotización
              </TechButton>
              <TechButtonDiagonal href="/services">Ver todos los servicios</TechButtonDiagonal>
            </motion.div>
          </div>

          {/* Right column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="relative h-[400px] overflow-hidden border-2 border-aog-primary/30 bg-gradient-to-br from-neutral-900 to-black sm:h-[500px] lg:h-[600px]">
              {/* Platform Image */}
              <Image
                src="/images/aog/platform-hero.jpg"
                alt="Equipos Periféricos"
                fill
                className="object-cover object-center opacity-70"
              />
              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-24 w-24 border-l-2 border-t-2 border-aog-primary" />
              <div className="absolute bottom-0 right-0 h-24 w-24 border-b-2 border-r-2 border-aog-primary" />
            </div>
          </motion.div>
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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/5] overflow-hidden border-2 border-aog-primary/30 bg-gradient-to-br from-neutral-900 to-black">
              <div className="relative h-full w-full">
                {/* Workers and Equipment Image */}
                <Image
                  src="/images/aog/workers-equipment.jpg"
                  alt="Vista de Equipos"
                  fill
                  className="object-cover object-center opacity-70"
                />
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-aog-primary" />
                <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-aog-primary" />
              </div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
                Descripción General
              </div>
              <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
                Soporte Integral para Operaciones
              </h2>
              <div className="mb-8 h-px w-16 bg-aog-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg font-light leading-relaxed text-black/70">
                Nuestros equipos periféricos están diseñados para complementar y optimizar cada
                aspecto de las operaciones de perforación. Ofrecemos soluciones completas que
                garantizan la continuidad y eficiencia de sus procesos.
              </p>
              <p className="text-lg font-light leading-relaxed text-black/70">
                Desde compresores de aire de alta capacidad hasta sistemas de almacenamiento
                especializados, cada equipo está seleccionado para maximizar el rendimiento y
                minimizar el tiempo de inactividad en sus operaciones.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border-l-2 border-aog-primary/30 bg-black/5 p-6">
                  <div className="mb-2 text-3xl font-light text-aog-primary">24/7</div>
                  <div className="text-sm font-light uppercase tracking-wider text-black/50">
                    Disponibilidad
                  </div>
                </div>
                <div className="border-l-2 border-aog-primary/30 bg-black/5 p-6">
                  <div className="mb-2 text-3xl font-light text-aog-primary">100%</div>
                  <div className="text-sm font-light uppercase tracking-wider text-black/50">
                    Confiabilidad
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

// Equipment Section - BLACK
const EquipmentSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const equipment = [
    {
      name: 'Compresores de Aire',
      description: 'Alta capacidad para todas las necesidades de perforación',
    },
    {
      name: 'Tanques Frac Tank',
      description: 'Almacenamiento seguro y confiable de fluidos',
    },
    {
      name: 'Quemadores Ecológicos',
      description: 'Gestión eficiente y ambientalmente responsable',
    },
    {
      name: 'Silos de Almacenamiento',
      description: 'Capacidad para materiales secos y productos químicos',
    },
    {
      name: 'Desgasificador Atmosférico',
      description: 'Eliminación segura de gases del sistema',
    },
    {
      name: 'Separador Gas-Lodo',
      description: 'Separación eficiente para protección del equipo',
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
          <div className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
            Nuestro Equipamiento
          </div>
          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-white">
            Equipos Especializados
          </h2>
          <div className="mx-auto h-px w-16 bg-aog-primary" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8"
            >
              {/* Equipment Image */}
              <div className="relative mb-6 aspect-video overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 to-black">
                <Image
                  src={idx % 2 === 0 ? '/images/aog/platform-hero.jpg' : '/images/aog/workers-equipment.jpg'}
                  alt={item.name}
                  fill
                  className="object-cover object-center opacity-60"
                />
              </div>

              {/* Content */}
              <div className="mb-2 flex items-center gap-2">
                <div className="text-xs font-light tracking-[0.2em] text-white/30">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="h-px flex-1 bg-aog-primary/30" />
              </div>

              <h3 className="mb-3 text-xl font-light text-white">{item.name}</h3>
              <p className="text-sm font-light leading-relaxed text-white/50">{item.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/5 to-transparent transition-transform duration-500 group-hover:translate-x-0" />

              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-aog-primary/0 transition-all duration-300 group-hover:border-aog-primary" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-aog-primary/0 transition-all duration-300 group-hover:border-aog-primary" />
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

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
            Beneficios
          </div>
          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-black">
            Ventajas Operativas
          </h2>
          <div className="mb-8 h-px w-16 bg-aog-primary" />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((benefit, idx) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border-l-2 border-aog-primary/30 bg-black/5 p-8 transition-all hover:border-aog-primary hover:bg-black/10"
            >
              <CheckCircle2 className="mb-4 h-8 w-8 text-aog-primary" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-black">{benefit}</h3>
            </motion.div>
          ))}
        </div>

        {/* Panoramic Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="relative aspect-[21/9] overflow-hidden border-2 border-aog-primary/30 bg-gradient-to-br from-neutral-900 to-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Settings className="mx-auto mb-4 h-24 w-24 text-aog-primary/50" strokeWidth={1} />
                <p className="text-sm font-light uppercase tracking-wider text-white/30">
                  Imagen Panorámica: Equipos en Operación
                </p>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-aog-primary" />
            <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-aog-primary" />
          </div>
        </motion.div>
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
        <div className="border-l-2 border-aog-primary pl-8 sm:pl-12 md:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
              Contacto
            </div>
            <h2 className="mb-8 text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-white">
              Optimice sus operaciones con nuestro equipamiento
            </h2>
            <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/60">
              Solicite una cotización personalizada y descubra cómo nuestros equipos periféricos
              pueden mejorar la eficiencia de sus operaciones de perforación.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <TechButton href="/contact" variant="primary" size="lg">
                Solicitar cotización
              </TechButton>
              <TechButtonDiagonal href="/services">Ver otros servicios</TechButtonDiagonal>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main page component
export default function EquiposPerifericos() {
  return (
    <main className="bg-white">
      <HeroSection />
      <OverviewSection />
      <EquipmentSection />
      <BenefitsSection />
      <CTASection />
    </main>
  )
}
