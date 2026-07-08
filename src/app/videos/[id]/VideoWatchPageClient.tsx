"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { VideoAlbum } from "@/lib/site-data";
import { heroChurchTheme } from "@/lib/hero-theme";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ScrollToTop } from "@/app/components/ScrollToTop";

const { maroon } = heroChurchTheme;

export function VideoWatchPageClient({
  album,
}: {
  album: VideoAlbum;
}) {
  const isFacebook = album.platform === "facebook";

  return (
    <div className="min-h-screen text-[#2A1608] font-sans relative bg-[#FFFCF7]">
      <Navbar
        onOpenTimeline={() => {}}
        onOpenBiography={() => {}}
        onOpenLeadership={() => {}}
      />

      <main className="pt-[4.75rem] sm:pt-[5.25rem]">
        <div className="bg-[#FFFCF7] border-b border-[#E8E0D0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-stone-200 bg-white text-stone-700 text-sm font-medium hover:border-stone-300 hover:bg-stone-50 transition-colors shadow-sm"
            >
              <ArrowLeft size={16} strokeWidth={2.25} />
              Back to Videos
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h1
            className="font-playfair font-bold text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] leading-tight mb-3"
            style={{ color: maroon }}
          >
            {album.title}
          </h1>
          <p className="font-lora text-[#5C4A32] text-sm sm:text-base mb-6 sm:mb-8 max-w-3xl">
            {album.description}
          </p>

          <div className="relative w-full overflow-hidden rounded-xl border border-[#E8D4A8]/90 bg-black shadow-[0_12px_40px_rgba(43,22,6,0.15)] aspect-video">
            <iframe
              src={album.embedUrl}
              title={album.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={album.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-b from-[#E8C547] via-[#D4AF37] to-[#B8891A] text-[#2B1606] font-cinzel font-bold text-[0.68rem] sm:text-xs uppercase tracking-wider border border-[#F0D060] shadow-sm hover:brightness-105 transition-all"
            >
              Open on {isFacebook ? "Facebook" : "YouTube"}
            </a>
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#E8D4A8] bg-[#FFFCF4] text-[#6D1414] font-cinzel font-bold text-[0.68rem] sm:text-xs uppercase tracking-wider hover:bg-[#FFF4D2] transition-colors"
            >
              All Video Albums
            </Link>
          </div>
        </div>
      </main>

      <Footer
        onOpenTimeline={() => {}}
        onOpenBiography={() => {}}
        onOpenLeadership={() => {}}
      />
      <ScrollToTop />
    </div>
  );
}
