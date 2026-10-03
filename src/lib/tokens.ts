/**
 * Innovia Edge Global Technologies - Design System Tokens
 * Engineered for CIOs, CISOs, and enterprise IT leaders.
 * Tone: Calm, authoritative, disciplined, engineering-led.
 * Avoids consumer "AI startup" glow or saturation.
 */

export const colors = {
  ink: "#070B14",             // Deep Obsidian Navy
  deepSlate: "#0D1424",       // Technical Chassis Panel
  panelCard: "#121C30",       // Elevation Card Surface
  borderDark: "#1E2B45",      // 1px Precision Wireframe Border
  paper: "#F6F5F2",           // Architectural Parchment Light
  paperCard: "#ECEAE4",       // Warm Card Contrast
  textOnLight: "#0B1220",     // Carbon Black Header/Text
  textMutedLight: "#4D5768",  // Editorial Muted Body
  signalBlue: "#1D58D8",      // Enterprise Cobalt Blue (Trustworthy, deliberate)
  secureTeal: "#0D9488",      // NIST Standard Verifiable Teal
  alertAmber: "#D97706",      // Industrial Alert Amber
  white: "#FFFFFF",
  mutedDark: "#8895A7",       // Subdued Technical Readout Grey
} as const;

export const fonts = {
  heading: "var(--font-bricolage)",
  body: "var(--font-inter-tight)",
  mono: "var(--font-jetbrains-mono)",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
