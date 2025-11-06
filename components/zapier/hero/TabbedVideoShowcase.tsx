'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play, ArrowLeft, ArrowRight } from 'lucide-react'

/**
 * TabbedVideoShowcase Component
 *
 * Tabbed section with video player, info card and template carousel
 */

interface Tab {
  id: string
  label: string
}

interface App {
  name: string
  icon: string
}

interface Template {
  title: string
  apps: App[]
  href: string
}

const tabs: Tab[] = [
  { id: 'workflows', label: 'AI Workflows' },
  { id: 'agents', label: 'AI Agents' },
  { id: 'chatbots', label: 'AI Chatbots' },
  { id: 'tables', label: 'Tables' },
  { id: 'interfaces', label: 'Interfaces' },
  { id: 'canvas', label: 'Canvas' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'functions', label: 'Functions' },
  { id: 'apps', label: '8,000 apps' },
]

const templates: Template[] = [
  {
    title: 'Let AI handle your IT support tickets',
    apps: [
      { name: 'Jira', icon: 'https://zapier-images.imgix.net/storage/services/07d11aa2eaa1dd2b35baa0c7ebe269bc.png' },
      { name: 'Slack', icon: 'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png' },
      { name: 'ClickUp', icon: 'https://zapier-images.imgix.net/storage/services/000c15b838d86d80869cff5938fa76f3.png' },
    ],
    href: 'https://www.zapier.com/templates/details/it-helpdesk',
  },
  {
    title: 'Turn sales calls into coaching moments',
    apps: [
      { name: 'Gong', icon: 'https://zapier-images.imgix.net/storage/services/6ec110948d88c0d28dec1c24bdc14578.png' },
      { name: 'Slack', icon: 'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png' },
    ],
    href: 'https://zapier.com/templates/details/call-coach-ai-sales-success-coaching',
  },
]

export default function TabbedVideoShowcase(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string>('workflows')
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)

  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-header-accent"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-header-text-secondary">
              Your complete toolkit for AI automation
            </span>
          </div>
        </div>

        {/* Tabs - Scrollable on mobile, centered on desktop */}
        <div className="mb-6 overflow-x-auto md:mb-8">
          <div className="flex items-center justify-start gap-1 border-b border-header-border md:justify-center md:gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap border-b-2 px-3 py-2 text-xs font-medium transition-colors md:px-4 md:py-3 md:text-sm ${
                  activeTab === tab.id
                    ? 'border-header-accent text-header-text'
                    : 'border-transparent text-header-text-secondary hover:text-header-text'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid - Stack on mobile, 2 columns on large screens */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* Video Player */}
          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-opacity hover:opacity-90 md:h-12 md:w-12"
            >
              <Play size={18} className="ml-0.5 text-header-text md:size-5" />
            </button>
            <video
              src="https://res.cloudinary.com/zapier-media/video/upload/q_auto/f_auto/c_scale,w_1920/v1745864783/aiworkflowshomepage.mp4"
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
            />
          </div>

          {/* Info Card + Templates */}
          <div className="space-y-6 md:space-y-8">
            {/* Info Card */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF8F3] md:h-12 md:w-12">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:h-6 md:w-6">
                  <path d="M11 12H7.74996L13 5.75V12H16.25L11 18.25V16H8.99996V23.75L20.54 10H15V0.25L3.45996 14H11V12Z" fill="#00A99D" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-header-text md:text-2xl">AI Workflows</h3>
              <p className="text-sm text-header-text-secondary md:text-base">
                Automate advanced workflows with the full building power of Zapier.
              </p>
              <Link href="/workflows" className="btn-outline">
                Explore AI Workflows
              </Link>
            </div>

            {/* Templates */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-base font-semibold text-header-text md:text-lg">Get started fast with pre-built templates</h4>
              <div className="space-y-2 md:space-y-3">
                {templates.map((template, idx) => (
                  <a
                    key={idx}
                    href={template.href}
                    className="block rounded-lg border border-header-border bg-white p-3 transition-shadow hover:shadow-md md:p-4"
                  >
                    <div className="mb-2 text-xs font-medium text-header-text md:mb-3 md:text-sm">{template.title}</div>
                    <div className="flex gap-2">
                      {template.apps.map((app, appIdx) => (
                        <div key={appIdx} className="relative h-6 w-6 overflow-hidden rounded-full md:h-8 md:w-8">
                          <Image
                            src={app.icon}
                            alt={`${app.name} icon`}
                            fill
                            sizes="32px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </a>
                ))}
                <Link
                  href="https://zapier.com/templates"
                  className="block rounded-lg border border-header-border bg-white p-3 text-xs font-medium text-header-accent transition-shadow hover:shadow-md md:p-4 md:text-sm"
                >
                  See more templates →
                </Link>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  disabled
                  className="rounded-full border border-header-border p-1.5 text-header-text-secondary opacity-50 md:p-2"
                  aria-label="Previous"
                >
                  <ArrowLeft size={16} className="md:size-5" />
                </button>
                <button className="rounded-full border border-header-border p-1.5 text-header-text transition-colors hover:bg-header-hover md:p-2" aria-label="Next">
                  <ArrowRight size={16} className="md:size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
