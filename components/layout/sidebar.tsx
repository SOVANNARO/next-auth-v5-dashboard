"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { sidebarLinks } from "./sidebar-config";
import { useSidebar } from "./use-sidebar";
import { SidebarItem } from "./sidebar-item";
import { APP_VERSION, APP_NAME } from "@/config/version";

const SidebarHeader = memo(({ collapsed }: { collapsed: boolean }) => (
  <div className="flex h-16 items-center justify-between border-b dark:border-gray-800 px-4">
    <Link href="/" className="flex items-center gap-2">
      <div className="relative h-8 w-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="rounded"
        />
      </div>
      {!collapsed && <span className="text-xl font-semibold dark:text-white">Dashboard</span>}
    </Link>
  </div>
));

SidebarHeader.displayName = 'SidebarHeader';

const CollapseButton = memo(({ collapsed, onClick }: { collapsed: boolean; onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="absolute -right-3 top-7 flex h-6 w-6 items-center justify-center rounded-full border bg-white dark:bg-gray-950 dark:border-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800"
  >
    {collapsed ? 
      <ChevronRight className="h-4 w-4 dark:text-gray-400" /> : 
      <ChevronLeft className="h-4 w-4 dark:text-gray-400" />
    }
  </button>
));

CollapseButton.displayName = 'CollapseButton';

const LastLoginInfo = memo(({ lastLoginDate, isCollapsed }: { lastLoginDate: string; isCollapsed: boolean }) => {
  const [date, time] = lastLoginDate.split(' at ');
  return (
    <div className="flex flex-col gap-2 px-3 py-4">
      {!isCollapsed && (
        <>
          <div className="flex flex-col gap-1 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-3">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Last login</span>
            </div>
            <div className="flex flex-col text-xs text-gray-600 dark:text-gray-300">
              <span>{date}</span>
              <span className="text-gray-500 dark:text-gray-400">{time}</span>
            </div>
          </div>
          <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
             Version {APP_VERSION}
          </div>
        </>
      )}
    </div>
  );
});

LastLoginInfo.displayName = 'LastLoginInfo';

export function Sidebar() {
  const pathname = usePathname();
  const { collapsed, toggleCollapse, toggleSubmenu, expandedItem } = useSidebar(pathname, sidebarLinks);
  const lastLoginDate = new Date().toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const sidebarClassName = useMemo(() => 
    cn(
      "flex h-screen flex-col border-r transition-all duration-300 relative bg-white dark:bg-gray-950 dark:border-gray-800",
      collapsed ? "w-16" : "w-64"
    ), [collapsed]
  );

  return (
    <div className={sidebarClassName}>
      <CollapseButton collapsed={collapsed} onClick={toggleCollapse} />
      <SidebarHeader collapsed={collapsed} />

      <div className="flex-1 overflow-auto py-4 hover:pr-2 transition-all">
        <nav className="grid gap-1 px-2 text-sm">
          {sidebarLinks.map((link) => (
            <SidebarItem
              key={link.title}
              link={link}
              isExpanded={expandedItem === link.title}
              isCollapsed={collapsed}
              onToggleAction={toggleSubmenu}
              pathname={pathname}
            />
          ))}
        </nav>
      </div>

      <LastLoginInfo lastLoginDate={lastLoginDate} isCollapsed={collapsed} />
    </div>
  );
}