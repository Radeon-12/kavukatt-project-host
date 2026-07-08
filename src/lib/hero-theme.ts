/**
 * Hero palette — derived from the Kerala church painting.
 */
export const heroChurchTheme = {
  gold: "#D4AF37",
  goldLight: "#F0D060",
  goldDark: "#B8860B",
  maroon: "#6D1414",
  /** Warm cream from church walls — never stark white */
  cream: "#F5EBD0",
  creamGlass: "rgba(232, 200, 140, 0.32)",
  creamGlassLight: "rgba(240, 210, 160, 0.22)",
  parchment: "linear-gradient(145deg, rgba(245, 228, 195, 0.42) 0%, rgba(225, 195, 145, 0.32) 100%)",
  textDark: "#2B1606",
  textBody: "#3D2E1A",
  bronze: "#3D2510",
  terracotta: "#B25B32",
  amber: "#E8A040",
  warmShadow: "rgba(62, 39, 35, 0.15)",
} as const;

export const heroGradients = {
  /** Left wash only — keeps center clear for portrait */
  skyLeft: `
    linear-gradient(
      105deg,
      rgba(232, 196, 130, 0.42) 0%,
      rgba(240, 210, 160, 0.22) 22%,
      rgba(255, 220, 150, 0.06) 36%,
      transparent 46%
    )
  `,
  sunRays: `
    conic-gradient(from 225deg at 8% -5%, transparent 0deg, rgba(255,220,140,0.22) 12deg, transparent 26deg, rgba(255,200,100,0.14) 40deg, transparent 54deg),
    radial-gradient(ellipse 65% 45% at 5% 0%, rgba(255,215,120,0.35) 0%, transparent 58%)
  `,
  titleText: `linear-gradient(135deg, #9A7112 0%, #D4AF37 38%, #F0D060 58%, #C8941A 82%, #8B6914 100%)`,
  /** Brighter title for glass hero panel */
  titleTextBright: `linear-gradient(135deg, #C8941A 0%, #F0D060 32%, #FFE890 52%, #F5C840 72%, #D4AF37 100%)`,
  ctaButton: "linear-gradient(to right, #3D2510, #5C3A18, #4A2E12)",
  ctaArrow: "linear-gradient(to bottom right, #F0D060, #C8941A)",
  bottomFade: "linear-gradient(to top, rgba(232, 196, 130, 0.55) 0%, rgba(240, 210, 160, 0.2) 45%, transparent 100%)",
  topFade: "linear-gradient(to bottom, rgba(240, 210, 160, 0.4) 0%, transparent 100%)",
  /** Extended sky above the church painting */
  churchSky: `
    linear-gradient(
      180deg,
      #FBF0D0 0%,
      #F5E4A8 18%,
      #EDCF78 45%,
      #E2BC62 72%,
      #D4A850 100%
    )
  `,
  /** Extended courtyard ground below the church painting */
  churchGround: `
    linear-gradient(
      180deg,
      #C89658 0%,
      #BF8A4C 25%,
      #B58044 55%,
      #A8743C 100%
    )
  `,
  /** Life & Legacy section — warm gold only, no church painting */
  lifeLegacyBg: `
    linear-gradient(
      180deg,
      #FBF0D0 0%,
      #F5E4A8 22%,
      #F0DC88 48%,
      #EDCF78 72%,
      #E8C878 100%
    )
  `,
} as const;

/** Shared warm gold page background for Life & Legacy and Prayer sections */
export const lifeLegacySectionBackground = `
  ${heroGradients.lifeLegacyBg},
  radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,248,220,0.35) 0%, transparent 55%),
  radial-gradient(ellipse 60% 40% at 20% 80%, rgba(200,150,70,0.08) 0%, transparent 50%),
  radial-gradient(ellipse 60% 40% at 80% 60%, rgba(200,150,70,0.06) 0%, transparent 50%)
`;
