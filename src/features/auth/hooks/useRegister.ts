import { useState } from "react";
import { authService } from "../services/auth.service";
import {
  RegisterParams,
  AuthServiceResponse,
} from "../types/auth.types";

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const register = async (
    params: RegisterParams
  ): Promise<AuthServiceResponse> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const response = await authService.register(params);

    if (response.success) {
      setSuccess(true);
    } else {
      setError(response.error ?? "Registration failed.");
    }

    setIsLoading(false);

    return response;
  };

  return {
    register,
    isLoading,
    error,
    success,
  };
}