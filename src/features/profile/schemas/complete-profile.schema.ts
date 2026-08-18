import { z } from "zod";

export const completeProfileSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be 100 characters or less."),

  qualification: z
    .string()
    .min(1, "Please select your qualification."),

  state: z
    .string()
    .min(1, "Please select your state."),

  district: z
    .string()
    .min(1, "Please select your district."),

  daily_study_hours: z
    .number({
      error: "Please select your daily study hours.",
    })
    .int("Study hours must be a whole number.")
    .min(1, "Daily study hours must be at least 1.")
    .max(6, "Invalid study hours."),

  target_year: z
    .number({
      error: "Please select your target year.",
    })
    .int("Target year must be a whole number.")
    .min(2026, "Please select a valid target year.")
    .max(2028, "Please select a valid target year."),
});

export type CompleteProfileInput = z.infer<
  typeof completeProfileSchema
>;