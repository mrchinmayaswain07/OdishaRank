"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { LoadingButton } from "@/features/auth/components/LoadingButton";
import { useResetPasswordForm } from "../hooks/useResetPasswordForm";

interface ResetPasswordFormProps {
  email: string;
}

export function ResetPasswordForm({ email }: ResetPasswordFormProps) {
  const { form, onSubmit, isLoading, error } = useResetPasswordForm(email);

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>

        <Input
          id="email"
          type="email"
          readOnly
          disabled={isLoading}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-destructive text-sm font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Info Message */}
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm text-muted-foreground"
      >
        If an account exists for this email, a verification code has been sent to
        your email.
      </div>

      {/* Verification Code */}
      <div className="space-y-2">
        <Label htmlFor="token">Verification Code</Label>

        <Input
          id="token"
          placeholder="Enter the 8-digit code"
          inputMode="numeric"
          autoComplete="one-time-code"
          disabled={isLoading}
          aria-invalid={!!errors.token}
          aria-describedby={errors.token ? "token-error" : undefined}
          {...register("token")}
        />
        {errors.token && (
          <p id="token-error" className="text-destructive text-sm font-medium">
            {errors.token.message}
          </p>
        )}
      </div>

      {/* New Password */}
      <div className="space-y-2">
        <Label htmlFor="password">New Password</Label>

        <PasswordInput
          id="password"
          placeholder="••••••••"
          autoComplete="new-password"
          disabled={isLoading}
          error={errors.password?.message}
          aria-invalid={!!errors.password}
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
          disabled={isLoading}
          error={errors.confirmPassword?.message}
          aria-invalid={!!errors.confirmPassword}
          {...register("confirmPassword")}
        />
      </div>

      {/* Error Alert */}
      {error && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm font-medium text-destructive"
        >
          <p>{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <LoadingButton
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        Reset Password
      </LoadingButton>

      {/* Back to Login Link */}
      <div className="pt-2 text-center">
        <Link
          href="/login"
          className="inline-flex items-center text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Login
        </Link>
      </div>
    </form>
  );
}