"use client"

import { ReactNode, useState } from 'react'
import { ContextSidebar } from '@/components/layout/ContextSidebar'
import { PrimarySidebar } from '@/components/layout/PrimarySidebar'
import { TopBar } from '@/components/layout/TopBar'
import { WorkspaceTabs } from '@/components/layout/WorkspaceTabs'
import { PRIMARY_NAV } from '@/lib/navigation'
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
  const [primaryState, setPrimaryState] = usePersistentState<PrimaryNavKey>('nav:primary', 'dashboard')
  const [companyState, setCompanyState] = usePersistentState<CompanyType>('nav:company', 'interior')
  const [, setContextItem] = usePersistentState<NavItem | null>('nav:context-item', null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const rawPrimary = primaryOverride ?? primaryState
  const primary: PrimaryNavKey = PRIMARY_NAV.some((item) => item.key === rawPrimary) ? rawPrimary : 'dashboard'
  const company = companyOverride ?? companyState

  const handlePrimaryChange = (key: PrimaryNavKey) => {
    setPrimaryState(key)
    onPrimaryChange?.(key)
    // Optional: close mobile menu when changing a main primary route to clean up view
    // setIsMobileMenuOpen(false)
  }

  const handleCompanyChange = (next: CompanyType) => {
    setCompanyState(next)
    onCompanyChange?.(next)
  }

  return (
    <div className="flex h-screen flex-col lg:gap-4 p-2 gap-2 lg:p-4 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] overflow-hidden">
      <TopBar 
        company={company} 
        onCompanyChange={handleCompanyChange} 
        primary={primary} 
        onMobileMenuToggle={() => setIsMobileMenuOpen(true)} 
      />
      
      <div className="relative flex flex-1 lg:gap-3 overflow-hidden">
        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm lg:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        <PrimarySidebar 
          active={primary} 
          onChange={handlePrimaryChange} 
          role={role} 
          isMobileOpen={isMobileMenuOpen} 
          onCloseMobile={() => setIsMobileMenuOpen(false)} 
        />
        <ContextSidebar 
          primary={primary} 
          company={company} 
          role={role} 
          onSelect={setContextItem} 
          isMobileOpen={isMobileMenuOpen} 
        />
        
        <main className="glass-panel relative flex-1 overflow-hidden border border-white/60 bg-white/85 p-3 lg:p-4 shadow-soft">
          <WorkspaceTabs />
          <div className="mt-3 lg:mt-4 h-[calc(100%-52px)] lg:h-[calc(100%-60px)] overflow-auto rounded-2xl border border-dashed border-neutral-200/80 bg-gradient-to-b from-white via-white to-accent-50/40 p-3 lg:px-4 lg:py-5 hide-scrollbar">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
