'use client'

import React from 'react'
import Link from 'next/link'
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight
} from 'lucide-react'

/**
 * Footer Component
 *
 * Professional footer with company information, navigation, contact details,
 * and certifications. Uses turquoise brand colors.
 */

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Servicios',
    links: [
      { label: 'Inspección Industrial', href: '/services/inspection' },
      { label: 'Certificación de Equipos', href: '/services/certification' },
      { label: 'Capacitación', href: '/services/training' },
      { label: 'Consultoría', href: '/services/consulting' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Acerca de Nosotros', href: '/about' },
      { label: 'Misión y Visión', href: '/about#mission' },
      { label: 'Certificaciones', href: '/about#certifications' },
      { label: 'Proyectos', href: '/projects' },
      { label: 'Carreras', href: '/careers' }
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentación', href: '/docs' },
      { label: 'Preguntas Frecuentes', href: '/faq' },
      { label: 'Casos de Éxito', href: '/case-studies' }
    ]
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Contacto', href: '/contact' },
      { label: 'Solicitar Cotización', href: '/get-quote' },
      { label: 'Agendar Servicio', href: '/schedule' },
      { label: 'Portal de Clientes', href: '/portal' }
    ]
  }
]

const certifications = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'ISO 45001:2018',
  'STPS',
  'ASNT',
  'API'
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' }
]

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Company Info Column */}
          <div>
            <Link href="/" className="mb-6 inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-header-accent">
                <Shield size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">OTC Petroleum</span>
            </Link>

            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Líder en inspección, certificación y capacitación para la industria petrolera,
              construcción e industrial. Más de 15 años de experiencia respaldados por
              certificaciones internacionales.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+529381234567"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-header-accent"
              >
                <Phone size={18} className="shrink-0" />
                <span>+52 (938) 123-4567</span>
              </a>
              <a
                href="mailto:contacto@otcpetroleum.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-header-accent"
              >
                <Mail size={18} className="shrink-0" />
                <span>contacto@otcpetroleum.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>Av. Industria Petrolera #123<br />Ciudad del Carmen, Campeche</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Clock size={18} className="shrink-0" />
                <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-header-accent hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-gray-400 transition-colors hover:text-header-accent"
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        size={14}
                        className="ml-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Badge Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">
                Certificaciones y Acreditaciones
              </h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-300"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Signup (Optional) */}
            <div className="w-full md:w-auto">
              <Link
                href="/get-quote"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-header-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-header-accent-dark md:w-auto"
              >
                Solicitar Cotización
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
            <div className="text-center md:text-left">
              © {currentYear} OTC Petroleum. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="transition-colors hover:text-header-accent">
                Privacidad
              </Link>
              <Link href="/terms" className="transition-colors hover:text-header-accent">
                Términos
              </Link>
              <Link href="/cookies" className="transition-colors hover:text-header-accent">
                Cookies
              </Link>
              <Link href="/legal" className="transition-colors hover:text-header-accent">
                Avisos Legales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
