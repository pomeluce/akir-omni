import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface SidebarFooterProps {
  open: boolean;
  onToggle: () => void;
  collapseIcon?: ReactNode;
  expandIcon?: ReactNode;
}

export function SidebarFooter({ open, onToggle, collapseIcon, expandIcon }: SidebarFooterProps) {
  return (
    <div className="shrink-0 border-t border-border p-2">
      <Button variant="ghost" size="icon" onClick={onToggle} className="w-full">
        {open ? collapseIcon : expandIcon}
      </Button>
    </div>
  );
}
