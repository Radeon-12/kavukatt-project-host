import Image from "next/image";
import {
  HERO_CHURCH_BG,
  HERO_CHURCH_HEIGHT,
  HERO_CHURCH_WIDTH,
  churchBgFill,
  heroChurchBgImageClass,
} from "@/lib/hero-collage";

/**
 * Fixed full-page church painting — full panoramic image at top,
 * warm tone continues below for the rest of the homepage.
 */
export function ChurchThemeBackground() {
  const paintingHeight = `calc(100vw * ${HERO_CHURCH_HEIGHT} / ${HERO_CHURCH_WIDTH})`;

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: churchBgFill }}
      aria-hidden
    >
      {/* Full uncropped church painting — entire width */}
      <div
        className="absolute inset-x-0 top-0 w-full"
        style={{ height: paintingHeight }}
      >
        <Image
          src={HERO_CHURCH_BG}
          alt=""
          fill
          priority
          className={heroChurchBgImageClass}
          sizes="100vw"
        />
      </div>

      {/* Seamless warm continuation below the painting */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          top: paintingHeight,
          background: `
            linear-gradient(
              180deg,
              rgba(200, 150, 88, 0.5) 0%,
              rgba(220, 180, 120, 0.75) 35%,
              rgba(232, 196, 130, 0.85) 100%
            )
          `,
        }}
      />

      {/* Light readability wash — keeps church visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(255, 249, 238, 0.12) 0%,
              rgba(255, 249, 238, 0.22) 45%,
              rgba(255, 244, 220, 0.32) 100%
            )
          `,
        }}
      />
    </div>
  );
}

/** Semi-transparent panel for section content cards */
export const sectionPanelClass =
  "bg-[#FFFDF7]/88 backdrop-blur-sm border border-[#D4AF37]/35 shadow-[0_8px_32px_rgba(43,22,6,0.08)]";
