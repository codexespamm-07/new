"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ShieldCheckIcon,
  ServerIcon,
  CloudIcon,
  ComputerDesktopIcon,
  ArrowRightIcon,
  LockClosedIcon,
  RadioIcon,
} from "@heroicons/react/24/outline";

export function SaseDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[320px] bg-[#0A0F1A] border border-[#1F2A3F] p-4 flex flex-col justify-between overflow-hidden">
      {/* Topology Header */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#19C3A6] animate-pulse" />
          <span className="text-[11px] font-mono text-[#8E9BB0] tracking-wider uppercase">
            SASE ZERO TRUST FABRIC
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#19C3A6] border border-[#19C3A6]/40 px-2 py-0.5">
          {activeNode ? `INSPECTING: ${activeNode.toUpperCase()}` : "STATUS: INSPECTION ACTIVE"}
        </span>
      </div>

      {/* SVG Canvas for Dynamic Connectors */}
      <div className="relative flex-1 flex items-center justify-between px-2 sm:px-6 my-auto">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 500 200"
          preserveAspectRatio="none"
        >
          {/* Path 1: Remote Branch -> Central SASE */}
          <motion.path
            d="M 80 50 C 160 50, 180 100, 250 100"
            fill="none"
            stroke={activeNode === "branch" ? "#19C3A6" : "#1F2A3F"}
            strokeWidth={activeNode === "branch" ? 2.5 : 1.5}
            strokeDasharray="4 3"
          />
          {/* Path 2: Remote Users -> Central SASE */}
          <motion.path
            d="M 80 150 C 160 150, 180 100, 250 100"
            fill="none"
            stroke={activeNode === "users" ? "#19C3A6" : "#1F2A3F"}
            strokeWidth={activeNode === "users" ? 2.5 : 1.5}
            strokeDasharray="4 3"
          />
          {/* Path 3: Central SASE -> Multi-Cloud */}
          <motion.path
            d="M 250 100 C 320 100, 340 50, 420 50"
            fill="none"
            stroke={activeNode === "cloud" ? "#2F6BFF" : "#1F2A3F"}
            strokeWidth={activeNode === "cloud" ? 2.5 : 1.5}
            strokeDasharray="4 3"
          />
          {/* Path 4: Central SASE -> Data Centre */}
          <motion.path
            d="M 250 100 C 320 100, 340 150, 420 150"
            fill="none"
            stroke={activeNode === "dc" ? "#2F6BFF" : "#1F2A3F"}
            strokeWidth={activeNode === "dc" ? 2.5 : 1.5}
            strokeDasharray="4 3"
          />
        </svg>

        {/* Left Side: Origins */}
        <div className="z-10 flex flex-col gap-8">
          <button
            onMouseEnter={() => setActiveNode("branch")}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-3 bg-[#121A2B] border transition-all text-left flex items-center gap-3 w-36 ${
              activeNode === "branch"
                ? "border-[#19C3A6] shadow-lg shadow-[#19C3A6]/10"
                : "border-[#1F2A3F] hover:border-[#8E9BB0]"
            }`}
          >
            <RadioIcon className="w-4 h-4 text-[#19C3A6]" />
            <div>
              <span className="text-xs font-heading font-medium text-white block">Branch SD-WAN</span>
              <span className="text-[9px] font-mono text-[#8E9BB0]">IPsec Tunnel</span>
            </div>
          </button>

          <button
            onMouseEnter={() => setActiveNode("users")}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-3 bg-[#121A2B] border transition-all text-left flex items-center gap-3 w-36 ${
              activeNode === "users"
                ? "border-[#19C3A6] shadow-lg shadow-[#19C3A6]/10"
                : "border-[#1F2A3F] hover:border-[#8E9BB0]"
            }`}
          >
            <ComputerDesktopIcon className="w-4 h-4 text-[#19C3A6]" />
            <div>
              <span className="text-xs font-heading font-medium text-white block">Remote Users</span>
              <span className="text-[9px] font-mono text-[#8E9BB0]">ZTNA Client</span>
            </div>
          </button>
        </div>

        {/* Center: Central SASE Inspection Core */}
        <div className="z-10 flex flex-col items-center">
          <div
            className={`p-4 bg-[#121A2B] border-2 transition-all flex flex-col items-center gap-2 text-center w-36 ${
              activeNode
                ? "border-[#19C3A6] bg-[#121A2B]"
                : "border-[#2F6BFF] shadow-lg shadow-[#2F6BFF]/10"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-[#19C3A6]/20 border border-[#19C3A6] flex items-center justify-center">
              <ShieldCheckIcon className="w-4 h-4 text-[#19C3A6]" />
            </div>
            <div>
              <span className="text-xs font-heading font-semibold text-white block">SASE CORE</span>
              <span className="text-[9px] font-mono text-[#19C3A6]">FWaaS + CASB</span>
            </div>
            <span className="text-[8px] font-mono px-1 py-0.5 bg-[#1F2A3F] text-[#8E9BB0]">
              TLS Inspection
            </span>
          </div>
        </div>

        {/* Right Side: Destinations */}
        <div className="z-10 flex flex-col gap-8">
          <button
            onMouseEnter={() => setActiveNode("cloud")}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-3 bg-[#121A2B] border transition-all text-left flex items-center gap-3 w-36 ${
              activeNode === "cloud"
                ? "border-[#2F6BFF] shadow-lg shadow-[#2F6BFF]/10"
                : "border-[#1F2A3F] hover:border-[#8E9BB0]"
            }`}
          >
            <CloudIcon className="w-4 h-4 text-[#2F6BFF]" />
            <div>
              <span className="text-xs font-heading font-medium text-white block">Multi-Cloud</span>
              <span className="text-[9px] font-mono text-[#8E9BB0]">AWS / Azure / GCP</span>
            </div>
          </button>

          <button
            onMouseEnter={() => setActiveNode("dc")}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-3 bg-[#121A2B] border transition-all text-left flex items-center gap-3 w-36 ${
              activeNode === "dc"
                ? "border-[#2F6BFF] shadow-lg shadow-[#2F6BFF]/10"
                : "border-[#1F2A3F] hover:border-[#8E9BB0]"
            }`}
          >
            <ServerIcon className="w-4 h-4 text-[#2F6BFF]" />
            <div>
              <span className="text-xs font-heading font-medium text-white block">Private Core DC</span>
              <span className="text-[9px] font-mono text-[#8E9BB0]">Bare-Metal / San</span>
            </div>
          </button>
        </div>
      </div>

      {/* Footer telemetry notice */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#8E9BB0] pt-2 border-t border-[#1F2A3F]">
        <span>Hover nodes to trace zero trust policy path</span>
        <span className="flex items-center gap-1 text-[#19C3A6]">
          <LockClosedIcon className="w-3 h-3" /> E2E Encrypted
        </span>
      </div>
    </div>
  );
}
