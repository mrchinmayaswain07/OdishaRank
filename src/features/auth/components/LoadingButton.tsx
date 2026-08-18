import React from "react";
import { Loader2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

interface LoadingButtonProps
  extends React.ComponentProps<typeof Button>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  loadingText?: string;
}

export function LoadingButton({
  isLoading = false,
  loadingText = "Please wait...",
  children,
  className,
  disabled,
  variant = "default",
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      disabled={isLoading || disabled}
      variant={variant}
      className={className}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}