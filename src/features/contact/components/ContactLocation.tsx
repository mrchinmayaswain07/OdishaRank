import { MapPin } from "lucide-react";

export function ContactLocation() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 border-t border-slate-800">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-1/2 right-10 -translate-y-1/2 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Context Details */}
          <div className="space-y-4 lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-400 uppercase shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              <span>Location</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Based in <span className="text-blue-400">Dasipur, Odisha</span>
            </h2>

            <p className="text-base leading-relaxed text-slate-300">
              OdishaRank is being built from Odisha with a focus on the needs of
              Odisha&apos;s competitive exam aspirants.
            </p>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <h3 className="text-sm font-bold text-white">Rooted in Odisha</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Created with the vision of empowering students across all 30 districts of Odisha with structured, accessible preparation tools.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <iframe
                title="Map showing Dasipur, Odisha"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.4520890725607!2d86.43836557003907!3d20.242787726121183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1a325a1877fac1%3A0xa58109546e1a5e32!2sDasipur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1786609552864!5m2!1sen!2sin"
                className="h-64 w-full border-0 sm:h-80 lg:h-96"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}