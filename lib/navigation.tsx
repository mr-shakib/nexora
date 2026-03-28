import React from 'react'
import { IconBox, IconHome, IconLayers, IconLock, IconSettings, IconSparkle, IconUsers, IconWallet } from '@/components/icons'
import { CompanyType, ContextMenuMap, NavItem, PrimaryNavItem, PrimaryNavKey, Role } from '@/types/navigation'

export const PRIMARY_NAV: PrimaryNavItem[] = [
  { key: 'home', label: 'Home', icon: <IconHome /> },
  { key: 'crm', label: 'CRM', icon: <IconSparkle /> },
  { key: 'work', label: 'Work', icon: <IconLayers /> },
  { key: 'inventory', label: 'Inventory', icon: <IconBox /> },
  { key: 'finance', label: 'Finance', icon: <IconWallet /> },
  { key: 'people', label: 'People', icon: <IconUsers /> },
  { key: 'settings', label: 'Settings', icon: <IconSettings />, roles: ['admin', 'manager'] },
]

const sharedWork: Record<CompanyType, NavItem[]> = {
  interior: [
    { key: 'projects', label: 'Projects' },
    { key: 'tasks', label: 'Tasks Board' },
    { key: 'boq', label: 'BOQ / Estimation' },
    { key: 'site', label: 'Site Visits' },
    { key: 'vendors', label: 'Vendors' },
    { key: 'files', label: 'Files' },
    { key: 'timeline', label: 'Timeline' },
    { key: 'reports', label: 'Reports' },
  ],
  travel: [
    { key: 'bookings', label: 'Bookings' },
    { key: 'packages', label: 'Packages' },
    { key: 'agents', label: 'Agents' },
    { key: 'tickets', label: 'Tickets' },
    { key: 'visa', label: 'Visa Processing' },
    { key: 'clients', label: 'Clients' },
    { key: 'reports', label: 'Reports' },
  ],
  ecommerce: [
    { key: 'orders', label: 'Orders' },
    { key: 'products', label: 'Products' },
    { key: 'customers', label: 'Customers' },
    { key: 'coupons', label: 'Coupons' },
    { key: 'returns', label: 'Returns' },
    { key: 'reports', label: 'Reports' },
  ],
}

export const CONTEXT_MENU: ContextMenuMap = {
  home: {
    shared: [
      { key: 'dashboard', label: 'Dashboard' },
      { key: 'tasks', label: 'My Tasks', badge: '12' },
      { key: 'approvals', label: 'My Approvals' },
      { key: 'recent', label: 'Recent' },
      { key: 'calendar', label: 'Calendar' },
    ],
  },
  crm: {
    shared: [
      { key: 'leads', label: 'Leads' },
      { key: 'clients', label: 'Clients' },
      { key: 'pipeline', label: 'Pipeline' },
      { key: 'quotations', label: 'Quotations' },
      { key: 'activities', label: 'Activities' },
      { key: 'reports', label: 'Reports' },
    ],
  },
  work: {
    interior: sharedWork.interior,
    travel: sharedWork.travel,
    ecommerce: sharedWork.ecommerce,
  },
  inventory: {
    interior: [
      { key: 'products', label: 'Products / Materials' },
      { key: 'categories', label: 'Categories' },
      { key: 'stock', label: 'Stock' },
      { key: 'po', label: 'Purchase Orders' },
      { key: 'vendors', label: 'Vendors' },
      { key: 'warehouses', label: 'Warehouses' },
      { key: 'low', label: 'Low Stock', badge: '3' },
    ],
    ecommerce: [
      { key: 'products', label: 'Products / Materials' },
      { key: 'categories', label: 'Categories' },
      { key: 'stock', label: 'Stock' },
      { key: 'po', label: 'Purchase Orders' },
      { key: 'vendors', label: 'Vendors' },
      { key: 'warehouses', label: 'Warehouses' },
      { key: 'low', label: 'Low Stock', badge: '3' },
    ],
  },
  finance: {
    shared: [
      { key: 'invoices', label: 'Invoices' },
      { key: 'bills', label: 'Bills' },
      { key: 'expenses', label: 'Expenses' },
      { key: 'payments', label: 'Payments' },
      { key: 'ledger', label: 'Ledger' },
      { key: 'bank', label: 'Bank/Cash' },
      { key: 'payroll', label: 'Payroll Summary' },
      { key: 'reports', label: 'Reports' },
    ],
  },
  people: {
    shared: [
      { key: 'employees', label: 'Employees' },
      { key: 'attendance', label: 'Attendance' },
      { key: 'leaves', label: 'Leaves' },
      { key: 'payroll', label: 'Payroll' },
      { key: 'departments', label: 'Departments' },
      { key: 'assets', label: 'Assets' },
      { key: 'performance', label: 'Performance' },
    ],
  },
  settings: {
    shared: [
      { key: 'company', label: 'Company Settings', roles: ['admin'] },
      { key: 'users', label: 'Users & Roles', roles: ['admin', 'manager'] },
      { key: 'workflow', label: 'Workflow Automation', roles: ['admin', 'manager'] },
      { key: 'tax', label: 'Tax/VAT', roles: ['admin', 'manager'] },
      { key: 'templates', label: 'Templates', roles: ['admin', 'manager'] },
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
