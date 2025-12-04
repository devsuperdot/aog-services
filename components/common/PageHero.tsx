import React, { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

export interface PageHeroProps {
  /**
   * Main title - can include text with gradient styling
   */
  title: string | ReactNode

  /**
   * Optional subtitle/description
   */
  description?: string

  /**
   * Optional badge configuration
   */
  badge?: {
    icon: LucideIcon
    text: string
  }

  /**
   * Primary CTA button
   */
  primaryAction?: {
    label: string
    href: string
  }

  /**
   * Secondary CTA button
   */
  secondaryAction?: {
    label: string
    href: string
  }

  /**
   * Layout variant
   * @default 'centered'
   */
  variant?: 'centered' | 'left'

  /**
   * Size variant
   * @default 'default'
   */
  size?: 'default' | 'large' | 'compact'

  /**
   * Optional custom children (replaces actions)
   */
  children?: ReactNode
}

/**
 * PageHero Component
 *
 * Reusable hero section with consistent styling across all pages.
 * Reduces 1000+ lines of duplicated code.
 *
 * @example
 * ```tsx
 * <PageHero
 *   title="Misión y Visión"
 *   description="Nuestro propósito y objetivos como organización"
 *   badge={{ icon: Target, text: 'Sobre Nosotros' }}
 *   primaryAction={{ label: 'Contactar', href: '/contact' }}
 * />
 * ```
 */
export default function PageHero({
  title,
  description,
  badge,
  primaryAction,
  secondaryAction,
  variant = 'centered',
  size = 'default',
  children,
}: PageHeroProps): React.ReactElement {
  const sizeClasses = {
    compact: 'py-12 md:py-16',
    default: 'py-16 md:py-24',
    large: 'py-24 md:py-32 lg:py-40',
  }

  const titleSizeClasses = {
    compact: 'text-3xl md:text-4xl lg:text-5xl',
    default: 'text-4xl md:text-5xl lg:text-6xl',
    large: 'text-5xl md:text-6xl lg:text-7xl',
  }

  const descriptionSizeClasses = {
    compact: 'text-base md:text-lg',
    default: 'text-lg md:text-xl',
    large: 'text-xl md:text-2xl',
  }

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Turquoise accent gradient */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-gradient-to-br from-header-accent/5 to-transparent blur-3xl" />

      <div
        className={`relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16 ${sizeClasses[size]}`}
      >
        <div className={variant === 'centered' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'}>
          {/* Badge */}
          {badge && (
            <div className={`mb-6 inline-flex items-center gap-2 rounded-full border border-header-accent/20 bg-header-accent/5 px-4 py-1.5 text-sm font-medium text-header-accent ${variant === 'left' ? '' : ''}`}>
              <badge.icon size={14} />
              <span>{badge.text}</span>
            </div>
          )}

          {/* Title */}
          <h1
            className={`mb-6 font-bold leading-[1.1] tracking-tight text-header-text ${titleSizeClasses[size]}`}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              className={`mb-8 leading-relaxed text-header-text-secondary ${descriptionSizeClasses[size]} ${variant === 'centered' ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}
            >
              {description}
            </p>
          )}

          {/* Actions */}
          {!children && (primaryAction || secondaryAction) && (
            <div className={`flex flex-col gap-4 sm:flex-row ${variant === 'centered' ? 'justify-center' : ''}`}>
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-header-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-header-accent-dark hover:shadow-lg hover:shadow-header-accent/25"
                >
                  {primaryAction.label}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          )}

          {/* Custom children */}
          {children}
        </div>
      </div>
    </section>
  )
}
