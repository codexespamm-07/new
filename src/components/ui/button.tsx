"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  magnetic?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  magnetic = false,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "group inline-flex items-center justify-center font-mono font-medium tracking-wide uppercase transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:ring-offset-2 focus:ring-offset-[#0A0F1A] disabled:opacity-50 disabled:pointer-events-none rounded-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-xs md:text-sm px-5 py-3 gap-2",
    lg: "text-sm md:text-base px-7 py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#1D58D8] hover:bg-[#1644A8] text-white shadow-sm border border-[#1D58D8] active:scale-[0.98]",
    secondary:
      "bg-[#0D1424] hover:bg-[#121C30] text-white border border-[#1E2B45] active:scale-[0.98]",
    outline:
      "border border-[#1E2B45] hover:border-[#1D58D8] text-[#F6F5F2] hover:text-white bg-transparent active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-white/5 text-[#8895A7] hover:text-white border-transparent",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
      )}
    </>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      ) : (
        <button
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
          {...props}
        >
          {content}
        </button>
      )}
    </div>
  );
}
