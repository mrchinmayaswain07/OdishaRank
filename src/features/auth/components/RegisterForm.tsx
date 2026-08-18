"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/features/auth/components/LoadingButton";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { useRegisterForm } from "../hooks/useRegisterForm";
import { AlreadyHaveAccount } from "./AlreadyHaveAccount";

export function RegisterForm() {
  const {
    form,
    onSubmit,
    isLoading,
    error,
    success,
  } = useRegisterForm();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="John Doe"
          autoComplete="name"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-destructive text-sm font-medium">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email Address */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-destructive text-sm font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          id="password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={errors.password?.message}
          {...register("password")}
        />
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <PasswordInput
          id="confirmPassword"
          placeholder="••••••••"
          autoComplete="new-password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
      </div>

      {/* Success Alert */}
      {success && (
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
          <p className="font-semibold">Account created successfully!</p>
          <p className="text-xs opacity-90">
            Please check your email to verify your account.
          </p>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm font-medium text-destructive">
          <p>{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <LoadingButton
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        Create Account
      </LoadingButton>

      {/* Footer link */}
      <div className="pt-2">
        <AlreadyHaveAccount />
      </div>
    </form>
  );
}