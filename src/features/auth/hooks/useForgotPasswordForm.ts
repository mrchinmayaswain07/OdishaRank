import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPassword } from "./useForgotPassword";
import { forgotPasswordSchema } from "../schemas/forgot-password.schema";
import { ForgotPasswordFormValues } from "../types/auth.types";

export function useForgotPasswordForm() {
  const router = useRouter();
  const { forgotPassword, isLoading, error, success } = useForgotPassword();

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    const result = await forgotPassword({
      email: values.email,
    });

    if (result.success) {
      router.push(
        `/reset-password?email=${encodeURIComponent(values.email)}`
      );
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