import { Sparkles, Layers, Target, Compass } from "lucide-react";

export function WhyOdishaRank() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24 border-t border-slate-800">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-10 -translate-y-1/2 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Context */}
          <div className="space-y-4 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-400 uppercase shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              <span>The Problem We Solve</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Why Was <span className="text-blue-400">OdishaRank Created?</span>
            </h2>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Competitive exam preparation can become difficult when study material,
              practice, revision, mock tests, and progress tracking are scattered
              across different places.
            </p>

            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
              Aspirants often spend more time searching for resources and tracking what
              to study next than actually learning. OdishaRank aims to bring these
              preparation activities into one focused, structured experience.
            </p>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-300">Scattered Resources</h3>
                    <p className="text-xs text-slate-400">Multiple websites, unorganized notes &amp; lost links</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-1">
                  <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">&darr; OdishaRank Solution &darr;</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-blue-500/30 bg-blue-950/40 p-4 shadow-md shadow-blue-500/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                    <Target className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">One Focused Platform</h3>
                    <p className="text-xs text-slate-300">Structured study, practice, tests &amp; tracking in one place</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}