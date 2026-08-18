import {
  TrendingUp,
  Clock,
  CheckCircle2,
  Flame,
  Award,
  BookOpen,
} from "lucide-react";

export function HeroProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Decorative ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-blue-400/20 blur-2xl"
      />

      {/* Main Glassmorphic Product Card Container */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-md sm:p-6 lg:p-7">
        {/* Mock Window Bar */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-600/30">
              <Award className="h-4 w-4 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold tracking-tight text-slate-900 sm:text-sm">
              My Preparation Dashboard
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
          </div>
        </div>

        {/* Demo Data Grid Container */}
        <div className="space-y-5">
          {/* Syllabus Progress Card */}
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-700 sm:text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                <span>OSSC CGL Syllabus Progress</span>
              </div>
              <span className="font-bold text-blue-600">78%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
                style={{ width: "78%" }}
              />
            </div>
          </div>

          {/* Metric Quad Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Metric 1: Study Hours */}
            <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm sm:p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-semibold text-slate-600">
                  Study Hours
                </span>
              </div>
              <p className="mt-2 text-lg font-extrabold text-slate-900 sm:text-xl">
                18.5 <span className="text-xs font-medium text-slate-500">hrs</span>
              </p>
            </div>

            {/* Metric 2: Questions Practiced */}
            <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm sm:p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-semibold text-slate-600">
                  Questions
                </span>
              </div>
              <p className="mt-2 text-lg font-extrabold text-slate-900 sm:text-xl">
                342
              </p>
            </div>

            {/* Metric 3: Accuracy */}
            <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm sm:p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <TrendingUp className="h-4 w-4 text-indigo-600" />
                <span className="text-xs font-semibold text-slate-600">
                  Accuracy
                </span>
              </div>
              <p className="mt-2 text-lg font-extrabold text-slate-900 sm:text-xl">
                81%
              </p>
            </div>

            {/* Metric 4: Streak */}
            <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm sm:p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <Flame className="h-4 w-4 text-amber-500" />
                <span className="text-xs font-semibold text-slate-600">
                  Streak
                </span>
              </div>
              <p className="mt-2 flex items-center gap-1 text-lg font-extrabold text-slate-900 sm:text-xl">
                7 <span className="text-xs font-medium text-slate-500">days</span>
                <span className="text-sm">🔥</span>
              </p>
            </div>
          </div>
        </div>

        {/* Demo Watermark Disclaimer */}
        <div className="mt-5 border-t border-slate-100 pt-3 text-center">
          <span className="text-[11px] font-medium text-slate-400">
            Interactive Preparation Dashboard Preview
          </span>
        </div>
      </div>
    </div>
  );
}