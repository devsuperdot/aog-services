'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FileText, Scale, AlertTriangle, Shield, Building2, Mail, Phone, MapPin, ChevronRight } from 'lucide-react'
import { CONTACT_INFO } from '@/constants'
import { MinimalGridLight, MinimalGridDark, CornerAccents } from '@/components/aog/GridBackgrounds'

// Hero Section
const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-[60vh] overflow-hidden bg-black">
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
      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-[1600px] items-center px-4 py-20 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-aog-primary/10 px-4 py-2"
          >
            <Scale className="h-4 w-4 text-aog-primary" />
            <span className="text-xs font-light uppercase tracking-[0.2em] text-white/80">
              Aviso Legal
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
              Términos de
            </span>
            <span className="block text-5xl text-white md:text-6xl lg:text-7xl">
              Uso Legal
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg"
          >
            Información legal sobre el uso de los servicios de {CONTACT_INFO.company.fullName} y
            los derechos y obligaciones que rigen nuestra relación comercial.
          </motion.p>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute left-0 top-0 h-32 w-32 border-l-2 border-t-2 border-aog-primary/30" />
      <div className="absolute bottom-0 right-0 h-32 w-32 border-b-2 border-r-2 border-aog-primary/30" />
    </section>
  )
}

// Company Info Section
const CompanyInfoSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-aog-primary/30 bg-aog-primary/5">
              <Building2 className="h-5 w-5 text-aog-primary" />
            </div>
            <h2 className="text-3xl font-light tracking-tight text-black md:text-4xl">
              Información de la Empresa
            </h2>
          </div>
          <p className="max-w-3xl text-base font-light leading-relaxed text-black/60">
            Datos legales y corporativos de nuestra organización.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { label: 'Razón Social', value: CONTACT_INFO.company.legalName },
            { label: 'Nombre Comercial', value: CONTACT_INFO.company.fullName },
            { label: 'Domicilio', value: CONTACT_INFO.address.full },
            { label: 'Email', value: CONTACT_INFO.email.general },
            { label: 'Teléfono', value: CONTACT_INFO.phone.primary },
            { label: 'Sitio Web', value: CONTACT_INFO.website },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-black/5 bg-white p-6"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/5 to-transparent transition-transform duration-500 group-hover:translate-x-0" />

              <div className="relative">
                <h3 className="mb-2 text-xs font-light uppercase tracking-wider text-black/40">
                  {item.label}
                </h3>
                <p className="font-light text-black">{item.value}</p>
              </div>

              <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Terms Section with Image
const TermsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aog/workers-equipment.jpg"
          alt="AOG Workers"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
      </div>

      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
              <FileText className="h-5 w-5 text-aog-primary" />
            </div>
            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">
              Condiciones de Uso
            </h2>
          </div>
          <p className="max-w-3xl text-base font-light leading-relaxed text-white/60">
            Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones.
          </p>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              title: 'Objeto del Sitio Web',
              desc: 'Este sitio web tiene como objetivo proporcionar información sobre los servicios de la industria petrolera ofrecidos por AOG Services, incluyendo control de sólidos, equipos periféricos y servicios técnicos especializados.',
            },
            {
              title: 'Uso del Sitio',
              desc: 'El usuario se compromete a hacer un uso adecuado del sitio web y de los contenidos, de conformidad con la legislación aplicable, el presente aviso legal y las buenas costumbres. El usuario responderá frente a AOG Services de los daños y perjuicios que pudieran derivarse del incumplimiento de dicha obligación.',
            },
            {
              title: 'Propiedad Intelectual',
              desc: 'Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad de AOG Services o de terceros.',
            },
            {
              title: 'Limitación de Responsabilidad',
              desc: 'AOG Services no se hace responsable de los daños y perjuicios de cualquier naturaleza derivados de: la infracción de derechos de propiedad intelectual e industrial, de los secretos empresariales, de compromisos contractuales de cualquier índole, de la falta de veracidad, vigencia, exhaustividad y/o autenticidad de la información.',
            },
            {
              title: 'Protección de Datos',
              desc: 'Los datos personales recabados a través del sitio web serán tratados conforme a lo dispuesto en la Política de Privacidad. El usuario garantiza que los datos aportados son verdaderos, exactos, completos y actualizados, siendo responsable de cualquier daño o perjuicio derivado del incumplimiento de tal obligación.',
            },
            {
              title: 'Legislación Aplicable',
              desc: 'El presente aviso legal se rige íntegramente por la legislación mexicana. Para cualquier controversia que pudiera derivarse del acceso o uso del sitio web, AOG Services y el usuario acuerdan someterse a los juzgados y tribunales de Villahermosa, Tabasco, México.',
            },
          ].map((term, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-white/5 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-aog-primary/30 transition-all duration-500 group-hover:w-2" />

              <div className="relative">
                <div className="mb-3 flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
                    <span className="text-xs font-light text-aog-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-light text-white">{term.title}</h3>
                </div>
                <p className="pl-9 text-sm font-light leading-relaxed text-white/60">{term.desc}</p>
              </div>

              <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Liability Section
const LiabilitySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const items = [
    {
      title: 'Disponibilidad del Servicio',
      desc: 'No garantizamos la disponibilidad continua del sitio web ni la ausencia de errores.',
    },
    {
      title: 'Contenido de Terceros',
      desc: 'No nos responsabilizamos por el contenido de sitios web externos enlazados.',
    },
    {
      title: 'Virus y Malware',
      desc: 'No garantizamos la ausencia de virus, aunque aplicamos medidas de seguridad.',
    },
    {
      title: 'Información Técnica',
      desc: 'La información técnica es referencial y puede variar según especificaciones.',
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
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-aog-primary/30 bg-aog-primary/5">
              <AlertTriangle className="h-5 w-5 text-aog-primary" />
            </div>
            <h2 className="text-3xl font-light tracking-tight text-black md:text-4xl">
              Exclusiones de Responsabilidad
            </h2>
          </div>
          <p className="max-w-3xl text-base font-light leading-relaxed text-black/60">
            Limitaciones y excepciones aplicables a nuestros servicios.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-black/5 bg-gradient-to-br from-white to-black/[0.02] p-8"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-aog-primary/30 transition-all duration-500 group-hover:w-2" />

              <h3 className="mb-3 text-lg font-light text-black">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-black/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Modifications Section
const ModificationsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
                <Shield className="h-5 w-5 text-aog-primary" />
              </div>
              <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">
                Modificaciones
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 border border-white/5 bg-white/5 p-8 backdrop-blur-sm md:p-12"
          >
            <p className="text-base font-light leading-relaxed text-white/70">
              {CONTACT_INFO.company.fullName} se reserva el derecho de modificar el presente aviso legal
              en cualquier momento. Los cambios serán efectivos inmediatamente tras su publicación en el sitio web.
            </p>

            <p className="text-base font-light leading-relaxed text-white/70">
              Es responsabilidad del usuario revisar periódicamente estos términos. El uso continuado del sitio
              web tras la publicación de cambios constituirá la aceptación de los mismos.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-aog-primary/30 bg-aog-primary/5 p-6">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-aog-primary" />
              <p className="text-sm font-light text-white/80">
                Cualquier modificación sustancial será notificada a través de un aviso destacado en el sitio web.
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

// Contact CTA Section
const ContactCTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center border border-aog-primary/30 bg-aog-primary/5">
              <Mail className="h-8 w-8 text-aog-primary" />
            </div>

            <h2 className="mb-4 text-3xl font-light tracking-tight text-black md:text-4xl">
              ¿Dudas Legales?
            </h2>

            <p className="mb-12 text-base font-light leading-relaxed text-black/60 md:text-lg">
              Si tienes preguntas sobre estos términos o necesitas aclaraciones, contáctanos.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 grid gap-4 md:grid-cols-3"
          >
            <a
              href={`mailto:${CONTACT_INFO.email.general}`}
              className="group relative overflow-hidden border border-black/5 bg-white p-6 transition-all hover:border-aog-primary/50"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/5 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              <Mail className="relative mx-auto mb-3 h-6 w-6 text-aog-primary" />
              <p className="relative text-sm font-light text-black">
                {CONTACT_INFO.email.general}
              </p>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone.primary}`}
              className="group relative overflow-hidden border border-black/5 bg-white p-6 transition-all hover:border-aog-primary/50"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/5 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              <Phone className="relative mx-auto mb-3 h-6 w-6 text-aog-primary" />
              <p className="relative text-sm font-light text-black">
                {CONTACT_INFO.phone.primary}
              </p>
            </a>

            <div className="relative overflow-hidden border border-black/5 bg-white p-6">
              <MapPin className="mx-auto mb-3 h-6 w-6 text-aog-primary" />
              <p className="text-sm font-light text-black">
                {CONTACT_INFO.address.full}
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden border-2 border-aog-primary bg-aog-primary px-8 py-4 text-sm font-light uppercase tracking-[0.2em] text-white transition-all hover:bg-aog-primary/90"
            >
              <span className="relative">Contáctanos</span>
              <ChevronRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />

              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-white/50 transition-all group-hover:border-white" />
              <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-white/50 transition-all group-hover:border-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main Component
export default function LegalNoticesPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CompanyInfoSection />
      <TermsSection />
      <LiabilitySection />
      <ModificationsSection />
      <ContactCTASection />
    </main>
  )
}
