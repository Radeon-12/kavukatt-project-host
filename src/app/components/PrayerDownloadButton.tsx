"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { prayerBookPages, prayerBookPdfFilename } from "@/lib/site-data";
import { downloadPrayerPdf } from "@/lib/download-prayer-pdf";

const goldClass =
  "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-gradient-to-b from-[#E8C547] via-[#D4AF37] to-[#B8891A] text-[#2B1606] font-cinzel font-bold text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.12em] border border-[#F0D060] shadow-[0_4px_14px_rgba(184,121,16,0.35)] hover:brightness-105 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed";

const outlineClass =
  "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-transparent text-[#3D2510] font-cinzel font-bold text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.12em] border border-[#6B4A28]/65 hover:bg-[#6B4A28]/05 transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap";

type PrayerDownloadButtonProps = {
  variant?: "gold" | "outline";
  className?: string;
};

function usePrayerDownload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDownload() {
    setLoading(true);
    setError(null);

    try {
      await downloadPrayerPdf(prayerBookPages, prayerBookPdfFilename);
    } catch {
      setError("Could not download the prayer booklet. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, handleDownload };
}

export function HeroPrayerDownloadButton({
  className = "",
}: {
  className?: string;
}) {
  const { loading, handleDownload } = usePrayerDownload();

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      className={className || outlineClass}
    >
      <Download className="w-3 h-3 shrink-0" aria-hidden />
      {loading ? "Preparing…" : "Download Prayer"}
    </button>
  );
}

export function PrayerDownloadButton({
  variant = "gold",
  className = "",
}: PrayerDownloadButtonProps) {
  const { loading, error, handleDownload } = usePrayerDownload();

  return (
    <div className="flex flex-col items-center lg:items-start gap-2">
      <button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        className={`${variant === "gold" ? goldClass : outlineClass} ${className}`}
      >
        <Download className="w-4 h-4 shrink-0" aria-hidden />
        {loading ? "Preparing PDF…" : "Download Prayer"}
      </button>
      {error ? (
        <p className="text-sm text-red-700 font-lora" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
