"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { Contact } from "../components/Contact";
import { PublicInterventionsModal } from "../components/PublicInterventionsModal";

export default function ContactPage() {
  const [prayerModalOpen, setPrayerModalOpen] = useState(false);

  return (
    <div className="min-h-screen text-[#2A1608] font-sans relative">
      <Navbar
        onOpenTimeline={() => {}}
        onOpenBiography={() => {}}
        onOpenLeadership={() => {}}
      />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
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
        <Contact onOpenPrayerRequest={() => setPrayerModalOpen(true)} />
      </main>

      <Footer
        onOpenTimeline={() => {}}
        onOpenBiography={() => {}}
        onOpenLeadership={() => {}}
      />
      <ScrollToTop />

      <PublicInterventionsModal
        isOpen={prayerModalOpen}
        onClose={() => setPrayerModalOpen(false)}
        defaultType="prayer"
      />
    </div>
  );
}
