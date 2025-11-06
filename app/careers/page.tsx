'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ChevronRight,
  X,
  Upload,
  Send,
  Search,
} from 'lucide-react'
import { MinimalGridLight, MinimalGridDark } from '@/components/aog/GridBackgrounds'

// Job positions data
const JOBS = [
  {
    id: 1,
    title: 'Ingeniero de Control de Sólidos',
    department: 'Operaciones',
    location: 'Coatzacoalcos, Veracruz',
    type: 'Tiempo Completo',
    salary: 'Competitivo',
    description:
      'Buscamos un ingeniero experimentado en control de sólidos para operaciones en plataformas offshore. Responsable del mantenimiento y operación de equipos de separación.',
    requirements: [
      '3+ años de experiencia en control de sólidos',
      'Título en Ingeniería Petrolera o afín',
      'Certificaciones en seguridad offshore',
      'Disponibilidad para trabajo en campo',
    ],
  },
  {
    id: 2,
    title: 'Técnico en Instrumentación',
    department: 'Técnico',
    location: 'Villahermosa, Tabasco',
    type: 'Tiempo Completo',
    salary: '$25,000 - $35,000 MXN',
    description:
      'Técnico especializado en mantenimiento y calibración de instrumentos de medición para la industria petrolera.',
    requirements: [
      '2+ años de experiencia en instrumentación',
      'Conocimientos en sistemas de control',
      'Carrera técnica o TSU',
      'Certificaciones vigentes',
    ],
  },
  {
    id: 3,
    title: 'Supervisor de Operaciones',
    department: 'Liderazgo',
    location: 'Coatzacoalcos, Veracruz',
    type: 'Tiempo Completo',
    salary: 'Competitivo',
    description:
      'Supervisor de operaciones para coordinar equipos de trabajo en campo. Experiencia en gestión de personal y operaciones petroleras.',
    requirements: [
      '5+ años de experiencia en la industria',
      'Liderazgo de equipos',
      'Ingeniería o administración',
      'Excelente comunicación',
    ],
  },
  {
    id: 4,
    title: 'Ingeniero de Servicios de Pesca',
    department: 'Operaciones',
    location: 'Coatzacoalcos, Veracruz',
    type: 'Tiempo Completo',
    salary: 'Competitivo',
    description:
      'Ingeniero especializado en operaciones de pesca y recuperación de herramientas en pozos petroleros.',
    requirements: [
      '4+ años de experiencia en pesca',
      'Conocimiento de herramientas especializadas',
      'Capacidad de análisis y solución de problemas',
      'Certificaciones de seguridad',
    ],
  },
  {
    id: 5,
    title: 'Técnico en Mantenimiento Industrial',
    department: 'Técnico',
    location: 'Villahermosa, Tabasco',
    type: 'Tiempo Completo',
    salary: '$20,000 - $28,000 MXN',
    description:
      'Técnico en mantenimiento preventivo y correctivo de equipos industriales para la industria del petróleo y gas.',
    requirements: [
      '2+ años de experiencia en mantenimiento',
      'Conocimientos eléctricos y mecánicos',
      'Carrera técnica',
      'Disponibilidad de horario',
    ],
  },
  {
    id: 6,
    title: 'Especialista en HSE',
    department: 'Seguridad',
    location: 'Coatzacoalcos, Veracruz',
    type: 'Tiempo Completo',
    salary: '$30,000 - $40,000 MXN',
    description:
      'Especialista en salud, seguridad y medio ambiente para garantizar el cumplimiento de normativas y la seguridad del personal.',
    requirements: [
      '3+ años de experiencia en HSE',
      'Certificaciones vigentes en seguridad',
      'Conocimiento de normativas petroleras',
      'Capacidad de auditoría',
    ],
  },
]

