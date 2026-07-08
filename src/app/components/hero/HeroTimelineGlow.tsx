"use client";

const milestones = [
  { year: "1904", label: "Birth Year" },
  { year: "1956", label: "First Archbishop" },
  { year: "1969", label: "Entered Eternal Life" },
];

/** Glowing timeline strip at the bottom of the hero */
export function HeroTimelineGlow() {
  return (
    <div className="relative py-10 px-4">
      <div className="max-w-3xl mx-auto relative">
        {/* Sparkle particles along the line */}
        <div className="absolute left-[8%] right-[8%] top-[7px] flex justify-between pointer-events-none" aria-hidden>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <span
              key={i}
              className="w-1 h-1 rounded-full bg-[#F0D060] opacity-60 animate-[glow-pulse_2.5s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </div>

        {/* Reflection underneath */}
        <div
          className="absolute left-[8%] right-[8%] top-[calc(50%+18px)] h-8 blur-lg opacity-35 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.55) 30%, rgba(240,208,96,0.7) 50%, rgba(212,175,55,0.55) 70%, transparent)",
          }}
        />

        {/* Glow line */}
        <div className="relative h-[2px] mx-[8%]">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37 15%, #F0D060 50%, #D4AF37 85%, transparent)",
              boxShadow:
                "0 0 14px 3px rgba(240, 208, 96, 0.55), 0 0 28px 6px rgba(212, 175, 55, 0.3)",
            }}
          />
        </div>

        {/* Milestone points */}
        <div className="relative flex justify-between mx-[6%] sm:mx-[8%] -mt-[7px]">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex flex-col items-center gap-1.5 sm:gap-2 group">
              <div className="relative">
                <div
                  className="absolute inset-0 scale-[2.8] rounded-full bg-[#F0D060] opacity-35 blur-md animate-[glow-pulse_3s_ease-in-out_infinite]"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#F0D060] bg-[#D4AF37] shadow-[0_0_12px_4px_rgba(240,208,96,0.65)]" />
              </div>
              <span className="font-cinzel font-bold text-[#B87910] text-sm sm:text-lg tracking-wider drop-shadow-[0_1px_3px_rgba(255,240,210,0.9)]">
                {m.year}
              </span>
              <span className="font-lora text-[#5C4030] text-[0.6rem] sm:text-xs text-center max-w-[90px] sm:max-w-none leading-snug drop-shadow-[0_1px_2px_rgba(255,240,210,0.7)]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
