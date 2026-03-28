"use client"

import { useState } from 'react'
import { LayoutShell } from '@/components/layout/LayoutShell'
import { RightDrawer } from '@/components/layout/RightDrawer'
import { IconPlus } from '@/components/icons'
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
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.1em] text-neutral-400">Sandbox</p>
          <h1 className="text-2xl font-semibold text-neutral-800">Multi-company layout</h1>
        </div>
        <div className="flex gap-2">
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value as CompanyType)}
            className="rounded-xl border border-white/70 bg-white/80 px-3 py-2 text-sm shadow-sm"
          >
            <option value="interior">Interior</option>
            <option value="travel">Travel</option>
          </select>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="rounded-xl border border-white/70 bg-white/80 px-3 py-2 text-sm shadow-sm"
          >
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="staff">Staff</option>
            <option value="viewer">Viewer</option>
          </select>
          <button
            onClick={() => setOpenDrawer(true)}
            className="flex items-center gap-2 rounded-xl bg-neutral-900 px-3 py-2 text-sm font-semibold text-white shadow-soft"
          >
            <IconPlus className="h-4 w-4" />
            Open Drawer
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {[1, 2, 3, 4].map((card) => (
          <div key={card} className="glass-panel border border-white/70 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-10 w-10 rounded-2xl bg-gradient-to-br from-accent-100 to-white" />
                <div>
                  <p className="text-sm font-semibold text-neutral-800">Workspace Item {card}</p>
                  <p className="text-xs text-neutral-500">Keep page in-place, use tabs above.</p>
                </div>
              </div>
              <span className="badge-soft">In progress</span>
            </div>
            <p className="mt-3 text-sm text-neutral-500">
              When a project/booking/employee opens, keep this page and switch context via the top tabs. Use the drawer for quick edits.
            </p>
          </div>
        ))}
      </div>

      <RightDrawer
        title="Quick Create"
        description="Use drawers to edit without leaving context."
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <form className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-neutral-700">
            Title
            <input className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm shadow-inner" placeholder="New record" />
          </label>
          <label className="text-sm font-semibold text-neutral-700">
            Assignee
            <input className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm shadow-inner" placeholder="Search people" />
          </label>
          <label className="text-sm font-semibold text-neutral-700">
            Due Date
            <input type="date" className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm shadow-inner" />
          </label>
          <button type="submit" className="mt-2 rounded-xl bg-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-soft">
            Save
          </button>
        </form>
      </RightDrawer>
    </LayoutShell>
  )
}
