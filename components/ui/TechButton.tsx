'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface TechButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: 'arrow' | 'chevron' | 'none' | LucideIcon
  className?: string
}

export const TechButton = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  className = '',
}: TechButtonProps) => {
  const baseClasses = 'group relative inline-flex items-center justify-center overflow-hidden font-light uppercase tracking-[0.2em] transition-all duration-300 active:scale-95'

  const variantClasses = {
    primary: 'bg-aog-primary text-white hover:bg-aog-primary/90 active:bg-aog-primary',
    secondary: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200',
    outline: 'border-2 border-aog-primary bg-transparent text-aog-primary hover:bg-aog-primary hover:text-white active:bg-aog-primary/90',
  }

  const sizeClasses = {
    sm: 'px-4 py-2.5 text-[10px] sm:px-4 sm:py-2',
    md: 'px-5 py-3 text-xs sm:px-6',
    lg: 'px-6 py-3.5 text-sm sm:px-8 sm:py-4',
  }

  const IconComponent = icon === 'arrow' ? ArrowRight : icon === 'chevron' ? ChevronRight : null

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {/* Tech corner accents - adjusted for better visibility */}
      <div className={`absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${variant === 'outline' ? 'border-aog-primary' : 'border-white'}`} />
      <div className={`absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${variant === 'outline' ? 'border-aog-primary' : 'border-white'}`} />

      {/* Sliding background effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/10 to-transparent"
        whileHover={{ translateX: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {IconComponent && (
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <IconComponent className="h-4 w-4" strokeWidth={2} />
          </motion.div>
        )}
      </span>

      {/* Tech scan line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        animate={{
          opacity: [0, 1, 0],
          x: [-100, 100],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </Link>
  )
}

// Variante con flecha diagonal original
export const TechButtonDiagonal = ({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden border-2 border-aog-primary bg-aog-primary px-5 py-3 font-light uppercase tracking-[0.2em] text-white transition-all hover:border-aog-primary/80 hover:bg-aog-primary/90 active:scale-95 sm:gap-3 sm:px-6 ${className}`}
    >
      {/* Corner cuts */}
      <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-white/50 group-hover:border-white" />
      <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-white/50 group-hover:border-white" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 text-[10px] sm:text-xs">
        {children}
      </span>

      {/* Flecha diagonal tech */}
      <div className="relative z-10 flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
        {/* Círculo exterior */}
        <motion.div
          className="absolute inset-0 rounded-full border border-aog-primary/30"
          whileHover={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        {/* Flecha */}
        <motion.div
          className="flex items-center justify-center"
          animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-aog-primary"
          >
            <path
              d="M4 12L12 4M12 4H6M12 4V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </motion.div>
      </div>

      {/* Efecto de slide al hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-aog-primary/0 via-aog-primary/10 to-aog-primary/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </Link>
  )
}
