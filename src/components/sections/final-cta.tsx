"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  PaperAirplaneIcon,
  PhoneIcon,
  ChatBubbleLeftIcon,
  LockClosedIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  EyeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

export function FinalCta() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    country: "",
    requirement: "network-refresh",
    message: "",
    honeypot: "",
  });

  const [startTimestamp, setStartTimestamp] = useState<number>(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [revealedDirectContacts, setRevealedDirectContacts] = useState(false);

  useEffect(() => {
    setStartTimestamp(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formTimestamp: startTimestamp,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission could not be completed.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please contact via WhatsApp/phone.");
      }
    }
  };

  return (
    <section id="contact" className="relative bg-[#F5F3EE] text-[#0E1424] border-b border-[#EAE7DF] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Value Proposition & Anti-Scraped Human Verification */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2F6BFF]" />
              <span className="text-xs font-mono tracking-widest text-[#5B6577] uppercase font-semibold">
                08 / DIRECT ENGAGEMENT
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#0E1424] tracking-tight leading-[1.08]">
              Get a tailored proposal in 48 hours.
            </h2>

            <p className="text-base text-[#5B6577] leading-relaxed">
              Talk directly with a Lead Solutions Architect. No obligation, no generic sales pitch — an engineering assessment of your topology, equipment list, and global requirements.
            </p>

            {/* SLA Badges */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono text-[#0E1424]">
                <ShieldCheckIcon className="w-4 h-4 text-[#0D9488]" />
                <span>Non-Disclosure Agreement (NDA) on request</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#0E1424]">
                <CheckCircleIcon className="w-4 h-4 text-[#2F6BFF]" />
                <span>Architect response SLA: 48 business hours</span>
              </div>
            </div>

            {/* Anti-Scraping Human Verification Phone / WhatsApp Reveal */}
            <div className="pt-8 border-t border-[#0E1424]/15">
              <span className="text-xs font-mono uppercase text-[#5B6577] tracking-wider block mb-3">
                DIRECT ARCHITECTURE DESK
              </span>

              {!revealedDirectContacts ? (
                <div className="p-4 bg-white border border-[#0E1424]/15 space-y-3">
                  <p className="text-xs text-[#5B6577]">
                    To protect our engineers from automated scraping and spam, direct phone lines and secure dispatch channels are revealed after human verification.
                  </p>
                  <button
                    onClick={() => setRevealedDirectContacts(true)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0E1424] hover:bg-[#2F6BFF] text-white text-xs font-mono uppercase transition-colors"
                  >
                    <EyeIcon className="w-3.5 h-3.5" />
                    <span>Click to reveal Direct Phone &amp; WhatsApp</span>
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-3 p-4 bg-white border border-[#0D9488]/40"
                >
                  <div className="flex items-center gap-3 text-xs font-mono text-[#0E1424]">
                    <PhoneIcon className="w-4 h-4 text-[#2F6BFF]" />
                    <span>Global Desk: +1 (800) 555-0199 / +91 (40) 6789-0120</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#0E1424]">
                    <ChatBubbleLeftIcon className="w-4 h-4 text-[#0D9488]" />
                    <span>WhatsApp Enterprise: +971 (4) 234-5678</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#5B6577] pt-1">
                    Contact details obfuscated from static crawler bots.
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column: Secure Proposal Request Form */}
          <div className="lg:col-span-7 bg-white border border-[#0E1424]/15 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#19C3A6]/20 border border-[#19C3A6] flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 text-[#19C3A6]" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#0E1424]">
                    Proposal Request Received
                  </h3>
                  <p className="text-sm font-sans text-[#5B6577] max-w-md">
                    Your architecture inquiry has been queued with our principal solutions engineering team. You will receive a technical response within 48 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        fullName: "",
                        workEmail: "",
                        country: "",
                        requirement: "network-refresh",
                        message: "",
                        honeypot: "",
                      });
                    }}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Submit another inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#0E1424]/15 pb-3 text-xs font-mono text-[#5B6577]">
                    <span>ARCHITECTURE REVIEW APPLICATION</span>
                    <span className="flex items-center gap-1 text-[#19C3A6]">
                      <LockClosedIcon className="w-3 h-3" /> TLS 1.3 ENCRYPTED
                    </span>
                  </div>

                  {/* Honeypot field (hidden from legitimate users, trapped if bots auto-fill) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this field</label>
                    <input
                      type="text"
                      id="hp_field"
                      name="hp_field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) =>
                        setFormData({ ...formData, honeypot: e.target.value })
                      }
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-900/30 border border-red-700/50 flex items-center gap-2 text-xs font-mono text-red-200">
                      <ExclamationCircleIcon className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#5B6577] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-[#F5F3EE] border border-[#0E1424]/15 focus:border-[#2F6BFF] focus:outline-none text-sm text-[#0E1424] placeholder-[#5B6577]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#5B6577] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@enterprise.com"
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, workEmail: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-[#F5F3EE] border border-[#0E1424]/15 focus:border-[#2F6BFF] focus:outline-none text-sm text-[#0E1424] placeholder-[#5B6577]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#5B6577] mb-1.5">
                        Deployment Country *
                      </label>
                      <select
                        required
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-[#F5F3EE] border border-[#0E1424]/15 focus:border-[#2F6BFF] focus:outline-none text-sm text-[#0E1424]"
                      >
                        <option value="">Select Primary Region</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Germany">Germany</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="India">India</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Other Multi-Country">Multi-Country (20+ Regions)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#5B6577] mb-1.5">
                        Primary Scope *
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) =>
                          setFormData({ ...formData, requirement: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-[#F5F3EE] border border-[#0E1424]/15 focus:border-[#2F6BFF] focus:outline-none text-sm text-[#0E1424]"
                      >
                        <option value="network-refresh">Campus / Wi-Fi 7 / Switching Refresh</option>
                        <option value="sdwan-sase">SD-WAN & SASE Migration</option>
                        <option value="cybersecurity-soc">Cybersecurity & 24x7 SOC</option>
                        <option value="cloud-migration">Multi-Cloud Landing Zone / FinOps</option>
                        <option value="ai-datacenter">AI Compute Fabric / GPU Cluster</option>
                        <option value="managed-noc">Managed NOC / Operations SLA</option>
                        <option value="general-rfp">Comprehensive Multi-Site RFP</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#5B6577] mb-1.5">
                      Scope Overview & Timeline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Brief details regarding number of sites, existing OEM stack, or target timeline..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-[#F5F3EE] border border-[#0E1424]/15 focus:border-[#2F6BFF] focus:outline-none text-sm text-[#0E1424] placeholder-[#5B6577]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-[#5B6577]">
                      Protected by Cloudflare Turnstile bot verification & rate limiting.
                    </span>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0E1424] hover:bg-[#2F6BFF] text-white text-xs font-mono uppercase font-semibold transition-colors disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <span>Validating...</span>
                      ) : (
                        <>
                          <span>Submit Architecture Review Request</span>
                          <PaperAirplaneIcon className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
