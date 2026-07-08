"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CrestLogo } from "./CrestLogo";

interface NavbarProps {
  onOpenTimeline: () => void;
  onOpenBiography: () => void;
  onOpenLeadership: () => void;
}

export function Navbar({
  onOpenTimeline,
  onOpenBiography,
  onOpenLeadership,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const navLinks = [
    { label: "HOME", href: "/#home", id: "home" },
    { label: "LIFE & LEGACY", href: "/#life-legacy", id: "legacy" },
    {
      label: "PRAYER FOR CANONIZATION",
      href: "/#prayer-for-canonization",
      id: "prayer",
    },
    { label: "VISIT", href: "/#visit", id: "visit" },
    { label: "GALLERY", href: "/#gallery", id: "gallery" },
    { label: "VIDEOS", href: "/#videos", id: "videos" },
    { label: "CONTACT US", href: "/#contact", id: "contact" },
  ];

  const isGalleryPage = pathname.startsWith("/gallery");
  const isVideosPage = pathname.startsWith("/videos");
  const isSubPage =
    isGalleryPage || isVideosPage || pathname.startsWith("/contact");
  const showSolidNav = scrolled || isSubPage;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (pathname === "/") {
        const sections = [
          { id: "home", navId: "home" },
          { id: "life-legacy", navId: "legacy" },
          { id: "full-biography", navId: "legacy" },
          { id: "prayer-for-canonization", navId: "prayer" },
          { id: "gallery", navId: "gallery" },
          { id: "videos", navId: "videos" },
          { id: "visit", navId: "visit" },
          { id: "contact", navId: "contact" },
        ];
        let current = "home";

        for (const { id, navId } of sections) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 140) {
            current = navId;
          }
        }
        setActiveSection(current);
      } else if (isGalleryPage) {
        setActiveSection("gallery");
      } else if (isVideosPage) {
        setActiveSection("videos");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isGalleryPage, isVideosPage]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    setIsOpen(false);

    if (pathname === "/") {
      if (id === "legacy") {
        e.preventDefault();
        const el = document.getElementById("life-legacy");
        if (el) {
          const offset = 90;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
        return;
      }

      if (id === "prayer") {
        e.preventDefault();
        const el = document.getElementById("prayer-for-canonization");
        if (el) {
          const offset = 90;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
        return;
      }

      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        showSolidNav
          ? "bg-[#FFFCF7]/96 backdrop-blur-md shadow-sm border-b border-[#E8D4A8]/40 py-2.5"
          : "bg-white/25 backdrop-blur-[2px] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center justify-between gap-3 min-w-0">
          
          {/* Logo Brand */}
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "/#home", "home")}
            className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0 max-w-[42%] lg:max-w-none"
            aria-label="Mar Mathew Kavukatt — home"
          >
            <CrestLogo
              className={`transition-transform duration-300 group-hover:scale-[1.03] shadow-[0_6px_20px_rgba(43,22,6,0.18)] ${
                isGalleryPage || isVideosPage
                  ? "w-[64px] h-[64px] sm:w-[72px] sm:h-[72px]"
                  : pathname === "/" && !showSolidNav
                    ? "w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] lg:w-[88px] lg:h-[88px]"
                    : "w-[80px] h-[80px] sm:w-[88px] sm:h-[88px] lg:w-[96px] lg:h-[96px]"
              }`}
            />
            <div className="hidden md:flex flex-col min-w-0">
              <span className="text-[#2B1606] tracking-[0.08em] uppercase font-cinzel font-bold leading-tight text-[0.78rem] sm:text-[0.88rem] lg:text-[0.98rem] truncate">
                Mar Mathew Kavukatt
              </span>
              <span className="text-[#9A7228] tracking-[0.2em] uppercase font-cinzel font-semibold mt-0.5 text-[0.52rem] sm:text-[0.54rem]">
                Servant of God
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
            {navLinks.map((link) => {
              const isActive =
                (link.id === "legacy" && activeSection === "legacy") ||
                (link.id === "prayer" && activeSection === "prayer") ||
                (link.id === "gallery" && isGalleryPage) ||
                (link.id === "videos" &&
                  (isVideosPage || activeSection === "videos")) ||
                (pathname === "/" && activeSection === link.id);
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative py-2 text-[0.62rem] 2xl:text-[0.68rem] tracking-[0.12em] font-cinzel font-bold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-[#D99A20]"
                      : "text-[#2A1608] hover:text-[#6D1414]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 flex items-center gap-1 pointer-events-none select-none text-[#D99A20]">
                      <span className="h-px w-2.5 bg-current rounded-full" />
                      <span className="text-[0.55rem] leading-none">✝</span>
                      <span className="h-px w-2.5 bg-current rounded-full" />
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-md text-[#2A1608] hover:text-[#6D1414] hover:bg-[#F7E3B2]/50 transition-colors cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-[#FFF9EE]/92 backdrop-blur-md border-b border-[#D4AF37]/25 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive =
                  (link.id === "legacy" && activeSection === "legacy") ||
                  (link.id === "prayer" && activeSection === "prayer") ||
                  (link.id === "gallery" && isGalleryPage) ||
                  (link.id === "videos" &&
                    (isVideosPage || activeSection === "videos")) ||
                  (pathname === "/" && activeSection === link.id);
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`block px-4 py-3 rounded-md font-cinzel font-bold text-[0.8rem] uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-[#FFF4D2] text-[#6D1414] border-l-4 border-[#D99A20]"
                        : "text-[#2A1608] hover:bg-[#FFF4D2]/40"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
