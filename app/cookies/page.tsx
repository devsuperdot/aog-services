'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Cookie, Shield, Eye, Target, BarChart3, Settings, CheckCircle2, XCircle, Clock, Mail, AlertCircle, ToggleLeft as Toggle } from 'lucide-react'
import type { Metadata } from 'next'

const cookieTypes = [
  {
    id: 'essential',
    name: 'Cookies Esenciales',
    icon: Shield,
    description: 'Necesarias para el funcionamiento básico del sitio',
    required: true,
    examples: ['Sesión de usuario', 'Seguridad', 'Preferencias de idioma', 'Carrito de compras'],
    duration: 'Sesión o hasta 1 año',
    canDisable: false
  },
  {
    id: 'functional',
    name: 'Cookies Funcionales',
    icon: Settings,
    description: 'Mejoran la funcionalidad y personalización',
    required: false,
    examples: ['Configuración de cuenta', 'Contenido personalizado', 'Recordar preferencias', 'Chat en vivo'],
    duration: 'Hasta 2 años',
    canDisable: true
  },
  {
    id: 'analytics',
    name: 'Cookies Analíticas',
    icon: BarChart3,
    description: 'Nos ayudan a entender cómo usas nuestro sitio',
    required: false,
    examples: ['Google Analytics', 'Análisis de páginas visitadas', 'Tiempo en el sitio', 'Patrones de navegación'],
    duration: 'Hasta 2 años',
    canDisable: true
  },
  {
    id: 'marketing',
    name: 'Cookies de Marketing',
    icon: Target,
    description: 'Usadas para publicidad relevante y seguimiento',
    required: false,
    examples: ['Anuncios personalizados', 'Retargeting', 'Redes sociales', 'Medición de campañas'],
    duration: 'Hasta 1 año',
    canDisable: true
  }
]

