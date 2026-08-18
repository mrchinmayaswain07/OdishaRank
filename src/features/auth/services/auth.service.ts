import { supabase } from "@/lib/supabase/client";
import {
  RegisterParams,
  LoginParams,
  ForgotPasswordParams,
  ResetPasswordParams,
  AuthServiceResponse,
} from "../types/auth.types";

export const authService = {
  /**
   * Registers a user via Supabase Auth. Performs a server-side availability check
   * prior to calling `signUp` to catch duplicate emails accurately.
   */
  async register({
    fullName,
    email,
    password,
  }: RegisterParams): Promise<AuthServiceResponse> {
    try {
      // Step 1: Pre-check duplicate email via API route
      const checkResponse = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const checkData = await checkResponse.json();

      if (!checkResponse.ok || !checkData.success) {
        return {
          success: false,
          error:
            checkData.error ||
            "An account with this email already exists. Please sign in instead.",
        };
      }

      // Step 2: Perform standard browser sign-up flow
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            full_name: fullName,
            email: email,
          },
        },
      });

      if (authError) {
        return {
          success: false,
          error: authError.message,
        };
      }

      if (!authData.user) {
        return {
          success: false,
          error: "User registration failed. No user object returned from Supabase.",
        };
      }

      return {
        success: true,
        message:
          "Registration successful! Please check your email to verify your account.",
      };
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred during registration.";
      return {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Authenticates a user using email and password with user-friendly error mapping.
   */
  async login({ email, password }: LoginParams): Promise<AuthServiceResponse> {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        const msg = error.message.toLowerCase();

        if (msg.includes("invalid login credentials")) {
          return {
            success: false,
            error: "Invalid email or password. Please try again.",
          };
        }

        if (msg.includes("email not confirmed")) {
          return {
            success: false,
            error:
              "Your email is not verified. Please check your inbox for the verification link.",
          };
        }

        if (msg.includes("too many requests") || error.status === 429) {
          return {
            success: false,
            error: "Too many login attempts. Please wait a moment and try again.",
          };
        }

        if (msg.includes("fetch failed") || msg.includes("network")) {
          return {
            success: false,
            error: "Network error. Please check your internet connection and try again.",
          };
        }

        return {
          success: false,
          error: error.message,
        };
      }

      return {
        success: true,
        message: "Logged in successfully!",
      };
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred during login.";
      return {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Resends the signup verification email for an unconfirmed account.
   */
  async resendVerificationEmail(email: string): Promise<AuthServiceResponse> {
    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
      });

      if (error) {
        const msg = error.message.toLowerCase();

        if (msg.includes("too many requests") || error.status === 429) {
          return {
            success: false,
            error: "Too many resend attempts. Please wait a few minutes before trying again.",
          };
        }

        if (msg.includes("fetch failed") || msg.includes("network")) {
          return {
            success: false,
            error: "Network error. Please check your internet connection and try again.",
          };
        }

        return {
          success: false,
          error: error.message,
        };
      }

      return {
        success: true,
        message: "Verification email sent. Please check your inbox.",
      };
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while resending the verification email.";
      return {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Signs out the current user session via Supabase Auth.
   */
  async logout(): Promise<AuthServiceResponse> {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        const msg = error.message.toLowerCase();

        if (msg.includes("fetch failed") || msg.includes("network")) {
          return {
            success: false,
            error: "Network error. Please check your internet connection and try again.",
          };
        }

        return {
          success: false,
          error: error.message,
        };
      }

      return {
        success: true,
        message: "Logged out successfully.",
      };
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred during logout.";
      return {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Initiates the password recovery flow by sending
   * a password reset OTP to the user's email address.
   */
 /**
 * Initiates the password recovery flow.
 * First checks whether the account exists through the
 * server-side admin API, then sends the recovery OTP.
 */
async forgotPassword({
  email,
}: ForgotPasswordParams): Promise<AuthServiceResponse> {
  try {
    // Step 1: Check whether the account exists
    const checkResponse = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const checkData = await checkResponse.json();

    // Account does not exist or server check failed
    if (!checkResponse.ok || !checkData.success) {
      return {
        success: false,
        error:
          checkData.error ||
          "No account found with this email address.",
      };
    }

    // Step 2: Account exists, so send password reset OTP
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      const msg = error.message.toLowerCase();

      if (msg.includes("too many requests") || error.status === 429) {
        return {
          success: false,
          error: "Too many requests. Please wait a moment and try again.",
        };
      }

      if (msg.includes("fetch failed") || msg.includes("network")) {
        return {
          success: false,
          error:
            "Network error. Please check your internet connection and try again.",
        };
      }

      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      message: "A verification code has been sent to your email address.",
    };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An unexpected error occurred while sending the verification code.";

    return {
      success: false,
      error: errorMessage,
    };
  }
},

      
 

  /**
   * Verifies the password recovery OTP and updates the user's password using the created session.
   */
  async resetPassword({
    email,
    token,
    password,
  }: ResetPasswordParams): Promise<AuthServiceResponse> {
    try {
      // Step 1: Verify OTP and establish temporary recovery session
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: "recovery",
      });

      if (error) {
        const msg = error.message.toLowerCase();

        if (
          msg.includes("token is expired") ||
          msg.includes("token has expired") ||
          msg.includes("otp expired")
        ) {
          return {
            success: false,
            error: "Verification code has expired. Please request a new one.",
          };
        }

        if (
          msg.includes("invalid token") ||
          msg.includes("token is invalid") ||
          msg.includes("invalid otp")
        ) {
          return {
            success: false,
            error: "Invalid verification code. Please check and try again.",
          };
        }

        if (msg.includes("too many requests") || error.status === 429) {
          return {
            success: false,
            error: "Too many attempts. Please wait a moment and try again.",
          };
        }

        if (msg.includes("fetch failed") || msg.includes("network")) {
          return {
            success: false,
            error:
              "Network error. Please check your internet connection and try again.",
          };
        }

        return {
          success: false,
          error: error.message,
        };
      }

      if (!data.session) {
        return {
          success: false,
          error:
            "OTP verification failed. No authenticated session was created.",
        };
      }

      // Step 2: Update the password using the newly established recovery session
      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) {
        const msg = updateError.message.toLowerCase();

        if (msg.includes("same password") || msg.includes("different password")) {
          return {
            success: false,
            error: "New password should be different from the old password.",
          };
        }

        if (msg.includes("too many requests") || updateError.status === 429) {
          return {
            success: false,
            error: "Too many requests. Please wait a moment and try again.",
          };
        }

        if (msg.includes("fetch failed") || msg.includes("network")) {
          return {
            success: false,
            error:
              "Network error. Please check your internet connection and try again.",
          };
        }

        return {
          success: false,
          error: updateError.message,
        };
      }

      return {
        success: true,
        message: "Password updated successfully.",
      };
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while resetting your password.";

      return {
        success: false,
        error: errorMessage,
      };
    }
  },
};