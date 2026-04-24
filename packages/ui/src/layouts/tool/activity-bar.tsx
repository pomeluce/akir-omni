import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface ActivityItem {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface ActivityBarProps {
  items: ActivityItem[];
  className?: string;
}

export function ActivityBar({ items, className }: ActivityBarProps) {
  return (
    <div className={cn('flex w-12 flex-col items-center gap-1 bg-muted/50 py-2', className)}>
      {items.map(item => (
        <button
          key={item.label}
          onClick={item.onClick}
          title={item.label}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
            item.active ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
          )}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}
