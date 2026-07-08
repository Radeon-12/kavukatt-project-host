"use client";

import Image from "next/image";
import { legacyPortraitImg } from "@/lib/site-data";
import { heroChurchTheme } from "@/lib/hero-theme";
import { LegacyOrnateFlourish } from "./legacy/LegacyParchmentFrame";
import {
  FaithIcon,
  PastorIcon,
  LeaderIcon,
  LegacyIcon,
  LegacyIconBadge,
} from "./LegacyAttributeIcons";

const { maroon, textBody, gold } = heroChurchTheme;

const attributes = [
  {
    title: "Deep Faith",
    desc: "A man of profound prayer and devotion, who trusted God in every step.",
    icon: <FaithIcon />,
  },
  {
    title: "Compassionate Pastor",
    desc: "He carried the burdens of the people and walked with the poor and needy.",
    icon: <PastorIcon />,
  },
  {
    title: "Visionary Leader",
    desc: "He guided the Church with courage, wisdom, and discernment.",
    icon: <LeaderIcon />,
  },
  {
    title: "Enduring Legacy",
    desc: "His mission and values continue to inspire and transform lives.",
    icon: <LegacyIcon />,
  },
];

function GoldCross({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <path fill={gold} d="M7 1h2v5h5v2H9v7H7V8H2V6h5V1z" />
    </svg>
  );
}

function SectionLabel() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-2">
      <GoldCross className="w-4 h-4 opacity-90" />
      <div className="flex items-center gap-2 sm:gap-3">
        <LegacyOrnateFlourish className="w-16 sm:w-20" />
        <span className="font-cinzel text-[0.62rem] sm:text-[0.68rem] tracking-[0.32em] font-bold uppercase text-[#B87910] whitespace-nowrap">
          Life &amp; Legacy
        </span>
        <LegacyOrnateFlourish className="w-16 sm:w-20" />
      </div>
    </div>
  );
}

function LegacyHaloPortrait() {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] mx-auto lg:mx-0">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-[#D4AF37]/35 shadow-[0_14px_44px_rgba(43,22,6,0.14)]">
        <Image
          src={legacyPortraitImg}
          alt="Mar Mathew Kavukatt — Servant of God"
          fill
          unoptimized
          className="object-cover object-[center_12%] scale-[1.02]"
          priority
          sizes="(max-width: 640px) 360px, (max-width: 1024px) 420px, 480px"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 252, 245, 0.55) 0%, transparent 100%)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function DropCapParagraph({
  letter,
  children,
}: {
  letter: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 sm:gap-3.5">
      <span
        className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-[#D4AF37]/80 bg-gradient-to-br from-[#FFFDF5] to-[#F5E4A8] font-playfair text-2xl sm:text-[1.75rem] font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
        style={{ color: maroon }}
        aria-hidden
      >
        {letter}
      </span>
      <p
        className="font-lora text-[0.9375rem] sm:text-base leading-[1.85] text-justify pt-0.5"
        style={{ color: textBody }}
      >
        {children}
      </p>
    </div>
  );
}

function LegacyAttributeCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-xl bg-[#FFFDF8]/95 border border-[#E8D4A8]/70 shadow-[0_4px_18px_rgba(43,22,6,0.07),inset_0_1px_0_rgba(255,255,255,0.8)]">
      <LegacyIconBadge>{icon}</LegacyIconBadge>
      <div className="flex-1 min-w-0 pt-0.5">
        <h4 className="font-cinzel font-bold text-[0.72rem] sm:text-[0.76rem] text-[#6D1414] uppercase tracking-[0.12em] mb-1.5">
          {title}
        </h4>
        <p className="font-lora text-[#5C4A32] text-[0.82rem] sm:text-[0.88rem] leading-relaxed">
          {desc}
        </p>
        <LegacyOrnateFlourish className="mt-3 w-24 opacity-70" />
      </div>
    </div>
  );
}

export function LifeLegacyHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,1.1fr)_1.05fr_minmax(240px,1fr)] gap-8 lg:gap-8 xl:gap-10 items-start">
      <div className="order-2 lg:order-1 lg:pt-4">
        <LegacyHaloPortrait />
      </div>

      <div className="order-1 lg:order-2 space-y-4 sm:space-y-5 text-center lg:text-left">
        <SectionLabel />

        <h2
          className="font-playfair font-bold text-[1.55rem] sm:text-[1.75rem] lg:text-[1.95rem] xl:text-[2.05rem] leading-snug"
          style={{ color: maroon }}
        >
          A Shepherd. A Leader.
          <br />
          A Saintly Soul.
        </h2>

        <LegacyOrnateFlourish className="w-36 mx-auto lg:mx-0" />

        <div className="space-y-4 sm:space-y-5 pt-1">
          <DropCapParagraph letter="M">
            ar Mathew Kavukatt was a devoted servant of God, a respected leader,
            and a compassionate pastor who dedicated his entire life to the
            service of the Church and the people.
          </DropCapParagraph>

          <p
            className="font-lora text-[0.9375rem] sm:text-base leading-[1.85] text-justify"
            style={{ color: textBody }}
          >
            He was known for his humility, wisdom, and unwavering faith. Through
            his leadership, communities were strengthened, lives were touched, and
            faith was deepened.
          </p>

          <LegacyOrnateFlourish className="w-28 mx-auto lg:mx-0 opacity-80" />

          <p className="font-playfair italic text-[0.9375rem] sm:text-[1.02rem] leading-relaxed text-[#6D1414]/90">
            His life stands as a shining example of selfless love, justice, and
            service.
          </p>
        </div>
      </div>

      <div className="order-3 space-y-4 sm:space-y-5 lg:pt-6">
        {attributes.map((attr) => (
          <LegacyAttributeCard
            key={attr.title}
            title={attr.title}
            desc={attr.desc}
            icon={attr.icon}
          />
        ))}
      </div>
    </div>
  );
}
