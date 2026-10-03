"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheckIcon, ServerIcon, GlobeAltIcon, LockClosedIcon, CloudIcon } from "@heroicons/react/24/outline";

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  partners: { name: string; tier: string; notes: string }[];
}

const partnerCategories: Category[] = [
  {
    id: "infrastructure",
    name: "Infrastructure & Compute",
    icon: ServerIcon,
    partners: [
      { name: "Dell Technologies", tier: "Titanium Partner", notes: "PowerEdge Servers & PowerStore SAN" },
      { name: "HPE", tier: "Platinum Partner", notes: "ProLiant & Alletra Storage" },
      { name: "Pure Storage", tier: "Elite Partner", notes: "FlashArray & FlashBlade NVMe" },
      { name: "NetApp", tier: "Star Partner", notes: "ONTAP Unified Hybrid Storage" },
      { name: "IBM", tier: "Strategic Partner", notes: "Enterprise Storage & Mainframe Interconnect" },
      { name: "Hitachi Vantara", tier: "Premier Partner", notes: "VSP High-Throughput Fabrics" },
    ],
  },
  {
    id: "networking",
    name: "Enterprise Networking",
    icon: GlobeAltIcon,
    partners: [
      { name: "Cisco", tier: "Gold Certified Partner", notes: "Catalyst 9000, Nexus & Meraki" },
      { name: "Juniper Networks", tier: "Elite Partner", notes: "QFX Switching, MX Routers & Mist AI" },
      { name: "Aruba (HPE)", tier: "Platinum Partner", notes: "CX Switching & Wi-Fi 7 Access Points" },
      { name: "Extreme Networks", tier: "Diamond Partner", notes: "Automated Campus Fabric" },
      { name: "Ruckus (CommScope)", tier: "Elite Partner", notes: "High-Density Smart Wi-Fi & ICX" },
    ],
  },
  {
    id: "sase",
    name: "SD-WAN & SASE",
    icon: LockClosedIcon,
    partners: [
      { name: "Palo Alto Networks", tier: "Diamond Innovator", notes: "Prisma SASE & Strata Next-Gen FW" },
      { name: "Fortinet", tier: "Expert Partner", notes: "FortiGate Secure SD-WAN & SASE" },
      { name: "Cato Networks", tier: "Certified SASE Partner", notes: "Global Cloud-Native SASE Core" },
      { name: "Zscaler", tier: "Summit Partner", notes: "Zero Trust Exchange (ZIA & ZPA)" },
      { name: "Check Point", tier: "4-Star Partner", notes: "Quantum Spark & Harmony SASE" },
    ],
  },
  {
    id: "cloud-security",
    name: "Cloud Security & EDR",
    icon: ShieldCheckIcon,
    partners: [
      { name: "CrowdStrike", tier: "Premier Partner", notes: "Falcon EDR & Identity Protection" },
      { name: "SentinelOne", tier: "Strategic Partner", notes: "Singularity Complete XDR Platform" },
      { name: "Darktrace", tier: "Enterprise Partner", notes: "Self-Learning AI Threat Mitigation" },
    ],
  },
  {
    id: "cloud-platforms",
    name: "Cloud Platforms",
    icon: CloudIcon,
    partners: [
      { name: "Amazon Web Services (AWS)", tier: "Advanced Tier Partner", notes: "Direct Connect & Landing Zones" },
      { name: "Microsoft Azure", tier: "Solutions Partner", notes: "ExpressRoute & Hybrid Sentinel" },
      { name: "Google Cloud", tier: "Premier Partner", notes: "Cloud Interconnect & BigQuery Infra" },
      { name: "VMware by Broadcom", tier: "Pinnacle Partner", notes: "Cloud Foundation (VCF) & NSX" },
      { name: "Nutanix", tier: "Cloud Champion", notes: "AHV Hyperconverged Infrastructure" },
    ],
  },
];

export function PartnerEcosystem() {
  const [selectedTab, setSelectedTab] = useState(partnerCategories[0].id);
  const activeCategory = partnerCategories.find((c) => c.id === selectedTab) || partnerCategories[0];

  return (
    <section id="partners" className="relative bg-[#F5F3EE] text-[#0E1424] border-b border-[#EAE7DF] py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#2F6BFF]" />
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#5B6577] uppercase font-semibold">
                06 / ECOSYSTEM & ALLIANCES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold text-[#0E1424] tracking-tight">
              60+ OEM relationships. Unbiased architecture.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-sans text-[#5B6577] max-w-sm">
            We maintain the highest partner accreditations with tier-1 equipment manufacturers, ensuring priority access to engineering TAC and factory pricing.
          </p>
        </div>

        {/* Category Filter Tabs with animated indicator */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-[#0E1424]/15 pb-3 sm:pb-4 mb-6 sm:mb-8">
          {partnerCategories.map((cat) => {
            const isSelected = selectedTab === cat.id;
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedTab(cat.id)}
                className={`relative px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-mono tracking-wide uppercase transition-colors whitespace-nowrap flex items-center gap-2 ${
                  isSelected ? "text-[#0E1424] font-semibold" : "text-[#5B6577] hover:text-[#0E1424]"
                }`}
              >
                <Icon className={`w-3 h-3.5 sm:w-3.5 sm:h-3.5 ${isSelected ? "text-[#2F6BFF]" : "text-[#5B6577]"}`} />
                <span>{cat.name}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activePartnerTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2F6BFF]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Partner Grid for Selected Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {activeCategory.partners.map((partner) => (
              <div
                key={partner.name}
                className="p-4 sm:p-6 bg-white/70 backdrop-blur-md border border-white/20 hover:border-[#2F6BFF] transition-all group flex flex-col justify-between min-h-[120px] sm:min-h-[140px]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-heading font-semibold text-base text-[#0E1424] group-hover:text-[#2F6BFF] transition-colors">
                      {partner.name}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#EAE7DF] border border-[#0E1424]/15 text-[#0D9488]">
                      {partner.tier}
                    </span>
                  </div>
                  <p className="text-xs text-[#5B6577] leading-relaxed">
                    {partner.notes}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#0E1424]/15 flex items-center justify-between text-[11px] font-mono text-[#5B6577]">
                  <span>CERTIFIED INTEGRATOR</span>
                  <span className="text-[#2F6BFF] opacity-0 group-hover:opacity-100 transition-opacity">
                    DEPLOYED // VERIFIED
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
