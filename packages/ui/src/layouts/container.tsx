import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const maxWidthMap = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  full: 'max-w-full',
} as const;

interface ContainerProps {
  maxWidth?: keyof typeof maxWidthMap;
  padding?: boolean;
  className?: string;
  children: ReactNode;
}

export function Container({ maxWidth = 'lg', padding = true, className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full', maxWidthMap[maxWidth], padding && 'px-4', className)}>{children}</div>;
}
