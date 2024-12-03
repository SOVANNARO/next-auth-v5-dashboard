import { LucideIcon } from "lucide-react";

export interface SubItem {
  title: string;
  href: string;
  icon: LucideIcon;
  count: number;
}

export interface SidebarLink {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
  subItems?: SubItem[];
}

export interface SidebarItemProps {
  link: SidebarLink;
  isExpanded: boolean;
  isCollapsed: boolean;
  onToggleAction: (title: string) => void;
  pathname: string;
}
