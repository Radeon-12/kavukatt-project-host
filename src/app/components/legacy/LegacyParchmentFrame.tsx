import { heroChurchTheme } from "@/lib/hero-theme";

const { gold } = heroChurchTheme;

export function LegacyOrnateFlourish({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C8941A]/70" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#C8941A] shrink-0" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C8941A]/70" />
    </div>
  );
}

export function LegacyParchmentFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-sm p-[3px]"
      style={{
        background: `linear-gradient(135deg, ${gold} 0%, #F0D060 45%, #B8860B 100%)`,
        boxShadow: "0 16px 48px rgba(43, 22, 6, 0.12)",
      }}
    >
      <div
        className="relative rounded-[2px] p-5 sm:p-8 lg:p-10 xl:p-12 border border-[#D4AF37]/35"
        style={{
          background:
            "linear-gradient(145deg, rgba(255, 252, 245, 0.92) 0%, rgba(245, 228, 195, 0.78) 50%, rgba(235, 210, 165, 0.85) 100%)",
          boxShadow: "inset 0 1px 0 rgba(255, 248, 220, 0.5)",
        }}
      >
        <div className="absolute inset-3 sm:inset-4 border border-[#D4AF37]/25 pointer-events-none rounded-sm" />
        <div className="absolute inset-5 sm:inset-6 border border-[#D4AF37]/15 pointer-events-none rounded-sm" />

        <span className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 text-[#C8941A]/60 font-playfair text-base rotate-180 select-none pointer-events-none" aria-hidden>❧</span>
        <span className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 text-[#C8941A]/60 font-playfair text-base -scale-x-100 rotate-180 select-none pointer-events-none" aria-hidden>❧</span>
        <span className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 text-[#C8941A]/60 font-playfair text-base -scale-y-100 rotate-180 select-none pointer-events-none" aria-hidden>❧</span>
        <span className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 text-[#C8941A]/60 font-playfair text-base scale-[-1] rotate-180 select-none pointer-events-none" aria-hidden>❧</span>

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

export function LegacySectionDivider() {
  return (
    <div className="my-8 sm:my-10 lg:my-12">
      <LegacyOrnateFlourish className="opacity-80" />
    </div>
  );
}
