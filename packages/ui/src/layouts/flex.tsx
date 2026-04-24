import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FlexProps {
  direction?: 'row' | 'col';
  align?: string;
  justify?: string;
  gap?: number;
  wrap?: boolean;
  className?: string;
  children: ReactNode;
}

export function Flex({ direction = 'row', align, justify, gap, wrap, className, children }: FlexProps) {
  return (
    <div
      className={cn(
        'flex',
        direction === 'col' ? 'flex-col' : 'flex-row',
        align && `items-${align}`,
        justify && `justify-${justify}`,
        gap !== undefined && `gap-${gap}`,
        wrap && 'flex-wrap',
        className,
      )}
    >
      {children}
    </div>
  );
}
