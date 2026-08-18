import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <AuthHeader
        title="Create your account"
        subtitle="Enter your details below to get started with OdishaRank"
      />
      <RegisterForm />
    </>
  );
}