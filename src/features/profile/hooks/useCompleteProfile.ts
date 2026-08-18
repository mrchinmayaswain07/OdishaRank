"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { profileService } from "../services/profile.service";
import type { CompleteProfileInput } from "../schemas/complete-profile.schema";

interface UseCompleteProfileReturn {
  submitProfile: (values: CompleteProfileInput) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

export function useCompleteProfile(): UseCompleteProfileReturn {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitProfile = async (
    values: CompleteProfileInput
  ): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Check whether the authenticated user already has a profile.
      const currentProfile = await profileService.getCurrentProfile();

      if (currentProfile.error) {
        setError(currentProfile.error);
        return false;
      }

      let result;

      if (currentProfile.profile) {
        // Existing profile → update it.
        result = await profileService.updateProfile({
          full_name: values.full_name,
          qualification: values.qualification,
          state: values.state,
          district: values.district,
          daily_study_hours: values.daily_study_hours,
          target_year: values.target_year,
          is_profile_completed: true,
        });
      } else {
        // No profile → create it.
        result = await profileService.createProfile({
          full_name: values.full_name,
          qualification: values.qualification,
          state: values.state,
          district: values.district,
          daily_study_hours: values.daily_study_hours,
          target_year: values.target_year,
        });
      }

      if (result.error) {
        setError(result.error);
        return false;
      }

      // Profile saved successfully.
      router.replace("/dashboard");

      return true;
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to save your profile.";

      setError(message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitProfile,
    isLoading,
    error,
  };
}