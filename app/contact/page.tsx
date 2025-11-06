'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, AlertCircle, CheckCircle2, User, Building2, MessageSquare, Shield, Copy, Check, ExternalLink } from 'lucide-react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import ReCaptchaProvider from 'components/providers/ReCaptchaProvider'
import { AOG_SERVICES } from '@/constants/aog'

// Minimalist grid
const MinimalGridDark = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.02]">
    <div className="absolute left-0 top-0 h-px w-full bg-aog-primary" />
    <div className="absolute left-0 top-1/3 h-px w-full bg-aog-primary" />
    <div className="absolute left-0 top-2/3 h-px w-full bg-aog-primary" />
    <div className="absolute left-1/3 top-0 h-full w-px bg-aog-primary" />
    <div className="absolute left-2/3 top-0 h-full w-px bg-aog-primary" />
  </div>
)

// Tech background
const TechBackground = () => (
  <>
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-aog-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-aog-primary/15 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  </>
)

// Form validation
interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validatePhone = (phone: string): boolean => {
  // Acepta formatos: +52 229 123 4567, 2291234567, (229) 123-4567
  const re = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/
  return re.test(phone.replace(/\s/g, ''))
}

function ContactPageContent() {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [emailCopied, setEmailCopied] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Copy email to clipboard
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contacto@aogservices.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  // Validate field
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido'
        if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres'
        return undefined
      case 'email':
        if (!value.trim()) return 'El email es requerido'
        if (!validateEmail(value)) return 'Ingresa un email válido'
        return undefined
      case 'phone':
        if (value && !validatePhone(value)) return 'Ingresa un teléfono válido'
        return undefined
      case 'message':
        if (!value.trim()) return 'El mensaje es requerido'
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres'
        return undefined
      default:
        return undefined
    }
  }

  // Handle change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Validate on change if field was touched
    if (touched.has(name as keyof FormData)) {
      const error = validateField(name as keyof FormData, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  // Handle blur
  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => new Set(prev).add(name))
    const error = validateField(name, formData[name])
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    // Validate all fields
    const newErrors: FormErrors = {}
    let hasError = false

    Object.keys(formData).forEach((key) => {
      const error = validateField(key as keyof FormData, formData[key as keyof FormData])
      if (error) {
        newErrors[key as keyof FormErrors] = error
        hasError = true
      }
    })

    if (hasError) {
      setErrors(newErrors)
      setTouched(new Set(Object.keys(formData) as (keyof FormData)[]))
      return
    }

    setIsSubmitting(true)

    try {
      // Execute reCAPTCHA
      if (!executeRecaptcha) {
        console.log('reCAPTCHA not available - submitting without verification')
      } else {
        const token = await executeRecaptcha('contact_form')
        console.log('reCAPTCHA token generated:', token)
        // In production, you would send this token to your backend for verification
        // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ ...formData, recaptchaToken: token }) })
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success
      setIsSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        })
        setErrors({})
        setTouched(new Set())
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      setSubmitError('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-black to-neutral-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-950 to-black pt-24 sm:pt-28 md:pt-32">
        <TechBackground />
        <MinimalGridDark />

        <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-4 text-[9px] font-light uppercase tracking-[0.3em] text-aog-primary sm:mb-6 sm:text-[10px] md:text-xs">
                Contacto
              </div>
              <h1 className="mb-6 text-[clamp(2rem,8vw,5rem)] font-extralight leading-[0.95] tracking-tight text-white sm:mb-8">
                Conversemos sobre
                <br />
                <span className="text-aog-primary">tu proyecto</span>
              </h1>
              <p className="text-sm font-light leading-relaxed text-white/60 sm:text-base md:text-lg">
                Estamos aquí para ayudarte con soluciones especializadas para la industria petrolera.
                <br className="hidden sm:block" />
                Completa el formulario y te responderemos en menos de 24 horas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={ref} className="relative bg-gradient-to-b from-black via-neutral-950 to-black py-12 sm:py-16 md:py-20 lg:py-24">
        <MinimalGridDark />

        {/* Additional lighting effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-aog-primary/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden border border-aog-primary/20 bg-gradient-to-br from-neutral-900/90 via-black/80 to-neutral-900/90 p-6 shadow-2xl shadow-aog-primary/10 backdrop-blur-sm sm:p-8 md:p-10">
                {/* Glow effect in corners */}
                <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-aog-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-aog-primary/10 blur-3xl" />

                <div className="relative">
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 flex items-start gap-3 border-l-2 border-aog-primary bg-aog-primary/10 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-aog-primary" />
                    <div>
                      <div className="text-sm font-light text-white">
                        Mensaje enviado exitosamente
                      </div>
                      <div className="text-xs font-light text-white/60">
                        Nos pondremos en contacto contigo pronto
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 flex items-start gap-3 border-l-2 border-red-500 bg-red-500/10 p-4"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <div className="text-sm font-light text-white">{submitError}</div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 flex items-center gap-2 text-xs font-light uppercase tracking-[0.2em] text-white/60"
                      >
                        <User className="h-3 w-3" />
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur('name')}
                        autoComplete="name"
                        className={`w-full border-b-2 bg-transparent px-0 py-3 text-sm font-light text-white transition-all placeholder:text-white/40 focus:outline-none ${
                          errors.name && touched.has('name')
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-white/20 focus:border-aog-primary'
                        }`}
                        placeholder="Juan Pérez González"
                      />
                      {errors.name && touched.has('name') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center gap-1.5 text-xs font-light text-red-400"
                        >
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </motion.div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 flex items-center gap-2 text-xs font-light uppercase tracking-[0.2em] text-white/60"
                      >
                        <Mail className="h-3 w-3" />
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        autoComplete="email"
                        className={`w-full border-b-2 bg-transparent px-0 py-3 text-sm font-light text-white transition-all placeholder:text-white/40 focus:outline-none ${
                          errors.email && touched.has('email')
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-white/20 focus:border-aog-primary'
                        }`}
                        placeholder="juan.perez@empresa.com"
                      />
                      {errors.email && touched.has('email') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center gap-1.5 text-xs font-light text-red-400"
                        >
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 flex items-center gap-2 text-xs font-light uppercase tracking-[0.2em] text-white/60"
                      >
                        <Phone className="h-3 w-3" />
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phone')}
                        autoComplete="tel"
                        className={`w-full border-b-2 bg-transparent px-0 py-3 text-sm font-light text-white transition-all placeholder:text-white/40 focus:outline-none ${
                          errors.phone && touched.has('phone')
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-white/20 focus:border-aog-primary'
                        }`}
                        placeholder="+52 229 123 4567"
                      />
                      {errors.phone && touched.has('phone') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center gap-1.5 text-xs font-light text-red-400"
                        >
                          <AlertCircle className="h-3 w-3" />
                          {errors.phone}
                        </motion.div>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 flex items-center gap-2 text-xs font-light uppercase tracking-[0.2em] text-white/60"
                      >
                        <Building2 className="h-3 w-3" />
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        className="w-full border-b-2 border-white/20 bg-transparent px-0 py-3 text-sm font-light text-white transition-all placeholder:text-white/40 focus:border-aog-primary focus:outline-none"
                        placeholder="Petromax S.A. de C.V."
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 flex items-center gap-2 text-xs font-light uppercase tracking-[0.2em] text-white/60"
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border-b-2 border-white/20 bg-transparent px-0 py-3 text-sm font-light text-white transition-all focus:border-aog-primary focus:outline-none [&>option]:text-white"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" className="bg-neutral-900 text-white/60">
                        Selecciona un servicio
                      </option>
                      {AOG_SERVICES.map((service) => (
                        <option key={service.id} value={service.id} className="bg-neutral-900 text-white">
                          {service.title}
                        </option>
                      ))}
                      <option value="otro" className="bg-neutral-900 text-white">
                        Otro
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 flex items-center gap-2 text-xs font-light uppercase tracking-[0.2em] text-white/60"
                    >
                      <MessageSquare className="h-3 w-3" />
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      rows={5}
                      className={`w-full resize-none border-b-2 bg-transparent px-0 py-3 text-sm font-light text-white transition-all placeholder:text-white/40 focus:outline-none ${
                        errors.message && touched.has('message')
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-white/20 focus:border-aog-primary'
                      }`}
                      placeholder="Cuéntanos sobre tu proyecto, necesidades o consulta..."
                    />
                    <div className="mt-2 flex items-center justify-between">
                      {errors.message && touched.has('message') ? (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-1.5 text-xs font-light text-red-400"
                        >
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </motion.div>
                      ) : (
                        <div />
                      )}
                      <div className="text-xs font-light text-white/40">
                        {formData.message.length}/500
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="group relative w-full overflow-hidden border border-aog-primary/30 bg-aog-primary/10 px-8 py-4 text-xs font-light uppercase tracking-[0.2em] text-white transition-all hover:border-aog-primary hover:bg-aog-primary/20 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                    >
                      {/* Background effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-aog-primary/20 to-transparent transition-transform duration-300 group-hover:translate-x-0" />

                      {/* Corner accents */}
                      <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-aog-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-aog-primary opacity-0 transition-opacity group-hover:opacity-100" />

                      {/* Content */}
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitted ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" />
                            Mensaje enviado
                          </>
                        ) : isSubmitting ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Enviar mensaje
                          </>
                        )}
                      </span>
                    </button>

                    {/* reCAPTCHA Badge */}
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-light text-white/30">
                      <Shield className="h-3 w-3" />
                      <span>Protegido por reCAPTCHA de Google</span>
                    </div>
                  </div>
                </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h2 className="mb-2 text-2xl font-light tracking-tight text-white md:text-3xl">
                    Información de contacto
                  </h2>
                  <p className="text-sm font-light text-white/50">
                    Puedes contactarnos directamente por cualquiera de estos medios
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/522291234567?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20AOG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900/80 to-black/60 p-6 shadow-lg transition-all hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-500/5 blur-2xl transition-all group-hover:bg-green-500/10" />
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-500" />
                        <div className="text-[10px] font-light uppercase tracking-[0.2em] text-white/60">
                          WhatsApp
                        </div>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-green-500/60 transition-all group-hover:text-green-500" />
                    </div>
                    <div className="text-lg font-light text-white transition-colors group-hover:text-green-500">
                      +52 (229) 123 4567
                    </div>
                    <div className="mt-1 text-xs font-light text-white/40">
                      Respuesta inmediata
                    </div>
                  </a>

                  {/* Email with Copy */}
                  <div className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900/80 to-black/60 p-6 shadow-lg">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-aog-primary/5 blur-2xl transition-all group-hover:bg-aog-primary/10" />
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-aog-primary" />
                        <div className="text-[10px] font-light uppercase tracking-[0.2em] text-white/60">
                          Email
                        </div>
                      </div>
                      <button
                        onClick={copyEmail}
                        className="flex items-center gap-1.5 border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-light text-white transition-all hover:border-aog-primary hover:bg-aog-primary/10"
                      >
                        {emailCopied ? (
                          <>
                            <Check className="h-3 w-3 text-green-500" />
                            <span className="text-green-500">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href="mailto:contacto@aogservices.com"
                      className="block break-all text-lg font-light text-white transition-colors hover:text-aog-primary"
                    >
                      contacto@aogservices.com
                    </a>
                    <div className="mt-1 text-xs font-light text-white/40">
                      Respuesta en menos de 24h
                    </div>
                  </div>

                  {/* Location */}
                  <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900/80 to-black/60 p-6 shadow-lg">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-aog-primary/5 blur-2xl" />
                    <div className="mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-aog-primary" />
                      <div className="text-[10px] font-light uppercase tracking-[0.2em] text-white/60">
                        Ubicación
                      </div>
                    </div>
                    <div className="text-lg font-light text-white">
                      Coatzacoalcos, Veracruz
                    </div>
                    <div className="mt-1 text-xs font-light text-white/40">
                      Zona Industrial del Golfo
                    </div>
                  </div>

                  {/* Emergency */}
                  <div className="border-l-2 border-aog-primary bg-aog-primary/10 p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-aog-primary" />
                      <div className="text-[10px] font-light uppercase tracking-[0.2em] text-aog-primary">
                        Emergencias 24/7
                      </div>
                    </div>
                    <a
                      href="tel:+522291234567"
                      className="block text-lg font-light text-white transition-colors hover:text-aog-primary"
                    >
                      +52 (229) 123 4567
                    </a>
                    <div className="mt-1 text-xs font-light text-white/60">
                      Disponible cualquier día, cualquier hora
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Wrap the page with ReCaptchaProvider
export default function ContactPage() {
  return (
    <ReCaptchaProvider>
      <ContactPageContent />
    </ReCaptchaProvider>
  )
}
