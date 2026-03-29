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
  isMobileOpen?: boolean
}

export function ContextSidebar({ primary, company, role, onSelect, isMobileOpen }: ContextSidebarProps) {
  const [expanded, setExpanded] = usePersistentState<boolean>('nav:context-expanded', true)

  const items = useMemo(() => getContextMenu(primary, company, role), [primary, company, role])

  // If no items, we might not render it, but for consistent layout we keep it.
  
  return (
    <aside
      className={`glass-panel flex flex-col border border-white/70 bg-white/80 px-3 py-4 shadow-2xl lg:shadow-none transition-all duration-300 fixed inset-y-0 right-0 z-40 lg:relative lg:translate-x-0 ${
        expanded ? 'opacity-100 lg:w-72 w-64' : 'lg:w-[58px] lg:opacity-90 w-64 opacity-100'
      } ${isMobileOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}
    >
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent-500 flex-shrink-0" />
          {expanded && <p className="text-sm font-semibold text-neutral-700 truncate">Context</p>}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="hidden lg:block rounded-full p-2 text-neutral-400 transition hover:bg-accent-50"
          aria-label="Collapse context sidebar"
        >
          <IconChevron className={`h-4 w-4 ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto hide-scrollbar">
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
              } ${expanded ? 'justify-between' : 'justify-center px-2 lg:px-2'}`}
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-accent-500 flex-shrink-0" />
                {expanded && <span className="truncate text-left">{item.label}</span>}
              </div>
              {expanded && (
                <div className="flex items-center gap-2 text-xs text-neutral-400 flex-shrink-0">
                  {item.badge && <span className="badge-soft">{item.badge}</span>}
                  {locked ? <IconLock className="h-4 w-4" /> : <IconDots className="h-4 w-4" />}
                </div>
              )}
            </button>
          )
        })}
      </nav>

      {expanded && (
        <div className={`mt-3 flex-shrink-0 rounded-2xl bg-gradient-to-br from-white to-accent-50 p-3 shadow-soft`}>
          <p className="text-xs uppercase tracking-[0.08em] text-neutral-400">Workspace</p>
          <p className="mt-1 text-sm font-semibold text-neutral-700 truncate">{company.toUpperCase()} · {primary.toUpperCase()}</p>
          <p className="mt-1 text-xs text-neutral-500">Switch primary to see contextual modules per company.</p>
        </div>
      )}
    </aside>
  )
}
