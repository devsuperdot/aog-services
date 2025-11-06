/**
 * Reusable Grid Background Components
 * Centralized minimal grid patterns for AOG design system
 */

// Dot-based grid patterns (60px repeating)
export const MinimalGridLight = () => (
  <div className="pointer-events-none absolute inset-0 opacity-[0.015]">
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
)

export const MinimalGridDark = () => (
  <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
)

// Line-based grid patterns (thirds) - for hero sections
export const MinimalGridLinesDark = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.02]">
    <div className="absolute left-0 top-0 h-px w-full bg-aog-primary" />
    <div className="absolute left-0 top-1/3 h-px w-full bg-aog-primary" />
    <div className="absolute left-0 top-2/3 h-px w-full bg-aog-primary" />
    <div className="absolute left-1/3 top-0 h-full w-px bg-aog-primary" />
    <div className="absolute left-2/3 top-0 h-full w-px bg-aog-primary" />
  </div>
)

export const MinimalGridLinesLight = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5">
    <div className="absolute left-0 top-0 h-px w-full bg-black" />
    <div className="absolute left-0 top-1/3 h-px w-full bg-black" />
    <div className="absolute left-0 top-2/3 h-px w-full bg-black" />
    <div className="absolute left-1/3 top-0 h-full w-px bg-black" />
    <div className="absolute left-2/3 top-0 h-full w-px bg-black" />
  </div>
)

export const CornerAccents = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const colorClass = variant === 'light' ? 'border-aog-primary/30' : 'border-aog-primary/20'

  return (
    <>
      <div className={`absolute left-0 top-0 h-32 w-32 border-l-2 border-t-2 ${colorClass}`} />
      <div className={`absolute bottom-0 right-0 h-32 w-32 border-b-2 border-r-2 ${colorClass}`} />
    </>
  )
}
