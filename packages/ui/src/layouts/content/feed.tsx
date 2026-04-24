import type { ReactNode } from 'react';

interface FeedProps {
  children: ReactNode;
  sidebar?: ReactNode;
  sidebarWidth?: string;
}

export function Feed({ children, sidebar, sidebarWidth = '280px' }: FeedProps) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-auto p-4">{children}</main>
      {sidebar && (
        <aside className="overflow-auto border-l border-border p-4" style={{ width: sidebarWidth }}>
          {sidebar}
        </aside>
      )}
    </div>
  );
}
