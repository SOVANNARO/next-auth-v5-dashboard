"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarItemProps } from "./types";

export function SidebarItem({ 
  link, 
  isExpanded: initialIsExpanded, 
  isCollapsed, 
  onToggleAction, 
  pathname 
}: SidebarItemProps) {
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = pathname === link.href;
  const hasSubItems = !!link.subItems?.length;

  useEffect(() => {
    setMounted(true);
    setIsExpanded(isActive || initialIsExpanded);
  }, [isActive, initialIsExpanded]);

  if (!mounted) {
    return null;
  }

  const itemContent = (
    <>
      {link.icon && <link.icon className="h-5 w-5" />}
      {!isCollapsed && (
        <>
          <span className="flex-1">{link.title}</span>
          {link.badge && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-xs text-blue-600 dark:text-blue-300">
              {link.badge}
            </span>
          )}
          {hasSubItems && (
            <ChevronRight 
              className={cn(
                "h-4 w-4 transition-transform dark:text-gray-400",
                isExpanded && "rotate-90"
              )} 
            />
          )}
        </>
      )}
    </>
  );

  const toggleExpand = () => {
    if (hasSubItems) {
      onToggleAction?.(link.title);
    }
  };

  return (
    <div>
      {hasSubItems ? (
        <>
          <div
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-gray-500 dark:text-gray-400 transition-all hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100",
              isActive && "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            )}
            onClick={() => {
              toggleExpand();
              setIsExpanded(!isExpanded);
            }}
          >
            {itemContent}
          </div>
          {!isCollapsed && isExpanded && (
            <div className="ml-9 mt-1 grid gap-1">
              {link.subItems && link.subItems.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-gray-500 dark:text-gray-400 transition-all hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100",
                    pathname === subItem.href && "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {subItem.icon && <subItem.icon className="h-4 w-4" />}
                    <span>{subItem.title}</span>
                  </div>
                  {subItem.count > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                      {subItem.count}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={link.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 dark:text-gray-400 transition-all hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100",
            isActive && "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          )}
        >
          {itemContent}
        </Link>
      )}
    </div>
  );
}
