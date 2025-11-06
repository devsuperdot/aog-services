'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Compass, TrendingUp, Users, Award, Shield, Leaf, ChevronRight } from 'lucide-react'
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
          alt="AOG Services Mission and Vision"
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
            <Compass className="h-4 w-4 text-aog-primary" />
            <span className="text-xs font-light uppercase tracking-[0.2em] text-white/80">
              Nuestro Propósito
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
              Misión y
            </span>
            <span className="block text-5xl text-white md:text-6xl lg:text-7xl">
              Visión AOG
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg"
          >
            Descubre lo que nos impulsa cada día y hacia dónde nos dirigimos como líderes
            en la industria del petróleo y gas.
          </motion.p>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute left-0 top-0 h-32 w-32 border-l-2 border-t-2 border-aog-primary/30" />
      <div className="absolute bottom-0 right-0 h-32 w-32 border-b-2 border-r-2 border-aog-primary/30" />
    </section>
  )
}

// Mission Section
const MissionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center border-2 border-aog-primary/30 bg-aog-primary/5">
                <Target className="h-8 w-8 text-aog-primary" />
              </div>
              <h2 className="text-4xl font-light tracking-tight text-black md:text-5xl">
                Misión
              </h2>
            </div>

            <div className="relative overflow-hidden border-l-4 border-aog-primary/30 bg-gradient-to-br from-white to-black/[0.02] p-8 md:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 opacity-5">
                <Target className="h-full w-full text-aog-primary" />
              </div>

              <p className="relative text-lg font-light leading-relaxed text-black md:text-xl">
                En AOG, nos enfocamos en proporcionar{' '}
                <span className="font-normal text-aog-primary">soluciones vanguardistas</span> y servicios de
                excelencia para la industria del petróleo y gas, optimizando la eficiencia operativa y
                aumentando la productividad de nuestros clientes a través de prácticas responsables y
                sostenibles, con un firme compromiso con la seguridad y el medio ambiente, contribuyendo
                al progreso energético de México.
              </p>
            </div>
          </motion.div>

          {/* Mission Key Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="mb-8 text-2xl font-light text-black">
              Pilares de Nuestra Misión
            </h3>

            {[
              {
                icon: TrendingUp,
                title: 'Eficiencia Operativa',
                desc: 'Optimizamos procesos para maximizar la productividad',
              },
              {
                icon: Shield,
                title: 'Seguridad Integral',
                desc: 'Compromiso inquebrantable con la seguridad en cada operación',
              },
              {
                icon: Leaf,
                title: 'Sostenibilidad',
                desc: 'Prácticas responsables que protegen el medio ambiente',
              },
              {
                icon: Award,
                title: 'Excelencia en Servicio',
                desc: 'Soluciones vanguardistas de la más alta calidad',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group relative overflow-hidden border border-black/5 bg-white p-6"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/5 to-transparent transition-transform duration-500 group-hover:translate-x-0" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
                      <Icon className="h-6 w-6 text-aog-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-light text-black">{item.title}</h4>
                      <p className="text-sm font-light text-black/60">{item.desc}</p>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Vision Section
const VisionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aog/workers-equipment.jpg"
          alt="AOG Vision"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
      </div>

      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Vision Key Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:order-2"
          >
            <h3 className="mb-8 text-2xl font-light text-white">
              Compromisos de Nuestra Visión
            </h3>

            {[
              {
                icon: Award,
                title: 'Liderazgo en el Sector',
                desc: 'Ser la primera opción en servicios petroleros',
              },
              {
                icon: Leaf,
                title: 'Innovación Sostenible',
                desc: 'Soluciones que respetan el futuro del planeta',
              },
              {
                icon: TrendingUp,
                title: 'Excelencia Operativa',
                desc: 'Estándares de calidad que superan expectativas',
              },
              {
                icon: Users,
                title: 'Valor Compartido',
                desc: 'Generando beneficios para clientes y sociedad',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group relative overflow-hidden border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-500 group-hover:translate-x-0" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
                      <Icon className="h-6 w-6 text-aog-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-light text-white">{item.title}</h4>
                      <p className="text-sm font-light text-white/60">{item.desc}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Vision Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-1"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center border-2 border-aog-primary/30 bg-aog-primary/10">
                <Eye className="h-8 w-8 text-aog-primary" />
              </div>
              <h2 className="text-4xl font-light tracking-tight text-white md:text-5xl">
                Visión
              </h2>
            </div>

            <div className="relative overflow-hidden border-l-4 border-aog-primary/30 bg-gradient-to-br from-white/10 to-white/[0.02] p-8 backdrop-blur-sm md:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 opacity-5">
                <Eye className="h-full w-full text-white" />
              </div>

              <p className="relative text-lg font-light leading-relaxed text-white md:text-xl">
                AOG será{' '}
                <span className="font-normal text-aog-primary">líder en la prestación de servicios</span> en
                la industria del petróleo y gas, destacándose por sus soluciones innovadoras y sostenibles,
                reconocidos por nuestra excelencia operativa y compromiso con la calidad, generando valor a
                nuestros clientes y a la sociedad, siendo el socio más confiable en el sector energético.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute left-0 top-0 h-32 w-32 border-l-2 border-t-2 border-aog-primary/20" />
      <div className="absolute bottom-0 right-0 h-32 w-32 border-b-2 border-r-2 border-aog-primary/20" />
    </section>
  )
}

// Values Section
const ValuesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      number: '01',
      title: 'Innovación',
      desc: 'Buscamos constantemente nuevas formas de mejorar y evolucionar nuestros servicios.',
    },
    {
      number: '02',
      title: 'Integridad',
      desc: 'Actuamos con transparencia, ética y honestidad en todas nuestras operaciones.',
    },
    {
      number: '03',
      title: 'Compromiso',
      desc: 'Dedicados a la excelencia y satisfacción de nuestros clientes en cada proyecto.',
    },
    {
      number: '04',
      title: 'Sostenibilidad',
      desc: 'Promovemos prácticas que cuidan el medio ambiente y las comunidades.',
    },
  ]

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light tracking-tight text-black md:text-4xl">
            Valores que nos Definen
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-black/60">
            Los principios fundamentales que guían cada decisión y acción en AOG Services.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-black/5 bg-white p-8"
            >
              {/* Hover background */}
              <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-aog-primary/5 to-transparent transition-transform duration-500 group-hover:translate-y-0" />

              {/* Number */}
              <div className="relative mb-6">
                <span className="text-6xl font-light text-aog-primary/20 transition-colors group-hover:text-aog-primary/30">
                  {value.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="mb-3 text-xl font-light text-black">{value.title}</h3>
                <p className="text-sm font-light leading-relaxed text-black/60">{value.desc}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
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
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl">
              Construyamos el Futuro Juntos
            </h2>

            <p className="mb-12 text-base font-light leading-relaxed text-white/60 md:text-lg">
              Únete a nosotros en nuestra misión de transformar la industria del petróleo y gas
              con soluciones innovadoras y sostenibles.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden border-2 border-aog-primary bg-aog-primary px-8 py-4 text-sm font-light uppercase tracking-[0.2em] text-white transition-all hover:bg-aog-primary/90"
              >
                <span className="relative">Contactar</span>
                <ChevronRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />

                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-white/50 transition-all group-hover:border-white" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-white/50 transition-all group-hover:border-white" />
              </Link>

              <Link
                href="/services"
                className="group relative inline-flex items-center gap-2 overflow-hidden border-2 border-aog-primary bg-transparent px-8 py-4 text-sm font-light uppercase tracking-[0.2em] text-aog-primary transition-all hover:bg-aog-primary hover:text-white"
              >
                <span className="relative">Ver Servicios</span>
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
export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <CTASection />
    </main>
  )
}
