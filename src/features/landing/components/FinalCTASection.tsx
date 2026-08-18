import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTASection() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20 lg:py-24">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[45rem] rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered High-Impact CTA Container */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12 lg:p-16">
          {/* Subtle Ambient Radial Highlight Inside Container */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-blue-500/10 blur-2xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Eyebrow Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-400 uppercase shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              <span>Start Your Preparation</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Ready to Prepare With{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200 bg-clip-text text-transparent">
                More Focus?
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="mt-4 text-base font-normal leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
              Create your OdishaRank account and build a more organized preparation
              journey for your target examination.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 text-base font-bold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-700 active:scale-[0.98] sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span>Create Your Free Account</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/login"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 px-6 text-base font-bold text-slate-300 shadow-xs transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white active:scale-[0.98] sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}