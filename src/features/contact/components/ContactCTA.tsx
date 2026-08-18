import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20 border-t border-slate-800">
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Preparation?
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Create your OdishaRank account and begin building a more structured preparation routine.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-base font-bold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-700 active:scale-[0.98] sm:w-auto"
            >
              <span>Create Your Free Account</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-6 text-base font-bold text-slate-300 transition-all hover:bg-slate-800 hover:text-white active:scale-[0.98] sm:w-auto"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}