import { useState, useEffect, useCallback, useRef } from 'react';
import { SidebarLink } from './types';

const STORAGE_KEY = 'sidebarExpandedItem';
const COLLAPSED_KEY = 'sidebarCollapsed';

export const useSidebar = (pathname: string, sidebarLinks: SidebarLink[]) => {
  // Initialize collapsed state from localStorage
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(COLLAPSED_KEY);
      return stored ? JSON.parse(stored) : false;
    }
    return false;
  });

  // Initialize expanded state from localStorage or current path
  const [expandedItem, setExpandedItem] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return stored;

      // If no stored value, check if we're on a submenu path
      const parentLink = sidebarLinks.find(link => 
        link.subItems?.some(subItem => pathname === subItem.href)
      );
      if (parentLink) {
        localStorage.setItem(STORAGE_KEY, parentLink.title);
        return parentLink.title;
      }
    }
    return null;
  });
  
  const prevPathRef = useRef(pathname);

  const toggleCollapse = useCallback(() => {
    setCollapsed((prev: boolean) => {
      const newState = !prev;
      localStorage.setItem(COLLAPSED_KEY, JSON.stringify(newState));
      return newState;
    });
  }, []);

  const toggleSubmenu = useCallback((title: string) => {
    setExpandedItem(prev => {
      const newState = prev === title ? null : title;
      if (newState) {
        localStorage.setItem(STORAGE_KEY, newState);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
      return newState;
    });
  }, []);

  const collapseCurrentMenu = useCallback(() => {
    setExpandedItem(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  useEffect(() => {
    const currentPath = pathname;
    const prevPath = prevPathRef.current;

    if (currentPath !== prevPath) {
      const currentParent = sidebarLinks.find(link => 
        link.subItems?.some(subItem => currentPath === subItem.href)
      );
      
      const prevParent = sidebarLinks.find(link => 
        link.subItems?.some(subItem => prevPath === subItem.href)
      );

      // If we're navigating to a submenu item, expand its parent
      if (currentParent) {
        setExpandedItem(currentParent.title);
        localStorage.setItem(STORAGE_KEY, currentParent.title);
      }
      // If we're navigating away from submenu to a different section, collapse
      else if (!currentParent && prevParent) {
        collapseCurrentMenu();
      }
    }
    
    prevPathRef.current = currentPath;
  }, [pathname, sidebarLinks, collapseCurrentMenu]);

  return {
    collapsed,
    expandedItem,
    toggleCollapse,
    toggleSubmenu,
    collapseCurrentMenu
  };
};
