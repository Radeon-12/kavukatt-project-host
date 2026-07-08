/** Ornate attribute icons for Life & Legacy — gold & maroon memorial style */

const iconClass = "w-[22px] h-[22px]";

export function FaithIcon() {
  return (
    <svg viewBox="0 0 32 32" className={iconClass} aria-hidden>
      <defs>
        <linearGradient id="legacyGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E0" />
          <stop offset="45%" stopColor="#F4C86A" />
          <stop offset="100%" stopColor="#B8891A" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="13" fill="url(#legacyGold)" opacity="0.35" />
      <path
        fill="#6D1414"
        d="M14.5 6h3v8.2h8.2v3H17.5V26h-3V17.2H6.3v-3h8.2V6z"
      />
      <path
        fill="#D4AF37"
        d="M15.2 7h1.6v7.4h7.4v1.6h-7.4V25h-1.6v-8.4H7.8v-1.6h7.4V7z"
        opacity="0.85"
      />
    </svg>
  );
}

export function PastorIcon() {
  return (
    <svg viewBox="0 0 32 32" className={iconClass} aria-hidden>
      <defs>
        <linearGradient id="heartGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF0D0" />
          <stop offset="100%" stopColor="#E8A040" />
        </linearGradient>
      </defs>
      <path
        fill="#6D1414"
        d="M16 27s-9.5-6.2-9.5-12.4C6.5 11.2 9.8 8 14 8c2.2 0 4 1.1 5.2 2.8C20.4 9.1 22.2 8 24.4 8c4.2 0 7.5 3.2 7.5 6.6C31.9 20.8 16 27 16 27z"
      />
      <path
        fill="url(#heartGold)"
        d="M16 24.8s-7.5-4.9-7.5-9.8c0-2.6 2.2-4.7 4.9-4.7 1.7 0 3.2.9 4.1 2.2.9-1.3 2.4-2.2 4.1-2.2 2.7 0 4.9 2.1 4.9 4.7 0 4.9-7.5 9.8-7.5 9.8z"
        opacity="0.9"
      />
      <path
        fill="#6D1414"
        d="M15 12.5h2v5.5h-2z M13 14.5h6v2h-6z"
      />
    </svg>
  );
}

export function LeaderIcon() {
  return (
    <svg viewBox="0 0 32 32" className={iconClass} aria-hidden>
      <defs>
        <linearGradient id="spireGold" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor="#C8941A" />
        </linearGradient>
      </defs>
      <path fill="#6D1414" d="M16 4l-1.2 2.4H8v3h2.5L8 26h16l-2.5-16.6H24V6.4h-6.8L16 4z" />
      <path fill="url(#spireGold)" d="M16 6.2l-.8 1.6H10v1.6h1.8L9.2 24h13.6l-2.6-14.6H22V8.8h-5.2L16 6.2z" opacity="0.75" />
      <rect x="14.2" y="10" width="3.6" height="2.2" rx="0.4" fill="#D4AF37" />
      <path fill="#D4AF37" d="M16 4.5v2.2l-.9 1.8h1.8L16 6.7V4.5z" />
      <rect x="11" y="26" width="10" height="2" rx="0.5" fill="#3D2510" />
    </svg>
  );
}

export function LegacyIcon() {
  return (
    <svg viewBox="0 0 32 32" className={iconClass} aria-hidden>
      <defs>
        <linearGradient id="flameGold" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#B8891A" />
          <stop offset="50%" stopColor="#F4C86A" />
          <stop offset="100%" stopColor="#FFF8E0" />
        </linearGradient>
      </defs>
      <path
        fill="#6D1414"
        d="M16 28c-1.2 0-2.2-1-2.2-2.2V18.5c-3.2-.8-5.5-3.6-5.5-7 0-2.4 1.2-4.5 3-5.8-.3 2.8 1.5 4.5 3.5 5.5-.2-3.5 2-6.5 4.5-8.5 1 2.8.5 5.5-.5 7.5 1.5-.5 3-2 3.5-4.2 1.5 1.5 2.5 3.8 2.5 6.2 0 3.4-2.3 6.2-5.5 7v7.3c0 1.2-1 2.2-2.2 2.2z"
      />
      <path
        fill="url(#flameGold)"
        d="M16 26.5c-.6 0-1.1-.5-1.1-1.1v-6.8c-2.5-.6-4.3-2.8-4.3-5.5 0-1.8.9-3.4 2.3-4.4-.2 2.2 1.2 3.6 2.8 4.3-.2-2.8 1.6-5.2 3.6-6.8.8 2.2.4 4.4-.4 6 1.2-.4 2.4-1.6 2.8-3.4 1.2 1.2 2 3 2 5 0 2.7-1.8 4.9-4.3 5.5v6.8c0 .6-.5 1.1-1.1 1.1z"
      />
      <circle cx="16" cy="14" r="1.2" fill="#FFF8E0" opacity="0.9" />
    </svg>
  );
}

export function LegacyIconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0 group">
      <div
        className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-55 transition-opacity"
        style={{ background: "radial-gradient(circle, #F4C86A 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative p-[2.5px] rounded-full border-2 border-[#D4AF37]/90 shadow-[0_4px_14px_rgba(184,121,16,0.35)]">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFFDF5] via-[#F8E4A8] to-[#C8941A] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-3px_6px_rgba(120,80,20,0.2)]">
          {children}
        </div>
      </div>
    </div>
  );
}
