"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ServerIcon,
  ArrowsRightLeftIcon,
  LockClosedIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const productsMegaMenu = {
  data: {
    title: "Data & Networking",
    desc: "Engineered connectivity from campus to core.",
    items: [
      { name: "Enterprise Switching & Wi-Fi 7", href: "#services", icon: GlobeAltIcon },
      { name: "SD-WAN Orchestration", href: "#services", icon: ArrowsRightLeftIcon },
      { name: "Data Centre Fabric & Spine-Leaf", href: "#services", icon: ServerIcon },
    ],
  },
  security: {
    title: "Security & SASE",
    desc: "Zero Trust Architecture with continuous inspection.",
    items: [
      { name: "SASE & ZTNA Deployment", href: "#services", icon: LockClosedIcon },
      { name: "SOC-as-a-Service (24x7)", href: "#services", icon: ShieldCheckIcon },
      { name: "Next-Gen Firewall Architecture", href: "#services", icon: BuildingLibraryIcon },
    ],
  },
  aiTrust: {
    title: "AI Trust & Compute",
    desc: "Deterministic infra for agentic systems and private LLMs.",
    items: [
      { name: "AI Cluster Low-Latency Fabric", href: "#services", icon: CpuChipIcon },
      { name: "Secure LLM & MCP Proxies", href: "#services", icon: LockClosedIcon },
      { name: "Edge Compute & Hybrid Ingestion", href: "#services", icon: CloudIcon },
    ],
  },
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#EAE7DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link href="/" className="group focus:outline-none focus:ring-1 focus:ring-[#2F6BFF]">
            <span className="text-xl sm:text-2xl font-heading font-bold text-[#0E1424] tracking-tight">
              Innovia Edge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            <Link
              href="#services"
              className="text-sm font-sans text-[#5B6577] hover:text-[#2F6BFF] transition-colors"
            >
              Solutions
            </Link>

            {/* Products Mega-Menu */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-sans py-2 focus:outline-none text-[#5B6577] hover:text-[#2F6BFF] focus:text-[#2F6BFF] transition-colors"
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#2F6BFF]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 sm:-left-20 w-full sm:w-[780px] bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl p-4 sm:p-6 rounded-none grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
                  >
                    {/* Column 1: Data */}
                    <div className="space-y-4">
                      <div className="border-b border-[#0E1424]/15 pb-2">
                        <span className="text-xs font-mono text-[#1D58D8] uppercase tracking-wider block">
                          01 / INFRA
                        </span>
                        <h4 className="font-heading font-semibold text-[#0E1424] text-base">
                          {productsMegaMenu.data.title}
                        </h4>
                        <p className="text-xs text-[#5B6577] mt-0.5">
                          {productsMegaMenu.data.desc}
                        </p>
                      </div>
                      <div className="space-y-2">
                        {productsMegaMenu.data.items.map((it) => (
                          <Link
                            key={it.name}
                            href={it.href}
                            className="flex items-start gap-2.5 p-2 rounded-none hover:bg-[#EAE7DF] text-xs text-[#0E1424] hover:text-[#2F6BFF] transition-colors group"
                          >
                            <it.icon className="w-4 h-4 text-[#5B6577] group-hover:text-[#1D58D8] shrink-0 mt-0.5" />
                            <span>{it.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Security */}
                    <div className="space-y-4">
                      <div className="border-b border-[#0E1424]/15 pb-2">
                        <span className="text-xs font-mono text-[#0D9488] uppercase tracking-wider block">
                          02 / CYBER
                        </span>
                        <h4 className="font-heading font-semibold text-[#0E1424] text-base">
                          {productsMegaMenu.security.title}
                        </h4>
                        <p className="text-xs text-[#5B6577] mt-0.5">
                          {productsMegaMenu.security.desc}
                        </p>
                      </div>
                      <div className="space-y-2">
                        {productsMegaMenu.security.items.map((it) => (
                          <Link
                            key={it.name}
                            href={it.href}
                            className="flex items-start gap-2.5 p-2 rounded-none hover:bg-[#EAE7DF] text-xs text-[#0E1424] hover:text-[#0D9488] transition-colors group"
                          >
                            <it.icon className="w-4 h-4 text-[#5B6577] group-hover:text-[#0D9488] shrink-0 mt-0.5" />
                            <span>{it.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: AI Trust */}
                    <div className="space-y-4">
                      <div className="border-b border-[#0E1424]/15 pb-2">
                        <span className="text-xs font-mono text-[#D97706] uppercase tracking-wider block">
                          03 / INTELLIGENCE
                        </span>
                        <h4 className="font-heading font-semibold text-[#0E1424] text-base">
                          {productsMegaMenu.aiTrust.title}
                        </h4>
                        <p className="text-xs text-[#5B6577] mt-0.5">
                          {productsMegaMenu.aiTrust.desc}
                        </p>
                      </div>
                      <div className="space-y-2">
                        {productsMegaMenu.aiTrust.items.map((it) => (
                          <Link
                            key={it.name}
                            href={it.href}
                            className="flex items-start gap-2.5 p-2 rounded-none hover:bg-[#EAE7DF] text-xs text-[#0E1424] hover:text-[#D97706] transition-colors group"
                          >
                            <it.icon className="w-4 h-4 text-[#5B6577] group-hover:text-[#D97706] shrink-0 mt-0.5" />
                            <span>{it.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#partners"
              className="text-sm font-sans text-[#5B6577] hover:text-[#2F6BFF] transition-colors"
            >
              Partners
            </Link>
            <Link
              href="#why-innovia"
              className="text-sm font-sans text-[#5B6577] hover:text-[#2F6BFF] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-sans text-[#5B6577] hover:text-[#2F6BFF] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="#contact" variant="primary" size="sm" showArrow magnetic>
              Book an architecture review
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border text-[#0E1424] border-[#EAE7DF] bg-[#F5F3EE] focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white border-t border-[#EAE7DF] p-4 sm:p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <span className="text-xs font-mono uppercase text-[#5B6577] tracking-widest block">
                NAVIGATION
              </span>
              <div className="flex flex-col space-y-4">
                <Link
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-2xl font-semibold text-[#0E1424] hover:text-[#2F6BFF]"
                >
                  Solutions & Services
                </Link>
                <Link
                  href="#positioning"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-2xl font-semibold text-[#0E1424] hover:text-[#2F6BFF]"
                >
                  Why Unified Stack
                </Link>
                <Link
                  href="#global-reach"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-2xl font-semibold text-[#0E1424] hover:text-[#2F6BFF]"
                >
                  Global Reach (20+ Countries)
                </Link>
                <Link
                  href="#methodology"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-2xl font-semibold text-[#0E1424] hover:text-[#2F6BFF]"
                >
                  Delivery Methodology
                </Link>
                <Link
                  href="#partners"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-2xl font-semibold text-[#0E1424] hover:text-[#2F6BFF]"
                >
                  OEM Partner Ecosystem (60+)
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-2xl font-semibold text-[#0E1424] hover:text-[#2F6BFF]"
                >
                  Contact & RFP
                </Link>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#0E1424]/15">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5B6577]">
                <span className="w-2 h-2 rounded-full bg-[#19C3A6] animate-pulse" />
                <span>NOC & SOC 24x7 OPERATIONAL</span>
              </div>
              <Button
                href="#contact"
                variant="primary"
                size="md"
                showArrow
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book an architecture review
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
