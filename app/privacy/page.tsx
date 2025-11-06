'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Shield, Lock, Eye, Users, Database, FileText, Clock, Mail, Phone, MapPin, ChevronRight } from 'lucide-react'
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
            <Shield className="h-4 w-4 text-aog-primary" />
            <span className="text-xs font-light uppercase tracking-[0.2em] text-white/80">
              Política de Privacidad
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
              Protegemos tu
            </span>
            <span className="block text-5xl text-white md:text-6xl lg:text-7xl">
              Privacidad
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg"
          >
            En {CONTACT_INFO.company.fullName} nos comprometemos a proteger y respetar tu privacidad.
            Esta política explica cómo recopilamos, usamos y protegemos tu información personal.
          </motion.p>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-2 text-sm text-white/50"
          >
            <Clock className="h-4 w-4" />
            <span>Última actualización: 30 de Octubre, 2025</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner accents */}
      <CornerAccents variant="dark" />
    </section>
  )
}

// Quick Summary Section
const SummarySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Lock,
      title: 'Datos Seguros',
      description: 'Encriptación SSL/TLS en todas las comunicaciones',
    },
    {
      icon: Eye,
      title: 'Transparencia Total',
      description: 'Información clara sobre el uso de tus datos',
    },
    {
      icon: Shield,
      title: 'Tus Derechos',
      description: 'Control completo sobre tu información personal',
    },
  ]

  return (
    <section ref={ref} className="relative bg-white py-16 md:py-24">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden border border-black/5 bg-white p-8 transition-all hover:border-aog-primary/30"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/5 to-transparent transition-transform duration-500 group-hover:translate-x-0" />

                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-aog-primary/30 bg-aog-primary/5">
                    <Icon className="h-6 w-6 text-aog-primary" />
                  </div>

                  <h3 className="mb-2 text-lg font-light tracking-wide text-black">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-black/60">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Information Collection Section
const InfoCollectionSection = () => {
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
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
              <FileText className="h-5 w-5 text-aog-primary" />
            </div>
            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">
              Información que Recopilamos
            </h2>
          </div>
          <p className="max-w-3xl text-base font-light leading-relaxed text-white/60">
            Recopilamos diferentes tipos de información para brindarte nuestros servicios de manera efectiva.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Direct Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden border border-white/5 bg-white/5 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-xl font-light text-white">
              Información que nos proporcionas:
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Datos de contacto', desc: 'Nombre, correo electrónico, teléfono, dirección' },
                { label: 'Información empresarial', desc: 'Nombre de empresa, puesto, sector industrial' },
                { label: 'Datos de cuenta', desc: 'Credenciales de acceso, preferencias de usuario' },
                { label: 'Información de proyectos', desc: 'Especificaciones técnicas, requerimientos' },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-aog-primary" />
                  <div>
                    <span className="font-light text-white">{item.label}:</span>
                    <span className="ml-2 font-light text-white/50">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>

          {/* Automatic Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative overflow-hidden border border-white/5 bg-white/5 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-xl font-light text-white">
              Información recopilada automáticamente:
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Datos de navegación', desc: 'Páginas visitadas, tiempo de sesión, clics' },
                { label: 'Información del dispositivo', desc: 'Tipo de dispositivo, sistema operativo, navegador' },
                { label: 'Dirección IP', desc: 'Ubicación aproximada y proveedor de internet' },
                { label: 'Cookies', desc: 'Preferencias y análisis de uso del sitio' },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-aog-primary" />
                  <div>
                    <span className="font-light text-white">{item.label}:</span>
                    <span className="ml-2 font-light text-white/50">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Data Usage Section
const DataUsageSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const usages = [
    {
      title: 'Prestación de servicios',
      description: 'Procesar solicitudes de cotización, gestionar proyectos, comunicarnos contigo sobre servicios.',
    },
    {
      title: 'Mejora de servicios',
      description: 'Analizar el uso de la plataforma, identificar tendencias, personalizar tu experiencia.',
    },
    {
      title: 'Comunicación',
      description: 'Enviar notificaciones, actualizaciones importantes y ofertas especiales relevantes.',
    },
    {
      title: 'Seguridad y cumplimiento',
      description: 'Proteger sistemas, prevenir fraudes, cumplir obligaciones legales de la industria.',
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
              <Database className="h-5 w-5 text-aog-primary" />
            </div>
            <h2 className="text-3xl font-light tracking-tight text-black md:text-4xl">
              Cómo Usamos Tu Información
            </h2>
          </div>
          <p className="max-w-3xl text-base font-light leading-relaxed text-black/60">
            Utilizamos tu información para prestarte servicios de calidad y mejorar tu experiencia.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {usages.map((usage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-black/5 bg-gradient-to-br from-white to-black/[0.02] p-8"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-aog-primary/30 transition-all duration-500 group-hover:w-2" />

              <h3 className="mb-3 text-lg font-light text-black">
                {usage.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-black/60">
                {usage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Data Sharing Section with Image
const DataSharingSection = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
      </div>

      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
                <Users className="h-5 w-5 text-aog-primary" />
              </div>
              <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">
                Compartir Tu Información
              </h2>
            </div>

            <p className="mb-8 max-w-xl text-base font-light leading-relaxed text-white/60">
              Solo compartimos tu información en circunstancias específicas y con tu consentimiento.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Proveedores de servicios',
                  desc: 'Compartimos datos con terceros que operan nuestra plataforma bajo estrictos acuerdos de confidencialidad.',
                },
                {
                  title: 'Requisitos legales',
                  desc: 'Podemos divulgar información si la ley lo requiere o para proteger derechos y seguridad.',
                },
                {
                  title: 'Nunca vendemos',
                  desc: 'No vendemos, alquilamos ni comercializamos tu información personal a terceros.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="border-l-2 border-aog-primary/30 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <h3 className="mb-2 font-light text-white">{item.title}</h3>
                  <p className="text-sm font-light text-white/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rights Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
                <Shield className="h-5 w-5 text-aog-primary" />
              </div>
              <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">
                Tus Derechos
              </h2>
            </div>

            <p className="mb-8 max-w-xl text-base font-light leading-relaxed text-white/60">
              Tienes control total sobre tu información personal.
            </p>

            <div className="space-y-4">
              {[
                'Derecho de acceso a tu información',
                'Derecho de rectificación de datos',
                'Derecho de eliminación de cuenta',
                'Derecho de portabilidad de datos',
                'Derecho de oposición al procesamiento',
                'Derecho a retirar consentimiento',
              ].map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
                    <span className="text-xs font-light text-aog-primary">{index + 1}</span>
                  </div>
                  <span className="font-light text-white/80">{right}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Security Section
const SecuritySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const measures = [
    { title: 'Encriptación SSL/TLS', desc: 'Todas las comunicaciones están cifradas' },
    { title: 'Firewalls avanzados', desc: 'Protección contra accesos no autorizados' },
    { title: 'Backups regulares', desc: 'Respaldos diarios de información' },
    { title: 'Acceso restringido', desc: 'Solo personal autorizado' },
    { title: 'Monitoreo 24/7', desc: 'Vigilancia continua de seguridad' },
    { title: 'Auditorías periódicas', desc: 'Revisiones por expertos externos' },
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
              <Lock className="h-5 w-5 text-aog-primary" />
            </div>
            <h2 className="text-3xl font-light tracking-tight text-black md:text-4xl">
              Seguridad de Datos
            </h2>
          </div>
          <p className="max-w-3xl text-base font-light leading-relaxed text-black/60">
            Implementamos medidas técnicas y organizativas para proteger tu información.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {measures.map((measure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-black/5 bg-white p-6"
            >
              <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-aog-primary/5 to-transparent transition-transform duration-500 group-hover:translate-y-0" />

              <div className="relative">
                <h3 className="mb-2 font-light text-black">{measure.title}</h3>
                <p className="text-sm font-light text-black/50">{measure.desc}</p>
              </div>

              <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact CTA Section
const ContactCTASection = () => {
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
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center border border-aog-primary/30 bg-aog-primary/10">
              <Mail className="h-8 w-8 text-aog-primary" />
            </div>

            <h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl">
              ¿Preguntas sobre tu Privacidad?
            </h2>

            <p className="mb-12 text-base font-light leading-relaxed text-white/60 md:text-lg">
              Para ejercer tus derechos o resolver dudas sobre cómo manejamos tu información, contáctanos.
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
              className="group relative overflow-hidden border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-aog-primary/50"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              <Mail className="relative mx-auto mb-3 h-6 w-6 text-aog-primary" />
              <p className="relative text-sm font-light text-white">
                {CONTACT_INFO.email.general}
              </p>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone.primary}`}
              className="group relative overflow-hidden border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-aog-primary/50"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              <Phone className="relative mx-auto mb-3 h-6 w-6 text-aog-primary" />
              <p className="relative text-sm font-light text-white">
                {CONTACT_INFO.phone.primary}
              </p>
            </a>

            <div className="relative overflow-hidden border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <MapPin className="mx-auto mb-3 h-6 w-6 text-aog-primary" />
              <p className="text-sm font-light text-white">
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
              className="group relative inline-flex items-center gap-2 overflow-hidden border border-aog-primary/30 bg-aog-primary/10 px-8 py-4 text-sm font-light uppercase tracking-[0.2em] text-white transition-all hover:border-aog-primary/50"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/20 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              <span className="relative">Contáctanos</span>
              <ChevronRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />

              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-aog-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-aog-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Corner accents */}
      <CornerAccents variant="dark" />
    </section>
  )
}

// Main Component
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SummarySection />
      <InfoCollectionSection />
      <DataUsageSection />
      <DataSharingSection />
      <SecuritySection />
      <ContactCTASection />
    </main>
  )
}
