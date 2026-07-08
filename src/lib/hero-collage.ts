/** Church painting dimensions — keep in sync with hero-church-bg.png */
export const HERO_CHURCH_WIDTH = 927;
export const HERO_CHURCH_HEIGHT = 638;

/** Hero: full uncropped panorama (container matches image aspect ratio) */
export const heroChurchBgImageClass =
  "object-cover object-center brightness-[1.02] saturate-[104%]";

/** Warm fill below the painting and behind letterboxing */
export const churchBgFill = "#C89658";

/** Site-wide background below hero — soft crop is fine */
export const churchBgImageClass =
  "object-cover object-[50%_38%] sm:object-[50%_32%] brightness-[1.02] saturate-[104%] scale-[0.78] sm:scale-[0.86] md:scale-[0.88] origin-[50%_32%]";

/** Full-width hero church background (panoramic painting) */
export const HERO_CHURCH_BG = "/images/hero-church-painting.png";

/** Sepia church crop extracted from the approved homepage mockup */
export const HERO_MOCKUP_CHURCH = "/images/hero-mockup-church.png";

/** Hero background — golden sky + grotto + path + full church (no baked UI) */
export const HERO_SCENE_CLEAN = "/images/hero-scene-clean.jpg";

/** Primary hero scenery — golden sky, grotto, church (clean, no UI) */
export const HERO_MOCKUP_SCENE = "/images/hero-mockup-scene-only.png";

/** Clean scenery from mockup — wide panorama, pale sky variant */
export const HERO_MOCKUP_SCENERY = "/images/hero-mockup-scenery.png";

/** Full-width hero band from approved mockup (church + grotto + sky) */
export const HERO_MOCKUP_HERO_BG = "/images/hero-mockup-hero-bg.png";

/** Church scene only — no baked-in mockup text or buttons */
export const HERO_MOCKUP_SCENE_ONLY = "/images/hero-mockup-scene-only.png";

/** 3D cinematic hero — clean full church scene (no baked UI) */
export const HERO_3D_FULL_SCENE = "/images/hero-3d-full-scene.jpg";
export const HERO_3D_MOCKUP = "/images/hero-3d-mockup.png";

/** Church band height when full viewport width; centred vertically in hero bg */
export const churchPaintingHeight = `calc(100vw * ${HERO_CHURCH_HEIGHT} / ${HERO_CHURCH_WIDTH})`;
export const churchBandTop = `calc(50% - (${churchPaintingHeight}) / 2)`;

/** White dove — user-provided asset (476×336) */
export const HERO_DOVE_SOURCE = "/images/hero-dove-source.png";
export const HERO_DOVE = "/images/hero-dove.png";
export const HERO_DOVE_WIDTH = 476;
export const HERO_DOVE_HEIGHT = 336;

/** Hero collage grid: top row 50/50, bottom row ~67/33 */
export const HERO_COLLAGE = "/images/hero-collage.png";

export const collageSlices = {
  portrait: { left: 0, top: 0, width: 0.5, height: 0.5 },
  crest: { left: 0.5, top: 0, width: 0.5, height: 0.5 },
  church: { left: 0, top: 0.5, width: 0.667, height: 0.5 },
  /** Full dove panel from the hero collage */
  dove: { left: 0.667, top: 0.5, width: 0.333, height: 0.5 },
} as const;

export type CollageSliceRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};
