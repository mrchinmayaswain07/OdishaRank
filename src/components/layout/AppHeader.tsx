"use client";

import { Bell } from "lucide-react";
import { UserMenu } from "./UserMenu";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-end border-b border-slate-200/80 bg-white/80 px-4 backdrop-blur-md transition-colors sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Notification Action Button */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95"
        >
          <Bell className="h-5 w-5 stroke-[1.75]" />
        </button>

        {/* Vertical Divider Line */}
        <div 
          aria-hidden="true" 
          className="h-5 w-[1px] bg-slate-200/80" 
        />

        {/* User Profile Menu */}
        <UserMenu />
      </div>
    </header>
  );
}

export default AppHeader;