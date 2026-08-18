"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPassword } from "./useResetPassword";
import { resetPasswordSchema } from "../schemas/reset-password.schema";
import { ResetPasswordFormValues } from "../types/auth.types";

export function useResetPasswordForm(initialEmail: string) {
  const router = useRouter();

  const { resetPassword, isLoading, error, success } = useResetPassword();

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: initialEmail,
      token: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    const result = await resetPassword({
      email: values.email,
      token: values.token,
      password: values.password,
    });

    if (result.success) {
      router.replace("/login");
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    error,
    success,
  };
}