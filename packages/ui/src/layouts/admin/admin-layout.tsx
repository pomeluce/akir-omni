import type { ComponentType, ReactNode } from 'react';
import type { NavItem } from './sidebar-nav';
import { Sidebar } from './sidebar';

interface AdminLayoutProps {
  children: ReactNode;
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
  navItems: NavItem[];
  topbarContent?: ReactNode;
  sidebarTitle?: string;
  collapseIcon?: ReactNode;
  expandIcon?: ReactNode;
  linkComponent?: ComponentType<{ to: string; className?: string; children: ReactNode }>;
}

export function AdminLayout({ children, sidebarOpen, onSidebarToggle, navItems, topbarContent, sidebarTitle, collapseIcon, expandIcon, linkComponent }: AdminLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        open={sidebarOpen}
        onToggle={onSidebarToggle}
        navItems={navItems}
        title={sidebarTitle}
        collapseIcon={collapseIcon}
        expandIcon={expandIcon}
        linkComponent={linkComponent}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        {topbarContent && <div className="flex h-14 shrink-0 items-center border-b border-border bg-card px-4">{topbarContent}</div>}
        <main className="flex-1 overflow-auto bg-background">{children}</main>
      </div>
    </div>
  );
}
