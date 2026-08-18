import type { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative flex min-h-screen bg-slate-50/50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* Background Decorative Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-slate-400/5 blur-3xl" />
      </div>

      {/* Primary Sidebar Container */}
      <div className="relative z-10 flex-shrink-0">
        <AppSidebar />
      </div>

      {/* Application Main Layout Wrapper */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col transition-all duration-200">
        {/* Sticky Application Header */}
        <AppHeader />

        {/* Dynamic Page Main Content */}
        <main className="w-full flex-1 px-4 py-6 sm:px-6 md:py-8 lg:px-8 xl:px-10">
          <div className="mx-auto w-full max-w-7xl space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppShell;