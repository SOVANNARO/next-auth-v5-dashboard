"use client";

import { Bell, Search, LogOut, Moon, Sun } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Mock notification data - replace with real data later
const notifications = [
  {
    id: 1,
    title: "New Project Assigned",
    message: "You have been assigned to the new dashboard project",
    time: "2 hours ago",
    read: false,
    type: "project"
  },
  {
    id: 2,
    title: "Meeting Reminder",
    message: "Team meeting starts in 30 minutes",
    time: "30 minutes ago",
    read: false,
    type: "reminder"
  },
  {
    id: 3,
    title: "Task Completed",
    message: "Authentication implementation has been completed",
    time: "1 day ago",
    read: true,
    type: "task"
  },
  {
    id: 4,
    title: "New Message",
    message: "You have a new message from John Doe",
    time: "2 days ago",
    read: true,
    type: "message"
  }
];

export function Navbar() {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [unreadCount, setUnreadCount] = useState(
    notifications.filter(n => !n.read).length
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const initials = session?.user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase() || "S";

  return (
    <div className="flex h-16 items-center justify-between border-b bg-white dark:bg-gray-900 dark:border-gray-800 px-4">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-full rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 pl-8 pr-4 text-sm focus:border-gray-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-500" />
          )}
        </button>

        <Popover>
          <PopoverTrigger asChild>
            <button className="relative rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
              <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3">
              <h3 className="text-sm font-semibold">Notifications</h3>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-200 dark:border-gray-700 last:border-0 ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                >
                  <div className={`mt-1 h-2 w-2 rounded-full ${!notification.read ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 p-2">
              <button 
                onClick={() => setUnreadCount(0)}
                className="w-full rounded-md px-3 py-2 text-sm text-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Mark all as read
              </button>
            </div>
          </PopoverContent>
        </Popover>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="group relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white dark:ring-gray-800 hover:ring-gray-200 dark:hover:ring-gray-700 transition-all"
          >
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "User"}
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-sm font-medium text-white">
                {initials}
              </div>
            )}
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-4 py-2 border-b dark:border-gray-800">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{session?.user?.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{session?.user?.email}</p>
              </div>
              <button
                onClick={() => signOut()}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
