"use client";

import { motion } from "motion/react";
import {
  GlobeAltIcon,
  ArrowsRightLeftIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  MegaphoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

interface ServiceCard {
  id: string;
  index: string;
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  tint: "blue" | "teal" | "amber";
  icon: React.ComponentType<{ className?: string }>;
}

const servicesData: ServiceCard[] = [
  {
    id: "wired-wireless",
    index: "01",
    title: "Enterprise Wired & Wireless",
    desc: "Deterministic campus and branch infrastructure designed for zero downtime and dense IoT environments.",
    bullets: [
      "Structured optical & copper cabling backbones",
      "Wi-Fi 7 campus, warehouse and branch predictive RF designs",
      "Core, distribution, access switching fabrics (400G spine-leaf)",
      "802.1X Network Access Control (NAC) & micro-segmentation",
    ],
    cta: "Plan your network refresh",
    tint: "blue",
    icon: GlobeAltIcon,
  },
  {
    id: "sdwan-sase",
    index: "02",
    title: "SD-WAN & SASE Convergence",
    desc: "Unify branch connectivity, security inspection, and direct-to-cloud steering under a single verifiable policy engine.",
    bullets: [
      "SD-WAN migration with zero carrier lock-in (multi-underlay)",
      "ZTNA, CASB, Secure Web Gateway (SWG) and FWaaS deployment",
      "Automated application SLA path optimization",
      "Hardware staging & zero-touch deployment across 20+ countries",
    ],
    cta: "Get a SASE readiness assessment",
    tint: "teal",
    icon: ArrowsRightLeftIcon,
  },
  {
    id: "cybersecurity",
    index: "03",
    title: "Cybersecurity & Zero Trust",
    desc: "Proactive cyber defence posture engineered into every switch, gateway, and identity provider.",
    bullets: [
      "24x7 SOC-as-a-Service with AI-augmented threat detection",
      "Next-Gen Firewalls (NGFW) with automated microsegmentation",
      "Extended Detection & Response (EDR) integration",
      "Continuous identity verification & conditional access enforcement",
    ],
    cta: "Talk to a security architect",
    tint: "teal",
    icon: ShieldCheckIcon,
  },
  {
    id: "cloud-services",
    index: "04",
    title: "Cloud Infrastructure & FinOps",
    desc: "Production landing zones, secure workload migration, and FinOps governance across multi-cloud estates.",
    bullets: [
      "Enterprise AWS, Azure & GCP landing zones with guardrails",
      "Automated infrastructure as code (Terraform / OpenTofu)",
      "Cloud interconnects (Direct Connect, ExpressRoute, Cloud Interconnect)",
      "FinOps cost visibility & continuous resource rightsizing",
    ],
    cta: "Review your cloud strategy",
    tint: "blue",
    icon: CloudIcon,
  },
  {
    id: "ai-infrastructure",
    index: "05",
    title: "AI-Enabled Infra & AI Trust",
    desc: "High-throughput GPU fabric engineering, private enterprise LLM inference backbones, and secure MCP gateways.",
    bullets: [
      "RoCE v2 and InfiniBand non-blocking leaf-spine fabrics",
      "On-prem / sovereign AI cluster power and thermal planning",
      "Secure LLM gateways with DLP and MCP token mediation",
      "Private vector store and high-IOPS NVMe-oF storage tiers",
    ],
    cta: "Explore AI-ready infrastructure",
    tint: "amber",
    icon: CpuChipIcon,
  },
  {
    id: "managed-services",
    index: "06",
    title: "24x7 Managed NOC & SOC",
    desc: "L1 through L3 engineering operations ensuring SLA-backed uptime, proactive patching, and rapid incident resolution.",
    bullets: [
      "24x7 follow-the-sun Network Operations Centre (NOC)",
      "Tiered SLAs with 15-minute critical incident triage guarantee",
      "Full lifecycle management, RMA orchestration & spares pool",
      "Continuous telemetry, synthetic transaction monitoring & reporting",
    ],
    cta: "See managed service tiers",
    tint: "teal",
    icon: MegaphoneIcon,
  },
  {
    id: "professional-services",
    index: "07",
    title: "Professional & Advisory Services",
    desc: "Strategic advisory, vendor-neutral hardware procurement, and ISO-compliant program execution for large enterprises.",
    bullets: [
      "Vendor-neutral architecture feasibility & TCO assessments",
      "Multi-site global deployment program management",
      "ISO 27001, SOC 2, and PCI-DSS compliance infrastructure audit",
      "Comprehensive runbook creation and IT staff enablement",
    ],
    cta: "Start with a discovery workshop",
    tint: "blue",
    icon: MapPinIcon,
  },
];

export function CoreServices() {
  return (
    <section id="services" className="relative bg-[#F5F3EE] text-[#0E1424] border-b border-[#EAE7DF] py-16 sm:py-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 bg-[#2F6BFF]" />
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#5B6577] uppercase font-semibold">
                02 / CAPABILITIES & PRACTICES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-[#0E1424] tracking-tight leading-[1.1]">
              Engineered end-to-end.<br />
              <span className="text-[#2F6BFF]">Built to perform.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base font-sans text-[#5B6577] max-w-md leading-relaxed">
            Each practice is staffed by OEM-certified principal engineers with direct escalation access to factory engineering teams.
          </p>
        </div>
      </div>

      {/* Services Card Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {servicesData.map((svc) => {
            const tintColor =
              svc.tint === "blue"
                ? "#1D58D8"
                : svc.tint === "teal"
                ? "#0D9488"
                : "#D97706";

            const tintText =
              svc.tint === "blue"
                ? "text-[#1D58D8]"
                : svc.tint === "teal"
                ? "text-[#0D9488]"
                : "text-[#D97706]";

            const tintBg =
              svc.tint === "blue"
                ? "bg-[#1D58D8]/5"
                : svc.tint === "teal"
                ? "bg-[#0D9488]/5"
                : "bg-[#D97706]/5";

            const Icon = svc.icon;

            return (
              <motion.div
                key={svc.id}
                variants={fadeInUp}
                className="group relative bg-white p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 ${tintBg} rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Card Header */}
                <div className="space-y-4 sm:space-y-5 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className={`text-xs sm:text-sm font-mono font-bold ${tintText} tracking-tight`}>
                        {svc.index}
                      </span>
                      <div className="h-px w-6 sm:w-8 bg-[#0E1424]/20" />
                    </div>
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${tintBg} border ${tintText.replace('text-', 'border-')} border-opacity-20`}
                    >
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${tintText}`} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-[#0E1424] tracking-tight leading-snug mb-2 sm:mb-3 group-hover:text-[#2F6BFF] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6577] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Capability Bullets */}
                  <ul className="space-y-2 sm:space-y-2.5 pt-2">
                    {svc.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#0E1424]/70 leading-relaxed">
                        <CheckCircleIcon
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 ${tintText}`}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#0E1424]/10 relative z-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider transition-colors group/cta"
                    style={{ color: tintColor }}
                  >
                    <span>{svc.cta}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
