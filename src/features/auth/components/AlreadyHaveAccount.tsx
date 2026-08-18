import Link from "next/link";

export function AlreadyHaveAccount() {
  return (
    <p className="text-muted-foreground text-center text-sm">
      Already have an account?{" "}
      <Link
        href="/login"
        className="text-primary font-medium hover:underline underline-offset-4"
      >
        Sign In
      </Link>
    </p>
  );
}