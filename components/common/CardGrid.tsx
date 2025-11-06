import React, { ReactNode } from 'react'

export interface CardGridProps {
  /**
   * Grid items to display
   */
  children: ReactNode

  /**
   * Number of columns at different breakpoints
   * @default { sm: 1, md: 2, lg: 3 }
   */
  columns?: {
    sm?: 1 | 2
    md?: 2 | 3
    lg?: 2 | 3 | 4
  }

  /**
   * Gap between cards
   * @default 6
   */
  gap?: 4 | 6 | 8

  /**
   * Optional section title
   */
  title?: string

  /**
   * Optional section description
   */
  description?: string

  /**
   * Title alignment
   * @default 'center'
   */
  titleAlign?: 'left' | 'center'
}

/**
 * CardGrid Component
 *
 * Reusable grid container for displaying cards in a responsive layout.
 * Provides consistent spacing and responsive behavior.
 *
 * @example
 * ```tsx
 * <CardGrid
 *   title="Nuestros Servicios"
 *   description="Soluciones integrales para la industria petrolera"
 *   columns={{ md: 2, lg: 3 }}
 * >
 *   <FeatureCard {...service1} />
 *   <FeatureCard {...service2} />
 *   <FeatureCard {...service3} />
 * </CardGrid>
 * ```
 */
export default function CardGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 6,
  title,
  description,
  titleAlign = 'center',
}: CardGridProps): React.ReactElement {
  const columnClasses = {
    sm: columns.sm === 2 ? 'sm:grid-cols-2' : '',
    md: columns.md === 2 ? 'md:grid-cols-2' : columns.md === 3 ? 'md:grid-cols-3' : '',
    lg:
      columns.lg === 2
        ? 'lg:grid-cols-2'
        : columns.lg === 3
          ? 'lg:grid-cols-3'
          : columns.lg === 4
            ? 'lg:grid-cols-4'
            : '',
  }

  const gapClass = `gap-${gap}`

  return (
    <section className="w-full py-16 md:py-24">
      {/* Section Header */}
      {(title || description) && (
        <div
          className={`mb-12 ${titleAlign === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'}`}
        >
          {title && (
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-header-text md:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-header-text-secondary">{description}</p>
          )}
        </div>
      )}

      {/* Grid */}
      <div
        className={`grid ${columnClasses.sm} ${columnClasses.md} ${columnClasses.lg} ${gapClass}`}
      >
        {children}
      </div>
    </section>
  )
}
