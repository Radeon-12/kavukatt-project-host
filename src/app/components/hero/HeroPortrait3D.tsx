"use client";

import Image from "next/image";
import { motion, type MotionValue } from "framer-motion";
import { portraitImg } from "@/lib/site-data";

type HeroPortrait3DProps = {
  y?: MotionValue<string>;
};

/**
 * 3D pop-out portrait — blends into church background (no white box).
 * Uses multiply blend to knock out light backgrounds on the warm hero.
 */
export function HeroPortrait3D({ y }: HeroPortrait3DProps) {
  return (
    <motion.div
      style={{ y }}
      className="absolute inset-x-0 bottom-0 z-[6] hidden md:flex justify-center pointer-events-none
        h-[52%] lg:h-[68%] max-h-[520px] lg:max-h-[620px]"
    >
      <div className="relative h-full w-[min(72vw,280px)] lg:w-[min(38vw,400px)]">
        {/* Ground shadow */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-12 rounded-[100%] blur-2xl opacity-40"
          style={{ background: "radial-gradient(ellipse, rgba(43,22,6,0.55) 0%, transparent 70%)" }}
        />

        {/* Rim-light halo */}
        <div
          className="absolute inset-[-5%] opacity-50 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, rgba(255,230,160,0.55) 0%, rgba(240,200,100,0.15) 50%, transparent 72%)",
          }}
        />

        {/* Portrait figure — elliptical mask hides rectangular bg edges */}
        <div
          className="relative h-full w-full"
          style={{
            filter: "drop-shadow(0 22px 44px rgba(43,22,6,0.28))",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 90% at 50% 44%, black 50%, transparent 96%), linear-gradient(to bottom, black 65%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 88% 90% at 50% 44%, black 50%, transparent 96%), linear-gradient(to bottom, black 65%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        >
          <Image
            src={portraitImg}
            alt="Mar Mathew Kavukatt"
            fill
            priority
            unoptimized
            className="object-contain object-bottom mix-blend-darken contrast-[1.1] saturate-[1.08] brightness-[1.02]"
            sizes="(max-width: 1024px) 280px, 400px"
          />
        </div>
      </div>
    </motion.div>
  );
}
