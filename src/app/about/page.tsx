import type { Metadata } from "next";
import { LandingHeader } from "@/features/landing/components/LandingHeader";
import { AboutHero } from "@/features/about/components/AboutHero";
import { WhyOdishaRank } from "@/features/about/components/WhyOdishaRank";
import { AboutFocus } from "@/features/about/components/AboutFocus";
import { BuiltByChinmaya } from "@/features/about/components/BuiltByChinmaya";
import { AboutCTA } from "@/features/about/components/AboutCTA";
import { LandingFooter } from "@/features/landing/components/LandingFooter";

export const metadata: Metadata = {
  title: "About OdishaRank",
  description:
    "Learn about OdishaRank and our vision for a more focused and organized preparation experience for Odisha Government competitive exam aspirants.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About OdishaRank",
    description:
      "Learn about OdishaRank and our vision for a more focused and organized preparation experience for Odisha Government competitive exam aspirants.",
    url: "/about",
  },
  twitter: {
    card: "summary",
    title: "About OdishaRank",
    description:
      "Learn about OdishaRank and our vision for a more focused and organized preparation experience for Odisha Government competitive exam aspirants.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <LandingHeader />
      <main>
        <AboutHero />
        <WhyOdishaRank />
        <AboutFocus />
        <BuiltByChinmaya />
        <AboutCTA />
      </main>
      <LandingFooter />
    </div>
  );
}