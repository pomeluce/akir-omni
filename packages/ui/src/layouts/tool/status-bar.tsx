import type { ReactNode } from 'react';

interface StatusBarProps {
  children?: ReactNode;
}

export function StatusBar({ children }: StatusBarProps) {
  return <div className="flex h-6 shrink-0 items-center border-t border-border bg-muted/50 px-3 text-xs text-muted-foreground">{children}</div>;
}
