'use client'

import React, { useState, useEffect } from 'react'
import {
  GraduationCap,
  Award,
  Eye,
  ArrowRight,
  ArrowLeft,
  Check,
  Users,
  MapPin,
  Calendar,
  Clock,
  FileText,
  Sparkles,
  ChevronRight,
  Building2,
  Mail,
  Phone,
  User,
} from 'lucide-react'

type ServiceType = 'training' | 'certification' | 'inspection' | null

interface QuoteData {
  serviceType: ServiceType
  // Training
  trainingType: string
  trainingModality: string
  participants: number
  // Certification
  certificationType: string
  certificationLevel: string
  certificationQuantity: number
  // Inspection
  inspectionType: string
  inspectionScope: string
  inspectionUrgency: string
  // Common
  location: string
  preferredDate: string
  duration: string
  // Contact
  company: string
  contactName: string
  email: string
  phone: string
  message: string
}

const initialQuoteData: QuoteData = {
  serviceType: null,
  trainingType: '',
  trainingModality: '',
  participants: 1,
  certificationType: '',
  certificationLevel: '',
  certificationQuantity: 1,
  inspectionType: '',
  inspectionScope: '',
  inspectionUrgency: '',
  location: '',
  preferredDate: '',
  duration: '',
  company: '',
  contactName: '',
  email: '',
  phone: '',
  message: '',
}

