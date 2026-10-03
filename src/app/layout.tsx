import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CookieConsent } from "@/components/ui/cookie-consent";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Innovia Edge Global Technologies | Enterprise IT Infrastructure Integrator",
  description:
    "We architect, deploy, and run networking, SD-WAN/SASE, cybersecurity, cloud, and managed services across 20+ countries with 60+ OEM partners.",
  keywords: [
    "Enterprise IT Infrastructure",
    "SD-WAN",
    "SASE",
    "Cybersecurity Integrator",
    "Multi-cloud Landing Zones",
    "Managed NOC SOC",
    "Global IT Deployment",
  ],
  authors: [{ name: "Innovia Edge Global Technologies" }],
  creator: "Innovia Edge Global Technologies",
  publisher: "Innovia Edge Global Technologies",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "noimageindex": false,
    },
  },
  other: {
    "robots": "noai, noimageai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://innoviaedge.com",
    siteName: "Innovia Edge Global Technologies",
    title: "Innovia Edge Global Technologies | Enterprise IT Infrastructure Integrator",
    description:
      "Architecting, deploying, and operating mission-critical network, security, and cloud infrastructure across 20+ countries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovia Edge Global Technologies",
    description: "Enterprise IT Infrastructure Integrator for Global Enterprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured organization schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Innovia Edge Global Technologies",
    url: "https://innoviaedge.com",
    logo: "https://innoviaedge.com/logo.svg",
    description:
      "Enterprise IT infrastructure integrator delivering networking, SD-WAN/SASE, cybersecurity, cloud and managed services across 20+ countries.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Solutions Architecture",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/innoviaedge",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0F1A] text-[#F5F3EE] selection:bg-[#2F6BFF] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2F6BFF] focus:text-white focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
