'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Compass, Map, Search, Database, ArrowRight, CheckCircle2 } from 'lucide-react'
import { TypeWriter, CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'
import ImageWithPlaceholder from '@/components/aog/ImageWithPlaceholder'
import { MinimalGridLinesDark as MinimalGridDark, MinimalGridLinesLight as MinimalGridLight } from '@/components/aog/GridBackgrounds'

const TechBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/25 blur-3xl"
      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
  </div>
)

const HeroSection = () => (
  <section className="relative min-h-[90vh] overflow-hidden bg-black pt-16">
    <TechBackground /><MinimalGridDark />
    <div className="relative z-10 flex min-h-[90vh] items-center px-4 py-20 sm:px-6 md:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <Link href="/solutions" className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/5">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" /><span>Volver a soluciones</span>
          </Link>
          <h1 className="mb-8 overflow-hidden text-[clamp(2rem,8vw,7rem)] font-extralight leading-[0.95] tracking-tight text-white">
            <TypeWriter text="Exploración" delay={0.5} speed={0.12} /><br />
            <span className="text-aog-primary"><TypeWriter text="Petrolera" delay={1.3} speed={0.12} /></span>
          </h1>
          <div className="mb-8 h-px w-24 bg-aog-primary" />
          <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
            Soluciones integrales para maximizar el éxito en actividades de exploración petrolera con equipos especializados
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <TechButton href="/contact" variant="primary" size="lg">Solicitar información</TechButton>
            <TechButtonDiagonal href="/services">Ver servicios</TechButtonDiagonal>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default function ExplorationPage() {
  return <main className="bg-white"><HeroSection /></main>
}
