"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentType } from "react";

import {
  LayoutDashboard,
  BookOpen,
  FileCheck2,
  Newspaper,
  FileText,
  TrendingUp,
  User,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

import { authService } from "@/features/auth/services/auth.service";

interface NavigationItem {
  label: string;
  href?: string;
  icon: ComponentType<{ className?: string }>;
  comingSoon?: boolean;
}

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

const navigationSections: NavigationSection[] = [
  {
    title: "MAIN",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "PREPARATION",
    items: [
      {
        label: "Study Material",
        icon: BookOpen,
        comingSoon: true,
      },
      {
        label: "Mock Tests",
        icon: FileCheck2,
        comingSoon: true,
      },
      {
        label: "Current Affairs",
        icon: Newspaper,
        comingSoon: true,
      },
      {
        label: "Previous Year Papers",
        icon: FileText,
        comingSoon: true,
      },
    ],
  },
  {
    title: "PROGRESS",
    items: [
      {
        label: "My Progress",
        icon: TrendingUp,
        comingSoon: true,
      },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      {
        label: "Profile",
        href: "/profile",
        icon: User,
      },
      {
        label: "Settings",
        icon: Settings,
        comingSoon: true,
      },
    ],
  },
];

function isActiveRoute(pathname: string, href?: string): boolean {
  if (!href) {
    return false;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState<string | null>(null);

  const handleLogout = async () => {
    if (isLoggingOut) {
      return;
    }

    setLogoutError(null);
    setIsLoggingOut(true);

    try {
      const result = await authService.logout();

      if (!result.success) {
        setLogoutError(
          result.error || "Unable to log out. Please try again."
        );
        return;
      }

      router.replace("/login");
    } catch (error: unknown) {
      setLogoutError(
        error instanceof Error
          ? error.message
          : "Unable to log out. Please try again."
      );
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-slate-800/60 bg-[#0F172A] text-slate-300 lg:flex">
      {/* Brand Header */}
      <div className="flex h-16 items-center border-b border-slate-800/80 px-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="OdishaRank Dashboard"
        >
          {/* OdishaRank Logo Badge */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>

          {/* OdishaRank Typography */}
          <span className="text-xl font-extrabold tracking-tight text-white">
            Odisha<span className="text-blue-500">Rank</span>
          </span>
        </Link>
      </div>

      {/* Navigation Sections */}
      <nav
        className="flex-1 overflow-y-auto px-3 py-5 scrollbar-thin scrollbar-thumb-slate-800"
        aria-label="Main navigation"
      >
        <div className="space-y-6">
          {navigationSections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-2 px-3 text-[11px] font-bold tracking-wider text-slate-400/80 uppercase">
                {section.title}
              </h2>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const active = isActiveRoute(pathname, item.href);
                  const Icon = item.icon;

                  if (item.comingSoon || !item.href) {
                    return (
                      <div
                        key={item.label}
                        className="group flex h-10 cursor-not-allowed items-center gap-3 rounded-lg px-3 text-sm text-slate-500 transition-colors"
                        title={`${item.label} is coming soon`}
                        aria-disabled="true"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-slate-600" />

                        <span className="flex-1 font-medium">
                          {item.label}
                        </span>

                        <span className="rounded border border-slate-700/50 bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400">
                          Soon
                        </span>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "group flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-all duration-150",
                        active
                          ? "bg-blue-600/15 text-white shadow-sm ring-1 ring-blue-500/30"
                          : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200",
                      ].join(" ")}
                    >
                      <Icon
                        className={[
                          "h-4 w-4 shrink-0 transition-colors",
                          active
                            ? "text-blue-400"
                            : "text-slate-400 group-hover:text-slate-200",
                        ].join(" ")}
                      />

                      <span className="flex-1">{item.label}</span>

                      {active && (
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </nav>

      {/* Footer / Logout */}
      <div className="border-t border-slate-800/80 p-3">
        {logoutError && (
          <div
            role="alert"
            className="mb-2 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400"
          >
            {logoutError}
          </div>
        )}

        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <LogOut className="h-4 w-4 shrink-0" />

          <span>
            {isLoggingOut ? "Logging out..." : "Logout"}
          </span>
        </button>
      </div>
    </aside>
  );
}

export default AppSidebar;