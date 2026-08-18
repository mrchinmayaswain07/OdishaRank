import { Sparkles } from "lucide-react";
import { ODISHA_RANK_CAPABILITIES } from "../data/landing.data";

export function AboutOdishaRankSection() {
  return (
    <section
      id="about-odisharank"
      className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20 lg:py-28"
    >
      {/* Decorative Ambient Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-400 uppercase shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>About OdishaRank</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What is <span className="text-blue-400">OdishaRank?</span>
          </h2>

          <p className="mt-4 text-lg font-medium text-slate-300 sm:text-xl">
            Everything you need to prepare smarter.
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            OdishaRank brings structured study materials, practice questions,
            mock tests, and preparation tracking into one focused platform for
            Odisha Government competitive exam aspirants.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {ODISHA_RANK_CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;
            const isLastOddItem =
              index === ODISHA_RANK_CAPABILITIES.length - 1 &&
              ODISHA_RANK_CAPABILITIES.length % 3 !== 0;

            return (
              <div
                key={capability.id}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800/90 hover:shadow-md hover:shadow-blue-500/5 sm:p-8 ${
                  isLastOddItem ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Subtle Card Accent Highlight */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-blue-500/5 transition-transform group-hover:scale-150"
                />

                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20 shadow-xs transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                    {capability.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Integrated Summary Callout Card */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600/20 via-slate-800/80 to-indigo-600/20 p-6 shadow-sm sm:col-span-2 lg:col-span-1 sm:p-8">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">
                  One Unified Platform
                </span>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                  Built specifically for Odisha Aspirants
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  No scattered notes or unorganized test links. Every tool is
                  crafted to help you build a disciplined preparation routine.
                </p>
              </div>

              <div className="mt-6 text-xs font-semibold tracking-wide text-blue-400/90 uppercase">
                One focused experience for your preparation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}