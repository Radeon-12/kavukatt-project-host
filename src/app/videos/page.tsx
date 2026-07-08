"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { VideosPageContent } from "../components/VideosPageContent";

export default function VideosPage() {
  return (
    <div className="min-h-screen text-[#2A1608] font-sans relative">
      <Navbar
        onOpenTimeline={() => {}}
        onOpenBiography={() => {}}
        onOpenLeadership={() => {}}
      />

      <main className="pt-[4.75rem] sm:pt-[5.25rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 pt-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-cinzel font-bold text-[#6D1414] hover:text-[#2B1606] uppercase tracking-wider transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Home</span>
          </Link>
        </div>

        <VideosPageContent />
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
