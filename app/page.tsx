'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { AOG_SERVICES, AOG_VALUES, AOG_COMPANY } from '@/constants/aog'
import { TypeWriter, CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'
import ImageWithPlaceholder from '@/components/aog/ImageWithPlaceholder'
import { MinimalGridDark, MinimalGridLight, CornerAccents } from '@/components/aog/GridBackgrounds'

// Animated Tech Background
const TechBackground = () => (
  <>
    {/* Gradient orbs - Más oscuros en mobile para mejor legibilidad */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/15 blur-3xl sm:bg-aog-primary/25 md:bg-aog-primary/40"
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
        className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/12 blur-3xl sm:bg-aog-primary/20 md:bg-aog-primary/35"
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
      <motion.div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aog-primary/10 blur-3xl sm:bg-aog-primary/18 md:bg-aog-primary/30"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>

    {/* Animated grid lines - Menos brillantes en mobile */}
    <div className="pointer-events-none absolute inset-0">
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-aog-primary/20 to-transparent sm:via-aog-primary/40 md:via-aog-primary/60"
          style={{ top: `${(i + 1) * 7}%` }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: [0, 0.6, 0], x: ['-100%', '100%'] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'linear',
          }}
        />
      ))}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-aog-primary/20 to-transparent sm:via-aog-primary/40 md:via-aog-primary/60"
          style={{ left: `${(i + 1) * 7}%` }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: [0, 0.6, 0], y: ['-100%', '100%'] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'linear',
          }}
        />
      ))}
    </div>

    {/* Floating particles - Menos brillantes en mobile */}
    <div className="pointer-events-none absolute inset-0">
      {[...Array(50)].map((_, i) => {
        // Use deterministic values based on index to avoid hydration mismatch
        const seed = (i + 1) * 5.7
        const xPos = ((seed * 17) % 100)
        const yPosStart = ((seed * 11) % 100)
        const yPosEnd = ((seed * 23) % 100)
        const duration = 3 + ((seed * 7) % 4)
        const delay = (seed * 13) % 3

        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-aog-primary shadow-sm shadow-aog-primary/30 sm:h-1.5 sm:w-1.5 sm:shadow-md sm:shadow-aog-primary/40 md:h-2 md:w-2 md:shadow-lg md:shadow-aog-primary/50"
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

    {/* Scan line effect - Menos visible en mobile */}
    <motion.div
      className="pointer-events-none absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-aog-primary/40 to-transparent shadow-sm shadow-aog-primary/20 sm:h-[3px] sm:via-aog-primary/70 sm:shadow-md sm:shadow-aog-primary/30 md:via-aog-primary md:shadow-lg md:shadow-aog-primary/50"
      animate={{
        y: ['0%', '100%'],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </>
)

// Hero Section - BLACK
const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-16">
      <TechBackground />
      <MinimalGridDark />

      <div className="relative z-10 flex min-h-screen items-center overflow-hidden px-4 py-20 sm:px-6 md:px-12 md:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="grid gap-8 sm:gap-12 md:gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Left column - Text */}
            <div className="lg:col-span-7 lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mb-8 md:mb-12 lg:mb-16"
              >
                <h1 className="mb-4 overflow-hidden text-[clamp(2rem,7vw,7rem)] font-extralight leading-[0.85] tracking-[-0.03em] text-white sm:mb-6 md:mb-8">
                  <TypeWriter text="Field Solutions" delay={0.6} speed={0.15} />
                </h1>
                <div className="mb-6 h-px w-16 bg-aog-primary sm:mb-8 sm:w-20 md:mb-10 md:w-24" />
                <p className="max-w-2xl text-base font-light leading-relaxed tracking-wide text-white/60 sm:text-lg md:text-xl">
                  Soluciones vanguardistas para la industria del petróleo y gas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-6 sm:space-y-8 md:space-y-10"
              >
                <div>
                  <h2 className="mb-3 overflow-hidden text-[clamp(1.5rem,4.5vw,4rem)] font-light leading-[1.1] tracking-tight text-white sm:mb-4 md:mb-6">
                    <CodeReveal text="Optimizamos" delay={1.2} />
                    <br />
                    <CodeReveal text="eficiencia operativa" delay={1.5} />
                  </h2>
                  <p className="max-w-lg text-sm font-light leading-relaxed text-white/50 sm:text-base">
                    A través de tecnología avanzada y servicios especializados para el sector
                    petrolero, garantizando seguridad y excelencia operacional.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                  <TechButton href="/services" variant="primary" size="lg">
                    Explorar servicios
                  </TechButton>
                  <TechButtonDiagonal href="/contact">
                    Solicitar cotización
                  </TechButtonDiagonal>
                  <TechButton href="/about" variant="outline" size="lg" icon="chevron">
                    Nosotros
                  </TechButton>
                </div>
              </motion.div>
            </div>

            {/* Right column - Visual Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col"
              >
                {/* Card with petroleum image */}
                <div className="group relative h-[250px] overflow-hidden border-2 border-aog-primary/30 bg-gradient-to-br from-neutral-900 to-black sm:h-[300px] md:h-[380px] lg:h-[460px]">

                  {/* Image with auto fallback to placeholder */}
                  <ImageWithPlaceholder
                    src="/images/aog/banner-1-1.jpeg"
                    alt="Plataforma petrolera offshore"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="grayscale"
                    placeholderIcon={
                      <div className="mx-auto mb-4 h-32 w-32 rounded-full border-2 border-aog-primary/30 bg-gradient-to-br from-aog-primary/10 to-transparent p-8">
                        <svg className="h-full w-full text-aog-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    }
                    placeholderText="Imagen Hero: Plataforma Petrolera"
                    placeholderSubtext="Dimensión recomendada: 1200x800px"
                  />

                  {/* Corner accents */}
                  <div className="absolute left-0 top-0 z-20 h-16 w-16 border-l-2 border-t-2 border-aog-primary" />
                  <div className="absolute bottom-0 right-0 z-20 h-16 w-16 border-b-2 border-r-2 border-aog-primary" />
                </div>

                {/* Stats - SEPARADOS del card */}
                <div className="border-l-2 border-r-2 border-b-2 border-aog-primary/30 bg-black p-4 sm:p-6 md:p-8">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                    <div className="text-center">
                      <motion.div
                        className="mb-0.5 text-2xl font-light text-aog-primary sm:mb-1 sm:text-3xl md:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                      >
                        6
                      </motion.div>
                      <div className="text-[9px] font-light uppercase tracking-wider text-white/60 sm:text-[10px] md:text-xs">
                        Servicios
                      </div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="mb-0.5 text-2xl font-light text-aog-primary sm:mb-1 sm:text-3xl md:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                      >
                        24/7
                      </motion.div>
                      <div className="text-[9px] font-light uppercase tracking-wider text-white/60 sm:text-[10px] md:text-xs">
                        Soporte
                      </div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="mb-0.5 text-2xl font-light text-aog-primary sm:mb-1 sm:text-3xl md:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                      >
                        100%
                      </motion.div>
                      <div className="text-[9px] font-light uppercase tracking-wider text-white/60 sm:text-[10px] md:text-xs">
                        Seguridad
                      </div>
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

// Services Section - WHITE
const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32 lg:py-40">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="mb-12 grid gap-6 sm:mb-16 sm:gap-8 md:mb-20 lg:mb-24 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="mb-4 text-[9px] font-light uppercase tracking-[0.25em] text-aog-primary sm:mb-6 sm:text-[10px] md:mb-8 md:tracking-[0.3em] md:text-xs">
              Portfolio de servicios
            </div>
            <h2 className="text-[clamp(1.75rem,5.5vw,5rem)] font-light leading-[1.1] tracking-tight text-black">
              {isInView && (
                <>
                  <CodeReveal text="Soluciones" delay={0.2} />
                  <br />
                  <CodeReveal text="integrales" delay={0.5} />
                </>
              )}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end lg:col-span-8"
          >
            <div className="w-full">
              <p className="mb-4 max-w-2xl text-sm font-light leading-relaxed text-black/50 sm:mb-6 sm:text-base md:mb-8 md:text-lg">
                Desde control de sólidos hasta servicios técnicos especializados, ofrecemos
                soluciones completas para maximizar la eficiencia en operaciones petroleras.
              </p>
              <div className="flex flex-wrap gap-4">
                <TechButtonDiagonal href="/services">
                  Ver todos los servicios
                </TechButtonDiagonal>
                <TechButton href="/contact" variant="outline" size="md">
                  Solicitar información
                </TechButton>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {AOG_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex"
            >
              <Link href={service.slug ? `/services/${service.slug}` : '/services'} className="block w-full">
                {/* Card container - Refined minimal design */}
                <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden border border-black/5 bg-white p-8 transition-all duration-300 group-hover:border-aog-primary/20 group-hover:shadow-lg group-hover:shadow-black/5 md:min-h-[460px] md:p-10 lg:min-h-[480px] lg:p-12">
                  {/* Subtle hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-aog-primary/0 to-aog-primary/0 transition-all duration-300 group-hover:from-aog-primary/[0.02] group-hover:to-transparent" />

                  {/* Minimal corner accents */}
                  <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-black/5 transition-all duration-300 group-hover:border-aog-primary/30" />
                  <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-black/5 transition-all duration-300 group-hover:border-aog-primary/30" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-1 flex-col">
                    {/* Number - minimal */}
                    <div className="mb-6 flex items-center gap-2 md:mb-8">
                      <div className="text-[10px] font-light tracking-[0.2em] text-black/20 md:text-xs">
                        0{idx + 1}
                      </div>
                      <div className="h-px w-8 bg-black/10" />
                    </div>

                    {/* Icon - clean and simple */}
                    <div className="mb-6 inline-flex md:mb-8">
                      <div className="flex h-12 w-12 items-center justify-center border border-black/10 bg-white transition-all duration-300 group-hover:border-aog-primary/40 md:h-14 md:w-14">
                        <service.icon
                          className="h-5 w-5 text-aog-primary/80 transition-colors duration-300 group-hover:text-aog-primary md:h-6 md:w-6"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Title - refined */}
                    <h3 className="mb-4 text-xl font-light tracking-tight text-black transition-colors duration-300 group-hover:text-aog-primary md:mb-6 md:text-2xl">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-black/60 md:mb-8">
                      {service.description}
                    </p>

                    {/* CTA - subtle */}
                    <div className="inline-flex items-center gap-2 text-[10px] font-light uppercase tracking-[0.2em] text-aog-primary/80 transition-all duration-300 group-hover:gap-3 group-hover:text-aog-primary md:text-xs">
                      <span>Explorar</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Minimal bottom accent */}
                  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-aog-primary/20 to-transparent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Image + Values Section - BLACK
const ValuesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32 lg:py-40">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid gap-8 sm:gap-12 md:gap-16 lg:grid-cols-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32">
              <div className="mb-4 text-[9px] font-light uppercase tracking-[0.25em] text-aog-primary sm:mb-6 sm:text-[10px] md:mb-8 md:tracking-[0.3em] md:text-xs">
                Nuestros valores
              </div>
              <h2 className="mb-6 overflow-hidden text-[clamp(1.75rem,5.5vw,5rem)] font-light leading-[1] tracking-tight text-white sm:mb-8 md:mb-10 lg:mb-12">
                {isInView && (
                  <>
                    <CodeReveal text="Principios" delay={0.2} />
                    <br />
                    <CodeReveal text="fundamentales" delay={0.5} />
                  </>
                )}
              </h2>

              {/* Industrial petroleum image */}
              <div className="aspect-[4/5] overflow-hidden border-2 border-aog-primary/30 bg-gradient-to-br from-neutral-900 to-black">
                <div className="relative h-full w-full">
                  {/* Image with auto fallback to placeholder */}
                  <ImageWithPlaceholder
                    src="/images/aog/section-1-1.png"
                    alt="Trabajadores en plataforma petrolera"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="grayscale"
                    placeholderIcon={
                      <div className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-aog-primary/30 bg-gradient-to-br from-aog-primary/10 to-transparent p-6">
                        <svg className="h-full w-full text-aog-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    }
                    placeholderText="Imagen: Equipo de Trabajo"
                    placeholderSubtext="Dimensión recomendada: 800x1000px"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Orange accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aog-primary/15 to-transparent" />

                  {/* Corner accents */}
                  <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-aog-primary" />
                  <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-aog-primary" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Values list */}
          <div className="space-y-px lg:col-span-7">
            {AOG_VALUES.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group border-l border-white/5 bg-black p-6 transition-all hover:border-aog-primary hover:bg-neutral-950 md:p-8 lg:p-10"
              >
                <div className="mb-4 flex items-start justify-between md:mb-6">
                  <h3 className="text-2xl font-light tracking-tight text-white md:text-3xl">
                    {value.title}
                  </h3>
                  <value.icon className="h-6 w-6 text-aog-primary opacity-30 md:h-8 md:w-8" strokeWidth={1} />
                </div>
                <p className="text-sm font-light leading-relaxed text-white/40 md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTAs al final de valores */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row md:mt-16 lg:col-span-12 lg:mt-20"
          >
            <TechButton href="/about" variant="primary" size="lg">
              Conocer más sobre nosotros
            </TechButton>
            <TechButtonDiagonal href="/contact">
              Trabajar con nosotros
            </TechButtonDiagonal>
          </motion.div>
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
    <section ref={ref} className="relative bg-white py-20 md:py-32 lg:py-40">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="border-l border-aog-primary pl-4 sm:pl-6 md:pl-12 lg:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 text-[9px] font-light uppercase tracking-[0.25em] text-aog-primary sm:mb-8 sm:text-[10px] md:mb-10 md:tracking-[0.3em] md:text-xs lg:mb-12">
              Contacto
            </div>

            <h2 className="mb-8 overflow-hidden text-[clamp(1.75rem,5.5vw,5rem)] font-light leading-[1] tracking-tight text-black sm:mb-10 md:mb-12 lg:mb-16">
              {isInView && (
                <>
                  <CodeReveal text="Optimiza tus" delay={0.2} />
                  <br />
                  <CodeReveal text="operaciones" delay={0.5} />
                </>
              )}
            </h2>

            <div className="mb-8 grid gap-6 sm:mb-10 sm:gap-8 md:mb-12 md:grid-cols-2 lg:mb-16 lg:grid-cols-3">
              <div className="border-l border-black/10 pl-3 sm:pl-4 md:pl-6">
                <div className="mb-1.5 text-[9px] font-light uppercase tracking-[0.15em] text-black/30 sm:mb-2 sm:text-[10px] sm:tracking-[0.2em] md:mb-3 md:text-xs">
                  Teléfono
                </div>
                <a
                  href={`tel:${AOG_COMPANY.phone.main}`}
                  className="text-base font-light text-black transition-colors hover:text-aog-primary sm:text-lg md:text-xl"
                >
                  {AOG_COMPANY.phone.main}
                </a>
              </div>
              <div className="border-l border-black/10 pl-3 sm:pl-4 md:pl-6">
                <div className="mb-1.5 text-[9px] font-light uppercase tracking-[0.15em] text-black/30 sm:mb-2 sm:text-[10px] sm:tracking-[0.2em] md:mb-3 md:text-xs">
                  Email
                </div>
                <a
                  href={`mailto:${AOG_COMPANY.email.general}`}
                  className="break-all text-base font-light text-black transition-colors hover:text-aog-primary sm:text-lg md:text-xl"
                >
                  {AOG_COMPANY.email.general}
                </a>
              </div>
              <div className="border-l border-black/10 pl-3 sm:pl-4 md:pl-6">
                <div className="mb-1.5 text-[9px] font-light uppercase tracking-[0.15em] text-black/30 sm:mb-2 sm:text-[10px] sm:tracking-[0.2em] md:mb-3 md:text-xs">
                  Ubicación
                </div>
                <div className="text-base font-light text-black sm:text-lg md:text-xl">
                  {AOG_COMPANY.location}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <TechButton href="/contact" variant="primary" size="lg">
                Solicitar contacto
              </TechButton>
              <TechButtonDiagonal href="/services">
                Ver servicios
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

// Main page component
export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <CTASection />
    </main>
  )
}
