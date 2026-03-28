import React from 'react'
import { IconBell, IconBox, IconHome, IconLayers, IconSettings, IconSparkle, IconTab, IconUsers, IconWallet } from '@/components/icons'
import { CompanyType, ContextMenuMap, NavItem, PrimaryNavItem, PrimaryNavKey, Role } from '@/types/navigation'

export const PRIMARY_NAV: PrimaryNavItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: <IconHome /> },
  { key: 'crm', label: 'CRM & Sales', icon: <IconSparkle /> },
  { key: 'projects', label: 'Projects', icon: <IconLayers /> },
  { key: 'travelOps', label: 'Travel Ops', icon: <IconBox /> },
  { key: 'inventory', label: 'Inventory', icon: <IconBox /> },
  { key: 'finance', label: 'Finance', icon: <IconWallet /> },
  { key: 'people', label: 'HR & People', icon: <IconUsers /> },
  { key: 'tasks', label: 'Task Mgmt', icon: <IconTab /> },
  { key: 'marketing', label: 'Marketing', icon: <IconSparkle /> },
  { key: 'support', label: 'Support', icon: <IconBell /> },
  { key: 'admin', label: 'Admin', icon: <IconSettings />, roles: ['admin', 'manager'] },
]

const projectsMenus: Record<CompanyType, NavItem[]> = {
  interior: [
    { key: 'projects', label: 'Projects' },
    { key: 'boq', label: 'BOQ / Estimation' },
    { key: 'site', label: 'Site Visits' },
    { key: 'files', label: 'Project Files' },
    { key: 'vendors', label: 'Project Vendors' },
    { key: 'reports', label: 'Project Reports' },
  ],
  travel: [],
}

const travelOpsMenus: Record<CompanyType, NavItem[]> = {
  travel: [
    { key: 'bookings', label: 'Bookings' },
    { key: 'tickets', label: 'Tickets' },
    { key: 'ticketPurchases', label: 'Ticket Purchases' },
    { key: 'visa', label: 'Passport / Visa' },
    { key: 'agents', label: 'Agents' },
    { key: 'portals', label: 'Portals' },
    { key: 'reports', label: 'Travel Reports' },
  ],
  interior: [],
}

export const CONTEXT_MENU: ContextMenuMap = {
  dashboard: {
    shared: [
      { key: 'overview', label: 'Overview' },
      { key: 'calendar', label: 'Calendar' },
      { key: 'notices', label: 'Notices' },
      { key: 'notifications', label: 'Notifications' },
      { key: 'branches', label: 'Branches' },
    ],
  },
  crm: {
    shared: [
      { key: 'leads', label: 'Leads' },
      { key: 'followups', label: 'Lead Followups' },
      { key: 'pipeline', label: 'Pipeline / Deals' },
      { key: 'proposals', label: 'Proposals / Estimates' },
      { key: 'contracts', label: 'Contracts' },
      { key: 'clients', label: 'Clients' },
      { key: 'sources', label: 'Lead Sources' },
      { key: 'reports', label: 'Reports' },
    ],
  },
  projects: {
    interior: projectsMenus.interior,
    travel: projectsMenus.travel,
  },
  travelOps: {
    interior: travelOpsMenus.interior,
    travel: travelOpsMenus.travel,
  },
  inventory: {
    shared: [
      { key: 'products', label: 'Products' },
      { key: 'catalog', label: 'Categories / Brand / Unit' },
      { key: 'stock', label: 'Stock' },
      { key: 'purchases', label: 'Purchases' },
      { key: 'sales', label: 'Sales' },
      { key: 'transfers', label: 'Transfers' },
      { key: 'adjustments', label: 'Adjustments' },
      { key: 'returns', label: 'Returns' },
      { key: 'suppliers', label: 'Suppliers' },
    ],
  },
  finance: {
    shared: [
      { key: 'invoices', label: 'Invoices' },
      { key: 'bills', label: 'Bills' },
      { key: 'expenses', label: 'Expenses' },
      { key: 'payments', label: 'Payments' },
      { key: 'banks', label: 'Banks' },
      { key: 'bankTransfers', label: 'Bank Transfers' },
      { key: 'ledger', label: 'Ledger / Journals' },
      { key: 'reports', label: 'Financial Reports' },
    ],
  },
  people: {
    shared: [
      { key: 'employees', label: 'Employees' },
      { key: 'attendance', label: 'Attendance' },
      { key: 'leaves', label: 'Leaves' },
      { key: 'payroll', label: 'Payroll' },
      { key: 'org', label: 'Departments / Designation / Shift' },
      { key: 'assets', label: 'Assets' },
      { key: 'resignations', label: 'Resignations' },
      { key: 'promotions', label: 'Promotions' },
      { key: 'users', label: 'User Accounts' },
      { key: 'roles', label: 'Roles / Permissions' },
    ],
  },
  tasks: {
    shared: [
      { key: 'taskboard', label: 'Task Board' },
      { key: 'workspaces', label: 'Workspaces' },
      { key: 'boards', label: 'Boards' },
      { key: 'columns', label: 'Columns' },
      { key: 'labels', label: 'Labels' },
    ],
  },
  marketing: {
    shared: [
      { key: 'email', label: 'Email Marketing' },
      { key: 'sms', label: 'SMS Marketing' },
      { key: 'whatsapp', label: 'WhatsApp Marketing' },
      { key: 'templates', label: 'Templates' },
    ],
  },
  support: {
    shared: [
      { key: 'departments', label: 'Support Departments' },
      { key: 'tickets', label: 'Support Tickets' },
    ],
  },
  admin: {
    shared: [
      { key: 'company', label: 'Company Settings', roles: ['admin', 'manager'] },
      { key: 'invoice', label: 'Invoice Settings', roles: ['admin', 'manager'] },
      { key: 'devices', label: 'Device Settings', roles: ['admin', 'manager'] },
      { key: 'geography', label: 'Geography (Country, State, Airport)', roles: ['admin', 'manager'] },
      { key: 'portals', label: 'Portal Settings', roles: ['admin', 'manager'] },
      { key: 'logs', label: 'System Logs', roles: ['admin', 'manager'] },
    ],
  },
}

export const filterByRole = (items: NavItem[], role: Role): NavItem[] =>
  items.filter((item) => !item.roles || item.roles.includes(role))

export const getContextMenu = (
  primaryKey: PrimaryNavKey,
  company: CompanyType,
  role: Role,
): NavItem[] => {
  const menu = CONTEXT_MENU[primaryKey]
  const bucket = menu[company] ?? menu.shared ?? []
  return filterByRole(bucket, role)
}
