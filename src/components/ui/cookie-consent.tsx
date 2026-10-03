"use client";

import { useState, useEffect } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [hasConsent, setHasConsent] = useState(true);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("innovia_cookie_consent");
    if (!saved) {
      setHasConsent(false);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("innovia_cookie_consent", "accepted");
    setHasConsent(true);
  };

  const decline = () => {
    localStorage.setItem("innovia_cookie_consent", "essential_only");
    setHasConsent(true);
  };

  if (!mounted || hasConsent) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-[#121A2B]/80 backdrop-blur-xl border border-white/10 p-4 sm:p-5 shadow-2xl rounded-sm text-xs sm:text-sm"
    >
      <div className="flex items-start gap-3">
        <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#19C3A6] shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="font-heading font-medium text-white text-sm sm:text-base">Privacy & Telemetry Controls</p>
          <p className="text-[#8E9BB0] text-[10px] sm:text-xs leading-relaxed">
            We use essential security tokens and anonymous performance telemetry to guarantee uptime SLA standards. No third-party profiling or advertising trackers.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-2">
            <button
              onClick={accept}
              className="px-3.5 py-1.5 bg-[#2F6BFF] hover:bg-[#2557d6] text-white text-[10px] sm:text-xs font-mono font-medium rounded-sm transition-colors"
            >
              ACCEPT NECESSARY & METRICS
            </button>
            <button
              onClick={decline}
              className="px-3 py-1.5 border border-[#1F2A3F] hover:bg-[#1F2A3F]/50 text-[#8E9BB0] hover:text-white text-[10px] sm:text-xs font-mono transition-colors"
            >
              ESSENTIAL ONLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
