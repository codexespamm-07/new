"use client";

import { motion } from "motion/react";
import { GlobeAltIcon, DocumentCheckIcon, CpuChipIcon, ClockIcon, CheckIcon } from "@heroicons/react/24/outline";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

const hubs = [
  { city: "Hyderabad", role: "Global Engineering & NOC / SOC HQ", x: 69, y: 53 },
  { city: "Dubai", role: "Middle East Delivery Hub", x: 62, y: 47 },
  { city: "Frankfurt", role: "European Central Interconnect", x: 50, y: 32 },
  { city: "New York", role: "Americas Operations & Advisory", x: 28, y: 36 },
  { city: "Singapore", role: "APAC Low-Latency Staging", x: 78, y: 58 },
  { city: "London", role: "Carrier Peering & Regulatory", x: 47, y: 30 },
];

export function GlobalReach() {
  return (
    <section id="global-reach" className="relative bg-[#F5F3EE] text-[#0E1424] border-b border-[#EAE7DF] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#2F6BFF]" />
            <span className="text-xs font-mono tracking-widest text-[#5B6577] uppercase font-semibold">
              03 / GLOBAL INFRASTRUCTURE FABRIC
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#0E1424] tracking-tight">
            Delivery across 20+ countries. Zero local variance.
          </h2>
          <p className="text-base text-[#5B6577] mt-4 leading-relaxed">
            Whether rolling out branch SD-WAN in Frankfurt or commissioning a redundant data centre spine in Hyderabad, your teams experience identical configuration standards, SLAs, and security controls.
          </p>
        </div>

        {/* 12-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Dotted World Map Graphic with Hub Pulses */}
          <div className="lg:col-span-7 bg-white border border-[#0E1424]/15 p-6 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#0E1424]/15 pb-3 text-xs font-mono text-[#5B6577]">
              <span className="flex items-center gap-2">
                <GlobeAltIcon className="w-3.5 h-3.5 text-[#0D9488]" /> ACTIVE DELIVERY HUBS & POPs
              </span>
              <span className="text-[#0D9488]">ALL SYSTEMS NOMINAL</span>
            </div>

            {/* World Map Image */}
            <div className="relative w-full h-[280px] my-4 flex items-center justify-center">
              <img
                src="/Neon Global Network Maps.png"
                alt="Global delivery hubs and points of presence map"
                className="w-full h-full object-contain"
              />

              {/* Pulsing delivery hubs */}
              {hubs.map((hub) => (
                <div
                  key={hub.city}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19C3A6] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#19C3A6]" />
                  </span>
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex flex-col bg-[#0E1424] border border-[#19C3A6] px-2.5 py-1 z-20 whitespace-nowrap shadow-xl">
                    <span className="text-xs font-mono font-bold text-white">{hub.city}</span>
                    <span className="text-[10px] font-mono text-[#8E9BB0]">{hub.role}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#5B6577] pt-3 border-t border-[#0E1424]/15">
              <span>TIER-1 HUB LATENCY &lt; 35MS GLOBAL</span>
              <span>CARRIER PEERING: EQUINIX / INTERXION</span>
            </div>
          </div>

          {/* Right: Four Key Operational Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Highlight 1 */}
            <motion.div
              variants={fadeInUp}
              className="p-5 bg-white border border-[#0E1424]/15 hover:border-[#0D9488] transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <DocumentCheckIcon className="w-5 h-5 text-[#0D9488] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-[#0E1424] text-base">
                    One Contract Across 20+ Countries
                  </h4>
                  <p className="text-xs text-[#5B6577] mt-1 leading-relaxed">
                    Single consolidated billing, master SLA, and legal governance without managing fragmented local telco contracts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlight 2 */}
            <motion.div
              variants={fadeInUp}
              className="p-5 bg-white border border-[#0E1424]/15 hover:border-[#2F6BFF] transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <CpuChipIcon className="w-5 h-5 text-[#2F6BFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-[#0E1424] text-base">
                    Pre-Configured Staged Hardware
                  </h4>
                  <p className="text-xs text-[#5B6577] mt-1 leading-relaxed">
                    All switches, firewalls, and APs are imaged, firmware-locked, asset-tagged, and burn-tested before shipping to branches.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlight 3 */}
            <motion.div
              variants={fadeInUp}
              className="p-5 bg-white border border-[#0E1424]/15 hover:border-[#0D9488] transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <ClockIcon className="w-5 h-5 text-[#0D9488] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-[#0E1424] text-base">
                    Follow-the-Sun Support
                  </h4>
                  <p className="text-xs text-[#5B6577] mt-1 leading-relaxed">
                    Synchronized NOC/SOC handovers between Hyderabad, Frankfurt, and New York ensures zero gaps in telemetry monitoring.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlight 4 */}
            <motion.div
              variants={fadeInUp}
              className="p-5 bg-white border border-[#0E1424]/15 hover:border-[#2F6BFF] transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <CheckIcon className="w-5 h-5 text-[#2F6BFF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-[#0E1424] text-base">
                    ISO-Certified Delivery Standards
                  </h4>
                  <p className="text-xs text-[#5B6577] mt-1 leading-relaxed">
                    Strict adherence to ISO 27001 (Security) and ISO 9001 (Quality) procedures with audit trails for every physical and virtual change.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
