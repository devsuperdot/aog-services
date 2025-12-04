'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import MegaMenu from './MegaMenu'
import { MEGA_MENU_CONFIG, type MegaMenuKey } from '@/constants/megamenu'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/services', hasMegaMenu: true, megaMenuKey: 'servicios' as MegaMenuKey },
  { name: 'Blog', href: '/blog' },
  { name: 'Nosotros', href: '/about', hasMegaMenu: true, megaMenuKey: 'nosotros' as MegaMenuKey },
  { name: 'Careers', href: '/careers' },
]

export default function AOGHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuKey | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (megaMenuKey?: MegaMenuKey) => {
    if (megaMenuKey) {
      setActiveMegaMenu(megaMenuKey)
    }
  }

  const handleMouseLeave = () => {
    setActiveMegaMenu(null)
  }

  const closeMegaMenu = () => {
    setActiveMegaMenu(null)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-black/90 backdrop-blur-xl'
          : 'border-b border-white/5 bg-black/50 backdrop-blur-md'
      }`}
    >
      {/* Animated Tech Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-aog-primary/20 via-transparent to-transparent"
            animate={{
              x: [0, 100, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -right-1/4 top-0 h-full w-1/2 bg-gradient-to-l from-aog-primary/20 via-transparent to-transparent"
            animate={{
              x: [0, -100, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const seed = (i + 1) * 7.3 // Deterministic seed
          const xPos = ((seed * 13) % 100)
          const opacity = 0.3 + ((seed * 5) % 5) * 0.1
          const duration = 2 + ((seed * 3) % 3)
          const delay = (seed * 7) % 5

          return (
            <motion.div
              key={i}
              className="absolute h-px w-px rounded-full bg-white"
              initial={{
                x: `${xPos}%`,
                y: '0%',
                opacity: 0,
              }}
              animate={{
                y: ['0%', '100%'],
                opacity: [0, opacity, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: 'linear',
              }}
            />
          )
        })}

        {/* Horizontal scan line */}
        <motion.div
          className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-aog-primary/50 to-transparent"
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <Link href="/" className="group relative z-50">
          <div className="relative h-11 w-11 sm:h-12 sm:w-12">
            {/* Glow effect on hover */}
            <div className="absolute -inset-2 bg-aog-primary/20 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
            {/* Logo Image - Square Isotype (White with transparency) */}
            <div className="relative h-full w-full">
              <Image
                src="/images/aog/aog-logo3.png"
                alt="AOG Services"
                width={48}
                height={48}
                className="h-full w-full object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.6)]"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex" onMouseLeave={handleMouseLeave}>
          {navigation.map((item) => (
            <div
              key={item.name}
              onMouseEnter={() => handleMouseEnter(item.megaMenuKey)}
            >
              <Link
                href={item.href}
                className={`group relative flex items-center gap-1 px-4 py-2 text-xs font-light uppercase tracking-[0.2em] transition-colors ${
                  pathname === item.href ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.name}
                {item.hasMegaMenu && (
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${
                      activeMegaMenu === item.megaMenuKey ? 'rotate-180' : ''
                    }`}
                  />
                )}
                {/* Active indicator */}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-px bg-aog-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-white/20 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          ))}
        </div>

        {/* Mega Menus - Rendered outside navigation items */}
        {navigation.map((item) => (
          item.hasMegaMenu && item.megaMenuKey && (
            <MegaMenu
              key={item.megaMenuKey}
              section={MEGA_MENU_CONFIG[item.megaMenuKey]}
              isOpen={activeMegaMenu === item.megaMenuKey}
              onClose={closeMegaMenu}
              onMouseEnter={() => handleMouseEnter(item.megaMenuKey)}
              onMouseLeave={handleMouseLeave}
            />
          )
        ))}

        {/* CTA Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="group relative overflow-hidden border border-white/10 px-6 py-2.5 text-xs font-light uppercase tracking-[0.2em] text-white transition-all hover:border-aog-primary/50"
          >
            {/* Background hover effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-aog-primary/5 transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative">Contactar</span>
            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-aog-primary opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-aog-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="group relative z-50 flex h-10 w-10 items-center justify-center overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-aog-primary/50 active:scale-95 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-4 w-4 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-4 w-4 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="max-h-[calc(100vh-80px)] space-y-1 overflow-y-auto px-4 py-6 sm:px-6">
              {navigation.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`group relative block overflow-hidden border-l-2 px-4 py-4 text-sm font-light uppercase tracking-[0.2em] transition-all active:scale-[0.98] ${
                      pathname === item.href
                        ? 'border-aog-primary bg-white/5 text-white'
                        : 'border-transparent text-white/60 hover:border-white/20 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative">{item.name}</span>
                    {/* Hover slide effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/5 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="group relative block overflow-hidden border border-aog-primary/30 bg-gradient-to-r from-aog-primary/10 to-transparent px-4 py-4 text-center text-sm font-light uppercase tracking-[0.2em] text-white transition-all hover:border-aog-primary/50 active:scale-[0.98]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative">Contactar ahora</span>
                  {/* Corner accents */}
                  <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-aog-primary" />
                  <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-aog-primary" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
