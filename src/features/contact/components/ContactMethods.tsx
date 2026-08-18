import { Mail, ExternalLink, Sparkles, Globe } from "lucide-react";

// Inline SVG Icon for LinkedIn
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// Inline SVG Icon for Instagram
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const CONTACT_ITEMS = [
  {
    id: "email",
    label: "Email",
    value: "cchinmaya8018@gmail.com",
    actionText: "Send an Email",
    href: "mailto:cchinmaya8018@gmail.com",
    isExternal: false,
    icon: Mail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Chinmaya Swain",
    actionText: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/chinmayaswain",
    isExternal: true,
    icon: LinkedInIcon,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@chinmaya_07_",
    actionText: "Follow on Instagram",
    href: "https://www.instagram.com/chinmaya_07_/",
    isExternal: true,
    icon: InstagramIcon,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    value: "Developer Portfolio",
    actionText: "View Portfolio",
    href: "https://orgfarm-b9da75a27e-dev-ed.develop.my.site.com/chinmaya/",
    isExternal: true,
    icon: Globe,
  },
];

export function ContactMethods() {
  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-16 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            <span>Connect Channels</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Direct <span className="text-blue-600">Contact Channels</span>
          </h2>

          <p className="mt-3 text-base text-slate-600">
            Select your preferred method to reach out directly.
          </p>
        </div>

        {/* 2x2 Grid for Contact Methods */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/80 shadow-2xs transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-6 w-6 stroke-[2]" />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold tracking-wider text-slate-600 uppercase">
                      {item.label}
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900 break-all sm:break-normal">
                      {item.value}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-600 border-t border-slate-100 pt-4">
                  <span>{item.actionText}</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}