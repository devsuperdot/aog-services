'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, CheckCircle2, Shield, GraduationCap, TrendingUp, AlertCircle, Loader2, XCircle } from 'lucide-react'

interface FormErrors {
  email?: string
  password?: string
  general?: string
}

interface TouchedFields {
  email: boolean
  password: boolean
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<TouchedFields>({ email: false, password: false })
  const [isSuccess, setIsSuccess] = useState(false)

  // Email validation
  const validateEmail = (email: string): string | undefined => {
    if (!email) {
      return 'El correo electrónico es requerido'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Por favor ingresa un correo electrónico válido'
    }
    return undefined
  }

  // Password validation
  const validatePassword = (password: string): string | undefined => {
    if (!password) {
      return 'La contraseña es requerida'
    }
    if (password.length < 6) {
      return 'La contraseña debe tener al menos 6 caracteres'
    }
    return undefined
  }

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    if (emailError) newErrors.email = emailError
    if (passwordError) newErrors.password = passwordError

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle field blur
  const handleBlur = (field: keyof TouchedFields) => {
    setTouched(prev => ({ ...prev, [field]: true }))

    // Validate specific field on blur
    const newErrors = { ...errors }
    if (field === 'email') {
      const emailError = validateEmail(email)
      if (emailError) {
        newErrors.email = emailError
      } else {
        delete newErrors.email
      }
    } else if (field === 'password') {
      const passwordError = validatePassword(password)
      if (passwordError) {
        newErrors.password = passwordError
      } else {
        delete newErrors.password
      }
    }
    setErrors(newErrors)
  }

