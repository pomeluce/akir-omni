import { createContext, useContext, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

// 响应式配置
export interface ResponsiveConfig {
  xs?: number;
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
}

// Grid Context
interface GridContextValue {
  cols: number;
}

const GridContext = createContext<GridContextValue>({ cols: 24 });

// Grid 容器
interface GridProps {
  cols?: number;
  xGap?: number;
  yGap?: number;
  className?: string;
  children: ReactNode;
}

export function Grid({ cols = 24, xGap = 0, yGap = 0, className, children }: GridProps) {
  return (
    <GridContext.Provider value={{ cols }}>
      <div
        className={cn('grid', className)}
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          columnGap: xGap ? `${xGap}px` : undefined,
          rowGap: yGap ? `${yGap}px` : undefined,
        }}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
}

// 获取当前断点对应的值
function getResponsiveValue(value: number | ResponsiveConfig | undefined, fallback: number): number {
  if (value === undefined) return fallback;
  if (typeof value === 'number') return value;

  // 响应式：使用最小满足的断点（移动优先）
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    if (width >= 1280 && value.xl !== undefined) return value.xl;
    if (width >= 1024 && value.l !== undefined) return value.l;
    if (width >= 768 && value.m !== undefined) return value.m;
    if (width >= 640 && value.s !== undefined) return value.s;
    if (value.xs !== undefined) return value.xs;
  }

  return fallback;
}

// GridItem 子项
interface GridItemProps {
  span?: number | ResponsiveConfig;
  offset?: number | ResponsiveConfig;
  className?: string;
  children: ReactNode;
}

export function GridItem({ span = 1, offset, className, children }: GridItemProps) {
  const { cols } = useContext(GridContext);
  const spanVal = getResponsiveValue(span, 1);
  const offsetVal = getResponsiveValue(offset, 0);

  const start = offsetVal + 1;
  const end = start + spanVal;

  return (
    <div
      className={cn('min-w-0', className)}
      style={{
        gridColumn: `${start} / ${Math.min(end, cols + 1)}`,
      }}
    >
      {children}
    </div>
  );
}
