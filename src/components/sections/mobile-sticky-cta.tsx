"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = window.scrollY / scrollHeight;
        // Appear after 30% scroll
        setVisible(progress > 0.3);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F5F3EE]/80 backdrop-blur-xl border-t border-white/20 p-3 flex items-center justify-between gap-4 shadow-2xl">
      <div className="flex items-center gap-2 text-xs font-mono text-[#5B6577]">
        <ShieldCheckIcon className="w-4 h-4 text-[#19C3A6] shrink-0" />
        <span className="truncate">48h Architecture Review</span>
      </div>
      <Button href="#contact" variant="primary" size="sm" showArrow className="shrink-0">
        Book a review
      </Button>
    </div>
  );
}
