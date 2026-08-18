import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full Name is required")
      .min(3, "Full Name must be at least 3 characters")
      .max(100, "Full Name must be at most 100 characters"),
    email: z
      .string()
      .min(1, "Email Address is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });