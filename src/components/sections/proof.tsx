"use client";

import { ArrowUpRightIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export function Proof() {
  return (
    <section className="relative bg-[#F5F3EE] text-[#0E1424] border-b border-[#EAE7DF] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#2F6BFF]" />
            <span className="text-xs font-mono tracking-widest text-[#5B6577] uppercase font-semibold">
              07 / PRODUCTION OUTCOMES & CASE STUDIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#0E1424] tracking-tight">
            Proven at enterprise scale.
          </h2>
          <p className="text-sm font-sans text-[#5B6577] mt-3">
            Real deployments delivering measurable latency reduction, security hardening, and telecom cost consolidation.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-white border border-[#0E1424]/15 p-6 sm:p-8 flex flex-col justify-between hover:border-[#2F6BFF] transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* TODO: Replace with confirmed client logo or approved pseudonym */}
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#EAE7DF] text-[#2F6BFF] border border-[#0E1424]/15">
                  GLOBAL LOGISTICS & SUPPLY CHAIN
                </span>
                <span className="text-[10px] font-mono text-[#5B6577]">14 COUNTRIES</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#0E1424] group-hover:text-[#2F6BFF] transition-colors">
                120-Site SD-WAN and Zero Trust SASE Migration
              </h3>
              <p className="text-xs text-[#5B6577] leading-relaxed">
                Legacy MPLS contracts were expiring across Europe and APAC with unsustainable bandwidth constraints. Replaced with dual-broadband SASE fabric.
              </p>
            </div>

            <div className="pt-6 border-t border-[#0E1424]/15 mt-8">
              {/* TODO: Verify exact ROI figure with client success lead */}
              <div className="text-2xl font-heading font-bold text-[#0D9488] mb-1">
                42% Telco Reduction
              </div>
              <div className="text-[11px] font-mono text-[#5B6577] mb-4">
                &amp; 99.98% verified tunnel uptime across 120 logistics hubs.
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0E1424] hover:text-[#2F6BFF] transition-colors"
              >
                <span>Read case study</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#0E1424]/15 p-6 sm:p-8 flex flex-col justify-between hover:border-[#0D9488] transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* TODO: Replace with confirmed fintech client name */}
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#EAE7DF] text-[#0D9488] border border-[#0E1424]/15">
                  FINANCIAL SERVICES & TRADING
                </span>
                <span className="text-[10px] font-mono text-[#5B6577]">HYBRID DC</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#0E1424] group-hover:text-[#0D9488] transition-colors">
                Sub-Millisecond 400G Spine-Leaf DC Fabric
              </h3>
              <p className="text-xs text-[#5B6577] leading-relaxed">
                Re-engineered core financial trading execution data center with automated EVPN-VXLAN telemetry and non-blocking RoCE v2 storage backplane.
              </p>
            </div>

            <div className="pt-6 border-t border-[#0E1424]/15 mt-8">
              {/* TODO: Verify microsecond latency metric with core network lead */}
              <div className="text-3xl font-heading font-bold text-[#0D9488] mb-1">
                0.8ms P99 Latency
              </div>
              <div className="text-[11px] font-mono text-[#5B6577] mb-4">
                Zero packet drop under 100 Gbps traffic burst testing.
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0E1424] hover:text-[#0D9488] transition-colors"
              >
                <span>Read case study</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#0E1424]/15 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D97706] transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* TODO: Replace with confirmed healthcare provider logo */}
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#EAE7DF] text-[#D97706] border border-[#0E1424]/15">
                  CRITICAL HEALTHCARE NETWORK
                </span>
                <span className="text-[10px] font-mono text-[#5B6577]">24x7 SOC</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#0E1424] group-hover:text-[#D97706] transition-colors">
                Zero-Trust Medical IoT & Wi-Fi 7 Campus
              </h3>
              <p className="text-xs text-[#5B6577] leading-relaxed">
                Automated NAC micro-segmentation across 18 hospital campuses isolating 45,000 unmanaged medical telemetry devices from public hospital Wi-Fi.
              </p>
            </div>

            <div className="pt-6 border-t border-[#0E1424]/15 mt-8">
              {/* TODO: Confirm IoMT isolation metric */}
              <div className="text-3xl font-heading font-bold text-[#D97706] mb-1">
                100% IoMT Segregation
              </div>
              <div className="text-[11px] font-mono text-[#5B6577] mb-4">
                Full HIPAA &amp; HITRUST infrastructure compliance certified.
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0E1424] hover:text-[#D97706] transition-colors"
              >
                <span>Read case study</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Verified Executive Testimonial Slot */}
        <div className="bg-white border border-[#0E1424]/15 p-8 md:p-12 relative overflow-hidden">
          <ChatBubbleLeftIcon className="absolute top-6 right-6 w-16 h-16 text-[#EAE7DF] pointer-events-none" />
          <div className="max-w-3xl space-y-6 relative z-10">
            {/* TODO: Replace placeholder testimonial with signed quote from Fortune 500 client */}
            <p className="font-heading text-lg sm:text-2xl text-[#0E1424] font-medium leading-relaxed">
              &ldquo;Innovia Edge deployed our European SD-WAN rollout across 34 sites in 4 months with zero unexpected disruption to our SAP systems. Their certified engineers know the equipment down to the ASIC level.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EAE7DF] border border-[#2F6BFF] flex items-center justify-center font-mono font-bold text-[#0E1424] text-xs">
                {/* TODO: Replace placeholder avatar */}
                CTO
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[#0E1424]">
                  Head of Global Infrastructure &amp; Telecoms
                </h4>
                <p className="text-xs font-mono text-[#5B6577]">
                  Tier-1 Multilateral Financial Services Institution (TODO: Add logo)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Logo Row */}
        <div className="mt-12 pt-8 border-t border-[#0E1424]/15 flex flex-wrap items-center justify-between gap-6 opacity-60">
          <span className="text-xs font-mono uppercase text-[#5B6577]">
            TRUSTED BY INFRASTRUCTURE DIRECTORS AT //
          </span>
          {/* TODO: Insert confirmed client brand SVGs */}
          <div className="flex flex-wrap items-center gap-8 text-xs font-mono text-[#5B6577]">
            <span>[REPLACE: Global Aerospace Corp]</span>
            <span>[REPLACE: Pan-European Logistics PLC]</span>
            <span>[REPLACE: APAC Energy Grid Ltd]</span>
            <span>[REPLACE: FinTech Gateway AG]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