const DEPARTMENTS = ['Todos', 'Operaciones', 'Técnico', 'Liderazgo', 'Seguridad']

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('Todos')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedJob, setSelectedJob] = useState<(typeof JOBS)[0] | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  const heroRef = useRef(null)
  const jobsRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isJobsInView = useInView(jobsRef, { once: true })

  // Filter jobs
  const filteredJobs = JOBS.filter((job) => {
    const matchesDepartment =
      selectedDepartment === 'Todos' || job.department === selectedDepartment
    const matchesSearch =
      searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDepartment && matchesSearch
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-black pt-24 sm:pt-28 md:pt-32"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/aog/workers-equipment.jpg"
            alt="AOG Careers"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <MinimalGridDark />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 text-[9px] font-light uppercase tracking-[0.3em] text-aog-primary sm:mb-6 sm:text-[10px] md:text-xs">
              Únete al equipo
            </div>
            <h1 className="mb-6 text-[clamp(2.5rem,8vw,6rem)] font-extralight leading-[0.9] tracking-tight text-white sm:mb-8">
              Careers
            </h1>
            <p className="mb-8 text-sm font-light leading-relaxed text-white/60 sm:mb-10 sm:text-base md:text-lg">
              Construye tu carrera profesional con nosotros. Buscamos talento apasionado por la
              excelencia en la industria del petróleo y gas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-8 sm:gap-6 md:gap-8 md:py-12">
              <div>
                <div className="mb-1 text-2xl font-light text-aog-primary sm:text-3xl md:text-4xl">
                  {JOBS.length}
                </div>
                <div className="text-[10px] font-light uppercase tracking-wider text-white/40 sm:text-xs">
                  Posiciones
                </div>
              </div>
              <div>
                <div className="mb-1 text-2xl font-light text-aog-primary sm:text-3xl md:text-4xl">
                  24/7
                </div>
                <div className="text-[10px] font-light uppercase tracking-wider text-white/40 sm:text-xs">
                  Soporte
                </div>
              </div>
              <div>
                <div className="mb-1 text-2xl font-light text-aog-primary sm:text-3xl md:text-4xl">
                  100%
                </div>
                <div className="text-[10px] font-light uppercase tracking-wider text-white/40 sm:text-xs">
                  Crecimiento
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Corner accents */}
        <div className="absolute left-0 top-0 h-32 w-32 border-l-2 border-t-2 border-aog-primary/30" />
        <div className="absolute bottom-0 right-0 h-32 w-32 border-b-2 border-r-2 border-aog-primary/30" />
      </section>

      {/* Jobs Section */}
      <section ref={jobsRef} className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <MinimalGridLight />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 space-y-4 sm:mb-12 md:mb-16"
          >
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
              <input
                type="text"
                placeholder="Buscar posición, departamento, ubicación..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-b border-black/20 bg-transparent py-3 pl-6 pr-4 text-sm font-light text-black placeholder:text-black/40 focus:border-aog-primary focus:outline-none"
              />
            </div>

            {/* Department filters */}
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`border px-4 py-2 text-xs font-light uppercase tracking-wider transition-all ${
                    selectedDepartment === dept
                      ? 'border-aog-primary bg-aog-primary/10 text-aog-primary'
                      : 'border-black/10 text-black/60 hover:border-aog-primary/30 hover:text-black'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job listings */}
          <div className="space-y-4">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  setSelectedJob(job)
                  setShowApplicationForm(false)
                }}
                className="group cursor-pointer border border-black/5 bg-white p-6 transition-all hover:border-aog-primary/50 hover:bg-black/[0.02] sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-light text-black transition-colors group-hover:text-aog-primary sm:text-2xl">
                      {job.title}
                    </h3>

                    <div className="mb-4 flex flex-wrap gap-3 text-xs font-light text-black/60">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="h-3.5 w-3.5" />
                        {job.salary}
                      </div>
                    </div>

                    <p className="text-sm font-light leading-relaxed text-black/70">
                      {job.description}
                    </p>
                  </div>

                  <ChevronRight className="h-5 w-5 shrink-0 text-black/30 transition-all group-hover:translate-x-1 group-hover:text-aog-primary sm:mt-2" />
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm font-light text-black/60">
                No se encontraron posiciones que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden border border-white/10 bg-black"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition-all hover:border-aog-primary hover:text-aog-primary"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="max-h-[80vh] overflow-y-auto p-8 sm:p-12">
                {/* Job header */}
                <div className="mb-8">
                  <div className="mb-2 text-[10px] font-light uppercase tracking-[0.3em] text-aog-primary">
                    {selectedJob.department}
                  </div>
                  <h2 className="mb-4 text-3xl font-light text-white sm:text-4xl">
                    {selectedJob.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 border-l-2 border-aog-primary/30 pl-4 text-xs font-light text-white/60">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {selectedJob.type}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="h-3.5 w-3.5" />
                      {selectedJob.salary}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="mb-3 text-sm font-light uppercase tracking-wider text-white/60">
                    Descripción
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-white/70">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Requirements */}
                <div className="mb-10">
                  <h3 className="mb-4 text-sm font-light uppercase tracking-wider text-white/60">
                    Requisitos
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm font-light text-white/70"
                      >
                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aog-primary" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply button */}
                {!showApplicationForm && (
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="group relative w-full overflow-hidden border border-aog-primary/30 bg-aog-primary/10 px-8 py-4 text-xs font-light uppercase tracking-[0.2em] text-white transition-all hover:border-aog-primary hover:bg-aog-primary/20"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/20 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                    <span className="relative flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      Aplicar a esta posición
                    </span>
                  </button>
                )}

                {/* Application form */}
                {showApplicationForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 border-t border-white/10 pt-8"
                  >
                    <h3 className="text-sm font-light uppercase tracking-wider text-white/60">
                      Formulario de Aplicación
                    </h3>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Nombre completo"
                        className="border-b border-white/20 bg-transparent px-0 py-3 text-sm font-light text-white placeholder:text-white/40 focus:border-aog-primary focus:outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="border-b border-white/20 bg-transparent px-0 py-3 text-sm font-light text-white placeholder:text-white/40 focus:border-aog-primary focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        className="border-b border-white/20 bg-transparent px-0 py-3 text-sm font-light text-white placeholder:text-white/40 focus:border-aog-primary focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="LinkedIn (opcional)"
                        className="border-b border-white/20 bg-transparent px-0 py-3 text-sm font-light text-white placeholder:text-white/40 focus:border-aog-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-xs font-light uppercase tracking-wider text-white/60">
                        CV / Resume
                      </label>
                      <div className="group relative cursor-pointer border-2 border-dashed border-white/10 p-8 text-center transition-all hover:border-aog-primary/50">
                        <Upload className="mx-auto mb-3 h-8 w-8 text-white/30 transition-colors group-hover:text-aog-primary" />
                        <div className="text-sm font-light text-white/60">
                          Click para subir archivo
                        </div>
                        <div className="text-xs font-light text-white/40">PDF, DOC (max 5MB)</div>
                        <input type="file" className="absolute inset-0 cursor-pointer opacity-0" />
                      </div>
                    </div>

                    <textarea
                      rows={4}
                      placeholder="¿Por qué te interesa esta posición?"
                      className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm font-light text-white placeholder:text-white/40 focus:border-aog-primary focus:outline-none"
                    />

                    <button className="group relative w-full overflow-hidden border border-aog-primary bg-aog-primary/20 px-8 py-4 text-xs font-light uppercase tracking-[0.2em] text-white transition-all hover:bg-aog-primary/30">
                      <span className="relative flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar aplicación
                      </span>
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
