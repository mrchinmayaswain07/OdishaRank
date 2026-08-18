"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ className = "", error, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full space-y-1">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
          <Lock className="h-4 w-4" />
        </div>
        <Input
          type={showPassword ? "text" : "password"}
          className={`h-11 pl-10 pr-10 text-sm transition-colors ${
            error
              ? "border-red-500 focus-visible:ring-red-500/20"
              : "border-slate-300 focus-visible:border-blue-600 focus-visible:ring-blue-600/20 dark:border-slate-800"
          } ${className}`}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 right-0 flex h-full items-center pr-3 text-slate-400 hover:bg-transparent hover:text-slate-600 dark:hover:text-slate-300"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>
      {error && (
  <p className="text-destructive text-xs font-medium">
    {error}
  </p>
)}
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";