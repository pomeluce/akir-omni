import type { ReactNode } from 'react';

export interface NavbarProps {
  logo?: ReactNode;
  links?: ReactNode;
  actions?: ReactNode;
}

export function Navbar({ logo, links, actions }: NavbarProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-card px-4">
      <div className="flex items-center gap-4">
        {logo}
        {links && <nav className="flex items-center gap-4">{links}</nav>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
}
