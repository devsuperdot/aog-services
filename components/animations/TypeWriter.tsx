'use client'

import { motion } from 'framer-motion'

interface TypeWriterProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export const TypeWriter = ({ text, className = '', delay = 0, speed = 0.03 }: TypeWriterProps) => {
  const characters = text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          className="inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface CodeRevealProps {
  text: string
  className?: string
  delay?: number
}

export const CodeReveal = ({ text, className = '', delay = 0 }: CodeRevealProps) => {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  }

  const wordVariant = {
    hidden: {
      opacity: 0,
      filter: 'blur(4px)',
      x: -10,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          <motion.span variants={wordVariant} className="inline-block">
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </motion.span>
  )
}
