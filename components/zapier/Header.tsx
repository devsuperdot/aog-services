'use client'

import {
  ChevronDown,
  Grid3x3,
  Menu,
  X,
  Zap,
  Workflow,
  Building2,
  Sparkles,
  Code,
  Database,
  Shield,
  Users,
  TrendingUp,
  BookOpen,
  Headphones,
  GraduationCap,
  FileText,
  ArrowRight,
  Wand2,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'

/**
 * Header Component
 *
 * Main navigation header for the application.
 * Features:
 * - Responsive design with mobile menu
 * - Mega menu dropdowns with rich content
 * - Desktop and mobile navigation
 * - Authentication buttons (Log in, Sign up)
 * - Accessible navigation
 * - Active route highlighting
 * - Smooth animations with framer-motion style
 * - Click outside and ESC key to close mobile menu
 */

interface NavLink {
  label: string
  href: string
  hasDropdown?: boolean
  icon?: LucideIcon
}

interface MegaMenuItem {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

interface MegaMenuSection {
  title: string
  items: MegaMenuItem[]
}

const mainNavLinks: NavLink[] = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Solutions', href: '/solutions', hasDropdown: true },
  { label: 'About', href: '/about', hasDropdown: true },
  { label: 'Projects', href: '/projects', hasDropdown: false },
  { label: 'Careers', href: '/careers', hasDropdown: false },
]

const secondaryNavLinks: NavLink[] = [
  { label: 'Certifications', href: '/certifications', icon: Shield },
  { label: 'Contact Us', href: '/contact' },
]

// Mega Menu Content Definitions
const megaMenuContent: Record<string, MegaMenuSection[]> = {
  Services: [
    {
      title: 'Control y Equipos',
      items: [
        {
          title: 'Control de Sólidos',
          description: 'Sistemas de control y separación de sólidos',
          href: '/services/control-solidos',
          icon: Shield,
        },
        {
          title: 'Equipos Periféricos',
          description: 'Equipos complementarios para operaciones',
          href: '/services/equipos-perifericos',
          icon: Sparkles,
        },
        {
          title: 'Herramientas de Molienda',
          description: 'Herramientas especializadas de molienda',
          href: '/services/herramientas-molienda',
          icon: Database,
        },
      ],
    },
    {
      title: 'Servicios Industriales',
      items: [
        {
          title: 'Mantenimiento Industrial',
          description: 'Mantenimiento preventivo y correctivo',
          href: '/services/mantenimiento-industrial',
          icon: TrendingUp,
        },
        {
          title: 'Servicios Técnicos',
          description: 'Soporte técnico especializado',
          href: '/services/servicios-tecnicos',
          icon: Building2,
        },
        {
          title: 'Energía e Iluminación',
          description: 'Soluciones de energía e iluminación industrial',
          href: '/services/energia-iluminacion',
          icon: Users,
        },
      ],
    },
  ],
  Solutions: [
    {
      title: 'Por Industria',
      items: [
        {
          title: 'Sector Petrolero',
          description: 'Soluciones especializadas para oil & gas',
          href: '/solutions/oil-gas',
          icon: Zap,
        },
        {
          title: 'Construcción',
          description: 'Servicios para la industria de la construcción',
          href: '/solutions/construction',
          icon: Building2,
        },
        {
          title: 'Sector Industrial',
          description: 'Inspecciones y certificaciones industriales',
          href: '/solutions/industrial',
          icon: Workflow,
        },
      ],
    },
    {
      title: 'Capacitación',
      items: [
        {
          title: 'Seguridad Industrial',
          description: 'Cursos de seguridad básica y avanzada',
          href: '/solutions/safety-training',
          icon: Shield,
        },
        {
          title: 'Operación de Equipos',
          description: 'Capacitación para operadores certificados',
          href: '/solutions/equipment-training',
          icon: GraduationCap,
        },
        {
          title: 'Primeros Auxilios',
          description: 'RCP y manejo de emergencias',
          href: '/solutions/first-aid',
          icon: Headphones,
        },
      ],
    },
  ],
  About: [
    {
      title: 'Empresa',
      items: [
        {
          title: 'Misión y Visión',
          description: 'Nuestro propósito y objetivos',
          href: '/about/mission-vision',
          icon: BookOpen,
        },
        {
          title: 'Política de Calidad',
          description: 'Compromiso con la excelencia',
          href: '/about/quality-policy',
          icon: Shield,
        },
        {
          title: 'Ubicaciones',
          description: 'Oficinas y centros de servicio',
          href: '/about/locations',
          icon: Building2,
        },
      ],
    },
    {
      title: 'Compromiso',
      items: [
        {
          title: 'Seguridad y Salud',
          description: 'Cero incidentes, cultura de prevención',
          href: '/about/safety-health',
          icon: Shield,
        },
        {
          title: 'Medio Ambiente',
          description: 'Protección ambiental y sostenibilidad',
          href: '/about/environment',
          icon: Sparkles,
        },
        {
          title: 'Mejora Continua',
          description: 'Perfeccionamiento constante de servicios',
          href: '/about/continuous-improvement',
          icon: TrendingUp,
        },
      ],
    },
  ],
}

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [dropdownPosition, setDropdownPosition] = useState<'left' | 'right'>('left')
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const handleDropdownClick = (label: string, hasDropdown?: boolean) => {
    if (hasDropdown) {
      setActiveDropdown(activeDropdown === label ? null : label)
    }
  }

  const calculateDropdownPosition = (buttonElement: HTMLElement) => {
    const buttonRect = buttonElement.getBoundingClientRect()
    const dropdownWidth = 720
    const viewportWidth = window.innerWidth
    const spaceOnRight = viewportWidth - buttonRect.left
    const spaceOnLeft = buttonRect.right

    // Si hay suficiente espacio a la derecha, alinear a la izquierda
    // Si no, alinear a la derecha
    if (spaceOnRight >= dropdownWidth) {
      setDropdownPosition('left')
    } else if (spaceOnLeft >= dropdownWidth) {
      setDropdownPosition('right')
    } else {
      // Si no cabe en ningún lado, centrar
      setDropdownPosition('left')
    }
  }

  const handleDropdownOpen = (label: string, event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveDropdown(label)
    calculateDropdownPosition(event.currentTarget)
  }

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  // Helper function to check if route is active
  const isActiveRoute = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-header-border bg-header-bg"
      data-testid="header"
    >
      <div className="mx-auto flex w-full items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 md:gap-3" aria-label="AOG Services">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-header-accent md:h-10 md:w-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:h-6 md:w-6">
              <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" fill="white"/>
              <path d="M9 12l2 2 4-4" stroke="#00A99D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold leading-none text-header-accent md:text-lg">AOG</span>
            <span className="text-[10px] font-medium leading-none text-header-text-secondary md:text-xs">Services</span>
          </div>
        </Link>

        {/* Desktop Main Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {mainNavLinks.map((link) => {
            const isActive = activeDropdown === link.label
            const isCurrentRoute = isActiveRoute(link.href)

            if (link.hasDropdown) {
              return (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={(e) => handleDropdownOpen(link.label, e)}
                    onClick={(e) => {
                      handleDropdownClick(link.label, link.hasDropdown)
                      calculateDropdownPosition(e.currentTarget)
                    }}
                    className={`group relative rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-header-hover ${
                      isCurrentRoute || isActive
                        ? 'bg-header-hover text-header-accent'
                        : 'text-header-text'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                      />
                    </span>

                    {/* Animated accent bar */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 animate-[slideRight_0.2s_ease-out] bg-header-accent" />
                    )}
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isActive && megaMenuContent[link.label] && (
                    <div
                      className={`absolute ${dropdownPosition === 'left' ? 'left-0' : 'right-0'} top-full z-50 mt-2 w-[720px] animate-[fadeIn_0.2s_ease-out]`}
                      style={{
                        maxWidth: 'calc(100vw - 2rem)',
                      }}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xl">
                        <div className="grid grid-cols-2 gap-8">
                          {megaMenuContent[link.label].map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                {section.title}
                              </h3>
                              <div className="space-y-1">
                                {section.items.map((item, itemIdx) => {
                                  const Icon = item.icon
                                  return (
                                    <Link
                                      key={itemIdx}
                                      href={item.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="group flex items-start gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-teal-50 hover:to-transparent"
                                    >
                                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 text-header-accent transition-all duration-200 group-hover:scale-110 group-hover:from-header-accent group-hover:to-header-accent-dark group-hover:text-white group-hover:shadow-lg">
                                        <Icon size={20} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="mb-0.5 flex items-center gap-2">
                                          <span className="font-semibold text-gray-900 transition-colors group-hover:text-header-accent">
                                            {item.title}
                                          </span>
                                          <ArrowRight
                                            size={14}
                                            className="shrink-0 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                                          />
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-header-hover ${
                  isCurrentRoute ? 'bg-header-hover text-header-accent' : 'text-header-text'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Spacer para empujar la navegación secundaria a la derecha */}
        <div className="hidden flex-1 lg:block" />

        {/* Desktop Secondary Nav + Auth */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Secondary Nav */}
          <nav className="flex items-center gap-4" aria-label="Secondary navigation">
            {secondaryNavLinks.map((link) => {
              const Icon = link.icon
              const isCurrentRoute = isActiveRoute(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-header-hover ${
                    isCurrentRoute ? 'bg-header-hover text-header-accent' : 'text-header-text'
                  }`}
                >
                  {Icon && <Icon size={18} />}
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/platform/login"
              className="rounded px-3 py-2 text-sm font-medium text-header-text transition-colors hover:bg-header-hover"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/platform/signup"
              className="rounded-full bg-gradient-to-r from-header-accent to-cyan-600 px-4 py-1.5 text-sm font-semibold text-white transition-all hover:shadow-lg"
            >
              Crear Cuenta
            </Link>
            <Link
              href="/get-quote"
              className="group relative overflow-hidden rounded-full border-2 border-header-accent bg-transparent px-4 py-1.5 text-sm font-semibold text-header-accent transition-all hover:bg-header-accent hover:text-white hover:shadow-lg hover:shadow-header-accent/30"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Wand2 size={14} className="animate-pulse" />
                Cotización IA
              </span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
            </Link>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Sign Up Button */}
          <Link
            href="/platform/signup"
            className="rounded-full bg-gradient-to-r from-header-accent to-cyan-600 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:shadow-lg md:px-4 md:py-2 md:text-sm"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center rounded-md p-2 text-header-text transition-colors hover:bg-header-highlight"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-header-border bg-header-bg lg:hidden">
          <nav className="px-4 py-4" aria-label="Mobile navigation">
            {/* Main Nav Links with Mega Menus */}
            <ul className="space-y-1">
              {mainNavLinks.map((link) => {
                const isCurrentRoute = isActiveRoute(link.href)
                const menuContent = megaMenuContent[link.label]
                const isExpanded = mobileDropdown === link.label

                return (
                  <li key={link.href}>
                    {link.hasDropdown && menuContent ? (
                      <div>
                        <button
                          onClick={() => setMobileDropdown(isExpanded ? null : link.label)}
                          className={`flex w-full items-center justify-between rounded px-3 py-2.5 text-left text-base font-medium transition-colors hover:bg-header-highlight ${
                            isCurrentRoute ? 'bg-header-highlight text-header-accent' : 'text-header-text'
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {/* Accordion Content */}
                        {isExpanded && (
                          <div className="mt-2 space-y-4 rounded-lg bg-gray-50 p-4">
                            {menuContent.map((section, sectionIdx) => (
                              <div key={sectionIdx}>
                                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-header-text-secondary">
                                  {section.title}
                                </div>
                                <ul className="space-y-1">
                                  {section.items.map((item, itemIdx) => {
                                    const Icon = item.icon
                                    return (
                                      <li key={itemIdx}>
                                        <Link
                                          href={item.href}
                                          className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-white"
                                          onClick={() => {
                                            setMobileMenuOpen(false)
                                            setMobileDropdown(null)
                                          }}
                                        >
                                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50">
                                            <Icon size={16} className="text-header-accent" />
                                          </div>
                                          <div className="min-w-0 flex-1">
                                            <div className="text-sm font-semibold text-header-text">
                                              {item.title}
                                            </div>
                                            <div className="mt-0.5 text-xs text-header-text-secondary">
                                              {item.description}
                                            </div>
                                          </div>
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block rounded px-3 py-2.5 text-base font-medium transition-colors hover:bg-header-highlight ${
                          isCurrentRoute ? 'bg-header-highlight text-header-accent' : 'text-header-text'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Secondary Nav Links */}
            <ul className="mt-4 space-y-1 border-t border-header-border pt-4">
              {secondaryNavLinks.map((link) => {
                const isCurrentRoute = isActiveRoute(link.href)
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 rounded px-3 py-2.5 text-base font-medium transition-colors hover:bg-header-highlight ${
                        isCurrentRoute ? 'bg-header-highlight text-header-accent' : 'text-header-text'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {Icon && <Icon size={18} />}
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Mobile Auth Buttons */}
            <div className="mt-4 space-y-2.5 border-t border-header-border pt-4">
              <Link
                href="/platform/login"
                className="block rounded border border-header-border px-4 py-3 text-center text-base font-medium text-header-text transition-colors hover:bg-header-highlight active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/platform/signup"
                className="block rounded bg-gradient-to-r from-header-accent to-cyan-600 px-4 py-3 text-center text-base font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Crear Cuenta
              </Link>
              <Link
                href="/get-quote"
                className="group relative block overflow-hidden rounded border-2 border-header-accent bg-transparent px-4 py-3 text-center text-base font-semibold text-header-accent transition-all hover:bg-header-accent hover:text-white active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Wand2 size={18} className="animate-pulse" />
                  Cotización IA
                </span>
                {/* Shimmer effect */}
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
