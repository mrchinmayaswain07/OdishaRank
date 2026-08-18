import { Sparkles, GraduationCap } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20 lg:py-24">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-400 uppercase shadow-xs">
            <GraduationCap className="h-4 w-4 text-blue-400" aria-hidden="true" />
            <span>Our Mission &amp; Purpose</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About <span className="text-blue-400">OdishaRank</span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-lg font-medium text-slate-200 sm:text-xl lg:text-2xl">
            Making competitive exam preparation more focused, organized, and
            accessible for Odisha aspirants.
          </p>

          {/* Description */}
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            OdishaRank is being built as a focused preparation platform for
            students and aspirants preparing for Odisha Government competitive
            examinations.
          </p>
        </div>
      </div>
    </section>
  );
}