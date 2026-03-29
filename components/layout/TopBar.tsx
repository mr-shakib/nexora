"use client"

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { IconBell, IconChevron, IconPlus, IconSearch, IconMenu } from '@/components/icons'
import { CompanyType, PrimaryNavKey } from '@/types/navigation'

const companies: { key: CompanyType; name: string; color: string }[] = [
  { key: 'interior', name: 'Interior Co.', color: 'from-[#8053FF] to-[#4D7CFF]' },
  { key: 'travel', name: 'Voyage Co.', color: 'from-[#FF8A5C] to-[#FF5E7B]' },
]

const createLabels: Record<PrimaryNavKey, string> = {
  dashboard: 'Create Note',
  crm: 'New Lead',
  projects: 'New Project',
  travelOps: 'New Booking',
  inventory: 'New SKU',
  finance: 'New Invoice',
  people: 'Add Employee',
  tasks: 'New Task',
  marketing: 'New Campaign',
  support: 'New Ticket',
  admin: 'New Setting',
}

interface TopBarProps {
  company: CompanyType
  onCompanyChange: (c: CompanyType) => void
  primary: PrimaryNavKey
  onMobileMenuToggle?: () => void
}

export function TopBar({ company, onCompanyChange, primary, onMobileMenuToggle }: TopBarProps) {
  const [query, setQuery] = useState('')
  const companyMeta = useMemo(() => companies.find((c) => c.key === company)!, [company])

  return (
    <header className="glass-panel sticky top-0 z-20 flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 border border-white/60">
      
      {/* Mobile Hamburger */}
      <button 
        className="flex lg:hidden items-center justify-center p-2 rounded-xl bg-white/70 border border-white/60 shadow-sm transition hover:bg-white active:scale-95"
        onClick={onMobileMenuToggle}
        aria-label="Open menu"
      >
        <IconMenu className="h-5 w-5 text-neutral-700" />
      </button>

      <button
        className="group flex items-center gap-2 lg:gap-3 rounded-xl border border-white/60 bg-white/70 p-1.5 lg:px-3 lg:py-2 text-left shadow-sm transition hover:-translate-y-[1px] hover:shadow-soft"
        onClick={() => {
          const nextIndex = (companies.findIndex((c) => c.key === company) + 1) % companies.length
          onCompanyChange(companies[nextIndex].key)
        }}
      >
        <div
          className={`flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg lg:rounded-xl bg-gradient-to-br ${companyMeta.color} text-white shadow-soft text-sm lg:text-base font-medium`}
        >
          {companyMeta.name.charAt(0)}
        </div>
        <div className="hidden sm:block">
          <p className="text-[10px] lg:text-xs uppercase tracking-[0.1em] text-neutral-400">Company</p>
          <p className="font-semibold text-neutral-700 text-sm lg:text-base">{companyMeta.name}</p>
        </div>
        <IconChevron className="h-3 w-3 lg:h-4 lg:w-4 text-neutral-400 hidden sm:block" />
      </button>

      <div className="relative flex-1 hidden md:flex">
        <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-300" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anything..."
          className="w-full rounded-xl border border-white/60 bg-white/80 px-9 py-2 text-sm text-neutral-700 shadow-inner shadow-white/50 outline-none placeholder:text-neutral-300 focus:border-accent-200 focus:ring-2 focus:ring-accent-100 placeholder-shown:truncate"
        />
      </div>

      <div className="flex-1 md:hidden"></div> {/* Spacer on mobile when search is hidden */}

      <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-accent-600 to-accent-700 p-2 lg:px-3 lg:py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-[1px] active:scale-95">
        <IconPlus className="h-4 w-4 lg:h-4 lg:w-4" />
        <span className="hidden sm:inline">{createLabels[primary]}</span>
      </button>

      <button className="relative rounded-full border border-white/70 bg-white/80 p-2 lg:p-2.5 text-neutral-600 shadow-sm transition hover:-translate-y-[1px] hover:shadow-soft" aria-label="Notifications">
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent-500" />
        <IconBell className="h-4 w-4 lg:h-5 lg:w-5" />
      </button>

      <div className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/80 p-1 lg:px-2 lg:py-1 shadow-sm">
        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80"
          alt="User"
          width={36}
          height={36}
          className="h-8 w-8 lg:h-9 lg:w-9 rounded-lg lg:rounded-xl object-cover"
        />
        <div className="hidden lg:block leading-tight text-sm">
          <p className="font-semibold text-neutral-700">Shakib Howlader</p>
          <p className="text-xs text-neutral-400">Administrator</p>
        </div>
        <IconChevron className="h-3 w-3 lg:h-4 lg:w-4 text-neutral-300 hidden lg:block mr-1 lg:mr-0" />
      </div>
    </header>
  )
}
