"use client";

import { motion } from "motion/react";
import { ArrowRightIcon, ChartBarIcon, GlobeAltIcon, ShieldCheckIcon, ServerIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { AnimatedCounter } from "../ui/animated-counter";
import { GlobalNetworkCanvas } from "../ui/global-network-canvas";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export function Hero() {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-between pt-20 sm:pt-28 pb-8 sm:pb-12 bg-white border-b border-[#EAE7DF] overflow-hidden">
      {/* Background Interactive Network Visual */}
      <GlobalNetworkCanvas />

      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Technical Mono Label */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#EAE7DF] border border-[#2F6BFF]/20 mb-4 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#2F6BFF] rounded-full" />
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#2F6BFF] uppercase">
              GLOBAL IT INFRASTRUCTURE INTEGRATOR &bull; CARRIER NEUTRAL
            </span>
          </motion.div>

          {/* Masked Headline Reveal */}
          <div className="overflow-hidden mb-4 sm:mb-6">
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl lg:text-[76px] font-heading font-bold text-[#0E1424] tracking-tight leading-[1.1] sm:leading-[1.04]"
            >
              Infrastructure that keeps up with your ambition.
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg font-sans text-[#5B6577] leading-relaxed max-w-2xl mb-8 sm:mb-10"
          >
            We architect, deploy and run networking, cloud and cybersecurity
            across 20+ countries, so your technology never becomes the
            bottleneck.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6"
          >
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              showArrow
              magnetic
              className="w-full sm:w-auto"
            >
              Book an architecture review
            </Button>
            <a
              href="#methodology"
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-[#5B6577] hover:text-[#2F6BFF] transition-colors group py-3 px-2"
            >
              <span>See how we work</span>
              <ArrowRightIcon className="w-4 h-4 text-[#2F6BFF] transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Telemetry & Stat Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 p-2 sm:p-3 bg-[#F5F3EE] border border-[#EAE7DF]"
        >
          {/* Stat 1 */}
          <div className="flex flex-col border-r border-[#EAE7DF] pr-2 sm:pr-3 last:border-0">
            <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider mb-1">
              <GlobeAltIcon className="w-2.5 h-3 sm:w-3 sm:h-3.5 text-[#2F6BFF]" />
              <span>Presence</span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[#0E1424] tracking-tight">
              <AnimatedCounter value={20} suffix="+ Countries" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono text-[#5B6577] mt-0.5">
              Direct engineering presence
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col border-r border-[#EAE7DF] pr-2 sm:pr-3 last:border-0">
            <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider mb-1">
              <ChartBarIcon className="w-2.5 h-3 sm:w-3 sm:h-3.5 text-[#0D9488]" />
              <span>OEM Integrations</span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[#0E1424] tracking-tight">
              <AnimatedCounter value={60} suffix="+ Partners" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono text-[#5B6577] mt-0.5">
              Tier-1 certified status
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col border-r border-[#EAE7DF] pr-2 sm:pr-3 last:border-0">
            <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider mb-1">
              <ServerIcon className="w-2.5 h-3 sm:w-3 sm:h-3.5 text-[#2F6BFF]" />
              <span>Operations</span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[#0E1424] tracking-tight">
              24x7 NOC & SOC
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono text-[#5B6577] mt-0.5">
              Follow-the-sun triage
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider mb-1">
              <ShieldCheckIcon className="w-2.5 h-3 sm:w-3 sm:h-3.5 text-[#0D9488]" />
              <span>Availability SLA</span>
            </div>
            {/* TODO: Confirm whether contract SLA is 99.9% or 99.99% for mission-critical client contracts */}
            <div className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[#0E1424] tracking-tight">
              99.9% SLA
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono text-[#0D9488] flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              Contractually backed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
