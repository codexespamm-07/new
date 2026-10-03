import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-[#F5F3EE]">
        <div className="border-b border-[#1F2A3F] pb-8 mb-8">
          <span className="text-xs font-mono text-[#2F6BFF] uppercase tracking-wider block mb-2">
            LEGAL ARCHITECTURE
          </span>
          <h1 className="text-4xl font-heading font-bold text-white tracking-tight">
            Terms of Service &amp; Anti-Scraping Policy
          </h1>
          <p className="text-xs font-mono text-[#8E9BB0] mt-2">
            Effective Date: January 1, 2026 // Commercial Governance
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#8E9BB0] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-white">1. Anti-Scraping &amp; Prohibited Automated Access</h2>
            <p className="p-4 bg-[#121A2B] border-l-2 border-[#19C3A6] text-white">
              Automated crawling, AI model training scraping, headless extraction, or unauthorized harvesting of contact data, topology diagrams, partner listings, or personnel credentials is expressly prohibited without prior written authorization from Innovia Edge Global Technologies.
            </p>
            <p>
              Crawlers identified bypassing robots.txt or executing high-frequency requests will be subject to IP blocking, Cloudflare WAF challenge enforcement, and legal remedies under applicable international computer abuse statutes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-white">2. Scope of Architecture Proposals</h2>
            <p>
              Any preliminary architecture reviews, budgetary proposals, or network diagrams provided via this portal are for evaluation purposes and do not constitute binding engineering guarantees until executed under a formal Master Services Agreement (MSA) and Statement of Work (SOW).
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1F2A3F]">
          <Link href="/" className="font-mono text-xs text-[#2F6BFF] hover:underline">
            &larr; Back to Innovia Edge Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
