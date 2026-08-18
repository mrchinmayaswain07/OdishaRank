import { useState } from "react";
import { authService } from "../services/auth.service";
import {
  ForgotPasswordParams,
  AuthServiceResponse,
} from "../types/auth.types";

export function useForgotPassword() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const forgotPassword = async (
    params: ForgotPasswordParams
  ): Promise<AuthServiceResponse> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await authService.forgotPassword(params);

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
    forgotPassword,
    isLoading,
    error,
    success,
  };
}