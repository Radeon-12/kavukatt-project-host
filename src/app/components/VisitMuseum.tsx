"use client";

import { Calendar, Church, Clock, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/site-data";
import { heroChurchTheme, lifeLegacySectionBackground } from "@/lib/hero-theme";
import { LegacyOrnateFlourish } from "./legacy/LegacyParchmentFrame";

const { maroon, textBody, gold } = heroChurchTheme;

function VisitIconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0">
      <div
        className="absolute inset-0 rounded-full blur-md opacity-35"
        style={{ background: "radial-gradient(circle, #F4C86A 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative w-11 h-11 rounded-full p-[2px] border-2 border-[#D4AF37]/85 shadow-[0_4px_12px_rgba(184,121,16,0.28)]">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFFDF5] via-[#F8E4A8] to-[#C8941A] flex items-center justify-center text-[#6D1414]">
          {children}
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="group relative rounded-2xl p-[3px] h-full transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        background: `linear-gradient(145deg, ${gold} 0%, #F0D060 50%, #B8860B 100%)`,
        boxShadow: "0 12px 32px rgba(43, 22, 6, 0.1)",
      }}
    >
      <div className="relative rounded-[14px] bg-[#FFFDF8] p-6 sm:p-7 h-full border border-[#D4AF37]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
        <div className="absolute inset-2 rounded-xl border border-[#D4AF37]/12 pointer-events-none" aria-hidden />

        <div className="relative flex items-center gap-3.5 mb-4">
          <VisitIconBadge>{icon}</VisitIconBadge>
          <h3
            className="font-playfair font-bold text-lg sm:text-xl leading-tight"
            style={{ color: maroon }}
          >
            {title}
          </h3>
        </div>

        <LegacyOrnateFlourish className="mb-5 opacity-75" />

        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

function ScheduleBox({
  days,
  hours,
}: {
  days: string;
  hours: string;
}) {
  return (
    <div className="flex gap-3.5 p-4 sm:p-5 rounded-xl border border-[#E8D4A8]/90 bg-gradient-to-br from-[#FFFDF5] to-[#FFF3D6]/90 shadow-[0_2px_10px_rgba(43,22,6,0.04)] transition-colors hover:border-[#D4AF37]/50">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFF8E7] to-[#F0D878] border border-[#D4AF37]/35 flex items-center justify-center shrink-0 shadow-inner">
        <Calendar size={16} className="text-[#B87910]" strokeWidth={2.25} />
      </div>
      <div className="min-w-0">
        <p className="font-lora text-sm font-semibold text-[#2B1606] leading-snug">{days}</p>
        <p className="font-lora text-sm mt-1.5 font-medium" style={{ color: maroon }}>
          {hours}
        </p>
      </div>
    </div>
  );
}

function ServiceRow({
  num,
  service,
  time,
}: {
  num: number;
  service: string;
  time: string;
}) {
  return (
    <li className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-[#FFFDF5] to-[#FFF8EA]/80 border border-[#E8D4A8]/70 shadow-[0_1px_6px_rgba(43,22,6,0.04)] transition-all hover:border-[#D4AF37]/45 hover:shadow-[0_4px_14px_rgba(184,121,16,0.1)]">
      <span
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-cinzel font-bold shrink-0 shadow-[0_2px_8px_rgba(109,20,20,0.35)] ring-2 ring-[#D4AF37]/30"
        style={{ background: `linear-gradient(145deg, ${maroon} 0%, #8B1A1A 100%)` }}
      >
        {num}
      </span>
      <span className="font-lora text-sm text-[#2B1606] flex-1 leading-snug">{service}</span>
      <span
        className="font-cinzel text-[0.72rem] sm:text-xs font-bold tracking-wide shrink-0 tabular-nums px-2.5 py-1 rounded-md bg-[#FFF3D6]/80 border border-[#D4AF37]/25"
        style={{ color: maroon }}
      >
        {time}
      </span>
    </li>
  );
}

export function VisitMuseum() {
  const { officeHours, tombServices, museumAddress, mapsUrl, mapsEmbed } =
    contactInfo;

  return (
    <section id="visit" className="scroll-mt-28">
      <div style={{ background: lifeLegacySectionBackground }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-11">
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-3 text-center lg:text-left mb-8 sm:mb-9">
            <h2
              className="font-playfair font-bold text-[2rem] sm:text-[2.35rem] lg:text-[2.5rem] leading-tight"
              style={{ color: maroon }}
            >
              Visit Us
            </h2>
            <LegacyOrnateFlourish className="w-36 mx-auto lg:mx-0 opacity-80" />
            <p
              className="font-lora text-[0.9375rem] sm:text-base leading-[1.85]"
              style={{ color: textBody }}
            >
              We welcome you to the sacred places associated with the life and
              mission of Mar Mathew Kavukatt. Plan your visit to the tomb and
              museum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <InfoCard icon={<Clock size={20} strokeWidth={2.25} />} title="Office Hours">
              <div className="space-y-3.5">
                {officeHours.map((slot) => (
                  <ScheduleBox
                    key={slot.days}
                    days={slot.days}
                    hours={slot.hours}
                  />
                ))}
              </div>
            </InfoCard>

            <InfoCard icon={<Church size={20} strokeWidth={2.25} />} title="Services At Tomb [Thursday]">
              <ul className="space-y-2.5">
                {tombServices.map(({ num, service, time }) => (
                  <ServiceRow key={num} num={num} service={service} time={time} />
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </div>

      {/* Museum & map — burgundy panel */}
      <div
        className="relative py-8 sm:py-10 lg:py-11 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #5C1818 0%, #4A1212 45%, #3D0E0E 100%)",
        }}
      >
        <div
          className="absolute inset-2 sm:inset-3 border border-[#D4AF37]/25 pointer-events-none rounded-sm"
          aria-hidden
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(300px,420px)] gap-8 lg:gap-10 items-center">
            <div className="space-y-5">
              <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#FFF4D2] text-center lg:text-left">
                Mar Mathew Kavukatt Museum
              </h3>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <MapPin
                  size={24}
                  className="text-[#D4AF37] shrink-0 mt-0.5"
                  strokeWidth={2.25}
                />
                <div className="space-y-1">
                  {museumAddress.lines.map((line) => (
                    <p
                      key={line}
                      className="font-lora text-[#FFF4D2]/95 text-[0.9375rem] sm:text-base leading-snug"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-[0_10px_32px_rgba(0,0,0,0.3)] h-[210px] sm:h-[230px] bg-[#2B1606]">
                <iframe
                  title="Mar Mathew Kavukatt Museum location"
                  src={mapsEmbed}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-md bg-gradient-to-b from-[#E8C547] via-[#D4AF37] to-[#B8891A] text-[#2B1606] font-cinzel font-bold text-[0.68rem] sm:text-xs uppercase tracking-wider border border-[#F0D060] shadow-[0_4px_14px_rgba(184,121,16,0.35)] hover:brightness-105 transition-all"
              >
                <MapPin size={15} className="text-[#6D1414]" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
