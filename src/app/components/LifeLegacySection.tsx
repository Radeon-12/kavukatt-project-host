"use client";

import { useEffect } from "react";
import { LifeLegacyHero } from "./LifeLegacyHero";
import { FullBiographyPanel } from "./FullBiographyPanel";
import {
  LegacyParchmentFrame,
  LegacySectionDivider,
} from "./legacy/LegacyParchmentFrame";
import { lifeLegacySectionBackground } from "@/lib/hero-theme";

/**
 * Life & Legacy — single unified parchment page (intro + full biography).
 */
export function LifeLegacySection() {
  useEffect(() => {
    if (window.location.hash !== "#full-biography") return;

    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById("full-biography");
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: "smooth" });
      }, 80);
    });
  }, []);

  return (
    <div
      className="relative"
      style={{ background: lifeLegacySectionBackground }}
    >
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(200, 150, 88, 0.45) 0%, transparent 100%)",
        }}
        aria-hidden
      />

      <section
        id="life-legacy"
        className="relative py-10 sm:py-14 lg:py-16 scroll-mt-28"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegacyParchmentFrame>
            <LifeLegacyHero />
            <LegacySectionDivider />
            <FullBiographyPanel />
          </LegacyParchmentFrame>
        </div>
      </section>
    </div>
  );
}
