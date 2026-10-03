# Innovia Edge Global Technologies - Enterprise IT Integrator Redesign

> Engineering-led IT Infrastructure Integrator portal delivering across 20+ countries with 60+ OEM partners. Built for CIOs, CISOs, and enterprise IT leadership.

---

## 1. Stack & Architecture

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom design tokens (`--color-ink`, `--color-paper`, `--color-signal-blue`, etc.)
- **Typography**: Google Fonts via `next/font`:
  - Headings: **Bricolage Grotesque** (weights 500-700, tight tracking, sentence case)
  - Body/UI: **Inter Tight** (400/500)
  - Technical Data & Code: **JetBrains Mono** (small, uppercase with tracking)
- **Motion**:
  - **Framer Motion** (`motion/react`): 60fps GPU-accelerated reveals, magnetic buttons, modal drawer, reactive SASE SVG connectors.
  - **Lenis**: Buttery smooth scroll physics respecting `prefers-reduced-motion`.
  - **GSAP ScrollTrigger**: Pinned horizontally scrolling core services section on desktop, stacked on mobile.
- **Rendering**: Static-first (`○ Static`), edge-ready, optimized images (AVIF/WebP), Lighthouse 90+ mobile target.

---

## 2. Directory Structure

```
inov/
├── public/
│   ├── robots.txt              # Blocks GPTBot, CCBot, ClaudeBot, etc. Allows Googlebot & Bingbot.
│   └── .well-known/
│       └── security.txt        # RFC 9116 compliant security disclosure standard
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts                    # Rate-limited, honeypot-checked, Zod-verified form
│   │   │   └── trap/internal-directory/route.ts    # Honeypot trap route catching & logging crawler IPs
│   │   ├── certifications/page.tsx                 # ISO 27001, SOC 2, ISO 9001 audit details
│   │   ├── privacy/page.tsx                        # Enterprise privacy & telemetry notice
│   │   ├── terms/page.tsx                          # Terms of service & explicit anti-scraping clause
│   │   ├── globals.css                             # CSS variables, fine grain texture, dot grids
│   │   ├── layout.tsx                              # JSON-LD Schema.org, fonts, skip-link, cursor, cookie banner
│   │   ├── page.tsx                                # Main 12-section ordered redesign homepage
│   │   └── sitemap.ts                              # Next.js dynamic sitemap generator
│   ├── components/
│   │   ├── providers/
│   │   │   └── smooth-scroll-provider.tsx          # Lenis smooth scroll provider
│   │   ├── sections/
│   │   │   ├── header.tsx                          # Sticky nav + 3-col mega-menu (Data, Security, AI Trust)
│   │   │   ├── hero.tsx                            # Dark Ink hero + live global network canvas + stats
│   │   │   ├── trust-bar.tsx                       # Certified with marquee of OEM partners
│   │   │   ├── positioning-statement.tsx           # Light Paper section + scroll-linked word highlighting
│   │   │   ├── core-services.tsx                   # GSAP ScrollTrigger pinned horizontal scroller
│   │   │   ├── global-reach.tsx                    # Dotted world map SVG with pulsing delivery hubs
│   │   │   ├── delivery-methodology.tsx            # 5-stage interactive horizontal timeline
│   │   │   ├── why-innovia.tsx                     # 6 editorial numbered rows with thin dividers
│   │   │   ├── partner-ecosystem.tsx               # 60+ OEM categories with animated tabs (layoutId)
│   │   │   ├── proof.tsx                           # Case study cards, testimonial slot (marked TODO)
│   │   │   ├── final-cta.tsx                       # Tailored proposal form with anti-scraping phone reveal
│   │   │   ├── footer.tsx                          # 4 columns, working routes, dynamic copyright year
│   │   │   └── mobile-sticky-cta.tsx               # Bottom sticky CTA bar appearing after 30% scroll
│   │   └── ui/
│   │       ├── animated-counter.tsx                # Viewport-triggered number counter
│   │       ├── button.tsx                          # Magnetic button with arrow slide and press-scale
│   │       ├── cookie-consent.tsx                  # GDPR telemetry and cookie preference bar
│   │       ├── custom-cursor.tsx                   # Desktop-only fine pointer ring
│   │       ├── global-network-canvas.tsx           # Interactive node mesh with teal packet travel
│   │       └── sase-diagram.tsx                    # Interactive SASE/SD-WAN zero-trust architecture diagram
│   ├── lib/
│   │   ├── motion-variants.ts                      # Centralized motion variants & easing rules
│   │   ├── tokens.ts                               # Design system color and font tokens
│   │   ├── utils.ts                                # Tailwind merge utilities
│   │   └── validations.ts                          # Zod schema for corporate contact submissions
│   └── middleware.ts                               # Strict enterprise security headers & X-Robots-Tag
└── next.config.ts                                  # HSTS, CSP, X-Frame-Options, image optimization
```

