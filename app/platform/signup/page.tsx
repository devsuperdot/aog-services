'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, CheckCircle2, Shield, GraduationCap, TrendingUp, AlertCircle, Loader2, XCircle, User, Building2, Phone } from 'lucide-react'

interface FormErrors {
  name?: string
  email?: string
  company?: string
  phone?: string
  password?: string
  confirmPassword?: string
  general?: string
}

interface TouchedFields {
  name: boolean
  email: boolean
  company: boolean
  phone: boolean
  password: boolean
  confirmPassword: boolean
}

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    company: false,
    phone: false,
    password: false,
    confirmPassword: false
  })
  const [isSuccess, setIsSuccess] = useState(false)

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name) return 'El nombre completo es requerido'
    if (name.length < 3) return 'El nombre debe tener al menos 3 caracteres'
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'El correo electrónico es requerido'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Por favor ingresa un correo electrónico válido'
    return undefined
  }

  const validateCompany = (company: string): string | undefined => {
    if (!company) return 'El nombre de la empresa es requerido'
    if (company.length < 2) return 'El nombre debe tener al menos 2 caracteres'
    return undefined
  }

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return 'El teléfono es requerido'
    const phoneRegex = /^[0-9]{10,}$/
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
      return 'Por favor ingresa un número de teléfono válido (mínimo 10 dígitos)'
    }
    return undefined
  }

  const validatePassword = (password: string): string | undefined => {
    if (!password) return 'La contraseña es requerida'
    if (password.length < 8) return 'La contraseña debe tener al menos 8 caracteres'
    if (!/(?=.*[a-z])/.test(password)) return 'Debe contener al menos una minúscula'
    if (!/(?=.*[A-Z])/.test(password)) return 'Debe contener al menos una mayúscula'
    if (!/(?=.*\d)/.test(password)) return 'Debe contener al menos un número'
    return undefined
  }

  const validateConfirmPassword = (confirmPassword: string): string | undefined => {
    if (!confirmPassword) return 'Confirma tu contraseña'
    if (confirmPassword !== password) return 'Las contraseñas no coinciden'
    return undefined
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    const nameError = validateName(name)
    const emailError = validateEmail(email)
    const companyError = validateCompany(company)
    const phoneError = validatePhone(phone)
    const passwordError = validatePassword(password)
    const confirmPasswordError = validateConfirmPassword(confirmPassword)

    if (nameError) newErrors.name = nameError
    if (emailError) newErrors.email = emailError
    if (companyError) newErrors.company = companyError
    if (phoneError) newErrors.phone = phoneError
    if (passwordError) newErrors.password = passwordError
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError

    if (!acceptTerms) {
      newErrors.general = 'Debes aceptar los términos y condiciones'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleBlur = (field: keyof TouchedFields) => {
    setTouched(prev => ({ ...prev, [field]: true }))

    const newErrors = { ...errors }
    switch (field) {
      case 'name':
        const nameError = validateName(name)
        if (nameError) newErrors.name = nameError
        else delete newErrors.name
        break
      case 'email':
        const emailError = validateEmail(email)
        if (emailError) newErrors.email = emailError
        else delete newErrors.email
        break
      case 'company':
        const companyError = validateCompany(company)
        if (companyError) newErrors.company = companyError
        else delete newErrors.company
        break
      case 'phone':
        const phoneError = validatePhone(phone)
        if (phoneError) newErrors.phone = phoneError
        else delete newErrors.phone
        break
      case 'password':
        const passwordError = validatePassword(password)
        if (passwordError) newErrors.password = passwordError
        else delete newErrors.password
        break
      case 'confirmPassword':
        const confirmPasswordError = validateConfirmPassword(confirmPassword)
        if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError
        else delete newErrors.confirmPassword
        break
    }
    setErrors(newErrors)
  }

  const handleFieldChange = (field: keyof TouchedFields, value: string) => {
    switch (field) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'company':
        setCompany(value)
        break
      case 'phone':
        setPhone(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'confirmPassword':
        setConfirmPassword(value)
        break
    }

    if (touched[field]) {
      const newErrors = { ...errors }
      let error: string | undefined

      switch (field) {
        case 'name':
          error = validateName(value)
          break
        case 'email':
          error = validateEmail(value)
          break
        case 'company':
          error = validateCompany(value)
          break
        case 'phone':
          error = validatePhone(value)
          break
        case 'password':
          error = validatePassword(value)
          break
        case 'confirmPassword':
          error = value !== password ? 'Las contraseñas no coinciden' : undefined
          break
      }

      if (error) newErrors[field] = error
      else delete newErrors[field]

      setErrors(newErrors)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setTouched({
      name: true,
      email: true,
      company: true,
      phone: true,
      password: true,
      confirmPassword: true
    })

    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      const isSuccessfulSignup = Math.random() > 0.2

      if (isSuccessfulSignup) {
        setIsSuccess(true)
        console.log('Signup successful:', { name, email, company, phone })
      } else {
        setErrors({
          general: 'Este correo electrónico ya está registrado. Por favor, intenta con otro.'
        })
      }
    } catch (error) {
      setErrors({
        general: 'Ocurrió un error al crear tu cuenta. Por favor, intenta de nuevo.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getPasswordStrength = () => {
    if (!password) return { strength: 0, label: '', color: '' }

    let strength = 0
    if (password.length >= 8) strength++
    if (/(?=.*[a-z])/.test(password)) strength++
    if (/(?=.*[A-Z])/.test(password)) strength++
    if (/(?=.*\d)/.test(password)) strength++
    if (/(?=.*[@$!%*?&])/.test(password)) strength++

    if (strength <= 2) return { strength: 33, label: 'Débil', color: 'bg-red-500' }
    if (strength <= 3) return { strength: 66, label: 'Media', color: 'bg-yellow-500' }
    return { strength: 100, label: 'Fuerte', color: 'bg-green-500' }
  }

  const passwordStrength = getPasswordStrength()

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-gradient-to-br from-header-accent/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl" />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl">
          <div className="mb-8 text-center lg:hidden">
            <h2 className="mb-2 text-2xl font-bold text-header-text">
              Únete a <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">AOG Services</span>
            </h2>
            <p className="text-sm text-header-text-secondary">
              Accede a más de 50 cursos certificados
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Left Column - Form */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-header-border bg-white/80 shadow-xl backdrop-blur-xl">
                <div className="p-6 md:p-8">
                  <div className="mb-6 text-center lg:text-left">
                    <Link href="/" className="inline-block lg:hidden">
                      <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-header-accent to-cyan-600">
                          <GraduationCap size={20} className="text-white" />
                        </div>
                        <span className="text-xl font-bold text-header-text">AOG Services</span>
                      </div>
                    </Link>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-header-text md:text-3xl">
                      Crear Cuenta
                    </h1>
                    <p className="text-sm text-header-text-secondary">
                      Completa el formulario para comenzar
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {errors.general && (
                      <div className="animate-in slide-in-from-top-2 fade-in rounded-lg border border-red-200 bg-red-50 p-3">
                        <div className="flex items-start gap-2">
                          <XCircle size={18} className="mt-0.5 shrink-0 text-red-600" />
                          <p className="text-sm text-red-700">{errors.general}</p>
                        </div>
                      </div>
                    )}

                    {isSuccess && (
                      <div className="animate-in slide-in-from-top-2 fade-in rounded-lg border border-green-200 bg-green-50 p-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-600" />
                          <div>
                            <h3 className="text-sm font-semibold text-green-900">¡Cuenta creada exitosamente!</h3>
                            <p className="mt-1 text-sm text-green-700">Redirigiendo a tu plataforma...</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-header-text">
                        Nombre Completo <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <User size={16} className={errors.name && touched.name ? 'text-red-500' : name && !errors.name && touched.name ? 'text-green-500' : 'text-header-text-secondary'} />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => handleFieldChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          disabled={isLoading}
                          autoComplete="name"
                          className={`w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm transition-all focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 ${
                            errors.name && touched.name ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20' : name && !errors.name && touched.name ? 'border-green-300 bg-green-50/50 focus:border-green-500 focus:ring-green-500/20' : 'border-header-border bg-white focus:border-header-accent focus:ring-header-accent/20'
                          }`}
                          placeholder="Juan Pérez"
                        />
                        {name && !errors.name && touched.name && (
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <CheckCircle2 size={16} className="text-green-500" />
                          </div>
                        )}
                        {errors.name && touched.name && (
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <AlertCircle size={16} className="text-red-500" />
                          </div>
                        )}
                      </div>
                      {errors.name && touched.name && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 animate-in slide-in-from-top-1 fade-in">
                          <AlertCircle size={12} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email and Company - Grid */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-header-text">
                          Correo Electrónico <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Mail size={16} className={errors.email && touched.email ? 'text-red-500' : email && !errors.email && touched.email ? 'text-green-500' : 'text-header-text-secondary'} />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => handleFieldChange('email', e.target.value)}
                            onBlur={() => handleBlur('email')}
                            disabled={isLoading}
                            autoComplete="email"
                            className={`w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm transition-all focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 ${
                              errors.email && touched.email ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20' : email && !errors.email && touched.email ? 'border-green-300 bg-green-50/50 focus:border-green-500 focus:ring-green-500/20' : 'border-header-border bg-white focus:border-header-accent focus:ring-header-accent/20'
                            }`}
                            placeholder="tu@email.com"
                          />
                          {email && !errors.email && touched.email && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <CheckCircle2 size={16} className="text-green-500" />
                            </div>
                          )}
                          {errors.email && touched.email && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <AlertCircle size={16} className="text-red-500" />
                            </div>
                          )}
                        </div>
                        {errors.email && touched.email && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 animate-in slide-in-from-top-1 fade-in">
                            <AlertCircle size={12} />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Company Field */}
                      <div>
                        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-header-text">
                          Empresa <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Building2 size={16} className={errors.company && touched.company ? 'text-red-500' : company && !errors.company && touched.company ? 'text-green-500' : 'text-header-text-secondary'} />
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={company}
                            onChange={(e) => handleFieldChange('company', e.target.value)}
                            onBlur={() => handleBlur('company')}
                            disabled={isLoading}
                            autoComplete="organization"
                            className={`w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm transition-all focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 ${
                              errors.company && touched.company ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20' : company && !errors.company && touched.company ? 'border-green-300 bg-green-50/50 focus:border-green-500 focus:ring-green-500/20' : 'border-header-border bg-white focus:border-header-accent focus:ring-header-accent/20'
                            }`}
                            placeholder="Mi Empresa S.A."
                          />
                          {company && !errors.company && touched.company && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <CheckCircle2 size={16} className="text-green-500" />
                            </div>
                          )}
                          {errors.company && touched.company && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <AlertCircle size={16} className="text-red-500" />
                            </div>
                          )}
                        </div>
                        {errors.company && touched.company && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 animate-in slide-in-from-top-1 fade-in">
                            <AlertCircle size={12} />
                            {errors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-header-text">
                        Teléfono <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Phone size={16} className={errors.phone && touched.phone ? 'text-red-500' : phone && !errors.phone && touched.phone ? 'text-green-500' : 'text-header-text-secondary'} />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={phone}
                          onChange={(e) => handleFieldChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          disabled={isLoading}
                          autoComplete="tel"
                          className={`w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm transition-all focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 ${
                            errors.phone && touched.phone ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20' : phone && !errors.phone && touched.phone ? 'border-green-300 bg-green-50/50 focus:border-green-500 focus:ring-green-500/20' : 'border-header-border bg-white focus:border-header-accent focus:ring-header-accent/20'
                          }`}
                          placeholder="+52 123 456 7890"
                        />
                        {phone && !errors.phone && touched.phone && (
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <CheckCircle2 size={16} className="text-green-500" />
                          </div>
                        )}
                        {errors.phone && touched.phone && (
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <AlertCircle size={16} className="text-red-500" />
                          </div>
                        )}
                      </div>
                      {errors.phone && touched.phone && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 animate-in slide-in-from-top-1 fade-in">
                          <AlertCircle size={12} />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Password Fields Grid */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Password Field */}
                      <div>
                        <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-header-text">
                          Contraseña <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Lock size={16} className={errors.password && touched.password ? 'text-red-500' : password && !errors.password && touched.password ? 'text-green-500' : 'text-header-text-secondary'} />
                          </div>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => handleFieldChange('password', e.target.value)}
                            onBlur={() => handleBlur('password')}
                            disabled={isLoading}
                            autoComplete="new-password"
                            className={`w-full rounded-lg border py-2.5 pl-10 pr-20 text-sm transition-all focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 ${
                              errors.password && touched.password ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20' : password && !errors.password && touched.password ? 'border-green-300 bg-green-50/50 focus:border-green-500 focus:ring-green-500/20' : 'border-header-border bg-white focus:border-header-accent focus:ring-header-accent/20'
                            }`}
                            placeholder="••••••••"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
                            {password && !errors.password && touched.password && (
                              <CheckCircle2 size={16} className="text-green-500" />
                            )}
                            {errors.password && touched.password && (
                              <AlertCircle size={16} className="text-red-500" />
                            )}
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              disabled={isLoading}
                              className="text-header-text-secondary transition-colors hover:text-header-accent disabled:opacity-50"
                            >
                              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                        </div>
                        {password && touched.password && (
                          <div className="mt-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-header-text-secondary">Seguridad:</span>
                              <span className={`font-medium ${passwordStrength.strength === 33 ? 'text-red-600' : passwordStrength.strength === 66 ? 'text-yellow-600' : 'text-green-600'}`}>
                                {passwordStrength.label}
                              </span>
                            </div>
                            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                              <div
                                className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                                style={{ width: `${passwordStrength.strength}%` }}
                              />
                            </div>
                          </div>
                        )}
                        {errors.password && touched.password && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 animate-in slide-in-from-top-1 fade-in">
                            <AlertCircle size={12} />
                            {errors.password}
                          </p>
                        )}
                      </div>

                      {/* Confirm Password Field */}
                      <div>
                        <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-header-text">
                          Confirmar Contraseña <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Lock size={16} className={errors.confirmPassword && touched.confirmPassword ? 'text-red-500' : confirmPassword && !errors.confirmPassword && touched.confirmPassword ? 'text-green-500' : 'text-header-text-secondary'} />
                          </div>
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
                            onBlur={() => handleBlur('confirmPassword')}
                            disabled={isLoading}
                            autoComplete="new-password"
                            className={`w-full rounded-lg border py-2.5 pl-10 pr-20 text-sm transition-all focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 ${
                              errors.confirmPassword && touched.confirmPassword ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20' : confirmPassword && !errors.confirmPassword && touched.confirmPassword ? 'border-green-300 bg-green-50/50 focus:border-green-500 focus:ring-green-500/20' : 'border-header-border bg-white focus:border-header-accent focus:ring-header-accent/20'
                            }`}
                            placeholder="••••••••"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
                            {confirmPassword && !errors.confirmPassword && touched.confirmPassword && (
                              <CheckCircle2 size={16} className="text-green-500" />
                            )}
                            {errors.confirmPassword && touched.confirmPassword && (
                              <AlertCircle size={16} className="text-red-500" />
                            )}
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              disabled={isLoading}
                              className="text-header-text-secondary transition-colors hover:text-header-accent disabled:opacity-50"
                            >
                              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                        </div>
                        {errors.confirmPassword && touched.confirmPassword && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 animate-in slide-in-from-top-1 fade-in">
                            <AlertCircle size={12} />
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-header-border text-header-accent focus:ring-2 focus:ring-header-accent/20"
                      />
                      <label htmlFor="terms" className="text-xs text-header-text">
                        Acepto los{' '}
                        <Link href="/terms" className="font-medium text-header-accent hover:underline">
                          términos y condiciones
                        </Link>{' '}
                        y la{' '}
                        <Link href="/privacy" className="font-medium text-header-accent hover:underline">
                          política de privacidad
                        </Link>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading || isSuccess}
                      className="w-full rounded-lg bg-gradient-to-r from-header-accent to-cyan-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-header-accent/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-header-accent/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 size={18} className="animate-spin" />
                          Creando cuenta...
                        </span>
                      ) : isSuccess ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle2 size={18} />
                          ¡Cuenta creada!
                        </span>
                      ) : (
                        'Crear Cuenta'
                      )}
                    </button>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-header-border" />
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="bg-white px-3 text-header-text-secondary">O continuar con</span>
                      </div>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="grid gap-2 sm:grid-cols-2">
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 rounded-lg border-2 border-header-border bg-white px-3 py-2 text-sm font-medium text-header-text transition-all hover:border-header-accent hover:bg-gray-50"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Google
                      </button>
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 rounded-lg border-2 border-header-border bg-white px-3 py-2 text-sm font-medium text-header-text transition-all hover:border-header-accent hover:bg-gray-50"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M11.4 24H0V8h11.4v16zM24 8v7.3c0 3.7-1.6 6.2-5.8 6.2-1.4 0-3-.6-3.6-1.9h-.1V24H3.1V8H14v1.8h.1c.6-1.2 2.2-2.1 3.7-2.1 4.1 0 6.2 2.4 6.2 7.3z" />
                        </svg>
                        Microsoft
                      </button>
                    </div>
                  </form>

                  {/* Sign In Link */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-header-text-secondary">
                      ¿Ya tienes una cuenta?{' '}
                      <Link href="/platform/login" className="font-semibold text-header-accent hover:underline">
                        Inicia sesión
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-4 flex items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-1.5 text-xs text-header-text-secondary">
                  <Shield size={14} className="text-header-accent" />
                  <span>Conexión segura</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-header-text-secondary">
                  <CheckCircle2 size={14} className="text-header-accent" />
                  <span>Datos protegidos</span>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="order-1 hidden lg:order-2 lg:block">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h2 className="mb-3 text-3xl font-bold tracking-tight text-header-text">
                    Comienza tu <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">Capacitación Profesional</span>
                  </h2>
                  <p className="text-base text-header-text-secondary">
                    Accede a cursos certificados reconocidos por la industria y acelera tu carrera
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: GraduationCap, title: '50+ Cursos Certificados', description: 'Capacitación en inspección, soldadura, seguridad y más' },
                    { icon: TrendingUp, title: 'Aprende a Tu Ritmo', description: 'Acceso 24/7 desde cualquier dispositivo' },
                    { icon: CheckCircle2, title: 'Certificados Verificables', description: 'Reconocidos por STPS y organismos internacionales' },
                    { icon: Shield, title: 'Soporte Personalizado', description: 'Instructores certificados disponibles para ayudarte' }
                  ].map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <div key={index} className="group relative overflow-hidden rounded-xl border border-header-border bg-white/80 p-5 backdrop-blur-xl transition-all hover:border-header-accent hover:shadow-lg">
                        <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-header-accent/5 to-transparent blur-2xl transition-all group-hover:from-header-accent/10" />
                        <div className="relative flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50">
                            <Icon size={20} className="text-header-accent" />
                          </div>
                          <div>
                            <h3 className="mb-1 text-base font-bold text-header-text">
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

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '2,000+', label: 'Estudiantes' },
                    { value: '1,500+', label: 'Certificados' },
                    { value: '4.8/5', label: 'Calificación' }
                  ].map((stat, index) => (
                    <div key={index} className="rounded-lg border border-header-border bg-white/80 p-3 text-center backdrop-blur-xl">
                      <div className="mb-1 text-xl font-bold text-header-accent">{stat.value}</div>
                      <div className="text-xs text-header-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
