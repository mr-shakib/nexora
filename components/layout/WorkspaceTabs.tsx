"use client"

import { useState } from 'react'
import { IconDots, IconTab } from '@/components/icons'

const tabs = ['Overview', 'Tasks', 'Files', 'Budget', 'Activity', 'Timeline']

export function WorkspaceTabs() {
  const [active, setActive] = useState('Overview')

  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-2 lg:px-3 py-2 shadow-sm">
      <div className="flex items-center gap-1 lg:gap-2 overflow-x-auto hide-scrollbar flex-1 mr-2 relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`flex-shrink-0 whitespace-nowrap rounded-xl px-3 py-1.5 text-sm font-semibold transition ${
              active === tab
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-500 hover:bg-accent-50 hover:text-neutral-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-1 lg:gap-2 text-neutral-400 flex-shrink-0">
        <button className="rounded-full p-1.5 lg:p-2 transition hover:bg-accent-50" aria-label="More">
          <IconDots className="h-4 w-4" />
        </button>
        <button className="hidden sm:flex items-center gap-1 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white shadow-soft">
          <IconTab className="h-4 w-4" />
          Tabs stay on top
        </button>
      </div>
    </div>
  )
}
