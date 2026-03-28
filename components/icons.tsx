import React from 'react'

type IconProps = { className?: string }

const base = 'w-5 h-5 stroke-[1.6]'

export const IconHome = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path d="M4 10.5 12 4l8 6.5V20a.5.5 0 0 1-.5.5H4.5A.5.5 0 0 1 4 20z" />
    <path d="M9 20v-6h6v6" />
  </svg>
)

export const IconSparkle = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
    <path d="M5 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
    <path d="M18 4l.5 1.5L20 6l-1.5.5L18 8l-.5-1.5L16 6l1.5-.5z" />
  </svg>
)

export const IconLayers = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path d="M12 4 3 9l9 5 9-5z" />
    <path d="m3 14 9 5 9-5" />
    <path d="m3 11 9 5 9-5" />
  </svg>
)

export const IconBox = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="M12 3v9l8 4.5" />
    <path d="M12 12 4 7.5" />
  </svg>
)

export const IconWallet = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M16 12h2.5" />
  </svg>
)

export const IconUsers = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <circle cx="9" cy="9" r="4" />
    <path d="M17 11a3 3 0 1 0-4-4" />
    <path d="M4 21v-1a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v1" />
    <path d="M15 18a4 4 0 0 1 4 4" />
  </svg>
)

export const IconSettings = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    <path d="M19.4 14a7.97 7.97 0 0 0 0-4l2-1.5-2-3.5-2.4.6a8 8 0 0 0-3.5-2L12 1H8l-.5 2.6a8 8 0 0 0-3.5 2L1.6 5l-2 3.5L1.6 10a7.97 7.97 0 0 0 0 4L-.4 15.5l2 3.5 2.4-.6a8 8 0 0 0 3.5 2L8 23h4l.5-2.6a8 8 0 0 0 3.5-2l2.4.6 2-3.5z" />
  </svg>
)

export const IconBell = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path d="M6 17h12l-1-2v-4a5 5 0 1 0-10 0v4z" />
    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  </svg>
)

export const IconPlus = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
)

export const IconSearch = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <circle cx="11" cy="11" r="6" />
    <path d="m16 16 4 4" />
  </svg>
)

export const IconChevron = ({ className = base, direction = 'right' }: IconProps & { direction?: 'left' | 'right' | 'down' }) => {
  const rotations: Record<'left' | 'right' | 'down', string> = {
    right: 'rotate-0',
    left: 'rotate-180',
    down: 'rotate-90',
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${className} transition-transform ${rotations[direction]}`}
      fill="none"
      stroke="currentColor"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export const IconDots = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
    <circle cx="5" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="19" cy="12" r="1.5" />
  </svg>
)

export const IconTab = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18" />
  </svg>
)

export const IconMenu = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const IconLock = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M9 10V8a3 3 0 0 1 6 0v2" />
  </svg>
)

export const IconCircle = ({ className = base }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
    <circle cx="12" cy="12" r="6" />
  </svg>
)
