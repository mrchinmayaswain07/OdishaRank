"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/features/auth/components/LoadingButton";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { useLoginForm } from "../hooks/useLoginForm";
import { DontHaveAccount } from "./DontHaveAccount";

export function LoginForm() {
  const {
    form,
    onSubmit,
    isLoading,
    error,
    resendVerificationEmail,
    isResendingVerification,
    resendMessage,
    resendError,
  } = useLoginForm();

  const {
    register,
    formState: { errors },
  } = form;

  // Show resend option only for an unverified email.
  const isEmailNotVerified =
    error ===
    "Your email is not verified. Please check your inbox for the verification link.";

  const handleResendVerification = async () => {
    const email = form.getValues("email").trim();

    if (!email) {
      return;
    }

    await resendVerificationEmail(email);
  };

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
          disabled={isLoading || isResendingVerification}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />

        {errors.email && (
          <p
            id="email-error"
            className="text-destructive text-sm font-medium"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>

          <Link
            href="/forgot-password"
            className="text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <PasswordInput
          id="password"
          placeholder="••••••••"
          autoComplete="current-password"
          disabled={isLoading || isResendingVerification}
          aria-invalid={!!errors.password}
          error={errors.password?.message}
          {...register("password")}
        />
      </div>

      {/* Error Alert */}
      {error && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm"
        >
          <p className="font-medium text-destructive">{error}</p>

          {/* Resend Verification Email */}
          {isEmailNotVerified && (
            <div className="mt-2">
              <button
                type="button"
                onClick={handleResendVerification}
                disabled={isResendingVerification}
                className="font-semibold text-primary underline underline-offset-4 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isResendingVerification
                  ? "Sending verification email..."
                  : "Resend verification email"}
              </button>
            </div>
          )}

          {/* Resend Success Message */}
          {resendMessage && (
            <p className="mt-2 text-sm font-medium text-emerald-600">
              {resendMessage}
            </p>
          )}

          {/* Resend Error Message */}
          {resendError && (
            <p className="mt-2 text-sm font-medium text-destructive">
              {resendError}
            </p>
          )}
        </div>
      )}

      {/* Submit Button */}
      <LoadingButton
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        Sign In
      </LoadingButton>

      {/* Footer Link */}
      <div className="pt-2">
        <DontHaveAccount />
      </div>
    </form>
  );
}

export default LoginForm;