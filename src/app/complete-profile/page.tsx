"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useProfile } from "@/features/profile/hooks/useProfile";
import { CompleteProfileForm } from "@/features/profile/components/CompleteProfileForm";

export default function CompleteProfilePage() {
  const router = useRouter();

  const {
    profile,
    isLoading,
    error,
  } = useProfile();

  useEffect(() => {
    if (!isLoading && profile?.is_profile_completed) {
      router.replace("/dashboard");
    }
  }, [isLoading, profile, router]);

  // Loading profile
  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4 py-10">
        <p className="text-muted-foreground">
          Loading profile...
        </p>
      </main>
    );
  }

  // Profile loading error
  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-2xl font-bold">
            Unable to load profile
          </h1>

          <p className="mt-3 text-muted-foreground">
            {error}
          </p>
        </div>
      </main>
    );
  }

  // Profile is incomplete or doesn't exist
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <CompleteProfileForm />
    </main>
  );
}