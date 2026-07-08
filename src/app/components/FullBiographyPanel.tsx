import { biographyParagraphs } from "@/lib/site-data";
import { heroChurchTheme } from "@/lib/hero-theme";

const { textBody } = heroChurchTheme;

export function FullBiographyPanel() {
  const midpoint = Math.ceil(biographyParagraphs.length / 2);
  const leftColumn = biographyParagraphs.slice(0, midpoint);
  const rightColumn = biographyParagraphs.slice(midpoint);

  return (
    <div id="full-biography" className="scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
        <div className="space-y-5 font-lora text-[0.9375rem] sm:text-base leading-[1.85]">
          {leftColumn.map((paragraph, i) => (
            <p key={i} className="text-justify" style={{ color: textBody }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative space-y-5 font-lora text-[0.9375rem] sm:text-base leading-[1.85]">
          <div className="hidden lg:block absolute -left-5 xl:-left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/45 to-transparent" />
          {rightColumn.map((paragraph, i) => (
            <p key={i} className="text-justify" style={{ color: textBody }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
