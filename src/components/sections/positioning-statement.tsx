"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function PositioningStatement() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"],
  });

  const fullText =
    "One accountable partner for your entire technology stack: from switches and SD-WAN to SASE, SOC and cloud.";
  const words = fullText.split(" ");

  return (
    <section
      id="positioning"
      ref={containerRef}
      className="relative bg-[#F5F3EE] text-[#0E1424] py-20 sm:py-28 md:py-36 border-b border-[#EAE7DF] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Section Marker */}
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2F6BFF]" />
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#5B6577] uppercase font-semibold">
              01 / ARCHITECTURAL CONVERGENCE
            </span>
          </div>

          {/* Interactive Word Highlighting Paragraph */}
          <p className="font-heading font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.2] sm:leading-[1.2] flex flex-wrap gap-x-2.5 sm:gap-x-3.5 gap-y-1.5 sm:gap-y-2">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.22, 1]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const color = useTransform(
                scrollYProgress,
                [start, end],
                ["#8E9BB0", "#0E1424"]
              );

              return (
                <motion.span
                  key={i}
                  style={{ opacity, color }}
                  className="transition-colors inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
          </p>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#0E1424]/10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            <div>
              <span className="font-mono text-[10px] sm:text-xs text-[#2F6BFF] uppercase tracking-wider block mb-1">
                Zero Finger-Pointing
              </span>
              <p className="text-xs sm:text-sm text-[#5B6577] leading-relaxed">
                Single master services agreement (MSA) spanning local cabling, edge firewalls, and hybrid clouds.
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-xs text-[#2F6BFF] uppercase tracking-wider block mb-1">
                Engineering-Led Delivery
              </span>
              <p className="text-xs sm:text-sm text-[#5B6577] leading-relaxed">
                Direct engagement with CCIE, CISSP, and Cloud Principal Architects — not sales intermediaries.
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-xs text-[#2F6BFF] uppercase tracking-wider block mb-1">
                Deterministic Rollouts
              </span>
              <p className="text-xs sm:text-sm text-[#5B6577] leading-relaxed">
                Pre-staged configurations tested in our lab environments before worldwide deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
