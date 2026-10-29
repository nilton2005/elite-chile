import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "membership" | "category" | "city";
}

function Badge({ className, variant = "category", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold-primary",
        {
          "bg-gold-subtle text-gold-primary border-gold-muted uppercase tracking-wider":
            variant === "membership",
          "bg-background-tertiary text-text-secondary border-ui-border":
            variant === "category",
          "bg-transparent text-text-secondary border-ui-border/50": variant === "city",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
