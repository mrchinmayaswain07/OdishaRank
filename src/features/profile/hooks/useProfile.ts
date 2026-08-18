"use client";

import { useCallback, useEffect, useState } from "react";

import { profileService } from "../services/profile.service";
import type { Profile } from "../types/profile.types";

interface UseProfileReturn {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProfile(): UseProfileReturn {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProfile = useCallback(async () => {
    const result = await profileService.getCurrentProfile();

    if (result.error) {
      setProfile(null);
      setError(result.error);
    } else {
      setProfile(result.profile);
      setError(null);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const result = await profileService.getCurrentProfile();

        if (cancelled) {
          return;
        }

        if (result.error) {
          setProfile(null);
          setError(result.error);
        } else {
          setProfile(result.profile);
          setError(null);
        }

        setIsLoading(false);
      } catch (error: unknown) {
        if (cancelled) {
          return;
        }

        setProfile(null);
        setError(
          error instanceof Error
            ? error.message
            : "Unable to load your profile."
        );
        setIsLoading(false);
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    await loadProfile();
  }, [loadProfile]);

  return {
    profile,
    isLoading,
    error,
    refetch,
  };
}