  // Handle email change with live validation
  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (touched.email) {
      const emailError = validateEmail(value)
      setErrors(prev => {
        const newErrors = { ...prev }
        if (emailError) {
          newErrors.email = emailError
        } else {
          delete newErrors.email
        }
        return newErrors
      })
    }
  }

  // Handle password change with live validation
  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (touched.password) {
      const passwordError = validatePassword(value)
      setErrors(prev => {
        const newErrors = { ...prev }
        if (passwordError) {
          newErrors.password = passwordError
        } else {
          delete newErrors.password
        }
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({ email: true, password: true })

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Simulate random success/error for demo
      const isSuccessfulLogin = Math.random() > 0.3

      if (isSuccessfulLogin) {
        setIsSuccess(true)
        // Redirect or handle successful login
        console.log('Login successful:', { email, rememberMe })
        // In real app: router.push('/dashboard')
      } else {
        setErrors({
          general: 'Correo electrónico o contraseña incorrectos. Por favor, verifica tus credenciales.'
        })
      }
    } catch (error) {
      setErrors({
        general: 'Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-gradient-to-br from-header-accent/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl" />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
        <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Login Form */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-header-border bg-white/80 shadow-xl backdrop-blur-xl">
              <div className="p-8 md:p-12">
                {/* Logo/Brand */}
                <div className="mb-8 text-center">
                  <Link href="/" className="inline-block">
                    <div className="mb-4 flex items-center justify-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-header-accent to-cyan-600">
                        <GraduationCap size={24} className="text-white" />
                      </div>
                      <span className="text-2xl font-bold text-header-text">OTC Petroleum</span>
                    </div>
                  </Link>
                  <h1 className="mb-2 text-3xl font-bold tracking-tight text-header-text">
                    Iniciar Sesión
                  </h1>
                  <p className="text-sm text-header-text-secondary">
                    Accede a tu plataforma de capacitación
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* General Error Message */}
                  {errors.general && (
                    <div className="animate-in slide-in-from-top-2 fade-in rounded-lg border border-red-200 bg-red-50 p-4">
                      <div className="flex items-start gap-3">
                        <XCircle size={20} className="mt-0.5 shrink-0 text-red-600" />
                        <div>
                          <h3 className="text-sm font-semibold text-red-900">Error al iniciar sesión</h3>
                          <p className="mt-1 text-sm text-red-700">{errors.general}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Success Message */}
                  {isSuccess && (
                    <div className="animate-in slide-in-from-top-2 fade-in rounded-lg border border-green-200 bg-green-50 p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-green-600" />
                        <div>
                          <h3 className="text-sm font-semibold text-green-900">¡Inicio de sesión exitoso!</h3>
                          <p className="mt-1 text-sm text-green-700">Redirigiendo a tu plataforma...</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-header-text">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <Mail
                          size={18}
                          className={`transition-colors ${
                            errors.email && touched.email
                              ? 'text-red-500'
                              : email && !errors.email && touched.email
                              ? 'text-green-500'
                              : 'text-header-text-secondary'
                          }`}
                        />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        onBlur={() => handleBlur('email')}
                        disabled={isLoading}
                        autoComplete="email"
                        className={`w-full rounded-lg border py-3 pl-12 pr-4 text-header-text placeholder-header-text-secondary transition-all focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 ${
                          errors.email && touched.email
                            ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20'
                            : email && !errors.email && touched.email
                            ? 'border-green-300 bg-green-50/50 focus:border-green-500 focus:ring-green-500/20'
                            : 'border-header-border bg-white focus:border-header-accent focus:ring-header-accent/20'
                        }`}
                        placeholder="tu@email.com"
                        aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                        aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      />
                      {email && !errors.email && touched.email && (
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                          <CheckCircle2 size={18} className="text-green-500" />
                        </div>
                      )}
                      {errors.email && touched.email && (
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                          <AlertCircle size={18} className="text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors.email && touched.email && (
                      <p
                        id="email-error"
                        className="mt-2 flex items-center gap-1.5 text-sm text-red-600 animate-in slide-in-from-top-1 fade-in"
                        role="alert"
                      >
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-header-text">
                      Contraseña <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <Lock
                          size={18}
                          className={`transition-colors ${
                            errors.password && touched.password
                              ? 'text-red-500'
                              : password && !errors.password && touched.password
                              ? 'text-green-500'
                              : 'text-header-text-secondary'
                          }`}
                        />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => handlePasswordChange(e.target.value)}
                        onBlur={() => handleBlur('password')}
                        disabled={isLoading}
                        autoComplete="current-password"
                        className={`w-full rounded-lg border py-3 pl-12 pr-24 text-header-text placeholder-header-text-secondary transition-all focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 ${
                          errors.password && touched.password
                            ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20'
                            : password && !errors.password && touched.password
                            ? 'border-green-300 bg-green-50/50 focus:border-green-500 focus:ring-green-500/20'
                            : 'border-header-border bg-white focus:border-header-accent focus:ring-header-accent/20'
                        }`}
                        placeholder="••••••••"
                        aria-invalid={errors.password && touched.password ? 'true' : 'false'}
                        aria-describedby={errors.password && touched.password ? 'password-error' : undefined}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-4">
                        {password && !errors.password && touched.password && (
                          <CheckCircle2 size={18} className="text-green-500" />
                        )}
                        {errors.password && touched.password && (
                          <AlertCircle size={18} className="text-red-500" />
                        )}
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={isLoading}
                          className="text-header-text-secondary transition-colors hover:text-header-accent disabled:opacity-50"
                          aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    {errors.password && touched.password && (
                      <p
                        id="password-error"
                        className="mt-2 flex items-center gap-1.5 text-sm text-red-600 animate-in slide-in-from-top-1 fade-in"
                        role="alert"
                      >
                        <AlertCircle size={14} />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 rounded border-header-border text-header-accent focus:ring-2 focus:ring-header-accent/20"
                      />
                      <span className="text-sm text-header-text">Recordarme</span>
                    </label>
                    <Link
                      href="/platform/forgot-password"
                      className="text-sm font-medium text-header-accent hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading || isSuccess}
                    className="w-full rounded-lg bg-gradient-to-r from-header-accent to-cyan-600 py-3 text-base font-semibold text-white shadow-lg shadow-header-accent/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-header-accent/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={20} className="animate-spin" />
                        Iniciando sesión...
                      </span>
                    ) : isSuccess ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle2 size={20} />
                        ¡Éxito!
                      </span>
                    ) : (
                      'Iniciar Sesión'
                    )}
                  </button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-header-border" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-4 text-header-text-secondary">O continuar con</span>
                    </div>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-lg border-2 border-header-border bg-white px-4 py-3 text-sm font-medium text-header-text transition-all hover:border-header-accent hover:bg-gray-50"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Google
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-lg border-2 border-header-border bg-white px-4 py-3 text-sm font-medium text-header-text transition-all hover:border-header-accent hover:bg-gray-50"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M11.4 24H0V8h11.4v16zM24 8v7.3c0 3.7-1.6 6.2-5.8 6.2-1.4 0-3-.6-3.6-1.9h-.1V24H3.1V8H14v1.8h.1c.6-1.2 2.2-2.1 3.7-2.1 4.1 0 6.2 2.4 6.2 7.3z"
                        />
                      </svg>
                      Microsoft
                    </button>
                  </div>
                </form>

                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-header-text-secondary">
                    ¿No tienes una cuenta?{' '}
                    <Link
                      href="/platform/signup"
                      className="font-semibold text-header-accent hover:underline"
                    >
                      Regístrate gratis
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2 text-sm text-header-text-secondary">
                <Shield size={16} className="text-header-accent" />
                <span>Conexión segura</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-header-text-secondary">
                <CheckCircle2 size={16} className="text-header-accent" />
                <span>Datos protegidos</span>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-header-text">
                  Accede a tu <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">Plataforma de Cursos</span>
                </h2>
                <p className="text-lg text-header-text-secondary">
                  Continúa tu capacitación profesional con cursos certificados y contenido actualizado
                </p>
              </div>

              {/* Benefits Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: GraduationCap,
                    title: '50+ Cursos Certificados',
                    description: 'Acceso a capacitación profesional en inspección, soldadura y seguridad industrial'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Seguimiento de Progreso',
                    description: 'Monitorea tu avance, certificados obtenidos y objetivos de aprendizaje'
                  },
                  {
                    icon: CheckCircle2,
                    title: 'Certificados Digitales',
                    description: 'Obtén certificados verificables reconocidos por la industria'
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-header-border bg-white/80 p-6 backdrop-blur-xl transition-all hover:border-header-accent hover:shadow-lg"
                    >
                      <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-header-accent/5 to-transparent blur-2xl transition-all group-hover:from-header-accent/10" />

                      <div className="relative flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50">
                          <Icon size={24} className="text-header-accent" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-lg font-bold text-header-text">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-header-text-secondary">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2,000+', label: 'Estudiantes' },
                  { value: '1,500+', label: 'Certificados' },
                  { value: '4.8/5', label: 'Calificación' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-header-border bg-white/80 p-4 text-center backdrop-blur-xl"
                  >
                    <div className="mb-1 text-2xl font-bold text-header-accent">{stat.value}</div>
                    <div className="text-xs text-header-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
