import type { ComponentType, ReactNode } from 'react';
import {
  SidebarProvider,
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarRail,
} from '@/components/ui/sidebar';

// 类型
export interface SidebarItem {
  label: string;
  icon?: ReactNode;
  to: string;
  active?: boolean;
  children?: SidebarItem[];
}

export interface SidebarLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

export interface SidebarConfig {
  items: SidebarItem[];
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  defaultCollapsed?: boolean;
  width?: string;
  collapsedWidth?: string;
  header?: ReactNode;
  footer?: ReactNode;
  linkComponent?: ComponentType<SidebarLinkProps>;
}

export interface SidebarLayoutProps extends SidebarConfig {
  children: ReactNode;
}

// 渲染菜单项（递归，支持子菜单）
function SidebarNavItem({ item, linkComponent: Link }: { item: SidebarItem; linkComponent?: ComponentType<SidebarLinkProps> }) {
  if (item.children?.length) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={item.label} isActive={item.active}>
          {item.icon}
          <span>{item.label}</span>
        </SidebarMenuButton>
        <SidebarMenuSub>
          {item.children.map(child => (
            <SidebarMenuSubItem key={child.to}>
              <NavItemLink item={child} Link={Link} />
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <NavItemLink item={item} Link={Link} />
    </SidebarMenuItem>
  );
}

// 菜单项链接（带路由无关支持）
function NavItemLink({ item, Link }: { item: SidebarItem; Link?: ComponentType<SidebarLinkProps> }) {
  const button = (
    <SidebarMenuButton tooltip={item.label} isActive={item.active}>
      {item.icon}
      <span>{item.label}</span>
    </SidebarMenuButton>
  );

  if (Link) {
    return (
      <Link to={item.to} className="w-full">
        {button}
      </Link>
    );
  }

  return <a href={item.to}>{button}</a>;
}

// 主组件
export function SidebarLayout({
  items,
  collapsed: collapsedProp,
  onCollapsedChange,
  defaultCollapsed = false,
  width,
  collapsedWidth,
  header,
  footer,
  linkComponent,
  children,
}: SidebarLayoutProps) {
  const open = collapsedProp !== undefined ? !collapsedProp : undefined;
  const onOpenChange = onCollapsedChange ? (v: boolean) => onCollapsedChange(!v) : undefined;
  const defaultOpen = !defaultCollapsed;

  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      style={
        {
          '--sidebar-width': width ?? '16rem',
          '--sidebar-width-icon': collapsedWidth ?? '3rem',
        } as React.CSSProperties
      }
    >
      <ShadcnSidebar collapsible="icon">
        {header && <SidebarHeader>{header}</SidebarHeader>}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => (
                  <SidebarNavItem key={item.to} item={item} linkComponent={linkComponent} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        {footer && <SidebarFooter>{footer}</SidebarFooter>}
        <SidebarRail />
      </ShadcnSidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
