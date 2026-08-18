import { useState } from "react";
import { authService } from "../services/auth.service";
import {
  ResetPasswordParams,
  AuthServiceResponse,
} from "../types/auth.types";

export function useResetPassword() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const resetPassword = async (
    params: ResetPasswordParams
  ): Promise<AuthServiceResponse> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await authService.resetPassword(params);

      if (response.success) {
        setSuccess(true);
      } else if (response.error) {
        setError(response.error);
      }

      return response;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    resetPassword,
    isLoading,
    error,
    success,
  };
}