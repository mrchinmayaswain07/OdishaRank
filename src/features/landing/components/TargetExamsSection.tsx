import { Sparkles } from "lucide-react";
import { TARGET_EXAMS } from "../data/landing.data";

export function TargetExamsSection() {
  return (
    <section
      id="exams"
      className="relative overflow-hidden bg-slate-50/80 py-16 sm:py-20 lg:py-28"
    >
      {/* Decorative Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Exam Preparation</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Prepare for the Exams <span className="text-blue-600">That Matter.</span>
          </h2>

          <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Build focused preparation for Odisha Government competitive examinations,
            with your study, practice, and progress organized around the exams you target.
          </p>
        </div>

        {/* Target Exams Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {TARGET_EXAMS.map((exam) => {
            const Icon = exam.icon;

            return (
              <div
                key={exam.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5 sm:p-8"
              >
                <div>
                  {/* Top Bar: Icon & Category Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/80 shadow-2xs transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold tracking-wider text-slate-600 uppercase">
                      {exam.badge}
                    </span>
                  </div>

                  {/* Exam Title & Subtitle */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                      {exam.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-blue-600">
                      {exam.subtitle}
                    </p>
                  </div>

                  {/* Exam Category Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {exam.description}
                  </p>
                </div>

                {/* Non-Interactive Indicator Label */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold text-slate-400">
                    Preparation Category
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}