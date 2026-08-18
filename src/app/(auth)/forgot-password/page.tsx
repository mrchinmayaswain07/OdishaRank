"use client";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthCard>
      <div className="space-y-6">
        <AuthHeader
          title="Forgot Password"
          subtitle="Enter your email address and we'll send you a one-time password (OTP) to reset your password."
        />
        <ForgotPasswordForm />
      </div>
    </AuthCard>
  );
}