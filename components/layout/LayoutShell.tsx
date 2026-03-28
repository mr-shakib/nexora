"use client"

import { ReactNode } from 'react'
import { ContextSidebar } from '@/components/layout/ContextSidebar'
import { PrimarySidebar } from '@/components/layout/PrimarySidebar'
import { TopBar } from '@/components/layout/TopBar'
import { WorkspaceTabs } from '@/components/layout/WorkspaceTabs'
import { usePersistentState } from '@/lib/usePersistentState'
import { CompanyType, NavItem, PrimaryNavKey, Role } from '@/types/navigation'

interface LayoutShellProps {
  children: ReactNode
  role?: Role
  companyOverride?: CompanyType
  onCompanyChange?: (company: CompanyType) => void
  primaryOverride?: PrimaryNavKey
  onPrimaryChange?: (primary: PrimaryNavKey) => void
}

export function LayoutShell({
  children,
  role = 'manager',
  companyOverride,
  onCompanyChange,
  primaryOverride,
  onPrimaryChange,
}: LayoutShellProps) {
  const [primaryState, setPrimaryState] = usePersistentState<PrimaryNavKey>('nav:primary', 'home')
  const [companyState, setCompanyState] = usePersistentState<CompanyType>('nav:company', 'interior')
  const [, setContextItem] = usePersistentState<NavItem | null>('nav:context-item', null)

  const primary = primaryOverride ?? primaryState
  const company = companyOverride ?? companyState

  const handlePrimaryChange = (key: PrimaryNavKey) => {
    setPrimaryState(key)
    onPrimaryChange?.(key)
  }

  const handleCompanyChange = (next: CompanyType) => {
    setCompanyState(next)
    onCompanyChange?.(next)
  }

  return (
    <div className="flex min-h-screen flex-col gap-4 p-4">
      <TopBar company={company} onCompanyChange={handleCompanyChange} primary={primary} />
      <div className="flex flex-1 gap-3">
        <PrimarySidebar active={primary} onChange={handlePrimaryChange} role={role} />
        <ContextSidebar primary={primary} company={company} role={role} onSelect={setContextItem} />
        <main className="glass-panel relative flex-1 overflow-hidden border border-white/60 bg-white/85 p-4 shadow-soft">
          <WorkspaceTabs />
          <div className="mt-4 h-[calc(100%-60px)] overflow-auto rounded-2xl border border-dashed border-neutral-200/80 bg-gradient-to-b from-white via-white to-accent-50/40 px-4 py-5">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
