import { BookOpen, CheckCircle2, TrendingUp, CalendarCheck, Sparkles } from "lucide-react";

const FOCUS_AREAS = [
  {
    id: "structured",
    title: "Structured Preparation",
    description: "Organize preparation around target examinations, subjects, and topics.",
    icon: BookOpen,
  },
  {
    id: "practice",
    title: "Focused Practice",
    description: "Build consistency through targeted question practice and exam testing.",
    icon: CheckCircle2,
  },
  {
    id: "progress",
    title: "Progress Understanding",
    description: "Understand preparation activity and identify areas that need attention.",
    icon: TrendingUp,
  },
  {
    id: "planning",
    title: "Disciplined Planning",
    description: "Create a structured, consistent preparation routine with clear targets.",
    icon: CalendarCheck,
  },
];

export function AboutFocus() {
  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            <span>Platform Pillars</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Focused on <span className="text-blue-600">Better Preparation</span>
          </h2>

          <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Four core principles guiding the design and development of the OdishaRank platform.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/80 shadow-2xs transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Who It Is For Box */}
        <div className="mt-12 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
              Target Aspirants
            </span>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Built for Odisha Aspirants
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              OdishaRank is designed for aspirants preparing for Odisha Government
              competitive examinations—such as OSSC, OPSC, OSSSC, Odisha Police, and teaching
              recruitment tests—who are looking for a more structured way to organize their preparation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}