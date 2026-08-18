import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { HERO_FEATURE_INDICATORS } from "../data/landing.data";
import { HeroProductPreview } from "./HeroProductPreview";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 py-12 sm:py-16 lg:py-24">
      {/* Background Decorative Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Core Messaging & CTAs */}
          <div className="flex flex-col items-start text-left lg:col-span-7 lg:pr-4">
            {/* Eyebrow Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold text-blue-700 shadow-xs backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>Focused preparation for Odisha aspirants</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.15]">
              Prepare Today.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Rank Tomorrow.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
              Your focused preparation platform for Odisha Government competitive
              examinations. Prepare smarter with structured study materials,
              practice questions, mock tests, and real-time preparation tracking.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/register"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-base font-bold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-700 active:scale-[0.98] sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <span>Start Preparing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/#exams"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-base font-bold text-slate-700 shadow-xs transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Explore Exams
              </Link>
            </div>

            {/* Value Indicators */}
            <div className="mt-10 border-t border-slate-200/60 pt-6">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {HERO_FEATURE_INDICATORS.map((indicator) => (
                  <div
                    key={indicator.label}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-600 sm:text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>{indicator.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Product Dashboard Mockup Preview */}
          <div className="w-full lg:col-span-5">
            <HeroProductPreview />
          </div>
        </div>
      </div>
    </section>
  );
}