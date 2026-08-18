"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Loader2, Sparkles } from "lucide-react";

import { useCompleteProfile } from "../hooks/useCompleteProfile";
import {
  completeProfileSchema,
  type CompleteProfileInput,
} from "../schemas/complete-profile.schema";

import {
  QUALIFICATION_OPTIONS,
  STATE_OPTIONS,
  DISTRICTS_BY_STATE,
  DAILY_STUDY_HOURS_OPTIONS,
  TARGET_YEAR_OPTIONS,
} from "../constants/profile-options";

export function CompleteProfileForm() {
  const { submitProfile, isLoading, error } = useCompleteProfile();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CompleteProfileInput>({
    resolver: zodResolver(completeProfileSchema),
    defaultValues: {
      full_name: "",
      qualification: "",
      state: "odisha",
      district: "",
      daily_study_hours: undefined,
      target_year: undefined,
    },
  });

  const selectedState = watch("state");

  const districts =
    DISTRICTS_BY_STATE[
      selectedState as keyof typeof DISTRICTS_BY_STATE
    ] ?? [];

  const onSubmit = async (values: CompleteProfileInput) => {
    await submitProfile(values);
  };

  return (
    <div className="mx-auto w-full max-w-xl p-4 sm:p-6 lg:p-8">
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        {/* Form Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="h-6 w-6" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Complete Your Profile
          </h1>

          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Tell us a little about yourself so we can personalize your exam
            preparation.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="full_name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Full Name <span className="text-destructive">*</span>
            </label>

            <input
              id="full_name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              disabled={isLoading}
              {...register("full_name")}
              aria-invalid={!!errors.full_name}
              aria-describedby={errors.full_name ? "full_name-error" : undefined}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />

            {errors.full_name && (
              <p id="full_name-error" className="text-sm font-medium text-destructive">
                {errors.full_name.message}
              </p>
            )}
          </div>

          {/* Qualification */}
          <div className="space-y-1.5">
            <label
              htmlFor="qualification"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Qualification <span className="text-destructive">*</span>
            </label>

            <select
              id="qualification"
              disabled={isLoading}
              {...register("qualification")}
              aria-invalid={!!errors.qualification}
              aria-describedby={
                errors.qualification ? "qualification-error" : undefined
              }
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select Qualification</option>

              {QUALIFICATION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {errors.qualification && (
              <p
                id="qualification-error"
                className="text-sm font-medium text-destructive"
              >
                {errors.qualification.message}
              </p>
            )}
          </div>

          {/* State */}
          <div className="space-y-1.5">
            <label
              htmlFor="state"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              State <span className="text-destructive">*</span>
            </label>

            <select
              id="state"
              disabled={isLoading}
              {...register("state")}
              aria-invalid={!!errors.state}
              aria-describedby={errors.state ? "state-error" : undefined}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select State</option>

              {STATE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {errors.state && (
              <p id="state-error" className="text-sm font-medium text-destructive">
                {errors.state.message}
              </p>
            )}
          </div>

          {/* District */}
          <div className="space-y-1.5">
            <label
              htmlFor="district"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              District <span className="text-destructive">*</span>
            </label>

            <select
              id="district"
              disabled={isLoading || !selectedState}
              {...register("district")}
              aria-invalid={!!errors.district}
              aria-describedby={
                errors.district ? "district-error" : undefined
              }
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select District</option>

              {districts.map((district) => (
                <option key={district.value} value={district.value}>
                  {district.label}
                </option>
              ))}
            </select>

            {errors.district && (
              <p
                id="district-error"
                className="text-sm font-medium text-destructive"
              >
                {errors.district.message}
              </p>
            )}
          </div>

          {/* Daily Study Hours */}
          <div className="space-y-1.5">
            <label
              htmlFor="daily_study_hours"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Daily Study Hours <span className="text-destructive">*</span>
            </label>

            <Controller
              name="daily_study_hours"
              control={control}
              render={({ field }) => (
                <select
                  id="daily_study_hours"
                  disabled={isLoading}
                  value={field.value ?? ""}
                  onChange={(event) => {
                    const value = event.target.value;

                    field.onChange(
                      value === "" ? undefined : Number(value)
                    );
                  }}
                  onBlur={field.onBlur}
                  aria-invalid={!!errors.daily_study_hours}
                  aria-describedby={
                    errors.daily_study_hours
                      ? "daily_study_hours-error"
                      : undefined
                  }
                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select Study Hours</option>

                  {DAILY_STUDY_HOURS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />

            {errors.daily_study_hours && (
              <p
                id="daily_study_hours-error"
                className="text-sm font-medium text-destructive"
              >
                {errors.daily_study_hours.message}
              </p>
            )}
          </div>

          {/* Target Year */}
          <div className="space-y-1.5">
            <label
              htmlFor="target_year"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Target Year <span className="text-destructive">*</span>
            </label>

            <Controller
              name="target_year"
              control={control}
              render={({ field }) => (
                <select
                  id="target_year"
                  disabled={isLoading}
                  value={field.value ?? ""}
                  onChange={(event) => {
                    const value = event.target.value;

                    field.onChange(
                      value === "" ? undefined : Number(value)
                    );
                  }}
                  onBlur={field.onBlur}
                  aria-invalid={!!errors.target_year}
                  aria-describedby={
                    errors.target_year ? "target_year-error" : undefined
                  }
                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select Target Year</option>

                  {TARGET_YEAR_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />

            {errors.target_year && (
              <p
                id="target_year-error"
                className="text-sm font-medium text-destructive"
              >
                {errors.target_year.message}
              </p>
            )}
          </div>

          {/* Service / Server Error */}
          {error && (
            <div
              role="alert"
              aria-live="polite"
              className="rounded-lg border border-destructive/20 bg-destructive/10 p-3.5 text-sm font-medium text-destructive"
            >
              <p>Unable to save your profile.</p>
              <p className="mt-0.5 text-xs opacity-90">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Saving Profile...</span>
              </>
            ) : (
              <>
                <span>Continue</span>
                <Sparkles className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}