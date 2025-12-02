'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  X,
  Send,
  User,
  Bot,
  Zap,
  Phone,
  Mail,
  HelpCircle,
  Wrench,
  FileText,
  Clock,
  CheckCircle2,
  ChevronRight,
  Settings,
  Hammer,
  Search,
  Droplets,
} from 'lucide-react'
import { AOG_SERVICES } from '@/constants/aog'
import { CONTACT_INFO, EMERGENCY_CONTACT } from '@/constants/contact'
import MessageRenderer from './MessageRenderer'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  options?: ChatOption[]
  typing?: boolean
}

interface ChatOption {
  id: string
  label: string
  icon?: React.ElementType
  action: () => void
}

// Keywords detection for smart responses
const KEYWORDS = {
  services: ['servicio', 'servicios', 'ofrece', 'hacen', 'qué hacen', 'que ofrecen'],
  emergency: ['emergencia', 'urgente', 'ahora', 'inmediato', 'rápido', '24/7'],
  quote: ['cotización', 'cotizacion', 'precio', 'costo', 'presupuesto', 'cuánto', 'cuanto'],
  contact: ['contacto', 'teléfono', 'telefono', 'email', 'correo', 'ubicación', 'ubicacion', 'dirección', 'direccion'],
  hours: ['horario', 'hora', 'abierto', 'cerrado', 'cuando', 'atienden'],
  tech: ['técnico', 'tecnico', 'soporte', 'ayuda técnica'],
  // Specific services
  controlSolidos: ['control', 'sólidos', 'solidos', 'zarandas', 'shakers', 'lodos', 'centrifuga'],
  equiposPerifericos: ['periféricos', 'perifericos', 'silos', 'tanques', 'almacenamiento', 'desgasificador'],
  herramientas: ['herramientas', 'molienda', 'pesca', 'molinos', 'escariadores', 'limpieza'],
  mantenimiento: ['mantenimiento', 'reparación', 'reparacion', 'correctivo', 'preventivo'],
  serviciosTecnicos: ['consultoría', 'consultoria', 'ingeniería', 'ingenieria', 'capacitación', 'capacitacion', 'optimización', 'optimizacion'],
  energia: ['energía', 'energia', 'iluminación', 'iluminacion', 'generadores', 'luminarias'],
}

// Build services list from constants with markdown formatting
const getServicesListText = () => {
  return AOG_SERVICES.map((service, idx) => `${idx + 1}. **${service.title}**`).join('\n')
}

const QUICK_QUESTIONS = [
  {
    id: 'services',
    label: '¿Qué servicios ofrecen?',
    icon: Wrench,
    response: `## Nuestros Servicios\n\nOfrecemos **${AOG_SERVICES.length} servicios especializados** para la industria petrolera:\n\n${getServicesListText()}\n\n---\n\n¿Te gustaría saber más sobre alguno en específico?`,
  },
  {
    id: 'emergency',
    label: 'Servicio de emergencia',
    icon: Zap,
    response: `## Servicio de Emergencia\n\n**${EMERGENCY_CONTACT.description}**\n\n### Contáctanos ahora:\n\n- **Principal:** ${EMERGENCY_CONTACT.phone}\n- **Técnico:** ${CONTACT_INFO.phone.technical}\n\n¿Necesitas contactar ahora con un técnico?`,
  },
  {
    id: 'quote',
    label: 'Solicitar cotización',
    icon: FileText,
    response: '## Solicitar Cotización\n\nPerfecto. Para proporcionarte una **cotización precisa y personalizada**, necesitamos algunos detalles.\n\n¿Prefieres que te contactemos por **teléfono** o **email**?',
  },
  {
    id: 'contact',
    label: 'Información de contacto',
    icon: Phone,
    response: `## Información de Contacto\n\n### Ubicación\n${CONTACT_INFO.address.full}\n\n### Teléfonos\n- **Principal:** ${CONTACT_INFO.phone.primary}\n- **Técnico:** ${CONTACT_INFO.phone.technical}\n\n### Email\n${CONTACT_INFO.email.general}\n\n### Horario de Atención\n- ${CONTACT_INFO.hours.weekday}\n- ${CONTACT_INFO.hours.saturday}\n- **Emergencias:** ${CONTACT_INFO.hours.emergency}\n\n---\n\n¿En qué más puedo ayudarte?`,
  },
]

