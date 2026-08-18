import { z } from "zod";
import { registerSchema } from "../schemas/register.schema";
import { loginSchema } from "../schemas/login.schema";
import { forgotPasswordSchema } from "../schemas/forgot-password.schema";
import { resetPasswordSchema } from "../schemas/reset-password.schema";

/**
 * Form inputs inferred directly from the register Zod schema.
 */
export type RegisterFormValues = z.infer<typeof registerSchema>;

/**
 * Form inputs inferred directly from the login Zod schema.
 */
export type LoginFormValues = z.infer<typeof loginSchema>;

/**
 * Form inputs inferred directly from the forgot password Zod schema.
 */
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

/**
 * Form inputs inferred directly from the reset password Zod schema.
 */
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

/**
 * Parameters passed to the authentication registration service.
 */
export interface RegisterParams {
  fullName: string;
  email: string;
  password: string;
}

/**
 * Parameters passed to the authentication login service.
 */
export interface LoginParams {
  email: string;
  password: string;
}

/**
 * Parameters passed to the forgot password service.
 */
export interface ForgotPasswordParams {
  email: string;
}

/**
 * Parameters passed to the reset password service.
 */
export interface ResetPasswordParams {
  email: string;
  token: string;
  password: string;
}

/**
 * Standardized service response structure for authentication workflows.
 */
export interface AuthServiceResponse {
  success: boolean;
  message?: string;
  error?: string;
}