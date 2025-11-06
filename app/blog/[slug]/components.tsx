'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus, ArrowRight } from 'lucide-react'
import { MinimalGridLight, MinimalGridDark } from '@/components/aog/GridBackgrounds'
import { TechButton } from '@/components/ui/TechButton'
import { BLOG_ICONS, type BlogPost } from '@/constants/blog'

// Article Hero Section
export const ArticleHeroClient = ({ post }: { post: BlogPost }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const Icon = BLOG_ICONS[post.iconName]

  return (
    <section ref={ref} className="relative min-h-[60vh] overflow-hidden bg-black pt-32">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[900px] px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Back button */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-light uppercase tracking-wider text-white/60 transition-colors hover:text-aog-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al blog</span>
          </Link>

          {/* Category badge */}
          <div className="mb-6 inline-flex items-center gap-2 border border-aog-primary/30 bg-aog-primary/10 px-4 py-2">
            <Icon className="h-4 w-4 text-aog-primary" />
            <span className="text-xs font-light uppercase tracking-[0.2em] text-white/80">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-[clamp(2rem,6vw,4rem)] font-light leading-[1.1] tracking-tight text-white">
            {post.title}
          </h1>

          <div className="mb-8 h-px w-24 bg-aog-primary" />

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-light text-white/60">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.date).toLocaleDateString('es-MX', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            <button className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-sm font-light text-white/80 backdrop-blur-sm transition-all hover:border-aog-primary/50 hover:text-white">
              <Share2 className="h-4 w-4" />
              <span>Compartir</span>
            </button>
            <button className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-sm font-light text-white/80 backdrop-blur-sm transition-all hover:border-aog-primary/50 hover:text-white">
              <BookmarkPlus className="h-4 w-4" />
              <span>Guardar</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Article Content
export const ArticleContentClient = ({ post }: { post: BlogPost }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-20">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[800px] px-4 sm:px-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="prose prose-lg max-w-none"
        >
          {/* Custom styles for markdown content */}
          <div
            className="
              [&>h1]:mb-6 [&>h1]:mt-12 [&>h1]:text-4xl [&>h1]:font-light [&>h1]:tracking-tight [&>h1]:text-black
              [&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:text-3xl [&>h2]:font-light [&>h2]:tracking-tight [&>h2]:text-black
              [&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:text-2xl [&>h3]:font-light [&>h3]:tracking-tight [&>h3]:text-black
              [&>p]:mb-6 [&>p]:font-light [&>p]:leading-relaxed [&>p]:text-black/80
              [&>ul]:mb-6 [&>ul]:space-y-2 [&>ul]:font-light [&>ul]:text-black/70
              [&>ul>li]:relative [&>ul>li]:pl-6
              [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-[0.6em] [&>ul>li]:before:h-1.5 [&>ul>li]:before:w-1.5 [&>ul>li]:before:bg-aog-primary
              [&>ol]:mb-6 [&>ol]:space-y-2 [&>ol]:font-light [&>ol]:text-black/70
              [&>blockquote]:border-l-4 [&>blockquote]:border-aog-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-black/60
            "
            dangerouslySetInnerHTML={{
              __html: post.content
                .split('\n')
                .map((line: string) => {
                  // Convert markdown-style headers
                  if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`
                  if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`
                  if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`
                  // Convert list items
                  if (line.startsWith('- ')) return `<ul><li>${line.slice(2)}</li></ul>`
                  // Regular paragraphs
                  if (line.trim()) return `<p>${line}</p>`
                  return ''
                })
                .join(''),
            }}
          />
        </motion.article>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 border-l-2 border-aog-primary bg-gradient-to-r from-aog-primary/5 to-transparent p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-aog-primary/30 bg-aog-primary/10">
              <User className="h-8 w-8 text-aog-primary" />
            </div>
            <div>
              <div className="mb-1 text-xl font-light text-black">{post.author.name}</div>
              <div className="mb-3 text-sm font-light text-aog-primary">{post.author.role}</div>
              <p className="text-sm font-light leading-relaxed text-black/60">
                Experto en la industria petrolera con años de experiencia en operaciones técnicas y gestión de proyectos en AOG Services.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Related Posts Section
export const RelatedPostsClient = ({ relatedPosts }: { relatedPosts: BlogPost[] }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  if (relatedPosts.length === 0) return null

  return (
    <section ref={ref} className="relative bg-white py-20">
      <MinimalGridLight />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-aog-primary">
            Artículos Relacionados
          </div>
          <h2 className="text-3xl font-light tracking-tight text-black">
            Continúa Leyendo
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {relatedPosts.map((post, idx) => {
            const Icon = BLOG_ICONS[post.iconName]
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative overflow-hidden border border-black/5 bg-white p-6 transition-all hover:border-aog-primary/30 hover:shadow-xl">
                    {/* Icon */}
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-aog-primary/30 bg-aog-primary/5">
                      <Icon className="h-6 w-6 text-aog-primary" />
                    </div>

                    {/* Category */}
                    <div className="mb-2 text-xs font-light uppercase tracking-wider text-aog-primary">
                      {post.category}
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-lg font-light leading-tight text-black transition-colors group-hover:text-aog-primary">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mb-4 line-clamp-2 text-sm font-light text-black/60">
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="flex items-center gap-2 text-sm font-light uppercase tracking-wider text-aog-primary">
                      <span>Leer más</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>

                    {/* Corner accent */}
                    <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-aog-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// CTA Section
export const CTASectionClient = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative bg-black py-20">
      <MinimalGridDark />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
            ¿Necesitas Soluciones Especializadas?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-white/60">
            Contáctanos para discutir cómo podemos optimizar tus operaciones petroleras
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TechButton href="/contact" variant="primary" size="lg">
              Solicitar contacto
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
