import { Sparkles } from "lucide-react";
import { PLATFORM_FEATURES } from "../data/landing.data";
import { PlatformFeaturePreview } from "./PlatformFeaturePreview";

export function PlatformFeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50/80 py-16 sm:py-20 lg:py-28"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            <span>The Platform</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need to <span className="text-blue-600">Prepare With Purpose.</span>
          </h2>

          <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            From understanding what to study to measuring how you are progressing,
            OdishaRank brings the essential parts of exam preparation into one
            focused experience.
          </p>
        </div>

        {/* Feature Showcase Grid Layout */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Product Feature Panel Navigation Style */}
          <div className="space-y-3 lg:col-span-7">
            {PLATFORM_FEATURES.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  className={`group relative flex items-start gap-4 rounded-2xl p-4 transition-all duration-200 border sm:p-5 ${
                    feature.isHighlighted
                      ? "border-blue-500/40 bg-white shadow-md shadow-blue-500/5 ring-1 ring-blue-500/20"
                      : "border-slate-200/70 bg-white/70 shadow-2xs hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                      feature.isHighlighted
                        ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                        : "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5 stroke-[2]" aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                        {feature.title}
                      </h3>
                      {feature.isHighlighted && (
                        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-blue-700 uppercase border border-blue-200/60">
                          Primary Focus
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Glassmorphic Product Preview UI */}
          <div className="w-full lg:col-span-5">
            <PlatformFeaturePreview />
          </div>
        </div>
      </div>
    </section>
  );
}