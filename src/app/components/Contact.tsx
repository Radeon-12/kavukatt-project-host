"use client";

import Image from "next/image";
import {
  Clock,
  Cross,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  contactInfo,
  contactSectionContent,
  socialLinks,
} from "@/lib/site-data";
import { HERO_CHURCH_BG } from "@/lib/hero-collage";
import { heroChurchTheme, lifeLegacySectionBackground } from "@/lib/hero-theme";
import { LegacyOrnateFlourish } from "./legacy/LegacyParchmentFrame";
import { ContactForm } from "./ContactForm";

const { maroon, textBody, gold } = heroChurchTheme;

function FormCornerFlourish({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute text-[#D4AF37]/70 font-playfair text-lg select-none pointer-events-none ${className}`}
      aria-hidden
    >
      ❧
    </span>
  );
}

function ContactInfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-[#FFFCF4] border border-[#E8D4A8]/90 p-4 sm:p-5 shadow-[0_4px_18px_rgba(43,22,6,0.06)] hover:shadow-[0_8px_24px_rgba(43,22,6,0.1)] transition-shadow h-full">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center mb-3 shadow-[0_3px_10px_rgba(109,20,20,0.35)]"
        style={{ background: `linear-gradient(145deg, ${maroon} 0%, #8B1A1A 100%)` }}
      >
        {icon}
      </div>
      <h3
        className="font-playfair font-bold text-base mb-2"
        style={{ color: maroon }}
      >
        {title}
      </h3>
      <div className="font-lora text-sm leading-relaxed text-[#3D2E1A]">
        {children}
      </div>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const className = "text-white font-cinzel font-bold text-sm";
  switch (name) {
    case "facebook":
      return <span className={className}>f</span>;
    case "instagram":
      return <span className={className}>◎</span>;
    case "youtube":
      return <span className={className}>▶</span>;
    default:
      return null;
  }
}

export function Contact({
  onOpenPrayerRequest,
}: {
  onOpenPrayerRequest?: () => void;
}) {
  return (
    <section id="contact" className="scroll-mt-28">
      <div style={{ background: lifeLegacySectionBackground }}>
        {/* Header + form + cards — single compact block */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src={HERO_CHURCH_BG}
              alt=""
              aria-hidden
              fill
              className="object-cover object-left-top opacity-[0.1] sepia-[20%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBF0D0]/92 via-[#F5E4A8]/88 to-[#F0DC88]/90" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-7 sm:mb-8 space-y-2.5">
            <h2
              className="font-playfair font-bold text-[1.85rem] sm:text-[2.15rem] lg:text-[2.35rem] leading-tight"
              style={{ color: maroon }}
            >
              Contact Us
            </h2>
            <LegacyOrnateFlourish className="w-32 mx-auto opacity-80" />
            <Cross size={18} className="text-[#6D1414] mx-auto" strokeWidth={2.25} />
            <p
              className="font-lora text-[0.9375rem] sm:text-base leading-relaxed"
              style={{ color: textBody }}
            >
              {contactSectionContent.intro}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-6 lg:gap-8 xl:gap-10 items-start">
            {/* Get in Touch form */}
            <div id="contact-form" className="scroll-mt-28">
              <div
                className="relative rounded-2xl p-[3px] shadow-[0_16px_48px_rgba(43,22,6,0.15)]"
                style={{
                  background: `linear-gradient(145deg, ${gold} 0%, #F0D060 50%, #B8860B 100%)`,
                }}
              >
                <div
                  className="relative rounded-[14px] px-5 sm:px-7 py-6 sm:py-8 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, #5C1818 0%, #4A1212 45%, #3D0E0E 100%)",
                  }}
                >
                  <div className="absolute inset-2 sm:inset-3 border border-[#D4AF37]/30 pointer-events-none rounded-xl" />

                  <FormCornerFlourish className="top-3 left-3 rotate-180" />
                  <FormCornerFlourish className="top-3 right-3 -scale-x-100 rotate-180" />
                  <FormCornerFlourish className="bottom-3 left-3 -scale-y-100 rotate-180" />
                  <FormCornerFlourish className="bottom-3 right-3 scale-[-1] rotate-180" />

                  <div className="relative z-10 space-y-5">
                    <div className="text-center space-y-1.5">
                      <Cross
                        size={20}
                        className="text-[#D4AF37] mx-auto"
                        strokeWidth={2.25}
                      />
                      <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#F0D060]">
                        Get in Touch
                      </h3>
                      <LegacyOrnateFlourish className="max-w-[180px] mx-auto opacity-70 [&_span]:bg-[#D4AF37]/50" />
                    </div>

                    <ContactForm variant="dark" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact cards + social */}
            <div className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <ContactInfoCard
                  icon={<MapPin size={18} className="text-white" strokeWidth={2.25} />}
                  title="Address"
                >
                  <p>{contactInfo.address.lines.join(", ")}</p>
                </ContactInfoCard>

                <ContactInfoCard
                  icon={<Phone size={18} className="text-white" strokeWidth={2.25} />}
                  title="Phone"
                >
                  <a
                    href={`tel:${contactInfo.phone.number.replace(/\s/g, "")}`}
                    className="font-semibold hover:text-[#6D1414] transition-colors"
                    style={{ color: maroon }}
                  >
                    {contactInfo.phone.number}
                  </a>
                  <p className="text-[#6D1414]/80 text-xs mt-1.5 underline underline-offset-2">
                    {contactInfo.phone.label}
                  </p>
                </ContactInfoCard>

                <ContactInfoCard
                  icon={<Mail size={18} className="text-white" strokeWidth={2.25} />}
                  title="Email"
                >
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-semibold break-all hover:text-[#6D1414] transition-colors"
                    style={{ color: maroon }}
                  >
                    {contactInfo.email}
                  </a>
                </ContactInfoCard>

                <ContactInfoCard
                  icon={<Clock size={18} className="text-white" strokeWidth={2.25} />}
                  title="Visiting Times"
                >
                  <p>
                    <span className="font-semibold text-[#2B1606]">
                      {contactInfo.visitingTimes.weekday.days}:
                    </span>{" "}
                    {contactInfo.visitingTimes.weekday.hours}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold text-[#2B1606]">
                      {contactInfo.visitingTimes.weekend.days}:
                    </span>{" "}
                    {contactInfo.visitingTimes.weekend.hours}
                  </p>
                </ContactInfoCard>
              </div>

              <div>
                <h4
                  className="font-playfair font-bold text-lg sm:text-xl mb-4"
                  style={{ color: maroon }}
                >
                  Social With Us
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map(({ name, href, color, icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                      style={{ backgroundColor: color }}
                    >
                      <SocialIcon name={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Need Prayers CTA */}
      <div
        className="relative py-5 sm:py-6 overflow-hidden"
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-4 sm:gap-5 text-center sm:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#F0D060] to-[#C8941A] flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(184,121,16,0.4)] border border-[#F0D060]/60">
                <span className="text-2xl sm:text-3xl" aria-hidden>
                  🙏
                </span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#F0D060]">
                  {contactSectionContent.prayerCta.title}
                </h3>
                <p className="font-lora text-[#FFF4D2]/85 text-sm sm:text-base mt-1">
                  {contactSectionContent.prayerCta.subtitle}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenPrayerRequest?.()}
              className="relative z-20 inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-md bg-gradient-to-b from-[#E8C547] via-[#D4AF37] to-[#B8891A] text-[#2B1606] font-cinzel font-bold uppercase tracking-wider text-[0.68rem] sm:text-xs border border-[#F0D060] shadow-[0_4px_14px_rgba(184,121,16,0.35)] hover:brightness-105 transition-all shrink-0 cursor-pointer"
            >
              {contactSectionContent.prayerCta.button}
              <span className="text-[#6D1414]">➔</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
