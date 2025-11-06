'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Search, BookOpen } from 'lucide-react'
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_ICONS, getPostsByCategory } from '@/constants/blog'
import { MinimalGridLight, MinimalGridDark } from '@/components/aog/GridBackgrounds'
import { CodeReveal } from '@/components/animations/TypeWriter'
import { TechButton } from '@/components/ui/TechButton'

// Hero Section
const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-[60vh] overflow-hidden bg-black pt-32">
      <MinimalGridDark />

      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-aog-primary"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [null, `${Math.random() * 100}%`],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-20 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-aog-primary/10 px-4 py-2"
          >
            <BookOpen className="h-4 w-4 text-aog-primary" />
            <span className="text-xs font-light uppercase tracking-[0.2em] text-white/80">
              Blog AOG
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="mb-6 overflow-hidden text-[clamp(2.5rem,8vw,7rem)] font-extralight leading-[0.95] tracking-[-0.02em] text-white">
            {isInView && (
              <>
                <CodeReveal text="Insights de la" delay={0.3} />
                <br />
                <CodeReveal text="Industria Petrolera" delay={0.6} />
              </>
            )}
          </h1>

          <div className="mb-8 h-px w-24 bg-aog-primary" />

          <p className="max-w-2xl text-lg font-light leading-relaxed text-white/60">
            Artículos, análisis y tendencias sobre tecnología, seguridad y operaciones en el sector
            de petróleo y gas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Blog Grid Section
const BlogGridSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = getPostsByCategory(selectedCategory).filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-32">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/40" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-b border-black/20 bg-transparent py-3 pl-12 pr-4 text-black placeholder:text-black/40 focus:border-aog-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`border px-4 py-2 text-sm font-light uppercase tracking-wider transition-all ${
                  selectedCategory === category
                    ? 'border-aog-primary bg-aog-primary/10 text-aog-primary'
                    : 'border-black/10 text-black/60 hover:border-aog-primary/30 hover:text-aog-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, idx) => {
            const Icon = BLOG_ICONS[post.iconName]
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Card */}
                  <div className="relative h-full overflow-hidden border border-black/5 bg-white transition-all duration-500 hover:border-aog-primary/30 hover:shadow-2xl hover:shadow-aog-primary/10">
                    {/* Category Badge */}
                    <div className="absolute right-4 top-4 z-10 flex items-center gap-2 border border-aog-primary/30 bg-aog-primary/10 px-3 py-1 backdrop-blur-sm">
                      <Icon className="h-3 w-3 text-aog-primary" />
                      <span className="text-xs font-light uppercase tracking-wider text-aog-primary">
                        {post.category}
                      </span>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-900 to-black">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-16 w-16 text-aog-primary opacity-30" strokeWidth={1} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="mb-4 flex items-center gap-4 text-xs font-light text-black/40">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString('es-MX', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 text-xl font-light leading-tight text-black transition-colors group-hover:text-aog-primary">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mb-4 line-clamp-3 text-sm font-light leading-relaxed text-black/60">
                        {post.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2 border-t border-black/5 pt-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-aog-primary/30 bg-aog-primary/5">
                          <User className="h-4 w-4 text-aog-primary" />
                        </div>
                        <div className="text-xs font-light">
                          <div className="text-black">{post.author.name}</div>
                          <div className="text-black/40">{post.author.role}</div>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="mt-4 flex items-center gap-2 text-sm font-light uppercase tracking-wider text-aog-primary">
                        <span>Leer más</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-aog-primary to-transparent"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />

                    {/* Corner accents */}
                    <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-aog-primary/0 transition-all duration-500 group-hover:border-aog-primary/50" />
                    <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-aog-primary/0 transition-all duration-500 group-hover:border-aog-primary/50" />
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <BookOpen className="mx-auto mb-4 h-16 w-16 text-black/20" />
            <p className="text-lg font-light text-black/40">
              No se encontraron artículos con estos criterios
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-l-2 border-aog-primary pl-8 md:pl-12"
        >
          <div className="mb-6 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
            ¿Tienes un proyecto?
          </div>

          <h2 className="mb-6 text-[clamp(2rem,5vw,4rem)] font-light leading-[1] text-white">
            Hablemos de tus Necesidades
          </h2>

          <p className="mb-8 max-w-2xl text-base font-light leading-relaxed text-white/60">
            Nuestro equipo de expertos está listo para ayudarte con soluciones personalizadas para tu operación.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <TechButton href="/contact" variant="primary" size="lg">
              Contactar ahora
            </TechButton>
            <TechButton href="/services" variant="outline" size="lg" icon="chevron">
              Ver servicios
            </TechButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Component
export default function BlogPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <BlogGridSection />
      <CTASection />
    </main>
  )
}
