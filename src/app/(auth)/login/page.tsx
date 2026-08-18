import { Suspense } from "react";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthCard>
      <div className="space-y-6">
        <AuthHeader
          title="Welcome back"
          subtitle="Enter your email and password to continue"
        />

        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </AuthCard>
  );
}