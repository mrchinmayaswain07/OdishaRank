import type { Metadata } from "next";
import { LandingHeader } from "@/features/landing/components/LandingHeader";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { AboutOdishaRankSection } from "@/features/landing/components/AboutOdishaRankSection";
import { TargetExamsSection } from "@/features/landing/components/TargetExamsSection";
import { PlatformFeaturesSection } from "@/features/landing/components/PlatformFeaturesSection";
import { HowItWorksSection } from "@/features/landing/components/HowItWorksSection";
import { FinalCTASection } from "@/features/landing/components/FinalCTASection";
import { LandingFooter } from "@/features/landing/components/LandingFooter";

export const metadata: Metadata = {
  title: "OdishaRank — Prepare Today. Rank Tomorrow.",
  description:
    "Focused preparation for Odisha Government competitive examinations with structured study, practice, mock tests, and progress tracking.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OdishaRank — Prepare Today. Rank Tomorrow.",
    description:
      "Focused preparation for Odisha Government competitive examinations with structured study, practice, mock tests, and progress tracking.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "OdishaRank — Prepare Today. Rank Tomorrow.",
    description:
      "Focused preparation for Odisha Government competitive examinations with structured study, practice, mock tests, and progress tracking.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <LandingHeader />
      <main>
        <HeroSection />
        <AboutOdishaRankSection />
        <TargetExamsSection />
        <PlatformFeaturesSection />
        <HowItWorksSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </div>
  );
}