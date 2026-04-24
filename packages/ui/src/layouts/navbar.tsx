import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  logo?: ReactNode;
  links?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function Navbar({ logo, links, actions, className }: NavbarProps) {
  return (
    <nav className={cn('flex h-14 items-center justify-between px-4', className)}>
      <div className="flex shrink-0 items-center">{logo}</div>
      <div className="flex flex-1 items-center justify-center">{links}</div>
      <div className="flex shrink-0 items-center">{actions}</div>
    </nav>
  );
}
