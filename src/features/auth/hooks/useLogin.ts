import { useState } from "react";
import { authService } from "../services/auth.service";
import {
  LoginParams,
  AuthServiceResponse,
} from "../types/auth.types";

export function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [isResendingVerification, setIsResendingVerification] =
    useState<boolean>(false);

  const [resendMessage, setResendMessage] = useState<string | null>(null);
  const [resendError, setResendError] = useState<string | null>(null);

  const login = async (
    params: LoginParams
  ): Promise<AuthServiceResponse> => {
    setIsLoading(true);
    setError(null);
    setResendMessage(null);
    setResendError(null);

    try {
      const response = await authService.login(params);

      if (!response.success && response.error) {
        setError(response.error);
      }

      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const resendVerificationEmail = async (
    email: string
  ): Promise<AuthServiceResponse> => {
    setIsResendingVerification(true);
    setResendMessage(null);
    setResendError(null);

    try {
      const response =
        await authService.resendVerificationEmail(email);

      if (response.success) {
        setResendMessage(
          response.message || "Verification email sent successfully."
        );
      } else {
        setResendError(
          response.error || "Unable to resend verification email."
        );
      }

      return response;
    } finally {
      setIsResendingVerification(false);
    }
  };

  return {
    login,
    isLoading,
    error,
    resendVerificationEmail,
    isResendingVerification,
    resendMessage,
    resendError,
  };
}