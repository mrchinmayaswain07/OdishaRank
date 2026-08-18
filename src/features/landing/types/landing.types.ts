import type { ComponentType } from "react";

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeroFeatureIndicator {
  label: string;
}

export interface PlatformCapability {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface TargetExamCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: ComponentType<{ className?: string }>;
}

export interface WhyOdishaRankReason {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface PlatformFeature {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  isHighlighted?: boolean;
}

export interface HowItWorksStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}