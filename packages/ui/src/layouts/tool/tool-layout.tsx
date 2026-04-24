import type { ReactNode } from 'react';
import type { ActivityItem } from './activity-bar';
import { ActivityBar } from './activity-bar';
import { StatusBar } from './status-bar';

interface ToolLayoutProps {
  children: ReactNode;
  activityItems: ActivityItem[];
  sidePanel?: ReactNode;
  sidePanelLabel?: string;
  sidePanelWidth?: string;
  statusBarContent?: ReactNode;
  topBarContent?: ReactNode;
}

export function ToolLayout({ children, activityItems, sidePanel, sidePanelLabel, sidePanelWidth = '240px', statusBarContent, topBarContent }: ToolLayoutProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {topBarContent && <div className="flex h-10 shrink-0 items-center border-b border-border bg-card px-3">{topBarContent}</div>}
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar items={activityItems} />
        {sidePanel && (
          <div className="flex flex-col overflow-hidden border-r border-border" style={{ width: sidePanelWidth }}>
            {sidePanelLabel && <div className="shrink-0 border-b border-border px-3 py-2 text-xs font-medium text-muted-foreground">{sidePanelLabel}</div>}
            <div className="flex-1 overflow-auto">{sidePanel}</div>
          </div>
        )}
        <main className="flex-1 overflow-auto bg-background">{children}</main>
      </div>
      {statusBarContent && <StatusBar>{statusBarContent}</StatusBar>}
    </div>
  );
}
