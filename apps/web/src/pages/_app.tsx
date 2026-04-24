import { createFileRoute, Link, Outlet, useRouterState } from '@tanstack/react-router';
import { IconHome, IconSettings } from '@tabler/icons-react';
import { SidebarLayout, type SidebarItem } from '@app/ui';

export const Route = createFileRoute('/_app')({
  component: () => {
    const pathname = useRouterState({ select: s => s.location.pathname });

    const navItems: SidebarItem[] = [
      { label: 'Dashboard', icon: <IconHome className="size-4 shrink-0" />, to: '/dashboard', active: pathname === '/dashboard' },
      { label: 'Settings', icon: <IconSettings className="size-4 shrink-0" />, to: '/settings', active: pathname === '/settings' },
    ];

    return (
      <SidebarLayout items={navItems} linkComponent={Link}>
        <Outlet />
      </SidebarLayout>
    );
  },
});
