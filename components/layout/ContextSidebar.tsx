"use client"

import { useMemo } from 'react'
import { IconChevron, IconDots, IconLock } from '@/components/icons'
import { getContextMenu } from '@/lib/navigation'
import { usePersistentState } from '@/lib/usePersistentState'
import { CompanyType, NavItem, PrimaryNavKey, Role } from '@/types/navigation'

interface ContextSidebarProps {
  primary: PrimaryNavKey
  company: CompanyType
  role: Role
  onSelect?: (item: NavItem) => void
}

export function ContextSidebar({ primary, company, role, onSelect }: ContextSidebarProps) {
  const [expanded, setExpanded] = usePersistentState<boolean>('nav:context-expanded', true)

  const items = useMemo(() => getContextMenu(primary, company, role), [primary, company, role])

  return (
    <aside
      className={`glass-panel flex h-full w-72 flex-col border border-white/70 bg-white/80 px-3 py-4 transition-[width,opacity] duration-200 ${
        expanded ? 'opacity-100' : 'w-[58px] opacity-90'
      }`}
    >
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent-500" />
          {expanded && <p className="text-sm font-semibold text-neutral-700">Context</p>}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="rounded-full p-2 text-neutral-400 transition hover:bg-accent-50"
          aria-label="Collapse context sidebar"
        >
          <IconChevron className={`h-4 w-4 ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {items.map((item) => {
          const locked = item.roles && !item.roles.includes(role)
          return (
            <button
              key={item.key}
              disabled={locked}
              onClick={() => !locked && onSelect?.(item)}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                locked
                  ? 'cursor-not-allowed text-neutral-300'
                  : 'text-neutral-700 hover:bg-accent-100 hover:text-neutral-900'
              } ${expanded ? 'justify-between' : 'justify-center px-2'}`}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-accent-500" />
                {expanded && <span>{item.label}</span>}
              </div>
              {expanded && (
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  {item.badge && <span className="badge-soft">{item.badge}</span>}
                  {locked ? <IconLock className="h-4 w-4" /> : <IconDots className="h-4 w-4" />}
                </div>
              )}
            </button>
          )
        })}
      </nav>

      {expanded && (
        <div className="mt-3 rounded-2xl bg-gradient-to-br from-white to-accent-50 p-3 shadow-soft">
          <p className="text-xs uppercase tracking-[0.08em] text-neutral-400">Workspace</p>
          <p className="mt-1 text-sm font-semibold text-neutral-700">{company.toUpperCase()} · {primary.toUpperCase()}</p>
          <p className="mt-1 text-xs text-neutral-500">Switch primary to see contextual modules per company.</p>
        </div>
      )}
    </aside>
  )
}
