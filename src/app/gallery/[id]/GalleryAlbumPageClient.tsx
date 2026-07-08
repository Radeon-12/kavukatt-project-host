"use client";

import type { GalleryAlbum } from "@/lib/site-data";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { GalleryAlbumNav } from "@/app/components/GalleryAlbumNav";

export function GalleryAlbumPageClient({
  activeId,
  children,
}: {
  activeId: GalleryAlbum["id"];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-[#2A1608] font-sans relative bg-[#FFFCF7]">
      <Navbar
        onOpenTimeline={() => {}}
        onOpenBiography={() => {}}
        onOpenLeadership={() => {}}
      />

      <main className="pt-[4.75rem] sm:pt-[5.25rem]">
        <GalleryAlbumNav activeId={activeId} />
        {children}
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
