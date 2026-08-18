import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { APP_CONFIG } from "@/constants/app";

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}

export function AuthHeader({
  title,
  subtitle,
  showLogo = true,
}: AuthHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 text-center">
      {showLogo && (
        <Link
          href="/"
          className="mb-2 flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {APP_CONFIG.logo.primaryText}
            <span className="text-blue-600 dark:text-blue-400">
              {APP_CONFIG.logo.highlightText}
            </span>
          </span>
        </Link>
      )}
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}