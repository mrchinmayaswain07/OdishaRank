import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email address is required" })
      .email({ message: "Please enter a valid email address" }),

    token: z
      .string()
      .min(1, { message: "Verification code is required" })
      .length(8, { message: "Verification code must be 8 digits" })
      .regex(/^\d+$/, {
        message: "Verification code must contain only numbers",
      }),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;