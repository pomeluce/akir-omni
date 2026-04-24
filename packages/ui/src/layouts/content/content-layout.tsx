import type { ReactNode } from 'react';
import type { NavbarProps } from './navbar';
import { Navbar } from './navbar';
import { Feed } from './feed';

interface ContentLayoutProps extends NavbarProps {
  children: ReactNode;
  feedSidebar?: ReactNode;
  feedSidebarWidth?: string;
}

export function ContentLayout({ children, feedSidebar, feedSidebarWidth, ...navbarProps }: ContentLayoutProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar {...navbarProps} />
      <Feed sidebar={feedSidebar} sidebarWidth={feedSidebarWidth}>
        {children}
      </Feed>
    </div>
  );
}
