import { redirect } from "next/navigation";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";

interface PageProps {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function ResetPasswordPage({
  searchParams,
}: PageProps) {
  const resolvedSearchParams = await searchParams;

  const emailParam = resolvedSearchParams.email;

  const email =
    typeof emailParam === "string"
      ? emailParam.trim()
      : Array.isArray(emailParam)
        ? emailParam[0]?.trim()
        : undefined;

  // Direct access without email → redirect to forgot-password
  if (!email) {
    redirect("/forgot-password");
  }

  // Email exists → pass it to the reset password form
  return <ResetPasswordForm email={email} />;
}