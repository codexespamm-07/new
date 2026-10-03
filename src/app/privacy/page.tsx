import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-[#F5F3EE]">
        <div className="border-b border-[#1F2A3F] pb-8 mb-8">
          <span className="text-xs font-mono text-[#19C3A6] uppercase tracking-wider block mb-2">
            GOVERNANCE &amp; COMPLIANCE
          </span>
          <h1 className="text-4xl font-heading font-bold text-white tracking-tight">
            Privacy Policy &amp; Telemetry Notice
          </h1>
          <p className="text-xs font-mono text-[#8E9BB0] mt-2">
            Last Updated: January 2026 // Version 3.4 // ISO 27001 Audited
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#8E9BB0] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-white">1. Scope of Data Ingestion</h2>
            <p>
              Innovia Edge Global Technologies operates enterprise infrastructure services. We do not monetize personal data or deploy behavioral advertising trackers. All telemetry ingested during architecture reviews or SLA monitoring is encrypted via TLS 1.3 in transit and AES-256 at rest.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-white">2. B2B Inquiry Processing</h2>
            <p>
              Contact data submitted via our architecture review form is processed solely to evaluate enterprise infrastructure fit and schedule consultation with a Lead Architect.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-white">3. Cookies &amp; Local Telemetry</h2>
            <p>
              We utilize strictly necessary technical session cookies to maintain CSRF defenses, Cloudflare Turnstile bot verification states, and user preference toggles.
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
