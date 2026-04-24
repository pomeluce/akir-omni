import { createFileRoute, Link, Outlet, useRouterState } from '@tanstack/react-router';
import { IconChevronLeft, IconChevronRight, IconHome, IconSettings } from '@tabler/icons-react';
import { AdminLayout, type NavItem } from '@app/ui';
import { useAppStore } from '@app/store';

export const Route = createFileRoute('/_app')({
  component: () => {
    const sidebarOpen = useAppStore(s => s.sidebarOpen);
    const toggleSidebar = useAppStore(s => s.toggleSidebar);
    const pathname = useRouterState({ select: s => s.location.pathname });

    const navItems: NavItem[] = [
      { label: 'Dashboard', icon: <IconHome className="size-4 shrink-0" />, to: '/dashboard', active: pathname === '/dashboard' },
      { label: 'Settings', icon: <IconSettings className="size-4 shrink-0" />, to: '/settings', active: pathname === '/settings' },
    ];

    return (
      <AdminLayout
        sidebarOpen={sidebarOpen}
        onSidebarToggle={toggleSidebar}
        navItems={navItems}
        collapseIcon={<IconChevronLeft className="size-4" />}
        expandIcon={<IconChevronRight className="size-4" />}
        linkComponent={Link}
      >
        <Outlet />
      </AdminLayout>
    );
  },
});
