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
} from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  options?: ChatOption[]
}

interface ChatOption {
  id: string
  label: string
  icon?: React.ElementType
  action: () => void
}

const QUICK_QUESTIONS = [
  {
    id: 'services',
    label: '¿Qué servicios ofrecen?',
    icon: Wrench,
    response: 'Ofrecemos 6 servicios especializados para la industria petrolera:\n\n• Control de Sólidos\n• Bombeo Hidráulico\n• Instrumentación\n• Servicios de Pesca\n• Mantenimiento de Equipos\n• Soporte Técnico 24/7\n\n¿Te gustaría saber más sobre alguno en específico?',
  },
  {
    id: 'emergency',
    label: 'Servicio de emergencia',
    icon: Zap,
    response: 'Nuestro servicio de emergencia está disponible 24/7 para atender cualquier situación crítica.\n\n📞 +52 (229) 123 4567\n\n¿Necesitas contactar ahora con un técnico?',
  },
  {
    id: 'quote',
    label: 'Solicitar cotización',
    icon: FileText,
    response: 'Perfecto! Para proporcionarte una cotización precisa, necesitamos algunos detalles.\n\n¿Prefieres que te contactemos por teléfono o email?',
  },
  {
    id: 'contact',
    label: 'Información de contacto',
    icon: Phone,
    response: '📍 Ubicación: Coatzacoalcos, Veracruz\n📞 Teléfono: +52 (229) 123 4567\n📧 Email: contacto@aogservices.com\n🕐 Horario: Lun-Vie 8:00 AM - 6:00 PM\n\n¿En qué más puedo ayudarte?',
  },
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '¡Hola! Soy el asistente virtual de AOG Services. ¿En qué puedo ayudarte hoy?',
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
      'Perfecto! Te estoy conectando con nuestro servicio técnico de emergencia.\n\n📞 Puedes llamar directamente al: +52 (229) 123 4567\n\nUn técnico te atenderá de inmediato.',
      [
        {
          id: 'call-now',
          label: 'Llamar ahora',
          icon: Phone,
          action: () => {
            window.location.href = 'tel:+522291234567'
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
        'Excelente! Nuestro equipo te contactará por teléfono.\n\n📞 ¿Cuál es tu número de contacto? También puedes llamarnos directamente al +52 (229) 123 4567',
        [
          {
            id: 'call-now',
            label: 'Llamar ahora',
            icon: Phone,
            action: () => {
              window.location.href = 'tel:+522291234567'
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
        'Perfecto! Enviaremos la cotización a tu email.\n\n📧 Puedes escribirnos a: contacto@aogservices.com\n\nO llena nuestro formulario de contacto para una respuesta más rápida.',
        [
          {
            id: 'email-now',
            label: 'Enviar email',
            icon: Mail,
            action: () => {
              window.location.href = 'mailto:contacto@aogservices.com'
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
      'Te redirigiré a nuestra página de servicios donde encontrarás información detallada sobre cada uno.',
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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue
    addMessage('user', userMessage)
    setInputValue('')

    await simulateTyping()

    // Simple AI-like response
    addMessage(
      'bot',
      'Gracias por tu mensaje. Un representante revisará tu consulta y te contactará pronto.\n\n¿Hay algo más en lo que pueda ayudarte?',
      QUICK_QUESTIONS.map((q) => ({
        id: q.id,
        label: q.label,
        icon: q.icon,
        action: () => handleQuickQuestion(q.id),
      }))
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Badge */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-aog-primary bg-black shadow-2xl shadow-aog-primary/50 transition-all sm:bottom-8 sm:right-8"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-aog-primary/30 via-aog-primary/10 to-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-aog-primary"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Icon */}
            <Bot className="relative z-10 h-7 w-7 text-aog-primary" />

            {/* New message indicator */}
            {hasNewMessage && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-aog-primary"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-white"
                />
              </motion.div>
            )}

            {/* Floating particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-aog-primary"
                animate={{
                  y: [0, -30],
                  x: [0, Math.random() * 20 - 10],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeOut',
                }}
                style={{
                  left: `${30 + i * 20}%`,
                  bottom: '20%',
                }}
              />
            ))}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 flex h-[calc(100vh-80px)] max-h-[700px] flex-col overflow-hidden border border-aog-primary/30 bg-black shadow-2xl shadow-aog-primary/20 sm:bottom-8 sm:left-auto sm:right-8 sm:h-[650px] sm:w-[420px]"
          >
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-black via-aog-primary/10 to-black p-4">
              {/* Animated line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-aog-primary to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Bot avatar */}
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-aog-primary/50 bg-gradient-to-br from-aog-primary/20 to-transparent">
                      <Bot className="h-5 w-5 text-aog-primary" />
                    </div>
                    {/* Online indicator */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-green-500"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-light text-white">Asistente AOG</div>
                      <Zap className="h-3 w-3 text-aog-primary" />
                    </div>
                    <div className="flex items-center gap-1 text-xs font-light text-white/50">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Disponible 24/7
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/60 transition-all hover:border-aog-primary hover:text-aog-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-black p-4" style={{ scrollbarWidth: 'thin' }}>
              <div className="space-y-4">
                {messages.map((message, idx) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}
                    >
                      {/* Message bubble */}
                      <div
                        className={`overflow-hidden ${
                          message.type === 'user'
                            ? 'border-l-2 border-aog-primary bg-aog-primary/10'
                            : 'border-l-2 border-white/10 bg-white/5'
                        } p-3`}
                      >
                        <div className="mb-1 flex items-center gap-2">
                          {message.type === 'bot' ? (
                            <Bot className="h-3 w-3 text-aog-primary" />
                          ) : (
                            <User className="h-3 w-3 text-white/60" />
                          )}
                          <div className="text-[10px] font-light uppercase tracking-wider text-white/40">
                            {message.type === 'bot' ? 'AOG Assistant' : 'Tú'}
                          </div>
                        </div>
                        <div className="whitespace-pre-line text-sm font-light leading-relaxed text-white">
                          {message.content}
                        </div>
                      </div>

                      {/* Options */}
                      {message.options && message.options.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mt-3 space-y-2"
                        >
                          {message.options.map((option) => {
                            const Icon = option.icon
                            return (
                              <button
                                key={option.id}
                                onClick={option.action}
                                className="group flex w-full items-center gap-2 border border-white/10 bg-white/5 p-3 text-left text-xs font-light text-white transition-all hover:border-aog-primary hover:bg-aog-primary/10"
                              >
                                {Icon && <Icon className="h-3.5 w-3.5 text-aog-primary" />}
                                <span className="flex-1">{option.label}</span>
                                <ChevronRight className="h-3 w-3 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-aog-primary" />
                              </button>
                            )
                          })}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="border-l-2 border-white/10 bg-white/5 p-3">
                      <div className="flex items-center gap-2">
                        <Bot className="h-3 w-3 text-aog-primary" />
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{
                                y: [0, -8, 0],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                              className="h-2 w-2 rounded-full bg-aog-primary/50"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-white/10 bg-black p-4">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 border-b border-white/10 bg-transparent px-0 py-2 text-sm font-light text-white placeholder:text-white/30 focus:border-aog-primary focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="flex h-10 w-10 items-center justify-center border border-aog-primary/30 bg-aog-primary/10 text-aog-primary transition-all hover:border-aog-primary hover:bg-aog-primary/20 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {/* Powered by AI */}
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-light text-white/30">
                <Zap className="h-3 w-3" />
                <span>Asistente inteligente AOG</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