export default function CookiesPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    functional: true,
    analytics: true,
    marketing: false
  })

  const handleToggle = (type: 'functional' | 'analytics' | 'marketing') => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handleAcceptAll = () => {
    setCookiePreferences({
      functional: true,
      analytics: true,
      marketing: true
    })
    // Save preferences logic here
    alert('Preferencias guardadas: Todas las cookies aceptadas')
  }

  const handleSavePreferences = () => {
    // Save preferences logic here
    alert(`Preferencias guardadas: Funcionales: ${cookiePreferences.functional}, Analíticas: ${cookiePreferences.analytics}, Marketing: ${cookiePreferences.marketing}`)
  }

  const handleRejectAll = () => {
    setCookiePreferences({
      functional: false,
      analytics: false,
      marketing: false
    })
    // Save preferences logic here
    alert('Preferencias guardadas: Solo cookies esenciales')
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-gradient-to-br from-header-accent/5 to-transparent blur-3xl" />

        <div className="relative mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-8 md:py-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-header-accent">
            <Cookie size={16} />
            <span>Política de Cookies</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-header-text md:text-5xl lg:text-6xl">
            Cómo usamos las{' '}
            <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">
              Cookies
            </span>
          </h1>

          <p className="mb-6 text-lg text-header-text-secondary md:text-xl">
            Las cookies nos ayudan a mejorar tu experiencia en nuestro sitio. Aquí te explicamos qué son,
            cómo las usamos y cómo puedes controlarlas.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-header-text-secondary">
            <Clock size={16} />
            <span>Última actualización: 29 de Octubre, 2025</span>
          </div>
        </div>
      </section>

      {/* What are cookies */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50">
              <Cookie size={32} className="text-header-accent" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-header-text">¿Qué son las Cookies?</h2>
            <p className="mx-auto max-w-2xl text-lg text-header-text-secondary">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Eye,
                title: 'Identificación',
                description: 'Reconocen tu navegador y dispositivo'
              },
              {
                icon: Settings,
                title: 'Personalización',
                description: 'Recuerdan tus preferencias y configuración'
              },
              {
                icon: BarChart3,
                title: 'Análisis',
                description: 'Ayudan a mejorar el rendimiento del sitio'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="rounded-xl border border-header-border bg-gradient-to-br from-gray-50 to-white p-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50">
                    <Icon size={24} className="text-header-accent" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-header-text">{item.title}</h3>
                  <p className="text-sm text-header-text-secondary">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-16 md:py-20">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-header-text">
              Tipos de <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">Cookies</span> que Usamos
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-header-text-secondary">
              Utilizamos diferentes tipos de cookies para distintos propósitos
            </p>
          </div>

          <div className="space-y-6">
            {cookieTypes.map((cookie) => {
              const Icon = cookie.icon
              const isEnabled = cookie.required || (cookie.id !== 'essential' && cookiePreferences[cookie.id as keyof typeof cookiePreferences])

              return (
                <div key={cookie.id} className="overflow-hidden rounded-2xl border border-header-border bg-white shadow-sm">
                  <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-50">
                          <Icon size={24} className="text-header-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <h3 className="text-xl font-bold text-header-text">{cookie.name}</h3>
                            {cookie.required && (
                              <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                                Obligatorias
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-header-text-secondary">{cookie.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="mb-2 text-sm font-semibold text-header-text">Ejemplos:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cookie.examples.map((example, idx) => (
                              <span key={idx} className="rounded-full bg-teal-50 px-3 py-1 text-xs text-header-accent">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1.5 text-header-text-secondary">
                            <Clock size={14} />
                            <span>Duración: {cookie.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center">
                      {cookie.canDisable ? (
                        <button
                          onClick={() => handleToggle(cookie.id as 'functional' | 'analytics' | 'marketing')}
                          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                            isEnabled ? 'bg-header-accent' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform ${
                              isEnabled ? 'translate-x-7' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-header-text-secondary">
                          <Shield size={16} className="text-header-accent" />
                          <span>Siempre activas</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 rounded-xl border border-header-border bg-white p-6">
            <h3 className="mb-4 text-center text-lg font-bold text-header-text">Administrar tus Preferencias</h3>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={handleAcceptAll}
                className="rounded-lg bg-gradient-to-r from-header-accent to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
              >
                Aceptar Todas
              </button>
              <button
                onClick={handleSavePreferences}
                className="rounded-lg border-2 border-header-accent bg-white px-6 py-3 text-sm font-semibold text-header-accent transition-all hover:bg-header-accent hover:text-white"
              >
                Guardar Preferencias
              </button>
              <button
                onClick={handleRejectAll}
                className="rounded-lg border border-header-border bg-white px-6 py-3 text-sm font-medium text-header-text transition-all hover:bg-gray-50"
              >
                Solo Esenciales
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-header-text-secondary">
              Puedes cambiar tus preferencias en cualquier momento desde la configuración de tu cuenta
            </p>
          </div>
        </div>
      </section>

      {/* Third Party Cookies */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-header-text">Cookies de Terceros</h2>
            <p className="text-base text-header-text-secondary">
              Algunos de nuestros partners también pueden colocar cookies en tu dispositivo. Estas cookies nos ayudan
              a proporcionarte una mejor experiencia:
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                name: 'Google Analytics',
                purpose: 'Análisis de tráfico y comportamiento de usuarios',
                link: 'https://policies.google.com/privacy'
              },
              {
                name: 'Google Tag Manager',
                purpose: 'Gestión de etiquetas de seguimiento',
                link: 'https://policies.google.com/privacy'
              },
              {
                name: 'Facebook Pixel',
                purpose: 'Seguimiento de conversiones y remarketing',
                link: 'https://www.facebook.com/privacy'
              },
              {
                name: 'LinkedIn Insights',
                purpose: 'Análisis de visitantes profesionales',
                link: 'https://www.linkedin.com/legal/privacy-policy'
              }
            ].map((partner, index) => (
              <div key={index} className="flex items-start justify-between gap-4 rounded-lg border border-header-border bg-gray-50 p-4">
                <div className="flex-1">
                  <h4 className="mb-1 font-semibold text-header-text">{partner.name}</h4>
                  <p className="text-sm text-header-text-secondary">{partner.purpose}</p>
                </div>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm font-medium text-header-accent hover:underline"
                >
                  Política de Privacidad →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to manage cookies */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-16 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-header-text">
              Cómo Gestionar las <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">Cookies</span>
            </h2>
            <p className="text-base text-header-text-secondary">
              Tienes control total sobre las cookies. Puedes gestionarlas de varias formas:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-header-border bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50">
                <Settings size={20} className="text-header-accent" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-header-text">Configuración del Navegador</h3>
              <p className="mb-4 text-sm text-header-text-secondary">
                La mayoría de los navegadores te permiten:
              </p>
              <ul className="space-y-2 text-sm text-header-text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-header-accent" />
                  <span>Ver qué cookies están almacenadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-header-accent" />
                  <span>Eliminar cookies individualmente o todas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-header-accent" />
                  <span>Bloquear cookies de terceros</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-header-accent" />
                  <span>Bloquear cookies de sitios específicos</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-header-border bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50">
                <Toggle size={20} className="text-header-accent" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-header-text">Panel de Preferencias</h3>
              <p className="mb-4 text-sm text-header-text-secondary">
                En nuestra plataforma puedes:
              </p>
              <ul className="space-y-2 text-sm text-header-text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-header-accent" />
                  <span>Activar/desactivar categorías de cookies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-header-accent" />
                  <span>Guardar tus preferencias</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-header-accent" />
                  <span>Cambiar preferencias en cualquier momento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-header-accent" />
                  <span>Ver información detallada de cada cookie</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border-2 border-yellow-300 bg-yellow-50 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle size={24} className="mt-0.5 shrink-0 text-yellow-600" />
              <div>
                <h4 className="mb-2 text-base font-bold text-yellow-900">Nota Importante</h4>
                <p className="text-sm text-yellow-800">
                  Si deshabilitas todas las cookies, algunas funcionalidades de nuestro sitio pueden no funcionar correctamente.
                  Las cookies esenciales son necesarias para el funcionamiento básico y no se pueden desactivar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browser guides */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-header-text">Guías por Navegador</h2>
            <p className="text-base text-header-text-secondary">
              Instrucciones para gestionar cookies en los navegadores más populares
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Google Chrome', link: 'https://support.google.com/chrome/answer/95647' },
              { name: 'Mozilla Firefox', link: 'https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer' },
              { name: 'Safari', link: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
              { name: 'Microsoft Edge', link: 'https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
              { name: 'Opera', link: 'https://help.opera.com/latest/web-preferences/#cookies' },
              { name: 'Brave', link: 'https://support.brave.com/hc/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave' }
            ].map((browser, index) => (
              <a
                key={index}
                href={browser.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-header-border bg-white p-4 text-sm font-medium text-header-text transition-all hover:border-header-accent hover:bg-gray-50"
              >
                <span>{browser.name}</span>
                <span className="text-header-accent">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50 py-16 md:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        <div className="relative mx-auto w-full max-w-4xl px-6 md:px-8">
          <div className="rounded-2xl border border-header-border bg-white/80 p-8 text-center backdrop-blur-xl md:p-12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50">
              <Mail size={32} className="text-header-accent" />
            </div>

            <h2 className="mb-4 text-2xl font-bold text-header-text md:text-3xl">
              ¿Preguntas sobre Cookies?
            </h2>

            <p className="mb-8 text-base text-header-text-secondary md:text-lg">
              Si tienes dudas sobre cómo usamos las cookies o deseas más información, estamos aquí para ayudarte.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-header-accent to-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-header-accent/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-header-accent/40"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          <h3 className="mb-6 text-center text-lg font-semibold text-header-text">Documentos Relacionados</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/privacy"
              className="rounded-full border border-header-border bg-white px-4 py-2 text-sm font-medium text-header-text transition-all hover:border-header-accent hover:bg-gray-50"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="rounded-full border border-header-border bg-white px-4 py-2 text-sm font-medium text-header-text transition-all hover:border-header-accent hover:bg-gray-50"
            >
              Términos y Condiciones
            </Link>
            <Link
              href="/security"
              className="rounded-full border border-header-border bg-white px-4 py-2 text-sm font-medium text-header-text transition-all hover:border-header-accent hover:bg-gray-50"
            >
              Seguridad
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
