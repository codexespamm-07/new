"use client";

import Link from "next/link";
import { ArrowUpRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0F1A] border-t border-[#1F2A3F] text-[#8E9BB0] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-[#1F2A3F]">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-block group focus:outline-none">
              <span className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight">
                Innovia Edge
              </span>
            </Link>
            <p className="text-xs text-[#8E9BB0] leading-relaxed max-w-sm">
              Global enterprise IT infrastructure integrator architecting, deploying, and operating high-performance networks, SASE, cybersecurity, and multi-cloud environments in 20+ countries.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#F5F3EE]">
              <span className="w-2 h-2 rounded-full bg-[#19C3A6]" />
              <span>NOC/SOC Global Uptime: 99.98%</span>
            </div>
          </div>

          {/* Col 1: Solutions */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-white font-semibold tracking-wider block">
              Solutions
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Enterprise Switching & Wi-Fi 7
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  SD-WAN & SASE Convergence
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Cybersecurity & Zero Trust
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Multi-Cloud Landing Zones
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  AI Compute & GPU Fabrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Products & Tiers */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-white font-semibold tracking-wider block">
              Practices
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  24x7 NOC & SOC Managed
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Hardware Staging & Lab Testing
                </Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-white transition-colors">
                  60+ Tier-1 OEM Alliances
                </Link>
              </li>
              <li>
                <Link href="#methodology" className="hover:text-white transition-colors">
                  5-Stage Delivery Methodology
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Architecture Review Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Governance */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-white font-semibold tracking-wider block">
              Governance
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy & Telemetry
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service (Anti-Scraping)
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">
                  ISO 27001 & SOC 2 Audits
                </Link>
              </li>
              <li>
                <Link href="/.well-known/security.txt" className="hover:text-white transition-colors">
                  security.txt
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers (Principal Engineers)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Honeypot Link and Dynamic Year */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            &copy; {currentYear} Innovia Edge Global Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#19C3A6]">
              <ShieldCheckIcon className="w-3.5 h-3.5" /> ISO 27001 / ISO 9001 CERTIFIED
            </span>
            <a
              href="#contact"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Book Review</span>
              <ArrowUpRightIcon className="w-3 h-3 text-[#2F6BFF]" />
            </a>

            {/* Anti-Scraping Honeypot Trap link (invisible to users, catches crawlers) */}
            <a
              href="/api/trap/internal-directory"
              rel="nofollow"
              tabIndex={-1}
              aria-hidden="true"
              className="opacity-0 w-0 h-0 pointer-events-none select-none overflow-hidden inline-block"
            >
              Directory Crawl Node
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
