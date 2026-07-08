import { HERO_SCENE_CLEAN } from "@/lib/hero-collage";

/**
 * Hero background — natural warm tones, professional clarity (not over-saturated).
 */
export function HeroChurchBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#FAF6EE]" />

      {/* Full bleed scene — natural colour, light warm lift only */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-[position:50%_88%] sm:bg-[position:52%_86%] lg:bg-[position:52%_84%]"
        style={{
          backgroundImage: `url("${HERO_SCENE_CLEAN}")`,
          filter: "saturate(1.06) brightness(1.04) contrast(1.02)",
        }}
      />

      {/* Subtle sky warmth — avoids heavy yellow wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, rgba(255, 250, 240, 0.22) 0%, transparent 45%),
            radial-gradient(ellipse 80% 50% at 58% 6%, rgba(255, 235, 200, 0.18) 0%, transparent 55%)
          `,
        }}
      />

      {/* Clean left readability panel — soft cream, not orange */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(255, 252, 246, 0.78) 0%,
              rgba(255, 249, 240, 0.42) 18%,
              rgba(255, 246, 235, 0.12) 30%,
              transparent 42%
            )
          `,
        }}
      />

      {/* Gentle depth vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(43, 22, 6, 0.06) 100%)",
        }}
      />
    </div>
  );
}
