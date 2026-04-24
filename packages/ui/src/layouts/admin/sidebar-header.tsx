import type { ReactNode } from 'react';

interface SidebarHeaderProps {
  open: boolean;
  title?: string;
  collapsedLabel?: ReactNode;
}

export function SidebarHeader({ open, title = 'Akir Omni', collapsedLabel }: SidebarHeaderProps) {
  return (
    <div className="flex h-14 shrink-0 items-center border-b border-border px-4">
      {open ? (
        <span className="text-lg font-semibold text-foreground">{title}</span>
      ) : (
        <span className="mx-auto text-lg font-bold text-primary">{collapsedLabel ?? title.charAt(0)}</span>
      )}
    </div>
  );
}
