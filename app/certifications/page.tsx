import React from 'react'
import CertificationsSection from '@/components/home/CertificationsSection'

export const metadata = {
  title: 'Certificaciones | OTC Petroleum',
  description: 'Certificaciones y acreditaciones de OTC Petroleum',
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        {/* Gradient Orb */}
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-gradient-to-br from-header-accent/5 to-transparent blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-header-text md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-header-accent to-cyan-600 bg-clip-text text-transparent">
                Certificaciones
              </span>{' '}
              y Acreditaciones
            </h1>
            <p className="text-lg text-header-text-secondary md:text-xl">
              Validados por los organismos más reconocidos a nivel nacional e internacional
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Content */}
      <CertificationsSection />
    </main>
  )
}
