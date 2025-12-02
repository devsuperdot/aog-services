'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import 'katex/dist/katex.min.css'

interface MessageRendererProps {
  content: string
  className?: string
}

export default function MessageRenderer({ content, className = '' }: MessageRendererProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className={`message-renderer ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          // Code blocks with syntax highlighting
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const codeString = String(children).replace(/\n$/, '')
            const language = match ? match[1] : ''

            return !inline && match ? (
              <div className="code-block-wrapper group relative my-4 overflow-hidden rounded-lg border border-white/10 bg-[#1e1e1e]">
                {/* Language label and copy button */}
                <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-4 py-2">
                  <span className="text-xs font-light text-white/50">{language}</span>
                  <button
                    onClick={() => handleCopyCode(codeString)}
                    className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-white/50 transition-colors hover:bg-white/5 hover:text-white/80"
                  >
                    {copiedCode === codeString ? (
                      <>
                        <Check className="h-3 w-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code with syntax highlighting */}
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={language}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    padding: '1rem',
                    background: 'transparent',
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                  }}
                  codeTagProps={{
                    style: {
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    },
                  }}
                  {...props}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code
                className="inline-code rounded bg-white/10 px-1.5 py-0.5 text-[0.85em] font-mono text-aog-primary"
                {...props}
              >
                {children}
              </code>
            )
          },

          // Paragraphs
          p: ({ children }) => (
            <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>
          ),

          // Headers - Optimized for chat context
          h1: ({ children }) => (
            <h1 className="mb-2 mt-3 text-base font-semibold text-white first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-2 mt-2 text-[15px] font-semibold text-white first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-2 mt-2 text-sm font-semibold text-white/90 first:mt-0">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mb-1.5 mt-2 text-sm font-medium text-white/80 first:mt-0">
              {children}
            </h4>
          ),

          // Lists
          ul: ({ children }) => (
            <ul className="mb-3 ml-4 space-y-1 list-disc marker:text-aog-primary/60">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-3 ml-4 space-y-1 list-decimal marker:text-aog-primary/60">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="pl-1 leading-relaxed text-[13px] sm:text-sm">{children}</li>
          ),

          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-aog-primary underline decoration-aog-primary/30 underline-offset-2 transition-colors hover:decoration-aog-primary"
            >
              {children}
            </a>
          ),

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="my-2 border-l-2 border-aog-primary/40 bg-white/5 pl-3 py-1.5 italic text-white/80 text-[13px] sm:text-sm">
              {children}
            </blockquote>
          ),

          // Tables
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full border-collapse">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-white/5 text-left">{children}</thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-white/5 last:border-0">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-sm font-semibold text-white">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-sm text-white/80">{children}</td>
          ),

          // Horizontal rule
          hr: () => (
            <hr className="my-3 border-t border-white/10" />
          ),

          // Emphasis
          strong: ({ children }) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-white/90">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
