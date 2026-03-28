export type CompanyType = 'interior' | 'travel'
export type PrimaryNavKey =
  | 'dashboard'
  | 'crm'
  | 'projects'
  | 'travelOps'
  | 'inventory'
  | 'finance'
  | 'people'
  | 'tasks'
  | 'marketing'
  | 'support'
  | 'admin'
export type Role = 'admin' | 'manager' | 'staff' | 'viewer'

export type NavItem = {
  key: string
  label: string
  href?: string
  icon?: React.ReactNode
  badge?: string
  roles?: Role[]
  children?: NavItem[]
}

export type PrimaryNavItem = {
  key: PrimaryNavKey
  label: string
  icon: React.ReactNode
  roles?: Role[]
}

export type ContextMenuMap = Record<PrimaryNavKey, Partial<Record<CompanyType | 'shared', NavItem[]>>>
