import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
  size?: "sm" | "md" | "lg";
}

/**
 * Innovia Edge Global Technologies Logo
 */
export function BrandLogo({ className, variant = "full", size = "md" }: LogoProps) {
  const logoDimensions = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-12 w-auto",
  }[size];

  return (
    <div className={cn("inline-flex items-center select-none", className)}>
      <img
        src="/Innovia Edge Global Technologies Logo.png"
        alt="Innovia Edge Global Technologies"
        className={cn("transition-opacity hover:opacity-90", logoDimensions)}
      />
    </div>
  );
}
