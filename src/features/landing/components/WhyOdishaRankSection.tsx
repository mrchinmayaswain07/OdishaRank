import { Sparkles } from "lucide-react";
import { WHY_ODISHA_RANK_REASONS } from "../data/landing.data";
import { PreparationJourneyVisual } from "./PreparationJourneyVisual";

export function WhyOdishaRankSection() {
  return (
    <section
      id="why-odisharank"
      className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-28"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Messaging & Core Reasons */}
          <div className="flex flex-col items-start text-left lg:col-span-7 lg:pr-4">
            {/* Eyebrow Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-400 uppercase shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>Why OdishaRank</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Your Preparation,
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200 bg-clip-text text-transparent">
                Organized Around You.
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              Bring your study, practice, mock tests, and preparation progress into
              one focused experience built for Odisha Government competitive exam
              aspirants.
            </p>

            {/* Four Core Reasons Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 w-full">
              {WHY_ODISHA_RANK_REASONS.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.id}
                    className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-slate-900/90"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20 shadow-xs transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-5 w-5 stroke-[2]" aria-hidden="true" />
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-white">
                          {reason.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Product Journey Visual */}
          <div className="w-full lg:col-span-5">
            <PreparationJourneyVisual />
          </div>
        </div>
      </div>
    </section>
  );
}