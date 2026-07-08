"use client";

import Link from "next/link";
import { BookOpen, Cross, HandHeart } from "lucide-react";
import { HeroChurchBackground } from "./HeroChurchBackground";
import { HeroPrayerDownloadButton } from "./PrayerDownloadButton";

const heroBtnBase =
  "inline-flex items-center justify-center gap-1.5 px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-md font-cinzel font-bold text-[0.52rem] sm:text-[0.58rem] uppercase tracking-[0.09em] border transition-all whitespace-nowrap flex-1 min-w-0 text-center";

const heroPrimaryBtn =
  `${heroBtnBase} text-[#FFFBF5] border-[#4A3420]/40 bg-[#5C4028] hover:bg-[#6B4A28] shadow-[0_2px_10px_rgba(43,22,6,0.12)]`;

const heroSecondaryBtn =
  `${heroBtnBase} text-[#3D2E1A] border-[#D4AF37]/35 bg-white/72 backdrop-blur-sm hover:bg-white/88 shadow-[0_2px_8px_rgba(43,22,6,0.06)]`;

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100dvh] flex flex-col overflow-hidden">
      <HeroChurchBackground />

      <div className="relative z-10 min-h-[100dvh] flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[108px] sm:pt-[116px] lg:pt-[120px] pb-12 -translate-y-6 sm:-translate-y-10 lg:-translate-y-12">
          <div className="w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[540px]">
            <div
              className="rounded-xl border border-white/70 bg-white/58 backdrop-blur-lg px-5 py-5 sm:px-6 sm:py-6 shadow-[0_4px_28px_rgba(43,22,6,0.08)]"
              style={{
                boxShadow:
                  "0 4px 28px rgba(43, 22, 6, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.65)",
              }}
            >
              <p className="font-cormorant italic text-[0.92rem] sm:text-[0.98rem] text-[#9A7228] mb-3 tracking-wide text-center sm:text-left">
                — Welcome to the Legacy of —
              </p>

              <h1 className="font-playfair font-bold text-[1.75rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.35rem] leading-[1.12] tracking-[0.03em] uppercase text-[#1F1208] mb-3">
                Mar Mathew Kavukatt
              </h1>

              <p className="font-cinzel font-bold text-[#9A7228] text-[0.62rem] sm:text-[0.68rem] tracking-[0.22em] uppercase mb-2">
                — Servant of God —
              </p>

              <div className="flex items-center gap-2 mb-4 max-w-fit mx-auto sm:mx-0">
                <span className="h-px w-12 sm:w-14 bg-[#C9A962]/70 shrink-0" aria-hidden />
                <Cross className="w-2.5 h-2.5 text-[#9A7228]" strokeWidth={2.5} aria-hidden />
                <span className="h-px w-12 sm:w-14 bg-[#C9A962]/70 shrink-0" aria-hidden />
              </div>

              <p className="font-lora text-[0.86rem] sm:text-[0.92rem] leading-[1.72] text-[#4A3D30] max-w-[440px]">
                A life rooted in faith, love, and service. Discover the inspiring journey
                of Mar Mathew Kavukatt and the enduring impact of his mission.
              </p>
            </div>

            <div className="flex flex-row flex-nowrap items-stretch gap-2 sm:gap-2.5 mt-5 w-full">
              <Link
                href="#life-legacy"
                onClick={(e) => scrollToSection(e, "#life-legacy")}
                className={heroPrimaryBtn}
              >
                <BookOpen className="w-3 h-3 shrink-0" aria-hidden />
                Explore His Life
              </Link>

              <Link
                href="#prayer-for-canonization"
                onClick={(e) => scrollToSection(e, "#prayer-for-canonization")}
                className={heroSecondaryBtn}
              >
                <HandHeart className="w-3 h-3 shrink-0" aria-hidden />
                Join in Prayer
              </Link>

              <HeroPrayerDownloadButton className={heroSecondaryBtn} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
