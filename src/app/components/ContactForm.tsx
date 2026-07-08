"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type ContactFormProps = {
  variant?: "light" | "dark";
};

export function ContactForm({ variant = "light" }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const labelClass = isDark
    ? "block text-xs font-cinzel font-bold text-[#FFF4D2]/90 uppercase tracking-wider mb-2"
    : "block text-xs font-cinzel font-bold text-[#2A1608] uppercase tracking-wider mb-2";

  const inputClass = isDark
    ? "w-full bg-[#2B0A0A]/80 border border-[#D4AF37]/35 focus:border-[#F0D060] focus:ring-1 focus:ring-[#F0D060]/40 rounded-md px-4 py-2.5 text-sm outline-none text-[#FFF4D2] placeholder:text-[#FFF4D2]/35"
    : "w-full bg-white border border-stone-200 focus:border-[#6D1414] focus:ring-1 focus:ring-[#6D1414] rounded-md px-4 py-2.5 text-sm outline-none text-[#2A1608]";

  const buttonClass = isDark
    ? "inline-flex items-center gap-2 px-7 py-2.5 rounded-md bg-gradient-to-b from-[#E8C547] via-[#D4AF37] to-[#B8891A] text-[#2B1606] font-cinzel font-bold uppercase tracking-wider text-[0.68rem] border border-[#F0D060] shadow-[0_4px_14px_rgba(184,121,16,0.35)] hover:brightness-105 transition-all disabled:opacity-70"
    : "inline-flex items-center gap-2 px-8 py-3 rounded-md bg-gradient-to-b from-[#E8C547] via-[#D4AF37] to-[#B8891A] text-[#2B1606] font-cinzel font-bold uppercase tracking-wider text-[0.7rem] border border-[#F0D060] shadow-[0_4px_14px_rgba(184,121,16,0.35)] hover:brightness-105 transition-all disabled:opacity-70";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          required
          placeholder={isDark ? "Your full name" : undefined}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          required
          placeholder={isDark ? "Your email address" : undefined}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone
        </label>
        <input
          type="tel"
          id="contact-phone"
          placeholder={isDark ? "Your phone number" : undefined}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          placeholder={isDark ? "Your message" : undefined}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button type="submit" disabled={submitted} className={buttonClass}>
        {submitted ? (
          <span>Message Sent Successfully</span>
        ) : (
          <>
            <span>Submit</span>
            <ArrowRight size={14} className="text-[#6D1414]" />
          </>
        )}
      </button>
    </form>
  );
}
