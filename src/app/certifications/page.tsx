import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { ShieldCheckIcon, TrophyIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-[#F5F3EE]">
        <div className="border-b border-[#1F2A3F] pb-8 mb-8">
          <span className="text-xs font-mono text-[#19C3A6] uppercase tracking-wider block mb-2">
            AUDITS &amp; ATTESTATIONS
          </span>
          <h1 className="text-4xl font-heading font-bold text-white tracking-tight">
            Enterprise Certifications &amp; Accreditations
          </h1>
          <p className="text-xs font-mono text-[#8E9BB0] mt-2">
            Verified Global Standards // Annual Third-Party Audit Reports
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-[#121A2B] border border-[#1F2A3F]">
            <ShieldCheckIcon className="w-6 h-6 text-[#19C3A6] mb-3" />
            <h3 className="font-heading font-bold text-white text-lg">ISO/IEC 27001:2022</h3>
            <p className="text-xs text-[#8E9BB0] mt-2">
              Information Security Management System (ISMS) covering our 24x7 NOC &amp; SOC operations.
            </p>
          </div>

          <div className="p-6 bg-[#121A2B] border border-[#1F2A3F]">
            <DocumentCheckIcon className="w-6 h-6 text-[#2F6BFF] mb-3" />
            <h3 className="font-heading font-bold text-white text-lg">SOC 2 Type II</h3>
            <p className="text-xs text-[#8E9BB0] mt-2">
              Security, Availability, and Confidentiality Trust Services Criteria verified by independent auditor.
            </p>
          </div>

          <div className="p-6 bg-[#121A2B] border border-[#1F2A3F]">
            <TrophyIcon className="w-6 h-6 text-[#FFB020] mb-3" />
            <h3 className="font-heading font-bold text-white text-lg">ISO 9001:2015</h3>
            <p className="text-xs text-[#8E9BB0] mt-2">
              Quality Management System covering global hardware staging, lab burn-in, and deployment.
            </p>
          </div>
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
