import {
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  TrendingUp,
  BarChart3,
  Landmark,
  Building2,
  BriefcaseBusiness,
  Shield,
  GraduationCap,
  Layers3,
  Target,
  LayoutDashboard,
  MapPin,
  CalendarCheck,
} from "lucide-react";
import type {
  NavItem,
  HeroFeatureIndicator,
  PlatformCapability,
  TargetExamCategory,
  WhyOdishaRankReason,
  PlatformFeature,
  HowItWorksStep,
} from "../types/landing.types";

export const LANDING_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Exams", href: "/#exams" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const HERO_FEATURE_INDICATORS: HeroFeatureIndicator[] = [
  { label: "Structured Preparation" },
  { label: "Practice & Mock Tests" },
  { label: "Progress Tracking" },
];

export const ODISHA_RANK_CAPABILITIES: PlatformCapability[] = [
  {
    id: "structured-study",
    title: "Structured Study",
    description: "Organize your preparation around exams, subjects, and topics.",
    icon: BookOpen,
  },
  {
    id: "practice",
    title: "Practice Questions",
    description: "Strengthen your preparation through focused question practice.",
    icon: CheckCircle2,
  },
  {
    id: "mock-tests",
    title: "Mock Tests",
    description: "Prepare for exam-style testing with structured mock tests.",
    icon: ClipboardCheck,
  },
  {
    id: "progress-tracking",
    title: "Progress Tracking",
    description: "Track your preparation activity and progress over time.",
    icon: TrendingUp,
  },
  {
    id: "preparation-analytics",
    title: "Preparation Analytics",
    description: "Understand your preparation patterns and areas that need attention.",
    icon: BarChart3,
  },
];

export const TARGET_EXAMS: TargetExamCategory[] = [
  {
    id: "opsc",
    title: "OPSC",
    subtitle: "Odisha Public Service Commission",
    description:
      "Civil services and related state-level competitive examinations.",
    badge: "Public Service",
    icon: Landmark,
  },
  {
    id: "ossc",
    title: "OSSC",
    subtitle: "Odisha Staff Selection Commission",
    description:
      "Combined Graduate Level (CGL) and non-gazetted cadre recruitment examinations.",
    badge: "Staff Selection",
    icon: Building2,
  },
  {
    id: "osssc",
    title: "OSSSC",
    subtitle: "Odisha Sub-ordinate Staff Selection Commission",
    description:
      "RI, ARI, AMIN, Junior Assistant, and sub-ordinate cadre recruitment tests.",
    badge: "Sub-ordinate Cadre",
    icon: BriefcaseBusiness,
  },
  {
    id: "police",
    title: "Odisha Police",
    subtitle: "State Police Recruitment Board",
    description:
      "Sub-Inspector, Constable, and state law enforcement recruitment examinations.",
    badge: "Police Recruitment",
    icon: Shield,
  },
  {
    id: "teaching",
    title: "Teaching & Education",
    subtitle: "State Education Examinations",
    description:
      "Teacher eligibility and state education recruitment preparation.",
    badge: "Education",
    icon: GraduationCap,
  },
  {
    id: "other",
    title: "Other Odisha Exams",
    subtitle: "State Competitive Examinations",
    description:
      "Other major competitive recruitment examinations relevant to Odisha aspirants.",
    badge: "General Prep",
    icon: Layers3,
  },
];

export const WHY_ODISHA_RANK_REASONS: WhyOdishaRankReason[] = [
  {
    id: "focused-preparation",
    title: "Focused Preparation",
    description:
      "Keep your preparation centered around the exam and subjects you are working toward.",
    icon: Target,
  },
  {
    id: "organized-experience",
    title: "One Organized Experience",
    description:
      "Bring study, practice, tests, and progress into one structured preparation journey.",
    icon: LayoutDashboard,
  },
  {
    id: "understandable-progress",
    title: "Progress You Can Understand",
    description:
      "Track your preparation activity and identify where you need to focus next.",
    icon: TrendingUp,
  },
  {
    id: "built-for-odisha",
    title: "Built for Odisha Aspirants",
    description:
      "Designed around the preparation needs of aspirants targeting Odisha Government competitive examinations.",
    icon: MapPin,
  },
];

export const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    id: "study-syllabus",
    title: "Study & Syllabus",
    description: "Organize what to study and where to focus.",
    icon: BookOpen,
    isHighlighted: true,
  },
  {
    id: "practice-questions",
    title: "Practice Questions",
    description: "Build understanding through focused practice.",
    icon: CheckCircle2,
  },
  {
    id: "mock-tests",
    title: "Mock Tests",
    description: "Challenge yourself in exam-style conditions.",
    icon: ClipboardCheck,
  },
  {
    id: "progress-tracking",
    title: "Progress Tracking",
    description: "See how your preparation is moving forward.",
    icon: TrendingUp,
  },
  {
    id: "performance-analytics",
    title: "Performance Analytics",
    description: "Understand accuracy and preparation patterns.",
    icon: BarChart3,
  },
  {
    id: "study-planning",
    title: "Study Planning",
    description: "Turn your preparation into consistent daily targets.",
    icon: CalendarCheck,
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: "choose-exam",
    number: "01",
    title: "Choose Your Exam",
    description:
      "Start by selecting the Odisha Government competitive examination you are preparing for and define your preparation direction.",
    icon: Target,
  },
  {
    id: "plan-preparation",
    number: "02",
    title: "Plan Your Preparation",
    description:
      "Organize your study around subjects, topics, priorities and daily preparation targets.",
    icon: CalendarCheck,
  },
  {
    id: "practice-test",
    number: "03",
    title: "Practice & Test",
    description:
      "Strengthen your preparation with focused questions and exam-style testing.",
    icon: ClipboardCheck,
  },
  {
    id: "track-progress",
    number: "04",
    title: "Track Your Progress",
    description:
      "Review your preparation activity and understand where to focus next.",
    icon: TrendingUp,
  },
];