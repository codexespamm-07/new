import { NextRequest, NextResponse } from "next/server";

// Trap route for scrapers following hidden honeypot links
export async function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "127.0.0.1";

  const userAgent = req.headers.get("user-agent") || "unknown";

  // In production, sync with Cloudflare IP Access Rules / WAF blocklist
  console.warn(`[SECURITY ALERT] Scraping bot trapped at honeypot! IP: ${ip}, UA: ${userAgent}`);

  return new NextResponse(
    JSON.stringify({
      status: "blocked",
      message: "Automated crawler access violation logged. Client address flagged.",
    }),
    {
      status: 403,
      headers: {
        "Content-Type": "application/json",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    }
  );
}
