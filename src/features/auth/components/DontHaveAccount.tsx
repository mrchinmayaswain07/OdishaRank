import Link from "next/link";

export function DontHaveAccount() {
  return (
    <p className="text-center text-sm text-muted-foreground">
      Don&apos;t have an account?{" "}
      <Link
        href="/register"
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        Sign Up
      </Link>
    </p>
  );
}