import { SidebarLayout } from '@app/ui';
import { IconHome, IconSettings } from '@tabler/icons-react';
import { createFileRoute, Link, useRouterState } from '@tanstack/react-router';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  const pathname = useRouterState({ select: s => s.location.pathname });

  return (
    <SidebarLayout
      items={[
        { label: 'Dashboard', icon: <IconHome className="size-4 shrink-0" />, to: '/dashboard', active: pathname === '/dashboard' },
        { label: 'Settings', icon: <IconSettings className="size-4 shrink-0" />, to: '/settings', active: pathname === '/settings' },
      ]}
      linkComponent={Link}
    >
      <span>hellow</span>
    </SidebarLayout>
  );
}
