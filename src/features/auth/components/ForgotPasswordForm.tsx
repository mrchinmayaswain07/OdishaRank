"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/features/auth/components/LoadingButton";
import { useForgotPasswordForm } from "../hooks/useForgotPasswordForm";

export function ForgotPasswordForm() {
  const {
    form,
    onSubmit,
    isLoading,
    error,
  } = useForgotPasswordForm();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Email Address */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
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
        Send OTP
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