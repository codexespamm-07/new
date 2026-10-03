"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  CubeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

const steps = [
  {
    phase: "01",
    title: "Discovery",
    icon: MagnifyingGlassIcon,
    summary: "Audit existing topology, carrier circuits, throughput bottlenecks, and compliance mandates.",
    outcome: "Validated baseline inventory & risk assessment report.",
  },
  {
    phase: "02",
    title: "Architecture",
    icon: MapPinIcon,
    summary: "Design vendor-neutral High-Level (HLD) & Low-Level (LLD) blueprints with active-active redundancy.",
    outcome: "Peer-reviewed target network & security blueprint.",
  },
  {
    phase: "03",
    title: "Procurement & Staging",
    icon: CubeIcon,
    summary: "Tier-1 OEM volume procurement, hardware asset tagging, and lab burn-in testing in our staging facilities.",
    outcome: "Pre-imaged, verified hardware ready for zero-touch drop-ship.",
  },
  {
    phase: "04",
    title: "Deployment",
    icon: RocketLaunchIcon,
    summary: "Maintenance window cutover executed by certified on-site engineers with immediate rollback safety nets.",
    outcome: "Zero unbudgeted downtime & signed UAT acceptance.",
  },
  {
    phase: "05",
    title: "Manage & Optimize",
    icon: ShieldCheckIcon,
    summary: "Seamless handover to 24x7 NOC/SOC, continuous synthetic monitoring, and quarterly architecture reviews.",
    outcome: "Contractually guaranteed 99.9% uptime SLA.",
  },
];

export function DeliveryMethodology() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="methodology" className="relative bg-[#F5F3EE] text-[#0E1424] py-24 sm:py-32 border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#2F6BFF]" />
            <span className="text-xs font-mono tracking-widest text-[#5B6577] uppercase font-semibold">
              04 / EXECUTION PLAYBOOK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#0E1424] tracking-tight">
            Deterministic delivery. From blueprint to 24x7 operations.
          </h2>
          <p className="text-base text-[#5B6577] mt-4 leading-relaxed">
            Every deployment follows our 5-stage engineering lifecycle. No surprises, no unexplained cutover delays, and complete accountability at each gate.
          </p>
        </div>

        {/* Horizontal Progress Timeline */}
        <div className="relative border-t border-[#0E1424]/15 pt-8 mb-12">
          {/* Timeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isSelected = activeStep === idx;

              return (
                <button
                  key={s.phase}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 transition-all border ${
                    isSelected
                      ? "bg-[#EAE7DF] border-[#2F6BFF] shadow-md"
                      : "bg-[#F5F3EE] border-[#0E1424]/10 hover:border-[#2F6BFF]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                      PHASE {s.phase}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? "text-[#2F6BFF]" : "text-[#5B6577]"}`} />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#0E1424] mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs text-[#5B6577] leading-relaxed line-clamp-3">
                    {s.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Expanded Outcome Drawer */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-6 md:p-8 bg-[#EAE7DF] border border-[#0E1424]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-[#2F6BFF] uppercase tracking-wider block font-semibold">
              KEY DELIVERABLE & GATE CRITERIA // STAGE {steps[activeStep].phase}
            </span>
            <h5 className="font-heading font-bold text-xl text-[#0E1424]">
              {steps[activeStep].outcome}
            </h5>
            <p className="text-xs sm:text-sm text-[#5B6577]">
              {steps[activeStep].summary}
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E1424] hover:bg-[#121A2B] text-white font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <span>Request Methodology Runbook</span>
            <ChevronRightIcon className="w-3.5 h-3.5 text-[#2F6BFF]" />
          </a>
        </motion.div>

        {/* Mid-page Primary CTA after methodology */}
        <div className="mt-16 pt-12 border-t border-[#0E1424]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-2xl text-[#0E1424]">
              Planning an enterprise infrastructure modernization?
            </h3>
            <p className="text-sm text-[#5B6577] mt-1">
              Connect directly with a Lead Solutions Architect for a preliminary whiteboard session.
            </p>
          </div>
          <Button href="#contact" variant="primary" size="md" showArrow magnetic>
            Walk through your project with an architect
          </Button>
        </div>
      </div>
    </section>
  );
}
