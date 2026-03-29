"use client"

import { useMemo } from 'react'
import { IconChevron, IconMenu } from '@/components/icons'
import { PRIMARY_NAV, filterByRole } from '@/lib/navigation'
import { usePersistentState } from '@/lib/usePersistentState'
import { PrimaryNavKey, Role } from '@/types/navigation'

interface PrimarySidebarProps {
  active: PrimaryNavKey
  onChange: (key: PrimaryNavKey) => void
  role: Role
  isMobileOpen?: boolean
  onCloseMobile?: () => void
}

export function PrimarySidebar({ active, onChange, role, isMobileOpen, onCloseMobile }: PrimarySidebarProps) {
  const [collapsed, setCollapsed] = usePersistentState<boolean>('nav:primary-collapsed', false)

  const navItems = useMemo(() => filterByRole(PRIMARY_NAV, role), [role])

  return (
    <aside
      className={`glass-panel flex h-full flex-col border-r border-white/60 bg-white/80 p-3 shadow-xl lg:shadow-none transition-all duration-300 fixed inset-y-0 left-0 z-40 lg:relative lg:translate-x-0 ${
        collapsed ? 'w-[78px]' : 'w-64'
      } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="mb-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 flex-shrink-0 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 text-white shadow-soft" />
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="text-xs uppercase tracking-[0.12em] text-neutral-400 truncate">Nexora</p>
              <p className="font-semibold text-neutral-700 truncate">ERP Suite</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex rounded-full p-2 text-neutral-500 transition hover:bg-accent-50"
          aria-label="Toggle sidebar"
        >
          <IconMenu className="h-4 w-4" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto hide-scrollbar">
        {navItems.map((item) => {
          const isActive = item.key === active
          return (
            <button
              key={item.key}
              title={item.label}
              onClick={() => {
                onChange(item.key as PrimaryNavKey)
                if (isMobileOpen && onCloseMobile) {
                  onCloseMobile()
                }
              }}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-accent-100 hover:text-neutral-900 ${
                isActive ? 'bg-accent-600 text-white shadow-soft' : 'text-neutral-700'
              } ${collapsed ? 'justify-center px-2' : ''}`}
            >
              <span
                className={`flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-xl bg-white/50 text-accent-700 shadow card-shadow ${
                  isActive ? 'bg-white/10 text-white shadow-none' : ''
                }`}
              >
                {item.icon}
              </span>
              {!collapsed && <span className="flex-1 text-left truncate">{item.label}</span>}
              {!collapsed && isActive && <IconChevron className="h-4 w-4 text-white/80 flex-shrink-0" />}
            </button>
          )
        })}
      </nav>


    </aside>
  )
}
