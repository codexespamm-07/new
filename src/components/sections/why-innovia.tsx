"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

const differentiators = [
  {
    num: "01",
    title: "One accountable partner for the whole stack",
    description:
      "Eliminate finger-pointing between cabling technicians, switch OEMs, firewall vendors, and hyperscale cloud providers with our unified delivery governance.",
  },
  {
    num: "02",
    title: "Consistent global standards across 20+ countries",
    description:
      "Uniform naming conventions, gold-standard configuration baselines, and standardized runbooks deployed in Americas, EMEA, and APAC branches.",
  },
  {
    num: "03",
    title: "Pre-sales architects lead through post-go-live",
    description:
      "The exact senior engineers who whiteboard your architecture design accompany your deployment teams during maintenance cutovers and operational handoff.",
  },
  {
    num: "04",
    title: "Flexible CapEx, OpEx, and As-A-Service models",
    description:
      "Procure hardware outright, finance as operational expense, or adopt full NaaS (Network-as-a-Service) with integrated hardware refresh lifecycles.",
  },
  {
    num: "05",
    title: "OEM-certified engineers with direct escalation access",
    description:
      "Our team holds top-tier credentials (CCIE, PCNSE, JNCIE, AWS Certified Solutions Architect Pro) and direct TAC priority escalation privileges.",
  },
  {
    num: "06",
    title: "Vendor-neutral advice driven by performance, not quotas",
    description:
      "With 60+ OEM relationships, we select and combine the exact equipment best suited for your throughput demands and budget constraints.",
  },
];

export function WhyInnovia() {
  return (
    <section id="why-innovia" className="relative bg-[#F5F3EE] text-[#0E1424] py-16 sm:py-24 lg:py-32 border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#2F6BFF]" />
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#5B6577] uppercase font-semibold">
              05 / THE INNOVIA EDGE DIFFERENCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold text-[#0E1424] tracking-tight">
            Engineered trust. Why enterprises choose Innovia.
          </h2>
        </div>

        {/* 6 Editorial Rows with large numbers and fine dividers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="divide-y divide-[#0E1424]/15 border-y border-[#0E1424]/15"
        >
          {differentiators.map((diff) => (
            <motion.div
              key={diff.num}
              variants={fadeInUp}
              className="py-6 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline group hover:bg-white/60 backdrop-blur-sm transition-all duration-300 px-2 sm:px-4 -mx-2 sm:-mx-4"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-[#2F6BFF]">
                  {diff.num}
                </span>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-[#0E1424] tracking-tight group-hover:text-[#2F6BFF] transition-colors">
                  {diff.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-xs sm:text-sm lg:text-base text-[#5B6577] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
