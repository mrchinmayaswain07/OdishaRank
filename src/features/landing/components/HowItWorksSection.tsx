import { Sparkles } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../data/landing.data";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      {/* Decorative Subtle Background Pattern & Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            <span>How It Works</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            From Your Target Exam to a <span className="text-blue-600">Clearer Preparation Journey.</span>
          </h2>

          <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Choose what you are preparing for, organize your study, practice
            consistently, and understand your progress along the way.
          </p>
        </div>

        {/* Timeline Desktop View (lg:block) */}
        <div className="relative mt-16 hidden lg:block">
          {/* Horizontal Connecting Timeline Line */}
          <div
            aria-hidden="true"
            className="absolute top-[3.25rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-500/40 to-blue-100"
          />

          <div className="grid grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Step Number Badge & Icon Node */}
                  <div className="relative z-10 mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-2 shadow-md shadow-slate-900/5 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                    <span className="text-[11px] font-black tracking-widest text-blue-600 uppercase">
                      {step.number}
                    </span>
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5 stroke-[2]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Tablet & Mobile View (lg:hidden) */}
        <div className="relative mt-12 block lg:hidden">
          {/* Vertical Connecting Timeline Line */}
          <div
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-[2.25rem] w-0.5 bg-gradient-to-b from-blue-500/30 via-blue-500/60 to-blue-500/30 sm:left-[2.75rem]"
          />

          <div className="space-y-8">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="group relative flex items-start gap-4 sm:gap-6"
                >
                  {/* Vertical Node Indicator */}
                  <div className="relative z-10 flex h-18 w-18 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-900/5 sm:h-22 sm:w-22">
                    <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase sm:text-[11px]">
                      {step.number}
                    </span>
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 sm:h-10 sm:w-10 sm:rounded-xl">
                      <Icon className="h-4 w-4 stroke-[2] sm:h-5 sm:w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Vertical Step Content */}
                  <div className="min-w-0 flex-1 rounded-2xl border border-slate-200/70 bg-slate-50/50 p-4 transition-colors group-hover:border-slate-300 group-hover:bg-slate-50 sm:p-5">
                    <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}