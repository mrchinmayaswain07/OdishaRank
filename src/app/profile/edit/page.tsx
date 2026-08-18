"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  User,
  GraduationCap,
  MapPin,
  MapPinned,
  Clock3,
  CalendarDays,
  Loader2,
  AlertCircle,
  Save,
} from "lucide-react";

import { useProfile } from "@/features/profile/hooks/useProfile";
import { profileService } from "@/features/profile/services/profile.service";

import {
  QUALIFICATION_OPTIONS,
  STATE_OPTIONS,
  DISTRICTS_BY_STATE,
  DAILY_STUDY_HOURS_OPTIONS,
  TARGET_YEAR_OPTIONS,
} from "@/features/profile/constants/profile-options";

import {
  profileSchema,
  type ProfileFormValues,
} from "@/features/profile/schemas/profile.schema";

import type { UpdateProfileInput } from "@/features/profile/types/profile.types";

const DISTRICT_OPTIONS = DISTRICTS_BY_STATE.odisha;

export default function EditProfilePage() {
  const router = useRouter();

  const {
    profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useProfile();

  const [saveError, setSaveError] = useState<string | null>(
    null
  );

  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      full_name: "",
      qualification: "",
      state: "",
      district: "",
      daily_study_hours: undefined,
      target_year: undefined,
    },
  });

  /*
   * Load the existing profile into the form.
   */
  useEffect(() => {
    if (!profile) {
      return;
    }

    form.reset({
      full_name: profile.full_name ?? "",
      qualification: profile.qualification ?? "",
      state: profile.state ?? "",
      district: profile.district ?? "",
      daily_study_hours:
        profile.daily_study_hours ?? undefined,
      target_year:
        profile.target_year ?? undefined,
    });
  }, [profile, form]);

  /*
   * Save updated profile.
   */
  const onSubmit: SubmitHandler<ProfileFormValues> =
    async (values) => {
      setSaveError(null);
      setIsSaving(true);

      const input: UpdateProfileInput = {
        full_name: values.full_name.trim(),
        qualification: values.qualification,
        state: values.state,
        district: values.district,
        daily_study_hours: values.daily_study_hours,
        target_year: values.target_year,
      };

      try {
        const result =
          await profileService.updateProfile(input);

        if (result.error) {
          setSaveError(result.error);
          return;
        }

        router.replace("/profile");
      } catch (error: unknown) {
        setSaveError(
          error instanceof Error
            ? error.message
            : "Unable to update your profile."
        );
      } finally {
        setIsSaving(false);
      }
    };

  /*
   * Profile loading state skeleton.
   */
  if (isProfileLoading) {
    return (
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="h-8 w-44 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-4 w-72 animate-pulse rounded-md bg-slate-200" />
          </div>
          <div className="h-10 w-32 animate-pulse rounded-lg bg-slate-200" />
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="h-20 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-20 animate-pulse rounded-xl bg-slate-100" />
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

  /*
   * Profile loading error card.
   */
  if (profileError || !profile) {
    return (
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-red-200 bg-red-50/50 p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 shrink-0 text-red-600" />
            <h1 className="text-base font-semibold text-red-900">
              Unable to load profile
            </h1>
          </div>

          <p className="text-sm text-red-600/90">
            {profileError ?? "Your profile could not be found."}
          </p>

          <button
            type="button"
            onClick={() => router.push("/profile")}
            className="mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Edit Profile
          </h1>

          <p className="text-sm text-slate-500 sm:text-base">
            Update your personal and exam preparation details.
          </p>
        </div>

        <button
          type="button"
          onClick={() => router.push("/profile")}
          disabled={isSaving}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Profile</span>
        </button>
      </div>

      {/* Edit Form */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <FormField
              label="Full Name"
              icon={User}
              error={form.formState.errors.full_name?.message}
            >
              <input
                {...form.register("full_name")}
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                disabled={isSaving}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
              />
            </FormField>

            {/* Qualification */}
            <FormField
              label="Qualification"
              icon={GraduationCap}
              error={form.formState.errors.qualification?.message}
            >
              <select
                {...form.register("qualification")}
                disabled={isSaving}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
              >
                <option value="">Select Qualification</option>
                {QUALIFICATION_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FormField>

            {/* State */}
            <FormField
              label="State"
              icon={MapPin}
              error={form.formState.errors.state?.message}
            >
              <select
                {...form.register("state")}
                disabled={isSaving}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
              >
                <option value="">Select State</option>
                {STATE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FormField>

            {/* District */}
            <FormField
              label="District"
              icon={MapPinned}
              error={form.formState.errors.district?.message}
            >
              <select
                {...form.register("district")}
                disabled={isSaving}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
              >
                <option value="">Select District</option>
                {DISTRICT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FormField>

            {/* Daily Study Hours */}
            <FormField
              label="Daily Study Hours"
              icon={Clock3}
              error={form.formState.errors.daily_study_hours?.message}
            >
              <select
                {...form.register("daily_study_hours", {
                  valueAsNumber: true,
                })}
                disabled={isSaving}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
              >
                <option value="">Select Daily Study Hours</option>
                {DAILY_STUDY_HOURS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FormField>

            {/* Target Year */}
            <FormField
              label="Target Year"
              icon={CalendarDays}
              error={form.formState.errors.target_year?.message}
            >
              <select
                {...form.register("target_year", {
                  valueAsNumber: true,
                })}
                disabled={isSaving}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
              >
                <option value="">Select Target Year</option>
                {TARGET_YEAR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          {/* Save Error Alert */}
          {saveError && (
            <div
              role="alert"
              className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50/50 p-4 text-sm font-medium text-red-700"
            >
              <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
              <span>{saveError}</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => router.push("/profile")}
              disabled={isSaving}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable Form Field                                                        */
/* -------------------------------------------------------------------------- */

interface FormFieldProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  error?: string;
  children: React.ReactNode;
}

function FormField({
  label,
  icon: Icon,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600">
        <Icon className="h-3.5 w-3.5 text-blue-600" />
        <label>{label}</label>
      </div>

      {children}

      {error && (
        <p
          role="alert"
          className="text-xs font-semibold text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}