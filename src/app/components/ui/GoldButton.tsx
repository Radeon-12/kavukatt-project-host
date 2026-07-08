import Link from "next/link";

type GoldButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  arrow?: boolean;
};

const baseClass =
  "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-gradient-to-b from-[#E8C547] via-[#D4AF37] to-[#B8891A] text-[#2B1606] font-cinzel font-bold text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.12em] border border-[#F0D060] shadow-[0_4px_14px_rgba(184,121,16,0.35)] hover:brightness-105 active:scale-[0.98] transition-all duration-200";

export function GoldButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  arrow = true,
}: GoldButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="text-[#6D1414] text-sm leading-none">➔</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${className}`}
    >
      {content}
    </button>
  );
}

export function GoldIconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-[2px] rounded-full border-2 border-[#D4AF37] shrink-0">
      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFF8E7] via-[#F4C86A] to-[#C8941A] flex items-center justify-center shadow-inner">
        {children}
      </div>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#B87910] font-cinzel text-[0.65rem] sm:text-xs tracking-[0.28em] font-bold uppercase block">
      {children}
    </span>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#6D1414] font-playfair font-bold text-2xl sm:text-[1.75rem] lg:text-3xl tracking-wide leading-snug">
      {children}
    </h2>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-[2px] w-14 bg-gradient-to-r from-[#D4AF37] to-[#F4C86A] rounded-full ${className}`}
    />
  );
}
