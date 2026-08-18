import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "./useRegister";
import { registerSchema } from "../schemas/register.schema";
import { RegisterFormValues } from "../types/auth.types";

export function useRegisterForm() {
  const { register, isLoading, error, success } = useRegister();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    const result = await register({
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    });

   
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    error,
    success,
  };
}