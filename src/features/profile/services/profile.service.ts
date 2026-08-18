import { supabase } from "@/lib/supabase/client";
import type {
  CreateProfileInput,
  Profile,
  UpdateProfileInput,
} from "../types/profile.types";

export const profileService = {
  /**
   * Get the currently authenticated user's profile.
   *
   * The user ID always comes from the active Supabase session.
   * It is never supplied by the form/client.
   */
  async getCurrentProfile(): Promise<{
    profile: Profile | null;
    error: string | null;
  }> {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        return {
          profile: null,
          error: userError.message,
        };
      }

      if (!user) {
        return {
          profile: null,
          error: "You must be authenticated to access your profile.",
        };
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) {
        return {
          profile: null,
          error: error.message,
        };
      }

      return {
        profile: data as Profile | null,
        error: null,
      };
    } catch (error: unknown) {
      return {
        profile: null,
        error:
          error instanceof Error
            ? error.message
            : "Unable to load your profile.",
      };
    }
  },

  /**
   * Create the authenticated user's profile.
   *
   * user_id is taken directly from the authenticated Supabase user.
   */
  async createProfile(
    input: CreateProfileInput
  ): Promise<{
    profile: Profile | null;
    error: string | null;
  }> {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        return {
          profile: null,
          error: userError.message,
        };
      }

      if (!user) {
        return {
          profile: null,
          error: "You must be authenticated to create a profile.",
        };
      }

      const { data, error } = await supabase
        .from("profiles")
        .insert({
          user_id: user.id,
          full_name: input.full_name,
          email: user.email,
          qualification: input.qualification,
          state: input.state,
          district: input.district,
          daily_study_hours: input.daily_study_hours,
          target_year: input.target_year,
          is_profile_completed: true,
        })
        .select()
        .single();

      if (error) {
        return {
          profile: null,
          error: error.message,
        };
      }

      return {
        profile: data as Profile,
        error: null,
      };
    } catch (error: unknown) {
      return {
        profile: null,
        error:
          error instanceof Error
            ? error.message
            : "Unable to create your profile.",
      };
    }
  },

  /**
   * Update the authenticated user's profile.
   */
  async updateProfile(
    input: UpdateProfileInput
  ): Promise<{
    profile: Profile | null;
    error: string | null;
  }> {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        return {
          profile: null,
          error: userError.message,
        };
      }

      if (!user) {
        return {
          profile: null,
          error: "You must be authenticated to update your profile.",
        };
      }

      const { data, error } = await supabase
        .from("profiles")
        .update(input)
        .eq("user_id", user.id)
        .select()
        .single();

      if (error) {
        return {
          profile: null,
          error: error.message,
        };
      }

      return {
        profile: data as Profile,
        error: null,
      };
    } catch (error: unknown) {
      return {
        profile: null,
        error:
          error instanceof Error
            ? error.message
            : "Unable to update your profile.",
      };
    }
  },
};