"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { socialLinks } from "@/lib/site-data";

type GalleryLightboxProps = {
  photos: string[];
  albumTitle: string;
  initialIndex: number;
  onClose: () => void;
};

function LightboxSocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "facebook":
      return <span className="font-cinzel font-bold text-sm leading-none">f</span>;
    case "instagram":
      return <span className="font-cinzel font-bold text-sm leading-none">◎</span>;
    default:
      return null;
  }
}

export function GalleryLightbox({
  photos,
  albumTitle,
  initialIndex,
  onClose,
}: GalleryLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  const hasPrev = index > 0;
  const hasNext = index < photos.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) setIndex((i) => i - 1);
  }, [hasPrev]);

  const goNext = useCallback(() => {
    if (hasNext) setIndex((i) => i + 1);
  }, [hasNext]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, goPrev, goNext]);

  if (typeof document === "undefined") return null;

  const headerSocial = socialLinks.filter((l) =>
    ["facebook", "instagram"].includes(l.icon)
  );

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[300] bg-black flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label={`${albumTitle} — photo ${index + 1} of ${photos.length}`}
      >
        {/* Header */}
        <header className="shrink-0 flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 sm:py-5 border-b border-white/10">
          <Link
            href="/#home"
            onClick={onClose}
            className="font-cinzel font-bold text-[0.72rem] sm:text-[0.8rem] tracking-[0.22em] uppercase text-white/90 hover:text-white transition-colors"
          >
            Mar Mathew Kavukatt
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            {headerSocial.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors"
                aria-label={name}
              >
                <LightboxSocialIcon icon={icon} />
              </a>
            ))}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors cursor-pointer ml-1"
              aria-label="Close gallery"
            >
              <X size={16} strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* Carousel */}
        <div className="relative flex-1 flex items-center justify-center min-h-0 px-2 sm:px-6 lg:px-10">
          {hasPrev && (
            <button
              type="button"
              onClick={goPrev}
              className="hidden sm:block absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-[14vw] max-w-[200px] cursor-pointer group"
              aria-label="Previous photo"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-black/40">
                <Image
                  src={photos[index - 1]}
                  alt=""
                  fill
                  unoptimized
                  className="object-contain scale-105 group-hover:scale-110 transition-transform duration-300"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-colors" />
              </div>
            </button>
          )}

          <button
            type="button"
            onClick={goPrev}
            disabled={!hasPrev}
            className="sm:hidden absolute left-2 z-20 p-2 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex items-center justify-center w-full max-w-[min(92vw,960px)] max-h-[calc(100vh-9rem)] mx-auto px-12 sm:px-[18vw]"
            >
              <Image
                src={photos[index]}
                alt={`${albumTitle} — photo ${index + 1}`}
                width={1200}
                height={900}
                unoptimized
                className="w-auto h-auto max-w-full max-h-[calc(100vh-9rem)] object-contain rounded-sm shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
                sizes="(max-width: 960px) 92vw, 960px"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={goNext}
            disabled={!hasNext}
            className="sm:hidden absolute right-2 z-20 p-2 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>

          {hasNext && (
            <button
              type="button"
              onClick={goNext}
              className="hidden sm:block absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-[14vw] max-w-[200px] cursor-pointer group"
              aria-label="Next photo"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-black/40">
                <Image
                  src={photos[index + 1]}
                  alt=""
                  fill
                  unoptimized
                  className="object-contain scale-105 group-hover:scale-110 transition-transform duration-300"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-colors" />
              </div>
            </button>
          )}

          {/* Desktop arrow controls */}
          <button
            type="button"
            onClick={goPrev}
            disabled={!hasPrev}
            className="hidden sm:flex absolute left-[calc(14vw+0.5rem)] lg:left-[calc(200px+1.5rem)] top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full bg-black/40 border border-white/20 text-white/80 hover:text-white hover:bg-black/60 disabled:opacity-0 disabled:pointer-events-none transition-all cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft size={22} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!hasNext}
            className="hidden sm:flex absolute right-[calc(14vw+0.5rem)] lg:right-[calc(200px+1.5rem)] top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full bg-black/40 border border-white/20 text-white/80 hover:text-white hover:bg-black/60 disabled:opacity-0 disabled:pointer-events-none transition-all cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight size={22} strokeWidth={1.75} />
          </button>
        </div>

        {/* Footer */}
        <footer className="shrink-0 py-4 sm:py-5 text-center border-t border-white/10">
          <p className="text-[0.7rem] sm:text-xs text-white/45 tracking-wide font-lora">
            © {new Date().getFullYear()} Kavukatt. All rights reserved.
          </p>
        </footer>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
