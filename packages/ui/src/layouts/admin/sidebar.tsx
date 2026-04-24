import type { ComponentType, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { NavItem } from './sidebar-nav';
import { SidebarHeader } from './sidebar-header';
import { SidebarNav } from './sidebar-nav';
import { SidebarFooter } from './sidebar-footer';

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  navItems: NavItem[];
  title?: string;
  collapsedLabel?: ReactNode;
  collapseIcon?: ReactNode;
  expandIcon?: ReactNode;
  linkComponent?: ComponentType<{ to: string; className?: string; children: ReactNode }>;
}

export function Sidebar({ open, onToggle, navItems, title, collapsedLabel, collapseIcon, expandIcon, linkComponent }: SidebarProps) {
  return (
    <aside className={cn('flex h-full flex-col border-r border-border bg-card transition-all duration-200', open ? 'w-56' : 'w-16')}>
      <SidebarHeader open={open} title={title} collapsedLabel={collapsedLabel} />
      <SidebarNav items={navItems} open={open} linkComponent={linkComponent} />
      <SidebarFooter open={open} onToggle={onToggle} collapseIcon={collapseIcon} expandIcon={expandIcon} />
    </aside>
  );
}
