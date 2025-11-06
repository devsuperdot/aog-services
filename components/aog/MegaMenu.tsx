'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { MegaMenuSection } from '@/constants/megamenu'

interface MegaMenuProps {
  section: MegaMenuSection
  isOpen: boolean
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function MegaMenu({ section, isOpen, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[73px] z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Mega Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-black/95 backdrop-blur-xl"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {/* Animated gradient line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-aog-primary/50 to-transparent" />

            <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 md:px-12 lg:px-16">
              <div className="grid gap-8 lg:grid-cols-12">
                {/* Columns */}
                <div className="lg:col-span-9">
                  <div className="grid gap-8 md:grid-cols-3">
                    {section.columns.map((column, colIdx) => (
                      <motion.div
                        key={column.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: colIdx * 0.1 }}
                      >
                        <h3 className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-white/70">
                          {column.title}
                        </h3>
                        <ul className="space-y-3">
                          {column.items.map((item, itemIdx) => {
                            const Icon = item.icon
                            return (
                              <motion.li
                                key={item.title}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: colIdx * 0.1 + itemIdx * 0.05 }}
                              >
                                <Link
                                  href={item.href}
                                  onClick={onClose}
                                  className="group relative block overflow-hidden border-l-2 border-transparent pl-4 transition-all hover:border-aog-primary"
                                >
                                  <div className="flex items-start gap-3">
                                    {Icon && (
                                      <div className="relative mt-0.5">
                                        <div className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/5 transition-all group-hover:border-aog-primary/50 group-hover:bg-aog-primary/10">
                                          <Icon className="h-4 w-4 text-white/60 transition-colors group-hover:text-aog-primary" />
                                        </div>
                                      </div>
                                    )}
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="font-light text-white transition-colors group-hover:text-aog-primary">
                                          {item.title}
                                        </span>
                                        {item.badge && (
                                          <span className="rounded-sm bg-aog-primary/20 px-1.5 py-0.5 text-[10px] font-light uppercase tracking-wider text-aog-primary">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      {item.description && (
                                        <p className="mt-1 text-xs font-light text-white/40 transition-colors group-hover:text-white/60">
                                          {item.description}
                                        </p>
                                      )}
                                    </div>
                                    <ChevronRight className="mt-1 h-3 w-3 text-white/20 opacity-0 transition-all group-hover:translate-x-1 group-hover:text-aog-primary group-hover:opacity-100" />
                                  </div>

                                  {/* Hover background slide */}
                                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/5 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                                </Link>
                              </motion.li>
                            )
                          })}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Featured Section */}
                {section.featured && (
                  <motion.div
                    className="lg:col-span-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all hover:border-aog-primary/50">
                      {/* Corner accents */}
                      <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-aog-primary/0 transition-all duration-300 group-hover:border-aog-primary" />
                      <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-aog-primary/0 transition-all duration-300 group-hover:border-aog-primary" />

                      <h4 className="mb-2 font-light text-white">{section.featured.title}</h4>
                      <p className="mb-6 text-sm font-light text-white/50">
                        {section.featured.description}
                      </p>

                      <Link
                        href={section.featured.href}
                        onClick={onClose}
                        className="group/cta relative inline-flex items-center gap-2 overflow-hidden border border-aog-primary/30 px-4 py-2 text-xs font-light uppercase tracking-[0.2em] text-white transition-all hover:border-aog-primary hover:bg-aog-primary/10"
                      >
                        <span className="relative z-10">{section.featured.cta}</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          className="relative z-10"
                        >
                          <ChevronRight className="h-3 w-3 text-aog-primary" />
                        </motion.div>

                        {/* Hover slide effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/10 to-transparent transition-transform duration-300 group-hover/cta:translate-x-0" />
                      </Link>

                      {/* Scan line effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-aog-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
