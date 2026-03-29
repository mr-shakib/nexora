"use client"

import { useState } from 'react'
import { LayoutShell } from '@/components/layout/LayoutShell'
import { RightDrawer } from '@/components/layout/RightDrawer'
import { IconPlus, IconWallet, IconUsers, IconBox, IconSparkle, IconDots } from '@/components/icons'
import { CompanyType, Role } from '@/types/navigation'

export default function Page() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [role, setRole] = useState<Role>('manager')
  const [company, setCompany] = useState<CompanyType>('interior')

  return (
    <LayoutShell
      role={role}
      companyOverride={company}
      onCompanyChange={setCompany}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.1em] text-neutral-400">Overview</p>
          <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-800 tracking-tight">Master Dashboard</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value as CompanyType)}
            className="rounded-xl border border-white/70 bg-white/80 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-accent-100"
          >
            <option value="interior">Interior Co.</option>
            <option value="travel">Voyage Co.</option>
          </select>
          <button
            onClick={() => setOpenDrawer(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-[1px] active:scale-95 hover:shadow-lg"
          >
            <IconPlus className="h-4 w-4" />
            New Report
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Card 1 */}
        <div className="glass-panel p-4 lg:p-5 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-accent-200/40 to-accent-100/10 blur-2xl group-hover:scale-125 transition-transform duration-500" />
          <div className="flex justify-between items-start mb-4 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-soft">
              <IconWallet className="h-5 w-5" />
            </div>
            <span className="badge-soft bg-emerald-100 text-emerald-700">+12.5%</span>
          </div>
          <div className="relative">
            <p className="text-sm font-medium text-neutral-500">Total Revenue</p>
            <h3 className="text-2xl font-bold text-neutral-800 tracking-tight">$84,592.00</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-panel p-4 lg:p-5 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-orange-200/40 to-rose-100/10 blur-2xl group-hover:scale-125 transition-transform duration-500" />
          <div className="flex justify-between items-start mb-4 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-rose-500 text-white shadow-soft">
              <IconUsers className="h-5 w-5" />
            </div>
            <span className="badge-soft bg-emerald-100 text-emerald-700">+8.2%</span>
          </div>
          <div className="relative">
            <p className="text-sm font-medium text-neutral-500">Active Clients</p>
            <h3 className="text-2xl font-bold text-neutral-800 tracking-tight">1,249</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="glass-panel p-4 lg:p-5 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-100/10 blur-2xl group-hover:scale-125 transition-transform duration-500" />
          <div className="flex justify-between items-start mb-4 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-soft">
              <IconBox className="h-5 w-5" />
            </div>
            <span className="badge-soft bg-rose-100 text-rose-700">-2.4%</span>
          </div>
          <div className="relative">
            <p className="text-sm font-medium text-neutral-500">Active Projects</p>
            <h3 className="text-2xl font-bold text-neutral-800 tracking-tight">42</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="glass-panel p-4 lg:p-5 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-100/10 blur-2xl group-hover:scale-125 transition-transform duration-500" />
          <div className="flex justify-between items-start mb-4 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-soft">
              <IconSparkle className="h-5 w-5" />
            </div>
            <span className="badge-soft bg-emerald-100 text-emerald-700">+18.1%</span>
          </div>
          <div className="relative">
            <p className="text-sm font-medium text-neutral-500">Task Completion</p>
            <h3 className="text-2xl font-bold text-neutral-800 tracking-tight">94%</h3>
          </div>
        </div>
      </div>

      {/* Main Charts & Activity Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        
        {/* Main Chart Area */}
        <div className="glass-panel lg:col-span-2 p-5 flex flex-col min-h-[350px]">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800">Revenue Overview</h3>
              <p className="text-sm text-neutral-500">Monthly performance metrics</p>
            </div>
            <select className="rounded-xl border border-neutral-200/60 bg-white/50 px-3 py-1.5 text-xs text-neutral-600 shadow-sm outline-none">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          
          <div className="flex-1 mt-4 relative w-full rounded-2xl bg-gradient-to-b from-white/40 to-transparent border border-white/40 flex items-end px-2 pt-6">
            <div className="absolute inset-x-0 bottom-6 top-6 flex flex-col justify-between pb-8">
              <div className="border-b border-dashed border-neutral-200/60 w-full" />
              <div className="border-b border-dashed border-neutral-200/60 w-full" />
              <div className="border-b border-dashed border-neutral-200/60 w-full" />
            </div>
            
            <svg viewBox="0 0 800 200" className="absolute bottom-8 left-0 right-0 w-full h-[75%] overflow-visible drop-shadow-md z-10" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8053FF" />
                  <stop offset="100%" stopColor="#4D7CFF" />
                </linearGradient>
                <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8053FF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#4D7CFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M0,180 C80,180 120,80 200,100 C280,120 320,50 400,60 C480,70 520,130 600,90 C680,50 720,20 800,20 L800,200 L0,200 Z" 
                fill="url(#gradientFill)"
              />
              <path 
                d="M0,180 C80,180 120,80 200,100 C280,120 320,50 400,60 C480,70 520,130 600,90 C680,50 720,20 800,20" 
                fill="none" 
                stroke="url(#gradientLine)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <circle cx="200" cy="100" r="4.5" fill="white" stroke="#6b7bff" strokeWidth="2.5" />
              <circle cx="400" cy="60" r="4.5" fill="white" stroke="#6b7bff" strokeWidth="2.5" />
              <circle cx="600" cy="90" r="4.5" fill="white" stroke="#6b7bff" strokeWidth="2.5" />
            </svg>

            <div className="absolute bottom-1.5 left-0 right-0 flex justify-between px-6 text-[10px] font-semibold tracking-[0.08em] text-neutral-400/80 uppercase">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
          </div>
        </div>

        {/* Recent Activity List */}
        <div className="glass-panel p-5 flex flex-col min-h-[350px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-neutral-800">Recent Activity</h3>
            <button className="text-neutral-400 hover:text-accent-600 transition">
              <IconDots className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col gap-2 overflow-y-auto hide-scrollbar">
            {/* Item 1 */}
            <div className="group flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-white/60 transition cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xs shadow-sm">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-neutral-800 truncate">John Doe uploaded a file</p>
                <p className="text-[11px] text-neutral-500 truncate">Q3_Financial_Draft.pdf</p>
              </div>
              <span className="text-[10px] text-neutral-400 font-medium">2h</span>
            </div>
            {/* Item 2 */}
            <div className="group flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-white/60 transition cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 font-bold text-xs shadow-sm">
                AS
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-neutral-800 truncate">Alice Smith closed deal</p>
                <p className="text-[11px] text-neutral-500 truncate">Acme Corp Enterprise Plan</p>
              </div>
              <span className="text-[10px] text-neutral-400 font-medium">5h</span>
            </div>
            {/* Item 3 */}
            <div className="group flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-white/60 transition cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600 font-bold text-xs shadow-sm">
                MK
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-neutral-800 truncate">Mike Klein commented</p>
                <p className="text-[11px] text-neutral-500 truncate">"Let's review the new design..."</p>
              </div>
              <span className="text-[10px] text-neutral-400 font-medium">1d</span>
            </div>
             {/* Item 4 */}
             <div className="group flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-white/60 transition cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600 font-bold text-xs shadow-sm">
                PR
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-neutral-800 truncate">System Payment Processed</p>
                <p className="text-[11px] text-neutral-500 truncate">Invoice #4029 received</p>
              </div>
              <span className="text-[10px] text-neutral-400 font-medium">1d</span>
            </div>
          </div>
          
          <button className="mt-4 w-full py-2.5 text-xs font-semibold text-accent-700 bg-accent-50 hover:bg-accent-100 rounded-xl transition">
            View All Activity
          </button>
        </div>
      </div>

      <RightDrawer
        title="Quick Create Report"
        description="Draft a new financial or metric report."
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <form className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-neutral-700">
            Report Title
            <input className="mt-1.5 w-full rounded-xl border border-neutral-200/80 bg-white/50 px-3 py-2.5 text-sm shadow-inner focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-100 placeholder:text-neutral-400" placeholder="e.g. Q3 Growth Synthesis" />
          </label>
          <label className="text-sm font-semibold text-neutral-700">
            Assigned Analyst
            <input className="mt-1.5 w-full rounded-xl border border-neutral-200/80 bg-white/50 px-3 py-2.5 text-sm shadow-inner focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-100 placeholder:text-neutral-400" placeholder="Search team members..." />
          </label>
          <label className="text-sm font-semibold text-neutral-700">
            Target Date
            <input type="date" className="mt-1.5 w-full rounded-xl border border-neutral-200/80 bg-white/50 px-3 py-2.5 text-sm shadow-inner focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-100 text-neutral-600" />
          </label>
          <div className="mt-6 flex gap-3">
            <button type="button" onClick={() => setOpenDrawer(false)} className="flex-1 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 border border-neutral-200 shadow-sm transition hover:bg-neutral-50 active:scale-95">
              Cancel
            </button>
            <button type="submit" className="flex-1 rounded-xl bg-gradient-to-br from-accent-600 to-accent-700 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-[1px] hover:shadow-lg active:scale-95">
              Create Report
            </button>
          </div>
        </form>
      </RightDrawer>
    </LayoutShell>
  )
}
