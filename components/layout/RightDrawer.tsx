"use client"

import { ReactNode } from 'react'
import { IconChevron } from '@/components/icons'

interface RightDrawerProps {
  title: string
  description?: string
  open: boolean
  onClose: () => void
  children: ReactNode
}

export function RightDrawer({ title, description, open, onClose, children }: RightDrawerProps) {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-30 w-[420px] max-w-[92vw] border-l border-white/70 bg-white/95 shadow-soft transition-transform duration-200 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/80 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-neutral-800">{title}</p>
          {description && <p className="text-xs text-neutral-400">{description}</p>}
        </div>
        <button
          onClick={onClose}
          className="rounded-full p-2 text-neutral-400 transition hover:bg-accent-50 hover:text-neutral-700"
          aria-label="Close drawer"
        >
          <IconChevron className="h-4 w-4 rotate-180" />
        </button>
      </div>
      <div className="h-[calc(100%-60px)] overflow-auto px-4 py-4">{children}</div>
    </div>
  )
}
