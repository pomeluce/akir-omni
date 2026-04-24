import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PanelProps {
  children: ReactNode;
  width?: string;
  className?: string;
  label?: string;
}

export function Panel({ children, width, className, label }: PanelProps) {
  return (
    <div className={cn('flex flex-col overflow-hidden border-border', className)} style={width ? { width } : undefined}>
      {label && <div className="shrink-0 border-b border-border px-3 py-2 text-xs font-medium text-muted-foreground">{label}</div>}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
