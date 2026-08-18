"use client";

import { useState } from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "./useLogin";
import { loginSchema } from "../schemas/login.schema";
import { LoginFormValues } from "../types/auth.types";

import { profileService } from "@/features/profile/services/profile.service";

/**
 * Accept only safe internal redirect paths.
 *
 * Examples:
 * /dashboard       → allowed
 * /mock-test       → allowed
 * https://evil.com → rejected
 * //evil.com       → rejected
 */
function getSafeRedirectPath(
  redirectPath: string | null
): string | null {
  if (!redirectPath) {
    return null;
  }

  if (!redirectPath.startsWith("/")) {
    return null;
  }

  if (redirectPath.startsWith("//")) {
    return null;
  }

  return redirectPath;
}

export function useLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

 const {
  login,
  isLoading,
  error,
  resendVerificationEmail,
  isResendingVerification,
  resendMessage,
  resendError,
} = useLogin();

  const [profileError, setProfileError] = useState<string | null>(
    null
  );

  /**
   * Preserve the original destination when the user
   * was redirected to login from another protected page.
   */
  const redirectPath = getSafeRedirectPath(
    searchParams.get("redirect")
  );

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    // Clear previous profile lookup error.
    setProfileError(null);

    const result = await login({
      email: values.email,
      password: values.password,
    });

    // Authentication failed.
    if (!result.success) {
      return;
    }

    // Authentication succeeded.
    // Retrieve the authenticated user's profile.
    const profileResult =
      await profileService.getCurrentProfile();

    console.log(
      "Profile check after login:",
      profileResult
    );

    // Profile lookup failed.
    // Do not assume the profile is incomplete.
    if (profileResult.error) {
      console.error(
        "Unable to check profile after login:",
        profileResult.error
      );

      setProfileError(
        "Unable to load your profile. Please try again."
      );

      return;
    }

    // No profile exists.
    // Profile completion takes priority over redirect.
    if (!profileResult.profile) {
      console.log("Profile state: NO PROFILE");

      router.replace("/complete-profile");
      return;
    }

    // Profile exists but is incomplete.
    // Profile completion takes priority over redirect.
    if (!profileResult.profile.is_profile_completed) {
      console.log(
        "Profile state: INCOMPLETE PROFILE"
      );

      router.replace("/complete-profile");
      return;
    }

    // Profile exists and is completed.
    console.log(
      "Profile state: COMPLETED PROFILE"
    );

    // Profile is complete, so the original destination
    // can now be honored safely.
    if (redirectPath) {
      router.replace(redirectPath);
      return;
    }

    // No original destination.
    // Use the normal dashboard destination.
    router.replace("/dashboard");
  };

  return {
  form,
  onSubmit: form.handleSubmit(onSubmit),
  isLoading,
  error: profileError ?? error,
  resendVerificationEmail,
  isResendingVerification,
  resendMessage,
  resendError,
};
}