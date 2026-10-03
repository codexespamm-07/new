import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

// Simple in-memory rate limiting map for edge demo (IP -> timestamp array)
const rateLimitMap = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 1. IP Rate Limiting: Max 4 submissions per 10 minutes
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const validTimestamps = timestamps.filter((t) => now - t < 10 * 60 * 1000);

    if (validTimestamps.length >= 4) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait a few minutes before submitting again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 2. Anti-bot honeypot check
    if (body.honeypot && body.honeypot.length > 0) {
      // Silently return success to mislead malicious bots
      return NextResponse.json({ success: true, message: "Proposal request received." });
    }

    // 3. Time-to-submit verification (submitting in under 2.5 seconds indicates a headless script)
    if (body.formTimestamp && now - body.formTimestamp < 2500) {
      return NextResponse.json(
        {
          success: false,
          error: "Submission velocity suspicious. Please take a moment to review your inquiry.",
        },
        { status: 400 }
      );
    }

    // 4. Server-side validation via Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: validationResult.error.issues?.[0]?.message || "Validation failed",
        },
        { status: 400 }
      );
    }

    // 5. Cloudflare Turnstile token verification (in production with secret key)
    // const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    // If secret key is present, verify with Cloudflare API endpoint:
    // https://challenges.cloudflare.com/turnstile/v0/siteverify

    // Update IP rate limiter
    validTimestamps.push(now);
    rateLimitMap.set(ip, validTimestamps);

    // Sanitized submission payload
    const { fullName, workEmail, country, requirement, message } = validationResult.data;

    // TODO: Connect to enterprise CRM (Salesforce / HubSpot) or internal ticketing queue
    console.log("[INNOVIA LEAD CAPTURE]", {
      fullName,
      workEmail,
      country,
      requirement,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
      ip,
    });

    return NextResponse.json({
      success: true,
      message: "Architecture proposal request acknowledged. A Lead Architect will respond within 48 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal processing error. Please contact via WhatsApp/phone." },
      { status: 500 }
    );
  }
}
