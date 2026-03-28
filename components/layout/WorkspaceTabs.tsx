"use client"

import { useState } from 'react'
import { IconDots, IconTab } from '@/components/icons'

const tabs = ['Overview', 'Tasks', 'Files', 'Budget', 'Activity', 'Timeline']

export function WorkspaceTabs() {
  const [active, setActive] = useState('Overview')

  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-3 py-2 shadow-sm">
      <div className="flex items-center gap-2 overflow-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`nav-pill text-sm font-semibold ${
              active === tab
                ? 'nav-pill-active'
                : 'text-neutral-500 hover:bg-accent-50 hover:text-neutral-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 text-neutral-400">
        <button className="rounded-full p-2 transition hover:bg-accent-50" aria-label="More">
          <IconDots className="h-4 w-4" />
        </button>
        <button className="flex items-center gap-1 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white shadow-soft">
          <IconTab className="h-4 w-4" />
          Tabs stay on top
        </button>
      </div>
    </div>
  )
}
