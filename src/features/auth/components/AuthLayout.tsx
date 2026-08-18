import React from "react";
import Link from "next/link";
import { GraduationCap, CheckCircle2, Trophy, BookOpen, Target } from "lucide-react";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { APP_CONFIG } from "@/constants/app";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Subtle Gradient Highlights */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/10" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-600/10" />

      {/* Desktop Left Side Branding/Illustration Panel */}
      <div className="relative hidden w-1/2 flex-col justify-between border-r border-slate-200 bg-slate-900 p-12 text-white dark:border-slate-800 lg:flex">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

        {/* Brand Header */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
              <GraduationCap className="h-7 w-7" />
            </div>
            <span className="text-3xl font-extrabold tracking-tight">
              {APP_CONFIG.logo.primaryText}
              <span className="text-blue-400">{APP_CONFIG.logo.highlightText}</span>
            </span>
          </Link>
        </div>

        {/* Central Value Proposition */}
        <div className="relative z-10 my-auto max-w-lg space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {APP_CONFIG.tagline}
            </h2>
            <p className="text-lg text-slate-400">{APP_CONFIG.description}</p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Focused Exam Targeting</h3>
                <p className="text-sm text-slate-400">
                  Custom material and mock tests curated for OSSC CGL, ASO, Police SI, and OSSSC exams.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Track & Improve</h3>
                <p className="text-sm text-slate-400">
                  Replace spreadsheets with integrated study logs, performance analytics, and revision notebooks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Odisha Specific Modules</h3>
                <p className="text-sm text-slate-400">
                  In-depth Odisha GK and daily Current Affairs curated specifically for state syllabus patterns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Panel Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-500">
          <span>© {new Date().getFullYear()} {APP_CONFIG.name} Platform</span>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Verified Syllabus Coverage</span>
          </div>
        </div>
      </div>

      {/* Mobile & Right Side Authentication Card Container */}
      <div className="relative z-10 flex flex-1 flex-col justify-between p-4 sm:p-6 lg:w-1/2 lg:p-12">
        <main className="my-auto flex w-full items-center justify-center py-8">
          <AuthCard>{children}</AuthCard>
        </main>

        <footer className="py-4 text-center text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {APP_CONFIG.name}. {APP_CONFIG.tagline}
        </footer>
      </div>
    </div>
  );
}