"use client";

import { useRouter } from "next/navigation";
import { useProfile } from "@/features/profile/hooks/useProfile";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  User,
  UserPen,
  GraduationCap,
  MapPin,
  MapPinned,
  Clock3,
  CalendarDays,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

function getInitials(name: string | null | undefined): string {
  if (!name?.trim()) {
    return "";
  }

  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function formatStudyHours(hours: number | null | undefined): string {
  if (hours === null || hours === undefined) {
    return "Not provided";
  }

  return `${hours} ${hours === 1 ? "hour" : "hours"}`;
}

function formatValue(value: string | number | null | undefined): string {
  if (value === null || value === undefined || value === "") {
    return "Not provided";
  }

  return String(value);
}

export default function ProfilePage() {
  const router = useRouter();
  const { profile, isLoading, error } = useProfile();

  // Loading State Skeleton
  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-5xl space-y-8">
        {/* Header Skeleton */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="h-8 w-44 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-4 w-72 animate-pulse rounded-md bg-slate-200" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-44 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-10 w-32 animate-pulse rounded-lg bg-slate-200" />
          </div>
        </div>

        {/* Profile Card Skeleton */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="h-20 w-20 animate-pulse rounded-full bg-slate-200" />
            <div className="space-y-3">
              <div className="h-6 w-48 animate-pulse rounded-md bg-slate-200" />
              <div className="h-4 w-64 animate-pulse rounded-md bg-slate-200" />
              <div className="h-4 w-36 animate-pulse rounded-md bg-slate-200" />
            </div>
          </div>
        </div>

        {/* Content Section Skeleton */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-6">
            <div className="h-5 w-48 animate-pulse rounded-md bg-slate-200" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="h-20 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-20 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-20 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-20 animate-pulse rounded-xl bg-slate-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State Card
  if (error) {
    return (
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50/50 p-6 shadow-sm">
          <AlertCircle className="h-6 w-6 shrink-0 text-red-600" />
          <div className="space-y-1">
            <h1 className="text-base font-semibold text-red-900">
              Unable to load your profile
            </h1>
            <p className="text-sm text-red-600/90">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Profile Not Found State Card
  if (!profile) {
    return (
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 text-center shadow-sm">
          <User className="mx-auto h-12 w-12 text-slate-400" />
          <h1 className="mt-4 text-lg font-semibold text-slate-900">
            Profile not found
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            We could not find your profile information. Please contact support or retry logging in.
          </p>
        </div>
      </div>
    );
  }

  const fullName = profile.full_name?.trim() || "User";
  const email = profile.email?.trim() || "Email not provided";
  const initials = getInitials(profile.full_name);
  const avatarUrl = profile.avatar_url?.trim() || "";

  return (
    <div className="mx-auto w-full max-w-5xl space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            My Profile
          </h1>
          <p className="text-sm text-slate-500 sm:text-base">
            Manage your personal and exam preparation details.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-150 hover:bg-slate-50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </button>

          <button
            type="button"
            onClick={() => router.push("/profile/edit")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <UserPen className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Profile Identity Card */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Avatar className="h-20 w-20 border-2 border-blue-100 shadow-md">
              {avatarUrl && (
                <AvatarImage src={avatarUrl} alt={fullName} className="object-cover" />
              )}
              <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold text-white">
                {initials || <User className="h-8 w-8 text-white" />}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-1.5 min-w-0">
              <h2 className="truncate text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {fullName}
              </h2>
              <p className="truncate text-sm font-medium text-slate-500">
                {email}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <ShieldCheck className="h-4 w-4" />
                <span>OdishaRank Member</span>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <span
              className={
                profile.is_profile_completed
                  ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200/60"
                  : "inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200"
              }
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              {profile.is_profile_completed ? "Profile Completed" : "Incomplete"}
            </span>
          </div>
        </div>
      </section>

      {/* Personal & Education */}
      <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
        <div className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Personal & Education
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Your education and location information.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
            <ProfileField
              icon={User}
              label="Full Name"
              value={formatValue(profile.full_name)}
            />
            <ProfileField
              icon={GraduationCap}
              label="Qualification"
              value={formatValue(profile.qualification)}
            />
            <ProfileField
              icon={MapPin}
              label="State"
              value={formatValue(profile.state)}
            />
            <ProfileField
              icon={MapPinned}
              label="District"
              value={formatValue(profile.district)}
            />
          </div>
        </div>
      </section>

      {/* Study Preferences */}
      <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
        <div className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Study Preferences
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Your exam preparation preferences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
            <ProfileField
              icon={Clock3}
              label="Daily Study Hours"
              value={formatStudyHours(profile.daily_study_hours)}
            />
            <ProfileField
              icon={CalendarDays}
              label="Target Year"
              value={formatValue(profile.target_year)}
            />
          </div>
        </div>
      </section>

      {/* Profile Status */}
      <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Profile Status
            </h2>
            <p className="text-sm text-slate-500">
              Your profile completion status.
            </p>
          </div>

          <div>
            <span
              className={
                profile.is_profile_completed
                  ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200/60"
                  : "inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200"
              }
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              {profile.is_profile_completed ? "Completed" : "Incomplete"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ProfileFieldProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

function ProfileField({ icon: Icon, label, value }: ProfileFieldProps) {
  return (
    <div className="group flex items-start gap-3.5 rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 transition-colors hover:border-slate-300 hover:bg-slate-50">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm border border-slate-200/80">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}