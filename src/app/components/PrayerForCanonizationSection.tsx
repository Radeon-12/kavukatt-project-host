import Image from "next/image";
import { canonizationPrayer, canonizationShrineImg } from "@/lib/site-data";
import { PrayerDownloadButton } from "./PrayerDownloadButton";
import { heroChurchTheme, lifeLegacySectionBackground } from "@/lib/hero-theme";
import {
  LegacyOrnateFlourish,
  LegacyParchmentFrame,
} from "./legacy/LegacyParchmentFrame";

const { maroon, textBody } = heroChurchTheme;

function ShrinePortrait() {
  return (
    <div className="relative w-[300px] sm:w-[340px] lg:w-[380px] mx-auto lg:mx-0 shrink-0">
      <div
        className="relative overflow-hidden rounded-[16px] border-2 border-[#D4AF37]/55 shadow-[0_20px_48px_rgba(43,22,6,0.18)]"
        style={{
          background: "linear-gradient(180deg, #FAF6EE 0%, #F0E8DC 100%)",
        }}
      >
        <div className="absolute inset-[5px] rounded-[12px] border border-[#D4AF37]/20 pointer-events-none z-10" />
        <Image
          src={canonizationShrineImg}
          alt="Mar Mathew Kavukatt — Servant of God"
          width={428}
          height={640}
          unoptimized
          className="w-full h-auto block"
          sizes="(max-width: 640px) 300px, 380px"
          priority
        />
      </div>
    </div>
  );
}

export function PrayerForCanonizationSection() {
  const { title, subtitle, paragraphs, amen, closing } = canonizationPrayer;

  return (
    <div className="relative" style={{ background: lifeLegacySectionBackground }}>
      <section
        id="prayer-for-canonization"
        className="relative py-10 sm:py-14 lg:py-16 scroll-mt-28"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegacyParchmentFrame>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-12 xl:gap-16 items-start">
              <ShrinePortrait />

              <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <LegacyOrnateFlourish className="w-28 mx-auto lg:mx-0 mb-4 opacity-80" />

                <h2
                  className="font-playfair font-bold text-[1.65rem] sm:text-[1.85rem] lg:text-[2rem] leading-tight mb-3"
                  style={{ color: maroon }}
                >
                  {title}
                </h2>

                <div className="flex justify-center lg:justify-start mb-4">
                  <span className="text-[#D4AF37] text-sm">✝</span>
                </div>

                <p
                  className="font-lora text-sm sm:text-[0.94rem] italic leading-relaxed mb-8"
                  style={{ color: textBody }}
                >
                  {subtitle}
                </p>

                <div className="space-y-4 sm:space-y-5 font-lora text-sm sm:text-[0.94rem] leading-[1.9] text-justify mb-8">
                  {paragraphs.map((paragraph, i) => (
                    <p key={i} style={{ color: textBody }}>
                      {paragraph}
                    </p>
                  ))}
                  <p
                    className="text-center font-semibold pt-1"
                    style={{ color: maroon }}
                  >
                    {amen}
                  </p>
                  <p className="text-center text-[0.82rem] text-[#5C4A32] tracking-wide">
                    {closing}
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <PrayerDownloadButton />
                </div>
              </div>
            </div>
          </LegacyParchmentFrame>
        </div>
      </section>
    </div>
  );
}
