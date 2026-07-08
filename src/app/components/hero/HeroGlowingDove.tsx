import {
  churchBandTop,
  HERO_DOVE,
  HERO_DOVE_HEIGHT,
  HERO_DOVE_WIDTH,
} from "@/lib/hero-collage";

/** Static dove — positioned in the sky band above the centred church painting */
export function HeroGlowingDove() {
  return (
    <div
      className="fixed inset-x-0 z-[9] pointer-events-none"
      style={{ top: 0, height: churchBandTop }}
      aria-hidden
    >
      <img
        src={`${HERO_DOVE}?v=4`}
        alt=""
        draggable={false}
        className="absolute object-contain select-none"
        style={{
          bottom: "8%",
          left: "20%",
          width: "clamp(120px, 16vw, 240px)",
          aspectRatio: `${HERO_DOVE_WIDTH} / ${HERO_DOVE_HEIGHT}`,
          filter:
            "brightness(1.06) contrast(1.08) drop-shadow(0 2px 6px rgba(62,39,20,0.25))",
        }}
      />
    </div>
  );
}
