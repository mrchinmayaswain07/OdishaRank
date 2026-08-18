import { z } from "zod";

import {
  QUALIFICATION_OPTIONS,
  STATE_OPTIONS,
  DISTRICTS_BY_STATE,
  DAILY_STUDY_HOURS_OPTIONS,
  TARGET_YEAR_OPTIONS,
} from "../constants/profile-options";

const DISTRICT_OPTIONS = DISTRICTS_BY_STATE.odisha;

/**
 * Shared profile field validation.
 *
 * Used by both:
 * - Complete Profile
 * - Edit Profile
 *
 * The allowed values come from profile-options.ts.
 */
export const profileSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be 100 characters or less."),

  qualification: z
    .string()
    .refine(
      (value) =>
        QUALIFICATION_OPTIONS.some(
          (option) => option.value === value
        ),
      "Please select a valid qualification."
    ),

  state: z
    .string()
    .refine(
      (value) =>
        STATE_OPTIONS.some(
          (option) => option.value === value
        ),
      "Please select a valid state."
    ),

  district: z
    .string()
    .refine(
      (value) =>
        DISTRICT_OPTIONS.some(
          (option) => option.value === value
        ),
      "Please select a valid district."
    ),

  daily_study_hours: z
    .number({
      error: "Please select your daily study hours.",
    })
    .int("Study hours must be a whole number.")
    .refine(
      (value) =>
        DAILY_STUDY_HOURS_OPTIONS.some(
          (option) => option.value === value
        ),
      "Please select valid daily study hours."
    ),

  target_year: z
    .number({
      error: "Please select your target year.",
    })
    .int("Target year must be a whole number.")
    .refine(
      (value) =>
        TARGET_YEAR_OPTIONS.some(
          (option) => option.value === value
        ),
      "Please select a valid target year."
    ),
});

export type ProfileFormValues = z.infer<
  typeof profileSchema
>;