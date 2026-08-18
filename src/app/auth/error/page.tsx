import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 text-center shadow-sm">
        <h1 className="mb-4 text-2xl font-bold text-red-600">
          Verification Failed
        </h1>

        <p className="mb-6 text-sm text-slate-600">
          Your verification link is invalid or has expired.
          Please request a new verification email.
        </p>

        <Link
          href="/register"
          className="inline-flex rounded-lg bg-black px-5 py-2 text-white transition hover:bg-neutral-800"
        >
          Back to Register
        </Link>
      </div>
    </main>
  );
}