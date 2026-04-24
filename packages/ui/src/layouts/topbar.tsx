import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const positionMap = {
  static: 'relative',
  sticky: 'sticky top-0',
  fixed: 'fixed inset-x-0 top-0',
} as const;

interface TopbarProps {
  position?: 'static' | 'sticky' | 'fixed';
  height?: string;
  className?: string;
  children: ReactNode;
}

export function Topbar({ position = 'sticky', height, className, children }: TopbarProps) {
  return (
    <header className={cn('z-10 flex shrink-0 items-center border-b border-border bg-card px-4', positionMap[position], className)} style={height ? { height } : undefined}>
      {children}
    </header>
  );
}
