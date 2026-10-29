import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[4px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gold-primary text-black hover:bg-gold-light": variant === "primary",
            "border border-gold-muted bg-transparent text-text-primary hover:border-gold-primary hover:text-gold-primary":
              variant === "secondary",
            "bg-transparent text-text-secondary hover:text-text-primary": variant === "ghost",
            "border border-ui-error text-ui-error hover:bg-ui-error/10":
              variant === "destructive",
            "h-8 px-4 text-xs": size === "sm",
            "h-11 px-6 text-sm": size === "md",
            "h-14 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
