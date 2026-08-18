import {
  BookOpen,
  Target,
  Flame,
  CheckCircle2,
  Award,
} from "lucide-react";

export function PlatformFeaturePreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-blue-600/15 blur-2xl"
      />

      {/* Main Glassmorphic Dashboard Window */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-md sm:p-6 lg:p-7">
        {/* Header Bar */}
        <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
              <Award className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
            </div>
            <span className="text-xs font-bold tracking-tight text-slate-900 sm:text-sm">
              OdishaRank Platform
            </span>
          </div>

          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
            Concept Preview
          </span>
        </div>

        {/* Mock Overview Panel */}
        <div className="space-y-4">
          {/* Today's Target Card */}
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <span>Today&apos;s Target &bull; Quantitative Aptitude</span>
              </div>
              <span className="text-blue-600">75%</span>
            </div>

            <p className="mt-1 text-xs text-slate-500">25 Questions Planned</p>

            {/* Progress Bar */}
            <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-slate-200/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
                style={{ width: "75%" }}
              />
            </div>
          </div>

          {/* Active Syllabus Focus Area */}
          <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" aria-hidden="true" />
              <span className="text-xs font-bold text-slate-800">
                Active Study &bull; OSSC CGL General Awareness
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
              <span>Odisha History &amp; Geography</span>
              <span className="font-semibold text-emerald-600">In Progress</span>
            </div>
          </div>

          {/* Progress Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            {/* Metric 1: Accuracy */}
            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-2xs text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Accuracy
              </span>
              <p className="mt-1 text-base font-extrabold text-slate-900">
                82%
              </p>
            </div>

            {/* Metric 2: Practice */}
            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-2xs text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Practice
              </span>
              <p className="mt-1 text-base font-extrabold text-slate-900">
                124
              </p>
            </div>

            {/* Metric 3: Streak */}
            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-2xs text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Streak
              </span>
              <p className="mt-1 flex items-center justify-center gap-1 text-base font-extrabold text-slate-900">
                7d <Flame className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Watermark */}
        <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-400">
          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
          <span>Product Interface Concept &bull; OdishaRank Preparation Hub</span>
        </div>
      </div>
    </div>
  );
}