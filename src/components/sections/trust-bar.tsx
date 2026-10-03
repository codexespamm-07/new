"use client";

import { useState } from "react";

const oemPartners = [
  { name: "Cisco", category: "Networking" },
  { name: "Palo Alto Networks", category: "Security" },
  { name: "HPE Aruba", category: "Networking" },
  { name: "Juniper Networks", category: "Networking" },
  { name: "Fortinet", category: "Security" },
  { name: "Zscaler", category: "SASE" },
  { name: "Amazon Web Services", category: "Cloud" },
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "Pure Storage", category: "Infrastructure" },
  { name: "Dell Technologies", category: "Infrastructure" },
  { name: "CrowdStrike", category: "Security" },
  { name: "Nutanix", category: "Infrastructure" },
];

export function TrustBar() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative bg-[#F5F3EE] border-b border-[#EAE7DF] py-4 sm:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 sm:gap-6">
        {/* Label */}
        <div className="shrink-0 flex items-center gap-2 border-r-0 md:border-r border-[#0E1424]/15 pr-4 sm:pr-6">
          <span className="w-1.5 h-1.5 bg-[#2F6BFF]" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#5B6577] uppercase whitespace-nowrap">
            CERTIFIED WITH
          </span>
        </div>

        {/* Marquee Track */}
        <div
          className="relative w-full overflow-hidden mask-fade-edges"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex items-center gap-6 sm:gap-12 whitespace-nowrap transition-transform duration-300 ${
              isPaused ? "animate-none" : "animate-marquee"
            }`}
            style={{
              display: "flex",
              width: "max-content",
              animation: isPaused
                ? "none"
                : "marquee 32s linear infinite",
            }}
          >
            {/* Duplicated list for seamless infinite loop */}
            {[...oemPartners, ...oemPartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3.5 py-1.5 border border-[#0E1424]/15 bg-white hover:border-[#2F6BFF] transition-colors group cursor-default"
              >
                <span className="font-heading font-medium text-[10px] sm:text-xs tracking-tight text-[#5B6577] group-hover:text-[#0E1424] transition-colors">
                  {partner.name}
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono px-1 sm:px-1.5 py-0.5 bg-[#EAE7DF] text-[#5B6577] group-hover:text-[#2F6BFF] transition-colors">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