// Smart keyword detection
const detectIntent = (message: string): string | null => {
  const lowerMessage = message.toLowerCase()

  for (const [intent, keywords] of Object.entries(KEYWORDS)) {
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return intent
    }
  }

  return null
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '## Bienvenido a AOG Services\n\nSoy el **asistente virtual de AOG Services**. Estoy aquí para ayudarte con:\n\n- Información sobre nuestros servicios\n- Solicitud de cotizaciones\n- Contacto y emergencias\n- Soporte técnico 24/7\n\n¿En qué puedo ayudarte hoy?',
      timestamp: new Date(),
      options: QUICK_QUESTIONS.map((q) => ({
        id: q.id,
        label: q.label,
        icon: q.icon,
        action: () => handleQuickQuestion(q.id),
      })),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasNewMessage, setHasNewMessage] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false)
      inputRef.current?.focus()
    }
  }, [isOpen])

  const addMessage = (type: 'user' | 'bot', content: string, options?: ChatOption[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      options,
    }
    setMessages((prev) => [...prev, newMessage])

    if (type === 'bot' && !isOpen) {
      setHasNewMessage(true)
    }
  }

  const simulateTyping = async (duration: number = 1500) => {
    setIsTyping(true)
    await new Promise((resolve) => setTimeout(resolve, duration))
    setIsTyping(false)
  }

  const handleQuickQuestion = async (questionId: string) => {
    const question = QUICK_QUESTIONS.find((q) => q.id === questionId)
    if (!question) return

    // Add user message
    addMessage('user', question.label)

    // Simulate typing
    await simulateTyping()

    // Add bot response
    if (questionId === 'emergency') {
      addMessage('bot', question.response, [
        {
          id: 'call-tech',
          label: 'Sí, contactar técnico ahora',
          icon: Phone,
          action: () => handleContactTechnician(),
        },
        {
          id: 'more-info',
          label: 'Necesito más información',
          icon: HelpCircle,
          action: () => handleMoreInfo(),
        },
      ])
    } else if (questionId === 'quote') {
      addMessage('bot', question.response, [
        {
          id: 'contact-phone',
          label: 'Por teléfono',
          icon: Phone,
          action: () => handleContactMethod('phone'),
        },
        {
          id: 'contact-email',
          label: 'Por email',
          icon: Mail,
          action: () => handleContactMethod('email'),
        },
      ])
    } else if (questionId === 'services') {
      addMessage('bot', question.response, [
        {
          id: 'service-detail',
          label: 'Ver detalles de servicios',
          icon: Wrench,
          action: () => handleViewServices(),
        },
        {
          id: 'new-question',
          label: 'Hacer otra pregunta',
          icon: MessageCircle,
          action: () => handleNewQuestion(),
        },
      ])
    } else {
      addMessage('bot', question.response, [
        {
          id: 'new-question',
          label: 'Hacer otra pregunta',
          icon: MessageCircle,
          action: () => handleNewQuestion(),
        },
      ])
    }
  }

  const handleContactTechnician = async () => {
    addMessage('user', 'Sí, contactar técnico ahora')
    await simulateTyping()
    addMessage(
      'bot',
      `## Contacto con Servicio Técnico\n\nTe estoy conectando con nuestro **servicio técnico de emergencia**.\n\n### Números de contacto:\n\n- **Principal:** ${EMERGENCY_CONTACT.phone}\n- **Técnico:** ${CONTACT_INFO.phone.technical}\n\n> Un técnico te atenderá de inmediato.`,
      [
        {
          id: 'call-primary',
          label: 'Llamar al principal',
          icon: Phone,
          action: () => {
            window.location.href = `tel:${EMERGENCY_CONTACT.phone.replace(/[\s-]/g, '')}`
          },
        },
        {
          id: 'call-technical',
          label: 'Llamar al técnico',
          icon: Phone,
          action: () => {
            window.location.href = `tel:${CONTACT_INFO.phone.technical.replace(/[\s-]/g, '')}`
          },
        },
      ]
    )
  }

  const handleMoreInfo = async () => {
    addMessage('user', 'Necesito más información')
    await simulateTyping()
    addMessage(
      'bot',
      '¿Sobre qué aspecto necesitas más información?',
      QUICK_QUESTIONS.map((q) => ({
        id: q.id,
        label: q.label,
        icon: q.icon,
        action: () => handleQuickQuestion(q.id),
      }))
    )
  }

  const handleContactMethod = async (method: 'phone' | 'email') => {
    const label = method === 'phone' ? 'Por teléfono' : 'Por email'
    addMessage('user', label)
    await simulateTyping()

    if (method === 'phone') {
      addMessage(
        'bot',
        `## Contacto Telefónico\n\nNuestro equipo te contactará por **teléfono**.\n\n### Números disponibles:\n\n- **Principal:** ${CONTACT_INFO.phone.primary}\n- **Técnico:** ${CONTACT_INFO.phone.technical}\n\n¿Prefieres **llamar ahora** o llenar el **formulario de contacto**?`,
        [
          {
            id: 'call-now',
            label: 'Llamar ahora',
            icon: Phone,
            action: () => {
              window.location.href = `tel:${CONTACT_INFO.phone.primary.replace(/[\s-]/g, '')}`
            },
          },
          {
            id: 'form',
            label: 'Llenar formulario',
            icon: FileText,
            action: () => {
              window.location.href = '/contact'
            },
          },
        ]
      )
    } else {
      addMessage(
        'bot',
        `## Contacto por Email\n\nEnviaremos la cotización a tu **email**.\n\n### Direcciones de contacto:\n\n- **General:** ${CONTACT_INFO.email.general}\n- **Técnico:** ${CONTACT_INFO.email.technical}\n\n> Llena nuestro formulario de contacto para una respuesta más rápida.`,
        [
          {
            id: 'email-now',
            label: 'Enviar email',
            icon: Mail,
            action: () => {
              window.location.href = `mailto:${CONTACT_INFO.email.general}?subject=Solicitud de Cotización`
            },
          },
          {
            id: 'form',
            label: 'Llenar formulario',
            icon: FileText,
            action: () => {
              window.location.href = '/contact'
            },
          },
        ]
      )
    }
  }

  const handleViewServices = async () => {
    addMessage('user', 'Ver detalles de servicios')
    await simulateTyping(800)
    addMessage(
      'bot',
      '## Ver Servicios Completos\n\nTe redirigiré a nuestra **página de servicios** donde encontrarás:\n\n- Información detallada de cada servicio\n- Casos de éxito y aplicaciones\n- Especificaciones técnicas\n- Formularios de contacto especializados',
      [
        {
          id: 'go-services',
          label: 'Ver servicios',
          icon: ChevronRight,
          action: () => {
            window.location.href = '/services'
          },
        },
      ]
    )
  }

  const handleNewQuestion = async () => {
    addMessage('user', 'Hacer otra pregunta')
    await simulateTyping(800)
    addMessage(
      'bot',
      '¿En qué más puedo ayudarte?',
      QUICK_QUESTIONS.map((q) => ({
        id: q.id,
        label: q.label,
        icon: q.icon,
        action: () => handleQuickQuestion(q.id),
      }))
    )
  }

  const handleServiceDetail = async (serviceId: string) => {
    const service = AOG_SERVICES.find(s => s.id === serviceId)
    if (!service) return

    await simulateTyping(1000)

    const features = service.features.slice(0, 5).map(f => `- ${f}`).join('\n')
    const benefits = service.benefits.slice(0, 3).map(b => `- ${b.split(':')[0]}`).join('\n')

    addMessage(
      'bot',
      `## ${service.title}\n\n${service.description}\n\n### Características destacadas:\n\n${features}\n\n### Beneficios:\n\n${benefits}\n\n---\n\n¿Te gustaría más información o solicitar una cotización?`,
      [
        {
          id: 'more-details',
          label: 'Ver todos los detalles',
          icon: FileText,
          action: () => {
            window.location.href = `/services/${service.slug}`
          },
        },
        {
          id: 'quote-service',
          label: 'Solicitar cotización',
          icon: Mail,
          action: () => handleQuickQuestion('quote'),
        },
        {
          id: 'other-services',
          label: 'Ver otros servicios',
          icon: Wrench,
          action: () => handleQuickQuestion('services'),
        },
      ]
    )
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue
    addMessage('user', userMessage)
    setInputValue('')

    await simulateTyping(1200)

    // Smart intent detection
    const intent = detectIntent(userMessage)

    // Check for specific service requests first
    if (intent === 'controlSolidos') {
      await handleServiceDetail('control-solidos')
    } else if (intent === 'equiposPerifericos') {
      await handleServiceDetail('equipos-perifericos')
    } else if (intent === 'herramientas') {
      await handleServiceDetail('herramientas-molienda')
    } else if (intent === 'mantenimiento') {
      await handleServiceDetail('mantenimiento')
    } else if (intent === 'serviciosTecnicos') {
      await handleServiceDetail('servicios-tecnicos')
    } else if (intent === 'energia') {
      await handleServiceDetail('energia-iluminacion')
    } else if (intent === 'services') {
      await handleQuickQuestion('services')
    } else if (intent === 'emergency') {
      await handleQuickQuestion('emergency')
    } else if (intent === 'quote') {
      await handleQuickQuestion('quote')
    } else if (intent === 'contact') {
      await handleQuickQuestion('contact')
    } else if (intent === 'hours') {
      addMessage(
        'bot',
        `## Horario de Atención\n\n### Horarios regulares:\n\n- ${CONTACT_INFO.hours.weekday}\n- ${CONTACT_INFO.hours.saturday}\n- ${CONTACT_INFO.hours.sunday}\n\n### Emergencias:\n\n- **${CONTACT_INFO.hours.emergency}**\n\n---\n\n¿Necesitas algo más?`,
        QUICK_QUESTIONS.map((q) => ({
          id: q.id,
          label: q.label,
          icon: q.icon,
          action: () => handleQuickQuestion(q.id),
        }))
      )
    } else if (intent === 'tech') {
      addMessage(
        'bot',
        `## Soporte Técnico\n\nNuestro **equipo técnico especializado** está listo para ayudarte.\n\n### Disponibilidad:\n\n- ${CONTACT_INFO.hours.emergency}\n\n### Contacto directo:\n\n- **Principal:** ${CONTACT_INFO.phone.primary}\n- **Técnico:** ${CONTACT_INFO.phone.technical}\n\n¿Necesitas asistencia inmediata?`,
        [
          {
            id: 'call-tech',
            label: 'Llamar a soporte técnico',
            icon: Phone,
            action: () => {
              window.location.href = `tel:${CONTACT_INFO.phone.technical.replace(/[\s-]/g, '')}`
            },
          },
          {
            id: 'more-info',
            label: 'Más información',
            icon: HelpCircle,
            action: () => handleMoreInfo(),
          },
        ]
      )
    } else {
      // Generic response with contextual suggestions
      const responses = [
        '**Entiendo tu consulta.** Un miembro de nuestro equipo revisará tu mensaje y te contactará pronto.',
        '**Gracias por tu mensaje.** ¿Puedo ayudarte con algo específico mientras tanto?',
        '**He registrado tu consulta.** ¿Hay algo más en lo que pueda ayudarte ahora?',
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      addMessage(
        'bot',
        randomResponse + '\n\n---\n\nAquí tienes algunas **opciones rápidas:**',
        QUICK_QUESTIONS.map((q) => ({
          id: q.id,
          label: q.label,
          icon: q.icon,
          action: () => handleQuickQuestion(q.id),
        }))
      )
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Badge - Refined */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-aog-primary/40 bg-black shadow-lg shadow-black/20 transition-all hover:border-aog-primary hover:shadow-aog-primary/20 sm:h-16 sm:w-16"
            >
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-aog-primary/20 to-transparent" />

              {/* Single subtle pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-aog-primary/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />

              {/* Icon - simple */}
              <Bot className="relative z-10 h-6 w-6 text-aog-primary sm:h-7 sm:w-7" strokeWidth={1.5} />

              {/* New message indicator - subtle */}
              {hasNewMessage && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-black bg-aog-primary"
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window - Optimized for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatContainerRef}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-black shadow-2xl sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(700px,calc(100vh-100px))] sm:w-[min(440px,calc(100vw-48px))] sm:rounded-2xl sm:border sm:border-white/10 md:bottom-8 md:right-8 md:h-[680px] md:w-[460px]"
          >
            {/* Header - Refined */}
            <div className="relative border-b border-white/5 bg-black/95 p-4 backdrop-blur-sm">
              {/* Subtle bottom border */}
              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-aog-primary/20 to-transparent" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Bot avatar - minimal */}
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-aog-primary/30 bg-aog-primary/10">
                      <Bot className="h-5 w-5 text-aog-primary" strokeWidth={1.5} />
                    </div>
                    {/* Simple online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-black bg-green-500" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-light text-white">
                        Asistente AOG
                      </div>
                    </div>
                    <div className="text-xs font-light text-white/50">
                      En línea
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center text-white/60 transition-colors hover:text-white"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Messages - Enhanced scrolling */}
            <div
              className="flex-1 overflow-y-auto bg-gradient-to-b from-black via-black to-neutral-950 p-3 sm:p-4"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,107,53,0.3) transparent',
              }}
            >
              <div className="space-y-3 sm:space-y-4">
                {messages.map((message, idx) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      delay: idx === messages.length - 1 ? 0 : 0,
                    }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[90%] sm:max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}
                    >
                      {/* Message bubble - elegant design like ChatGPT */}
                      <div
                        className={`${
                          message.type === 'user'
                            ? 'rounded-3xl rounded-br-lg bg-aog-primary/15'
                            : 'rounded-3xl rounded-bl-lg bg-white/[0.07]'
                        } px-4 py-3`}
                      >
                        <MessageRenderer content={message.content} />
                      </div>

                      {/* Options - Clean buttons */}
                      {message.options && message.options.length > 0 && (
                        <div className="mt-2.5 space-y-1.5">
                          {message.options.map((option) => {
                            const Icon = option.icon
                            return (
                              <button
                                key={option.id}
                                onClick={option.action}
                                className="group flex w-full items-center gap-2.5 rounded-xl border border-white/5 bg-white/5 p-2.5 text-left text-xs font-light text-white/80 transition-all hover:border-aog-primary/30 hover:bg-aog-primary/10 hover:text-white sm:text-sm"
                              >
                                {/* Icon */}
                                {Icon && (
                                  <div className="flex h-6 w-6 items-center justify-center rounded border border-aog-primary/20 bg-aog-primary/10">
                                    <Icon className="h-3 w-3 text-aog-primary" strokeWidth={1.5} />
                                  </div>
                                )}

                                <span className="flex-1">{option.label}</span>

                                {/* Arrow */}
                                <ChevronRight className="h-3.5 w-3.5 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:text-aog-primary" strokeWidth={1.5} />
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator - Elegant */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="rounded-3xl rounded-bl-lg bg-white/[0.07] px-4 py-3">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -6, 0],
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.15,
                              ease: 'easeInOut',
                            }}
                            className="h-2 w-2 rounded-full bg-white/40"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input - Clean */}
            <div className="border-t border-white/5 bg-black/95 p-3 backdrop-blur-sm sm:p-4">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-light text-white placeholder:text-white/30 transition-all focus:border-aog-primary/40 focus:bg-white/10 focus:outline-none sm:px-4 sm:py-2.5"
                />

                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-aog-primary/30 bg-aog-primary/10 text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/20 disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10"
                >
                  <Send className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* Footer */}
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] font-light text-white/25">
                <Zap className="h-2.5 w-2.5" />
                <span>Asistente inteligente AOG</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
