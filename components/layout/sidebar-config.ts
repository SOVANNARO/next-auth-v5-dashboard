import {
  LayoutDashboard,
  Settings,
  Layers,
  Keyboard,
  Table,
  Square,
  Type,
  HelpCircle
} from "lucide-react";
import { SidebarLink } from "./types";

export const sidebarLinks: SidebarLink[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Components",
    href: "/components",
    icon: Layers,
    subItems: [
      {
        title: "Inputs",
        href: "/components/inputs",
        icon: Keyboard,
        count: 0,
      },
      {
        title: "Tables",
        href: "/components/tables",
        icon: Table,
        count: 0,
      },
      {
        title: "Buttons",
        href: "/components/buttons",
        icon: Square,
        count: 0,
      },
      {
        title: "Typography",
        href: "/components/typography",
        icon: Type,
        count: 0,
      },
    ],
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
    badge: 10,
  },
  {
    title: "Setting",
    href: "/setting",
    icon: Settings,
  },
];
