"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import type { NavItem } from "../types/landing.types";

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState("");
  const pathname = usePathname();

  // Reset menu state during render if pathname has changed
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isOpen) {
      setIsOpen(false);
    }
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Menu Toggle Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
      >
        {isOpen ? (
          <X className="h-5 w-5 stroke-[2]" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5 stroke-[2]" aria-hidden="true" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 top-[65px] z-50 transform border-b border-slate-200/90 bg-white p-6 shadow-xl transition-all duration-200 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
          <div className="flex flex-col space-y-1 pb-4">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600 active:bg-slate-100"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-2.5 border-t border-slate-100 pt-4">
            <Link
              href="/login"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-[0.99]"
            >
              Log In
            </Link>

            <Link
              href="/register"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-[0.99]"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}