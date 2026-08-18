import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import { LANDING_NAV_ITEMS } from "../data/landing.data";
import { MobileNav } from "./MobileNav";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Area */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg"
          aria-label="OdishaRank Home"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <GraduationCap className="h-6 w-6 text-white stroke-[2]" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Odisha<span className="text-blue-600">Rank</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex md:items-center md:gap-1 lg:gap-2"
          aria-label="Main Navigation"
        >
          {LANDING_NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth CTA Actions */}
        <div className="hidden md:flex md:items-center md:gap-3">
          <Link
            href="/login"
            className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Log In
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileNav items={LANDING_NAV_ITEMS} />
      </div>
    </header>
  );
}