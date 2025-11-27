'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Factory, ArrowRight } from 'lucide-react'
import { TypeWriter } from '@/components/animations/TypeWriter'
import { TechButton, TechButtonDiagonal } from '@/components/ui/TechButton'
import { MinimalGridLinesDark as MinimalGridDark } from '@/components/aog/GridBackgrounds'

const HeroSection = () => (
  <section className="relative min-h-[90vh] overflow-hidden bg-black pt-16">
    <MinimalGridDark />
    <div className="relative z-10 flex min-h-[90vh] items-center px-4 py-20 sm:px-6 md:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <Link href="/solutions" className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/5">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" /><span>Volver a soluciones</span>
          </Link>
          <h1 className="mb-8 text-[clamp(2rem,8vw,7rem)] font-extralight leading-[0.95] tracking-tight text-white">
            <TypeWriter text="Refinación" delay={0.5} speed={0.12} /><br />
            <span className="text-aog-primary"><TypeWriter text="Eficiente" delay={1.3} speed={0.12} /></span>
          </h1>
          <div className="mb-8 h-px w-24 bg-aog-primary" />
          <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
            Servicios especializados para procesos de refinación con mantenimiento industrial integral
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

export default function RefiningPage() {
  return <main className="bg-white"><HeroSection /></main>
}
