"use client";

/** Divine sunbeams from top-left */
export function HeroLightRays() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden>
      {/* Primary rays */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            conic-gradient(
              from 220deg at 0% -10%,
              transparent 0deg,
              rgba(255, 235, 170, 0.35) 8deg,
              transparent 18deg,
              rgba(255, 220, 140, 0.22) 28deg,
              transparent 38deg,
              rgba(255, 230, 160, 0.18) 48deg,
              transparent 58deg,
              rgba(255, 215, 120, 0.12) 68deg,
              transparent 80deg
            )
          `,
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 0% 0%, rgba(255, 240, 200, 0.55) 0%, rgba(255, 220, 150, 0.15) 40%, transparent 65%)",
        }}
      />
    </div>
  );
}
