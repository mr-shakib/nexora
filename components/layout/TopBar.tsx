"use client"

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { IconBell, IconChevron, IconPlus, IconSearch } from '@/components/icons'
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
}

export function TopBar({ company, onCompanyChange, primary }: TopBarProps) {
  const [query, setQuery] = useState('')
  const companyMeta = useMemo(() => companies.find((c) => c.key === company)!, [company])

  return (
    <header className="glass-panel sticky top-0 z-20 flex items-center gap-3 px-4 py-3">
      <button
        className="group flex items-center gap-3 rounded-xl border border-white/60 bg-white/70 px-3 py-2 text-left shadow-sm transition hover:-translate-y-[1px] hover:shadow-soft"
        onClick={() => {
          const nextIndex = (companies.findIndex((c) => c.key === company) + 1) % companies.length
          onCompanyChange(companies[nextIndex].key)
        }}
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${companyMeta.color} text-white shadow-soft`}
        >
          {companyMeta.name.charAt(0)}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.1em] text-neutral-400">Company</p>
          <p className="font-semibold text-neutral-700">{companyMeta.name}</p>
        </div>
        <IconChevron className="h-4 w-4 text-neutral-400" />
      </button>

      <div className="relative flex-1">
        <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-300" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anything..."
          className="w-full rounded-xl border border-white/60 bg-white/80 px-9 py-2 text-sm text-neutral-700 shadow-inner shadow-white/50 outline-none placeholder:text-neutral-300 focus:border-accent-200 focus:ring-2 focus:ring-accent-100"
        />
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent-600 to-accent-700 px-3 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-[1px]">
        <IconPlus className="h-4 w-4" />
        <span>{createLabels[primary]}</span>
      </button>

      <button className="relative rounded-full border border-white/70 bg-white/80 p-2.5 text-neutral-600 shadow-sm transition hover:-translate-y-[1px] hover:shadow-soft" aria-label="Notifications">
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent-500" />
        <IconBell className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/80 px-2 py-1 shadow-sm">
        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80"
          alt="User"
          width={36}
          height={36}
          className="h-9 w-9 rounded-xl object-cover"
        />
        <div className="leading-tight text-sm">
          <p className="font-semibold text-neutral-700">Shakib Howlader</p>
          <p className="text-xs text-neutral-400">Administrator</p>
        </div>
        <IconChevron className="h-4 w-4 text-neutral-300" />
      </div>
    </header>
  )
}
