import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, className = "" }: AuthCardProps) {
  return (
    <Card
      className={`w-full max-w-md border-slate-200/80 bg-white/90 shadow-xl shadow-slate-200/50 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none ${className}`}
    >
      <CardContent className="p-6 sm:p-8">{children}</CardContent>
    </Card>
  );
}