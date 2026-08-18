import {
  Compass,
  BookOpenCheck,
  FileSpreadsheet,
  LineChart,
  Check,
} from "lucide-react";

export function PreparationJourneyVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-blue-400/20 blur-2xl"
      />

      {/* Main Glassmorphic Journey Card */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md sm:p-8">
        {/* Header Bar */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">
              Preparation Journey
            </span>
            <h3 className="text-base font-bold text-white sm:text-lg">
              Target: OPSC / OSSC CGL
            </h3>
          </div>

          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
            Structured Flow
          </span>
        </div>

        {/* Step-by-Step Interactive Preview Flow */}
        <div className="relative space-y-4">
          {/* Vertical Connecting Guide Line */}
          <div
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-5 w-0.5 bg-slate-800"
          />

          {/* Step 1: Plan */}
          <div className="group relative flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 transition-all duration-150 hover:border-slate-700 hover:bg-slate-800/60 sm:p-4">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Check className="h-5 w-5 stroke-[2.5]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Step 01 &bull; Plan
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  Completed
                </span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-white">
                Set your preparation direction
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                Syllabus mapping &amp; daily target hours
              </p>
            </div>
          </div>

          {/* Step 2: Practice */}
          <div className="group relative flex items-start gap-4 rounded-xl border border-blue-500/40 bg-blue-950/20 p-3.5 shadow-md shadow-blue-500/5 transition-all duration-150 hover:border-blue-500/60 sm:p-4">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-600/30">
              <BookOpenCheck className="h-5 w-5 stroke-[2]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  Step 02 &bull; Practice
                </span>
                <span className="text-[10px] font-bold text-blue-400">
                  Active
                </span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-white">
                Strengthen your understanding
              </p>
              <p className="mt-0.5 text-xs text-slate-300">
                Topic-wise exercises &amp; Odisha GK
              </p>
            </div>
          </div>

          {/* Step 3: Test */}
          <div className="group relative flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 transition-all duration-150 hover:border-slate-700 hover:bg-slate-800/60 sm:p-4">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
              <FileSpreadsheet className="h-5 w-5 stroke-[2]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Step 03 &bull; Test
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  Next
                </span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-white">
                Challenge yourself
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                Exam-simulated full-length mock tests
              </p>
            </div>
          </div>

          {/* Step 4: Track */}
          <div className="group relative flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 transition-all duration-150 hover:border-slate-700 hover:bg-slate-800/60 sm:p-4">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
              <LineChart className="h-5 w-5 stroke-[2]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Step 04 &bull; Track
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  Continuous
                </span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-white">
                Understand your progress
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                Analytics, accuracy, and preparation streak
              </p>
            </div>
          </div>
        </div>

        {/* Footer Concept Note */}
        <div className="mt-6 border-t border-slate-800 pt-3 text-center">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
            <Compass className="h-3.5 w-3.5 text-blue-400" />
            <span>Product Concept Preview &bull; Plan, Practice, Test, Track</span>
          </div>
        </div>
      </div>
    </div>
  );
}