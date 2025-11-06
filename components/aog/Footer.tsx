'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter, Youtube, ChevronRight } from 'lucide-react'
import { CONTACT_INFO } from '@/constants'

const services = [
  { name: 'Control de Sólidos', href: '/services/control-solidos' },
  { name: 'Equipos Periféricos', href: '/services/equipos-perifericos' },
  { name: 'Herramientas de Molienda', href: '/services/herramientas-molienda' },
  { name: 'Mantenimiento Industrial', href: '/services/mantenimiento-industrial' },
  { name: 'Servicios Técnicos', href: '/services/servicios-tecnicos' },
  { name: 'Energía e Iluminación', href: '/services/energia-iluminacion' },
]

const company = [
  { name: 'Nosotros', href: '/about' },
  { name: 'Misión y Visión', href: '/about/mission-vision' },
  { name: 'Valores', href: '/about#values' },
  { name: 'Contacto', href: '/contact' },
]

const legal = [
  { name: 'Términos y Condiciones', href: '/terms' },
  { name: 'Política de Privacidad', href: '/privacy' },
  { name: 'Aviso Legal', href: '/legal-notices' },
]

export default function AOGFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      {/* Gradient accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-aog-primary/50 to-transparent" />

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            {/* Logos Container */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              {/* AOG Logo */}
              <Link href="/" className="group inline-block">
                <div className="relative h-14 w-14">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-2 bg-aog-primary/20 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
                  {/* Logo Image - Square Isotype (White with transparency) */}
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/aog/aog-logo3.png"
                      alt="AOG Services"
                      width={56}
                      height={56}
                      className="h-full w-full object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.6)]"
                    />
                  </div>
                </div>
              </Link>

              {/* Divider Line */}
              <div className="relative hidden sm:block">
                <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute inset-0 h-16 w-px bg-gradient-to-b from-transparent via-aog-primary/30 to-transparent blur-sm" />
              </div>

              {/* Alze Group Logo */}
              <a
                href="https://alzegroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <div className="relative h-14 w-auto">
                  <div className="absolute -inset-2 bg-white/10 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
                  <div className="relative flex h-full items-center">
                    <Image
                      src="/images/aog/alze-group-logo.png"
                      alt="Alze Group"
                      width={120}
                      height={56}
                      className="h-full w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs font-light text-white/30 transition-colors group-hover:text-white/50">
                  Parte de Alze Group
                </p>
              </a>
            </div>

            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-white/50">
              {CONTACT_INFO.company.tagline}
            </p>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-aog-primary/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="relative z-10 h-4 w-4 text-white/60 transition-colors group-hover:text-aog-primary" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              </a>
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-aog-primary/50"
                aria-label="Facebook"
              >
                <Facebook className="relative z-10 h-4 w-4 text-white/60 transition-colors group-hover:text-aog-primary" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              </a>
              <a
                href="https://instagram.com/aogservices"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-aog-primary/50"
                aria-label="Instagram"
              >
                <Instagram className="relative z-10 h-4 w-4 text-white/60 transition-colors group-hover:text-aog-primary" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              </a>
              <a
                href="https://twitter.com/aogservices"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-aog-primary/50"
                aria-label="Twitter"
              >
                <Twitter className="relative z-10 h-4 w-4 text-white/60 transition-colors group-hover:text-aog-primary" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              </a>
              <a
                href="https://youtube.com/@aogservices"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-aog-primary/50"
                aria-label="YouTube"
              >
                <Youtube className="relative z-10 h-4 w-4 text-white/60 transition-colors group-hover:text-aog-primary" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-white/70 sm:mb-6">
              Servicios
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 py-1 text-sm font-light text-white/50 transition-colors active:text-white hover:text-white"
                  >
                    <ChevronRight className="h-3 w-3 flex-shrink-0 text-aog-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    <span className="transition-all group-hover:translate-x-1">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-white/70 sm:mb-6">
              Empresa
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 py-1 text-sm font-light text-white/50 transition-colors active:text-white hover:text-white"
                  >
                    <ChevronRight className="h-3 w-3 flex-shrink-0 text-aog-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    <span className="transition-all group-hover:translate-x-1">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-white/70 sm:mb-6">
              Contacto
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="group">
                <a
                  href={`tel:${CONTACT_INFO.phone.primary}`}
                  className="flex items-start gap-3 text-sm active:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-aog-primary" />
                  <div>
                    <div className="mb-1 text-[10px] font-light uppercase tracking-wider text-white/40">
                      Principal
                    </div>
                    <div className="font-light text-white/50 transition-colors group-hover:text-white">
                      {CONTACT_INFO.phone.primary}
                    </div>
                  </div>
                </a>
              </li>
              <li className="group">
                <a
                  href={`mailto:${CONTACT_INFO.email.general}`}
                  className="flex items-start gap-3 text-sm active:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-aog-primary" />
                  <div className="break-all font-light text-white/50 transition-colors group-hover:text-white">
                    {CONTACT_INFO.email.general}
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-aog-primary" />
                <div className="font-light leading-relaxed text-white/50">{CONTACT_INFO.address.full}</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-12 border-t border-white/5 pt-6 sm:mt-16 sm:pt-8 md:mt-20">
          {/* Top gradient line - positioned at the top of the border */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-aog-primary/30 to-transparent" />

          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs font-light leading-relaxed text-white/40">
              © {new Date().getFullYear()} {CONTACT_INFO.company.fullName}. Todos los derechos
              reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-light text-white/40 transition-colors active:text-white hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
