import type { ComponentType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  icon: ReactNode;
  to: string;
  active?: boolean;
}

export interface LinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

interface SidebarNavProps {
  items: NavItem[];
  open: boolean;
  linkComponent?: ComponentType<LinkProps>;
}

export function SidebarNav({ items, open, linkComponent: Link }: SidebarNavProps) {
  return (
    <nav className="flex-1 space-y-1 p-2">
      {items.map(item => (
        <NavLink key={item.to} item={item} open={open} Link={Link} />
      ))}
    </nav>
  );
}

function NavLink({ item, open, Link }: { item: NavItem; open: boolean; Link?: ComponentType<LinkProps> }) {
  const className = cn(
    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
    item.active ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
    !open && 'justify-center px-0',
  );

  if (Link) {
    return (
      <Link to={item.to} className={className}>
        {item.icon}
        {open && <span>{item.label}</span>}
      </Link>
    );
  }

  return (
    <a href={item.to} className={className}>
      {item.icon}
      {open && <span>{item.label}</span>}
    </a>
  );
}