---

## 3. Anti-Scraping & Enterprise Security Implementation

### In-Code Defenses
1. **No Plain-Text Direct Contacts in HTML**:
   - Phone and WhatsApp channels are hidden behind user interaction / client verification to avoid scraper regex extraction.
2. **Hidden Honeypot Trap Route**:
   - Hidden link placed in `footer.tsx` referencing `/api/trap/internal-directory`.
   - Crawlers that scrape and auto-follow hidden links hit this route, logging their IP and user-agent.
3. **Form Anti-Bot Protections**:
   - **Honeypot Field**: Hidden `hp_field` traps bots that auto-fill inputs.
   - **Submission Velocity Check**: Rejects submissions completed in under 2.5 seconds (bot-speed).
   - **Work Email Filtering**: Rejects generic public webmails (gmail, yahoo, etc.), requiring corporate domains.
   - **IP Rate Limiting**: Max 4 submissions per 10 minutes per IP.
4. **Security Headers**:
   - Configured in `next.config.ts` and `src/middleware.ts`:
     - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
     - `X-Frame-Options: DENY`
     - `X-Content-Type-Options: nosniff`
     - `Referrer-Policy: strict-origin-when-cross-origin`
     - `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
5. **Anti-AI Crawlers & Scraping Directives**:
   - `public/robots.txt` explicitly disallows `GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`, `PerplexityBot`, `Bytespider`, etc., while welcoming indexing search engines (`Googlebot`, `Bingbot`).
   - `meta robots: noai, noimageai` added to `layout.tsx`.
   - `X-Robots-Tag: noindex, nofollow, noai, noimageai` injected on API routes.
6. **Legals & Well-Known Standards**:
   - `public/.well-known/security.txt` RFC 9116 compliant security contact endpoint.
   - `/terms` featuring explicit clauses barring automated model training and commercial scraping.

---

## 4. Production Cloudflare Deployment Checklist

When deploying this site into production behind Cloudflare:

- [ ] **Cloudflare Bot Management / Bot Fight Mode**: Enable Super Bot Fight mode to drop malicious automated scrapers before requests reach the origin.
- [ ] **Turnstile Secret Key**: Add `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY` and `CLOUDFLARE_TURNSTILE_SECRET_KEY` in production environment variables.
- [ ] **WAF Rate Limiting Rule**: Add a rule matching `/api/*` to limit requests to 10 per minute per IP address.
- [ ] **Reverse DNS Verification**: Enable Cloudflare's built-in "Verified Bots" bypass so legitimate search engine crawlers (Googlebot, Bingbot) are never blocked.
- [ ] **Honeypot IP Ban Automation**: Configure a Cloudflare Worker or API call from `/api/trap/*` to automatically add trapped bot IPs into Cloudflare's WAF IP Access Rules with an action of `Block`.
- [ ] **Email DNS Hardening**: Ensure strict SPF (`v=spf1 ... -all`), DKIM, and DMARC (`p=reject`) policies are published for the `innoviaedge.com` root domain.
- [ ] **Zero Trust Tunnel**: Deploy with `cloudflared` tunnel so the origin server does not expose open public ports to the Internet.

---

## 5. Development & Build Verification

```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
