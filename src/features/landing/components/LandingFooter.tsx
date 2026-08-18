import Link from "next/link";
import {
  GraduationCap,
  Mail,
  ExternalLink,
  MapPin,
  Heart,
} from "lucide-react";

// Inline SVG Icon for LinkedIn
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// Inline SVG Icon for Instagram
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LandingFooter() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        {/* Top Section: Multi-Column Layout */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="space-y-4 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg"
              aria-label="OdishaRank Home"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
                <GraduationCap className="h-6 w-6 stroke-[2]" aria-hidden="true" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Odisha<span className="text-blue-500">Rank</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              A focused preparation platform designed for Odisha Government
              competitive exam aspirants. Build a structured journey toward your target examination.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <span>Designed &amp; built by</span>
                <span className="text-white font-bold">Chinmaya Swain</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-200 uppercase">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link
                    href="/"
                    className="text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#exams"
                    className="text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Target Exams
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#features"
                    className="text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Platform Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#how-it-works"
                    className="text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#get-started"
                    className="text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Social & Contact (5 cols) */}
          <div className="space-y-4 lg:col-span-5">
            <h3 className="text-xs font-bold tracking-wider text-slate-200 uppercase">
              Connect
            </h3>
            <nav aria-label="Social and contact links">
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href="mailto:cchinmaya8018@gmail.com"
                    className="inline-flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <Mail className="h-4 w-4 text-blue-500 shrink-0" aria-hidden="true" />
                    <span>cchinmaya8018@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/chinmayaswain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <LinkedInIcon className="h-4 w-4 text-blue-500 shrink-0" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/chinmaya_07_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <InstagramIcon className="h-4 w-4 text-blue-500 shrink-0" />
                    <span>@chinmaya_07_</span>
                    <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://orgfarm-b9da75a27e-dev-ed.develop.my.site.com/chinmaya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <ExternalLink className="h-4 w-4 text-blue-500 shrink-0" aria-hidden="true" />
                    <span>Developer Portfolio</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Middle Section: Location & Compact Map */}
        <div className="mt-12 border-t border-slate-900 pt-10">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="space-y-2 lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-400 uppercase">
                <MapPin className="h-4 w-4 text-blue-500" aria-hidden="true" />
                <span>Hometown Location</span>
              </div>
              <h4 className="text-lg font-bold text-white">Dasipur, Odisha</h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Rooted in Odisha, built with a vision to empower competitive examination aspirants across the state.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-md">
                <iframe
                  title="Map showing Dasipur, Odisha"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.4520890725607!2d86.43836557003907!3d20.242787726121183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1a325a1877fac1%3A0xa58109546e1a5e32!2sDasipur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1786609552864!5m2!1sen!2sin"
                  className="h-48 w-full border-0 sm:h-52"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Builder Credits */}
        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col items-center justify-between gap-4 text-xs font-medium text-slate-500 sm:flex-row">
          <p>&copy; 2026 OdishaRank. All rights reserved.</p>

          <div className="inline-flex items-center gap-1.5 text-slate-400">
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500/20" aria-hidden="true" />
            <span>by <strong className="text-slate-300">Chinmaya Swain</strong> </span>
          </div>
        </div>
      </div>
    </footer>
  );
}