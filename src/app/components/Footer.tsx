"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone, Heart } from "lucide-react";
import { contactInfo } from "@/lib/site-data";
import { CrestLogo } from "./CrestLogo";

interface FooterProps {
  onOpenTimeline: () => void;
  onOpenBiography: () => void;
  onOpenLeadership: () => void;
}

export function Footer({
  onOpenTimeline,
  onOpenBiography,
  onOpenLeadership,
}: FooterProps) {
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const targetId = id === "legacy" ? "life-legacy" : id;
      const el = document.getElementById(targetId);
      if (el) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        window.scrollTo({
          top: elementRect - bodyRect - offset,
          behavior: "smooth",
        });
      }
    }
  };

  const quickLinksLeft = [
    { label: "Home", href: "/#home", id: "home" },
    { label: "Life & Legacy", href: "/#life-legacy", id: "legacy" },
  ];

  const quickLinksRight = [
    { label: "Gallery", href: "/#gallery", id: "gallery" },
    { label: "Videos", href: "/#videos", id: "videos" },
    { label: "Visit", href: "/#visit", id: "visit" },
    { label: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2B1606] to-[#120700] text-[#FFF4D2] border-t border-[#D99A20]/45 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,154,32,0.05),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#D99A20]/20">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <CrestLogo size={76} className="border-[#D99A20]" />
              <div className="flex flex-col">
                <span className="text-[#FFF4D2] font-cinzel font-bold text-base leading-tight uppercase tracking-wider">
                  Mar Mathew Kavukatt
                </span>
                <span className="text-[#D99A20] font-cinzel text-[0.65rem] tracking-widest uppercase">
                  Servant of God
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-[#D99A20] uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              <ul className="space-y-2.5 font-sans text-stone-300 text-sm">
                {quickLinksLeft.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="hover:text-[#D99A20] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5 font-sans text-stone-300 text-sm">
                {quickLinksRight.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="hover:text-[#D99A20] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Follow Us + Contact */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-cinzel text-sm font-bold text-[#D99A20] uppercase tracking-widest">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { label: "f", href: "https://facebook.com", title: "Facebook" },
                { label: "▶", href: "https://youtube.com", title: "YouTube" },
                { label: "◎", href: "https://instagram.com", title: "Instagram" },
              ].map(({ label, href, title }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={title}
                  className="w-9 h-9 rounded-full border border-stone-600 flex items-center justify-center hover:border-[#D99A20] hover:text-[#D99A20] transition-colors text-stone-400 font-cinzel text-sm font-bold"
                >
                  {label}
                </a>
              ))}
            </div>

            <ul className="space-y-2 font-sans text-stone-400 text-xs">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#D99A20] shrink-0 mt-0.5" />
                <span>{contactInfo.address.lines.slice(0, 3).join(", ")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#D99A20] shrink-0" />
                <span>{contactInfo.phone.number}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#D99A20] shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[#D99A20] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Mar Mathew Kavukatt — Servant of God.
            All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 text-stone-400">
            Built with Faith &amp; Love
            <Heart size={12} className="text-[#D99A20] fill-[#D99A20]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
