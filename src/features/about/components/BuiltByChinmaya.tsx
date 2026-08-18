import { Mail, ExternalLink, MapPin } from "lucide-react";

// Inline SVG Icons for LinkedIn & Instagram
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function BuiltByChinmaya() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20 lg:py-24 border-t border-slate-800">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl backdrop-blur-md sm:p-12">
          <div className="text-center">
            <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">
              Independent Project
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Built by Chinmaya Swain
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              OdishaRank is an independent project created by Chinmaya Swain with the goal of
              building a focused digital preparation experience for Odisha competitive exam aspirants.
            </p>

            <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <MapPin className="h-4 w-4 text-blue-400" aria-hidden="true" />
              <span>Dasipur, Odisha</span>
            </div>

            {/* Social / Contact Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
              <a
                href="mailto:cchinmaya8018@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
              >
                <Mail className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/chinmayaswain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
              </a>

              <a
                href="https://www.instagram.com/chinmaya_07_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4 text-blue-400" />
                <span>Instagram</span>
                <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
              </a>

              <a
                href="https://orgfarm-b9da75a27e-dev-ed.develop.my.site.com/chinmaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
              >
                <ExternalLink className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}