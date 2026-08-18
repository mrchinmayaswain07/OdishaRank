import type { Metadata } from "next";
import { LandingHeader } from "@/features/landing/components/LandingHeader";
import { ContactHero } from "@/features/contact/components/ContactHero";
import { ContactMethods } from "@/features/contact/components/ContactMethods";
import { ContactLocation } from "@/features/contact/components/ContactLocation";
import { ContactCTA } from "@/features/contact/components/ContactCTA";
import { LandingFooter } from "@/features/landing/components/LandingFooter";

export const metadata: Metadata = {
  title: "Contact OdishaRank",
  description:
    "Get in touch with OdishaRank through email, LinkedIn, Instagram, or our portfolio.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact OdishaRank",
    description:
      "Get in touch with OdishaRank through email, LinkedIn, Instagram, or our portfolio.",
    url: "/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact OdishaRank",
    description:
      "Get in touch with OdishaRank through email, LinkedIn, Instagram, or our portfolio.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <LandingHeader />
      <main>
        <ContactHero />
        <ContactMethods />
        <ContactLocation />
        <ContactCTA />
      </main>
      <LandingFooter />
    </div>
  );
}