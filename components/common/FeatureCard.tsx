import React, { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

export interface FeatureCardProps {
  /**
   * Icon component
   */
  icon: LucideIcon

  /**
   * Card title
   */
  title: string

  /**
   * Card description
   */
  description: string

  /**
   * Link destination
   */
  href: string

  /**
   * Optional features list
   */
  features?: string[]

  /**
   * Optional CTA text (defaults to "Más información")
   */
  ctaText?: string

  /**
   * Size variant
   * @default 'default'
   */
  size?: 'default' | 'large'

  /**
   * Optional custom children
   */
  children?: ReactNode
}

/**
 * FeatureCard Component
 *
 * Reusable card component for services, solutions, and feature displays.
 * Provides consistent hover effects and styling.
 *
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={Shield}
 *   title="Inspección Visual"
 *   description="Inspección directa, remota y videoscopia"
 *   href="/services/visual-inspection"
 *   features={['Directa', 'Remota', 'Videoscopia']}
 * />
 * ```
 */
export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  features,
  ctaText = 'Más información',
  size = 'default',
  children,
}: FeatureCardProps): React.ReactElement {
  const iconSizeClasses = {
    default: 'h-12 w-12',
    large: 'h-16 w-16',
  }

  const iconContentSizeClasses = {
    default: 'size-6',
    large: 'size-8',
  }

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-header-border bg-white p-8 transition-all duration-300 hover:border-header-accent hover:shadow-xl"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-header-accent/10 to-transparent blur-2xl transition-all group-hover:from-header-accent/20" />

      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div
          className={`mb-6 flex ${iconSizeClasses[size]} items-center justify-center rounded-xl bg-header-accent/10 transition-all group-hover:bg-header-accent/15`}
        >
          <Icon className={`${iconContentSizeClasses[size]} text-header-accent`} />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-header-text">{title}</h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-header-text-secondary">
          {description}
        </p>

        {/* Features list */}
        {features && features.length > 0 && (
          <ul className="mb-4 space-y-2 border-t border-gray-100 pt-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-header-accent" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Custom children */}
        {children}

        {/* CTA */}
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-header-accent transition-all group-hover:gap-3">
          <span>{ctaText}</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