export default function GetQuotePage() {
  const [step, setStep] = useState(1)
  const [quoteData, setQuoteData] = useState<QuoteData>(initialQuoteData)
  const [estimatedPrice, setEstimatedPrice] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  // Calculate price in real-time
  useEffect(() => {
    let price = 0

    if (quoteData.serviceType === 'training') {
      const basePrice = 5000
      const participantMultiplier = quoteData.participants
      const modalityMultiplier =
        quoteData.trainingModality === 'presencial' ? 1.5 : 1.0

      if (quoteData.trainingType === 'rigpass') {
        price = basePrice * 1.2 * participantMultiplier * modalityMultiplier
      } else if (quoteData.trainingType === 'altura') {
        price = basePrice * 1.0 * participantMultiplier * modalityMultiplier
      } else if (quoteData.trainingType === 'seguridad') {
        price = basePrice * 0.8 * participantMultiplier * modalityMultiplier
      } else if (quoteData.trainingType === 'operacion') {
        price = basePrice * 1.3 * participantMultiplier * modalityMultiplier
      }
    } else if (quoteData.serviceType === 'certification') {
      const basePrice = 8000
      const levelMultiplier =
        quoteData.certificationLevel === 'nivel-3'
          ? 2.0
          : quoteData.certificationLevel === 'nivel-2'
          ? 1.5
          : 1.0

      price =
        basePrice * levelMultiplier * quoteData.certificationQuantity * 1.2
    } else if (quoteData.serviceType === 'inspection') {
      const basePrice = 15000
      const scopeMultiplier =
        quoteData.inspectionScope === 'completa'
          ? 2.0
          : quoteData.inspectionScope === 'parcial'
          ? 1.0
          : 0.5
      const urgencyMultiplier =
        quoteData.inspectionUrgency === 'urgente' ? 1.5 : 1.0

      price = basePrice * scopeMultiplier * urgencyMultiplier
    }

    setEstimatedPrice(Math.round(price))
  }, [quoteData])

  const updateQuoteData = <K extends keyof QuoteData>(
    field: K,
    value: QuoteData[K]
  ) => {
    setQuoteData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceedToNextStep = () => {
    if (step === 1) return quoteData.serviceType !== null
    if (step === 2) {
      if (quoteData.serviceType === 'training') {
        return (
          quoteData.trainingType &&
          quoteData.trainingModality &&
          quoteData.participants > 0
        )
      }
      if (quoteData.serviceType === 'certification') {
        return (
          quoteData.certificationType &&
          quoteData.certificationLevel &&
          quoteData.certificationQuantity > 0
        )
      }
      if (quoteData.serviceType === 'inspection') {
        return (
          quoteData.inspectionType &&
          quoteData.inspectionScope &&
          quoteData.inspectionUrgency
        )
      }
    }
    if (step === 3) {
      return quoteData.location && quoteData.preferredDate
    }
    if (step === 4) {
      return (
        quoteData.company &&
        quoteData.contactName &&
        quoteData.email &&
        quoteData.phone
      )
    }
    return true
  }

  const handleSubmit = async () => {
    // Here you would send the quote data to your backend
    // In production: await fetch('/api/quotes', { method: 'POST', body: JSON.stringify(quoteData) })
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setStep(1)
      setQuoteData(initialQuoteData)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="border-b border-header-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-header-accent to-header-accent-dark">
              <Sparkles size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-header-text">
                Cotización Inteligente
              </h1>
              <p className="text-sm text-header-text-secondary">
                Obtén un estimado en tiempo real de tu servicio
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Main Form */}
          <div>
            {/* Progress Steps */}
            <div className="mb-8 flex items-center justify-between">
              {[1, 2, 3, 4].map((s) => (
                <React.Fragment key={s}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-all ${
                        s < step
                          ? 'bg-green-500 text-white'
                          : s === step
                          ? 'bg-header-accent text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {s < step ? <Check size={20} /> : s}
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium ${
                        s === step
                          ? 'text-header-accent'
                          : 'text-header-text-secondary'
                      }`}
                    >
                      {s === 1
                        ? 'Servicio'
                        : s === 2
                        ? 'Detalles'
                        : s === 3
                        ? 'Info'
                        : 'Contacto'}
                    </span>
                  </div>
                  {s < 4 && (
                    <div
                      className={`h-0.5 flex-1 ${
                        s < step ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step Content */}
            <div className="rounded-2xl border border-header-border bg-white p-8 shadow-sm">
              {/* Step 1: Service Type */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h2 className="mb-2 text-2xl font-bold text-header-text">
                    ¿Qué servicio necesitas?
                  </h2>
                  <p className="mb-6 text-header-text-secondary">
                    Selecciona el tipo de servicio que deseas cotizar
                  </p>

                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      {
                        id: 'training',
                        icon: GraduationCap,
                        title: 'Capacitación',
                        description: 'Cursos y entrenamientos especializados',
                      },
                      {
                        id: 'certification',
                        icon: Award,
                        title: 'Certificación',
                        description: 'Certificaciones profesionales',
                      },
                      {
                        id: 'inspection',
                        icon: Eye,
                        title: 'Inspección',
                        description: 'Servicios de inspección y END',
                      },
                    ].map((service) => {
                      const Icon = service.icon
                      const isSelected = quoteData.serviceType === service.id
                      return (
                        <button
                          key={service.id}
                          onClick={() =>
                            updateQuoteData(
                              'serviceType',
                              service.id as ServiceType
                            )
                          }
                          className={`group relative rounded-xl border-2 p-6 text-left transition-all ${
                            isSelected
                              ? 'border-header-accent bg-header-accent/5 shadow-md'
                              : 'border-header-border bg-white hover:border-header-accent/50 hover:shadow-sm'
                          }`}
                        >
                          <div
                            className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                              isSelected
                                ? 'bg-header-accent text-white'
                                : 'bg-gray-100 text-header-accent group-hover:bg-header-accent/10'
                            }`}
                          >
                            <Icon size={28} />
                          </div>
                          <h3 className="mb-2 font-bold text-header-text">
                            {service.title}
                          </h3>
                          <p className="text-sm text-header-text-secondary">
                            {service.description}
                          </p>
                          {isSelected && (
                            <div className="absolute right-4 top-4">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-header-accent">
                                <Check size={14} className="text-white" />
                              </div>
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Service Details */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h2 className="mb-2 text-2xl font-bold text-header-text">
                    Detalles del servicio
                  </h2>
                  <p className="mb-6 text-header-text-secondary">
                    Especifica los detalles de tu{' '}
                    {quoteData.serviceType === 'training'
                      ? 'capacitación'
                      : quoteData.serviceType === 'certification'
                      ? 'certificación'
                      : 'inspección'}
                  </p>

                  {quoteData.serviceType === 'training' && (
                    <div className="space-y-6">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-header-text">
                          Tipo de Capacitación
                        </label>
                        <div className="grid gap-3 md:grid-cols-2">
                          {[
                            { id: 'rigpass', label: 'RigPass' },
                            { id: 'altura', label: 'Trabajos en Altura' },
                            {
                              id: 'seguridad',
                              label: 'Seguridad Industrial',
                            },
                            { id: 'operacion', label: 'Operación de Equipos' },
                          ].map((type) => (
                            <button
                              key={type.id}
                              onClick={() =>
                                updateQuoteData('trainingType', type.id)
                              }
                              className={`rounded-lg border-2 p-4 text-left transition-all ${
                                quoteData.trainingType === type.id
                                  ? 'border-header-accent bg-header-accent/5'
                                  : 'border-header-border hover:border-header-accent/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-header-text">
                                  {type.label}
                                </span>
                                {quoteData.trainingType === type.id && (
                                  <Check
                                    size={18}
                                    className="text-header-accent"
                                  />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-header-text">
                          Modalidad
                        </label>
                        <div className="grid gap-3 md:grid-cols-2">
                          {[
                            { id: 'presencial', label: 'Presencial' },
                            { id: 'online', label: 'En Línea' },
                          ].map((modality) => (
                            <button
                              key={modality.id}
                              onClick={() =>
                                updateQuoteData('trainingModality', modality.id)
                              }
                              className={`rounded-lg border-2 p-4 text-left transition-all ${
                                quoteData.trainingModality === modality.id
                                  ? 'border-header-accent bg-header-accent/5'
                                  : 'border-header-border hover:border-header-accent/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-header-text">
                                  {modality.label}
                                </span>
                                {quoteData.trainingModality === modality.id && (
                                  <Check
                                    size={18}
                                    className="text-header-accent"
                                  />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-header-text">
                          Número de Participantes
                        </label>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() =>
                              updateQuoteData(
                                'participants',
                                Math.max(1, quoteData.participants - 1)
                              )
                            }
                            className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-header-border bg-white text-header-text transition-all hover:border-header-accent hover:bg-header-accent/5"
                          >
                            -
                          </button>
                          <div className="flex h-12 flex-1 items-center justify-center rounded-lg border-2 border-header-border bg-gray-50">
                            <Users size={20} className="text-header-accent" />
                            <span className="ml-2 text-xl font-bold text-header-text">
                              {quoteData.participants}
                            </span>
                          </div>
                          <button
                            onClick={() =>
                              updateQuoteData(
                                'participants',
                                quoteData.participants + 1
                              )
                            }
                            className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-header-border bg-white text-header-text transition-all hover:border-header-accent hover:bg-header-accent/5"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {quoteData.serviceType === 'certification' && (
                    <div className="space-y-6">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-header-text">
                          Tipo de Certificación
                        </label>
                        <div className="grid gap-3 md:grid-cols-2">
                          {[
                            { id: 'ndt', label: 'END (ASNT)' },
                            { id: 'welding', label: 'Soldadura (AWS)' },
                            { id: 'inspector', label: 'Inspector API' },
                            { id: 'safety', label: 'Seguridad Industrial' },
                          ].map((type) => (
                            <button
                              key={type.id}
                              onClick={() =>
                                updateQuoteData('certificationType', type.id)
                              }
                              className={`rounded-lg border-2 p-4 text-left transition-all ${
                                quoteData.certificationType === type.id
                                  ? 'border-header-accent bg-header-accent/5'
                                  : 'border-header-border hover:border-header-accent/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-header-text">
                                  {type.label}
                                </span>
                                {quoteData.certificationType === type.id && (
                                  <Check
                                    size={18}
                                    className="text-header-accent"
                                  />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-header-text">
                          Nivel de Certificación
                        </label>
                        <div className="grid gap-3 md:grid-cols-3">
                          {[
                            { id: 'nivel-1', label: 'Nivel I' },
                            { id: 'nivel-2', label: 'Nivel II' },
                            { id: 'nivel-3', label: 'Nivel III' },
                          ].map((level) => (
                            <button
                              key={level.id}
                              onClick={() =>
                                updateQuoteData('certificationLevel', level.id)
                              }
                              className={`rounded-lg border-2 p-4 text-left transition-all ${
                                quoteData.certificationLevel === level.id
                                  ? 'border-header-accent bg-header-accent/5'
                                  : 'border-header-border hover:border-header-accent/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-header-text">
                                  {level.label}
                                </span>
                                {quoteData.certificationLevel === level.id && (
                                  <Check
                                    size={18}
                                    className="text-header-accent"
                                  />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-header-text">
                          Cantidad de Personas
                        </label>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() =>
                              updateQuoteData(
                                'certificationQuantity',
                                Math.max(1, quoteData.certificationQuantity - 1)
                              )
                            }
                            className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-header-border bg-white text-header-text transition-all hover:border-header-accent hover:bg-header-accent/5"
                          >
                            -
                          </button>
                          <div className="flex h-12 flex-1 items-center justify-center rounded-lg border-2 border-header-border bg-gray-50">
                            <Users size={20} className="text-header-accent" />
                            <span className="ml-2 text-xl font-bold text-header-text">
                              {quoteData.certificationQuantity}
                            </span>
                          </div>
                          <button
                            onClick={() =>
                              updateQuoteData(
                                'certificationQuantity',
                                quoteData.certificationQuantity + 1
                              )
                            }
                            className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-header-border bg-white text-header-text transition-all hover:border-header-accent hover:bg-header-accent/5"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {quoteData.serviceType === 'inspection' && (
                    <div className="space-y-6">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-header-text">
                          Tipo de Inspección
                        </label>
                        <div className="grid gap-3 md:grid-cols-2">
                          {[
                            { id: 'visual', label: 'Inspección Visual' },
                            { id: 'ultrasonido', label: 'Ultrasonido' },
                            { id: 'penetrantes', label: 'Líquidos Penetrantes' },
                            { id: 'magneticas', label: 'Partículas Magnéticas' },
                          ].map((type) => (
                            <button
                              key={type.id}
                              onClick={() =>
                                updateQuoteData('inspectionType', type.id)
                              }
                              className={`rounded-lg border-2 p-4 text-left transition-all ${
                                quoteData.inspectionType === type.id
                                  ? 'border-header-accent bg-header-accent/5'
                                  : 'border-header-border hover:border-header-accent/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-header-text">
                                  {type.label}
                                </span>
                                {quoteData.inspectionType === type.id && (
                                  <Check
                                    size={18}
                                    className="text-header-accent"
                                  />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-header-text">
                          Alcance de la Inspección
                        </label>
                        <div className="grid gap-3 md:grid-cols-3">
                          {[
                            { id: 'puntual', label: 'Puntual' },
                            { id: 'parcial', label: 'Parcial' },
                            { id: 'completa', label: 'Completa' },
                          ].map((scope) => (
                            <button
                              key={scope.id}
                              onClick={() =>
                                updateQuoteData('inspectionScope', scope.id)
                              }
                              className={`rounded-lg border-2 p-4 text-left transition-all ${
                                quoteData.inspectionScope === scope.id
                                  ? 'border-header-accent bg-header-accent/5'
                                  : 'border-header-border hover:border-header-accent/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-header-text">
                                  {scope.label}
                                </span>
                                {quoteData.inspectionScope === scope.id && (
                                  <Check
                                    size={18}
                                    className="text-header-accent"
                                  />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-header-text">
                          Urgencia
                        </label>
                        <div className="grid gap-3 md:grid-cols-2">
                          {[
                            { id: 'normal', label: 'Normal (7-10 días)' },
                            { id: 'urgente', label: 'Urgente (2-3 días)' },
                          ].map((urgency) => (
                            <button
                              key={urgency.id}
                              onClick={() =>
                                updateQuoteData('inspectionUrgency', urgency.id)
                              }
                              className={`rounded-lg border-2 p-4 text-left transition-all ${
                                quoteData.inspectionUrgency === urgency.id
                                  ? 'border-header-accent bg-header-accent/5'
                                  : 'border-header-border hover:border-header-accent/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-header-text">
                                  {urgency.label}
                                </span>
                                {quoteData.inspectionUrgency === urgency.id && (
                                  <Check
                                    size={18}
                                    className="text-header-accent"
                                  />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Additional Info */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h2 className="mb-2 text-2xl font-bold text-header-text">
                    Información adicional
                  </h2>
                  <p className="mb-6 text-header-text-secondary">
                    Completa los detalles de ubicación y fecha
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-header-text">
                        <MapPin size={16} className="text-header-accent" />
                        Ubicación
                      </label>
                      <input
                        type="text"
                        value={quoteData.location}
                        onChange={(e) =>
                          updateQuoteData('location', e.target.value)
                        }
                        placeholder="Ciudad, Estado"
                        className="w-full rounded-lg border-2 border-header-border bg-white px-4 py-3 text-header-text focus:border-header-accent focus:outline-none focus:ring-4 focus:ring-header-accent/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-header-text">
                        <Calendar size={16} className="text-header-accent" />
                        Fecha Preferida
                      </label>
                      <input
                        type="date"
                        value={quoteData.preferredDate}
                        onChange={(e) =>
                          updateQuoteData('preferredDate', e.target.value)
                        }
                        className="w-full rounded-lg border-2 border-header-border bg-white px-4 py-3 text-header-text focus:border-header-accent focus:outline-none focus:ring-4 focus:ring-header-accent/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-header-text">
                        <Clock size={16} className="text-header-accent" />
                        Duración Estimada
                      </label>
                      <select
                        value={quoteData.duration}
                        onChange={(e) =>
                          updateQuoteData('duration', e.target.value)
                        }
                        className="w-full rounded-lg border-2 border-header-border bg-white px-4 py-3 text-header-text focus:border-header-accent focus:outline-none focus:ring-4 focus:ring-header-accent/10"
                      >
                        <option value="">Seleccionar duración</option>
                        <option value="1-dia">1 día</option>
                        <option value="2-3-dias">2-3 días</option>
                        <option value="1-semana">1 semana</option>
                        <option value="2-semanas">2 semanas</option>
                        <option value="1-mes">1 mes</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h2 className="mb-2 text-2xl font-bold text-header-text">
                    Información de contacto
                  </h2>
                  <p className="mb-6 text-header-text-secondary">
                    Déjanos tus datos para enviarte la cotización
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-header-text">
                        <Building2 size={16} className="text-header-accent" />
                        Empresa
                      </label>
                      <input
                        type="text"
                        value={quoteData.company}
                        onChange={(e) =>
                          updateQuoteData('company', e.target.value)
                        }
                        placeholder="Nombre de la empresa"
                        className="w-full rounded-lg border-2 border-header-border bg-white px-4 py-3 text-header-text focus:border-header-accent focus:outline-none focus:ring-4 focus:ring-header-accent/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-header-text">
                        <User size={16} className="text-header-accent" />
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        value={quoteData.contactName}
                        onChange={(e) =>
                          updateQuoteData('contactName', e.target.value)
                        }
                        placeholder="Tu nombre completo"
                        className="w-full rounded-lg border-2 border-header-border bg-white px-4 py-3 text-header-text focus:border-header-accent focus:outline-none focus:ring-4 focus:ring-header-accent/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-header-text">
                        <Mail size={16} className="text-header-accent" />
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        value={quoteData.email}
                        onChange={(e) =>
                          updateQuoteData('email', e.target.value)
                        }
                        placeholder="correo@empresa.com"
                        className="w-full rounded-lg border-2 border-header-border bg-white px-4 py-3 text-header-text focus:border-header-accent focus:outline-none focus:ring-4 focus:ring-header-accent/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-header-text">
                        <Phone size={16} className="text-header-accent" />
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={quoteData.phone}
                        onChange={(e) =>
                          updateQuoteData('phone', e.target.value)
                        }
                        placeholder="+52 123 456 7890"
                        className="w-full rounded-lg border-2 border-header-border bg-white px-4 py-3 text-header-text focus:border-header-accent focus:outline-none focus:ring-4 focus:ring-header-accent/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-header-text">
                        <FileText size={16} className="text-header-accent" />
                        Mensaje Adicional (Opcional)
                      </label>
                      <textarea
                        value={quoteData.message}
                        onChange={(e) =>
                          updateQuoteData('message', e.target.value)
                        }
                        placeholder="Cuéntanos más sobre tus necesidades..."
                        rows={4}
                        className="w-full rounded-lg border-2 border-header-border bg-white px-4 py-3 text-header-text focus:border-header-accent focus:outline-none focus:ring-4 focus:ring-header-accent/10"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between border-t border-header-border pt-6">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 rounded-lg border-2 border-header-border px-6 py-3 font-semibold text-header-text transition-all hover:border-header-accent hover:bg-header-accent/5"
                  >
                    <ArrowLeft size={18} />
                    Anterior
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceedToNextStep()}
                    className="flex items-center gap-2 rounded-lg bg-header-accent px-6 py-3 font-semibold text-white transition-all hover:bg-header-accent-dark disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Siguiente
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceedToNextStep()}
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-header-accent to-cyan-600 px-8 py-3 font-bold text-white transition-all hover:shadow-lg hover:shadow-header-accent/25 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Sparkles size={18} />
                    Enviar Cotización
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Price Summary Sidebar */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-2xl border border-header-border bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-header-accent to-header-accent-dark">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-header-text">
                  Estimación en Tiempo Real
                </h3>
              </div>

              <div className="mb-6 rounded-xl bg-gradient-to-br from-header-accent to-cyan-600 p-6 text-white">
                <p className="mb-2 text-sm opacity-90">Costo Estimado</p>
                <p className="text-4xl font-black">
                  ${estimatedPrice.toLocaleString('es-MX')}
                  <span className="text-lg font-normal"> MXN</span>
                </p>
                <p className="mt-2 text-xs opacity-75">
                  *Precio estimado sujeto a confirmación
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between border-b border-header-border pb-3">
                  <span className="text-sm text-header-text-secondary">
                    Servicio
                  </span>
                  <span className="text-sm font-semibold text-header-text">
                    {quoteData.serviceType === 'training'
                      ? 'Capacitación'
                      : quoteData.serviceType === 'certification'
                      ? 'Certificación'
                      : quoteData.serviceType === 'inspection'
                      ? 'Inspección'
                      : 'No seleccionado'}
                  </span>
                </div>

                {quoteData.serviceType === 'training' && (
                  <>
                    {quoteData.trainingType && (
                      <div className="flex items-start justify-between border-b border-header-border pb-3">
                        <span className="text-sm text-header-text-secondary">
                          Tipo
                        </span>
                        <span className="text-right text-sm font-medium text-header-text">
                          {quoteData.trainingType === 'rigpass'
                            ? 'RigPass'
                            : quoteData.trainingType === 'altura'
                            ? 'Trabajos en Altura'
                            : quoteData.trainingType === 'seguridad'
                            ? 'Seguridad Industrial'
                            : 'Operación de Equipos'}
                        </span>
                      </div>
                    )}
                    {quoteData.participants > 0 && (
                      <div className="flex items-start justify-between border-b border-header-border pb-3">
                        <span className="text-sm text-header-text-secondary">
                          Participantes
                        </span>
                        <span className="text-sm font-medium text-header-text">
                          {quoteData.participants}
                        </span>
                      </div>
                    )}
                  </>
                )}

                {quoteData.serviceType === 'certification' && (
                  <>
                    {quoteData.certificationLevel && (
                      <div className="flex items-start justify-between border-b border-header-border pb-3">
                        <span className="text-sm text-header-text-secondary">
                          Nivel
                        </span>
                        <span className="text-sm font-medium text-header-text">
                          {quoteData.certificationLevel.replace('-', ' ')}
                        </span>
                      </div>
                    )}
                    {quoteData.certificationQuantity > 0 && (
                      <div className="flex items-start justify-between border-b border-header-border pb-3">
                        <span className="text-sm text-header-text-secondary">
                          Personas
                        </span>
                        <span className="text-sm font-medium text-header-text">
                          {quoteData.certificationQuantity}
                        </span>
                      </div>
                    )}
                  </>
                )}

                {quoteData.location && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-header-text-secondary">
                      Ubicación
                    </span>
                    <span className="text-right text-sm font-medium text-header-text">
                      {quoteData.location}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-lg border-l-4 border-header-accent bg-header-accent/5 p-4">
                <p className="text-xs text-header-text-secondary">
                  La cotización final puede variar según las especificaciones
                  exactas y requerimientos adicionales del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="animate-in fade-in zoom-in max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl duration-300">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Check size={32} className="text-green-600" />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-header-text">
              ¡Cotización Enviada!
            </h3>
            <p className="mb-6 text-header-text-secondary">
              Gracias por tu interés. Nuestro equipo se pondrá en contacto
              contigo en las próximas 24 horas.
            </p>
            <div className="text-sm text-header-text-secondary">
              Tu número de cotización:{' '}
              <span className="font-mono font-bold text-header-accent">
                #{Math.floor(Math.random() * 10000)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
