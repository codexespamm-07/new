import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name exceeds maximum length")
    .trim(),
  workEmail: z
    .string()
    .email("Please provide a valid corporate work email")
    .refine((email) => {
      // Reject public personal webmail domains for B2B enterprise tier requests
      const personalDomains = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "outlook.com",
        "icloud.com",
        "aol.com",
        "mail.com",
      ];
      const domain = email.split("@")[1]?.toLowerCase();
      return !personalDomains.includes(domain);
    }, "Please provide an enterprise business email address"),
  country: z.string().min(2, "Please select your primary deployment country"),
  requirement: z.enum([
    "network-refresh",
    "sdwan-sase",
    "cybersecurity-soc",
    "cloud-migration",
    "ai-datacenter",
    "managed-noc",
    "general-rfp",
  ]),
  message: z
    .string()
    .min(10, "Please provide brief details regarding your project scope")
    .max(2000, "Message length exceeded"),
  honeypot: z.string().max(0, "Automated submission detected"), // Anti-bot honeypot
  formTimestamp: z.number(), // Time-to-submit verification
  turnstileToken: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
