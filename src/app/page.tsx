import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { PositioningStatement } from "@/components/sections/positioning-statement";
import { CoreServices } from "@/components/sections/core-services";
import { GlobalReach } from "@/components/sections/global-reach";
import { DeliveryMethodology } from "@/components/sections/delivery-methodology";
import { WhyInnovia } from "@/components/sections/why-innovia";
import { PartnerEcosystem } from "@/components/sections/partner-ecosystem";
import { Proof } from "@/components/sections/proof";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCta } from "@/components/sections/mobile-sticky-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 flex flex-col">
        {/* 1. Hero (Dark, Ink) */}
        <Hero />

        {/* 2. Trust Bar (Slow Marquee) */}
        <TrustBar />

        {/* 3. Positioning Statement (Light, Paper) */}
        <PositioningStatement />

        {/* 4. Core Services (Pinned horizontal scroller / GSAP) */}
        <CoreServices />

        {/* 5. Global Reach (Dark, Dotted Map + Hubs) */}
        <GlobalReach />

        {/* 6. Delivery Methodology (Light, Progress Timeline) */}
        <DeliveryMethodology />

        {/* 7. Why Innovia (Light, Editorial List) */}
        <WhyInnovia />

        {/* 8. Partner Ecosystem (Dark, 60+ OEM Tabs) */}
        <PartnerEcosystem />

        {/* 9. Proof & Case Studies (Marked with TODOs) */}
        <Proof />

        {/* 10. Final CTA & Architecture Review Request */}
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
