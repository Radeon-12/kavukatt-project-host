/**
 * Gothic pointed-arch stained glass window — Life & Legacy shrine backdrop.
 */
export function LegacyStainedGlassArch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 340"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="legacyArchClip">
          <path d="M 36 320 L 36 128 Q 140 18 244 128 L 244 320 Z" />
        </clipPath>
        <radialGradient id="glassHalo" cx="50%" cy="32%" r="48%">
          <stop offset="0%" stopColor="#FFFDE8" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#FFE566" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E8A030" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="stonePillar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EDE8DC" />
          <stop offset="50%" stopColor="#FAF6EE" />
          <stop offset="100%" stopColor="#DDD5C8" />
        </linearGradient>
        <linearGradient id="goldCap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0D060" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {/* Outer stone arch frame */}
      <path
        d="M 28 328 L 28 122 Q 140 8 252 122 L 252 328 Z"
        fill="#F5F0E6"
        stroke="#D4AF37"
        strokeWidth="2.5"
      />
      <path
        d="M 36 320 L 36 128 Q 140 18 244 128 L 244 320 Z"
        fill="#EDE8DC"
        stroke="#C8BFB2"
        strokeWidth="1"
      />

      {/* Left pillar */}
      <rect x="18" y="110" width="14" height="218" fill="url(#stonePillar)" stroke="#C8BFB2" strokeWidth="0.8" />
      <rect x="16" y="100" width="18" height="14" rx="2" fill="url(#goldCap)" stroke="#A8743C" strokeWidth="0.6" />

      {/* Right pillar */}
      <rect x="248" y="110" width="14" height="218" fill="url(#stonePillar)" stroke="#C8BFB2" strokeWidth="0.8" />
      <rect x="246" y="100" width="18" height="14" rx="2" fill="url(#goldCap)" stroke="#A8743C" strokeWidth="0.6" />

      {/* Stained glass interior */}
      <g clipPath="url(#legacyArchClip)">
        <rect x="36" y="18" width="208" height="302" fill="#FFE88A" />

        {/* Glass panels */}
        <path d="M 36 128 L 140 18 L 244 128 L 244 320 L 36 320 Z" fill="#FFD54F" opacity="0.85" />
        <path d="M 36 128 L 140 18 L 140 320 L 36 320 Z" fill="#FFF176" opacity="0.7" />
        <path d="M 244 128 L 140 18 L 140 320 L 244 320 Z" fill="#FFB300" opacity="0.65" />

        {/* Diamond lattice */}
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3].map((col) => {
            const x = 52 + col * 48 + (row % 2) * 24;
            const y = 140 + row * 38;
            const colors = ["#FFF8DC", "#FFE082", "#FFCA28", "#FFA000", "#FFF59D"];
            return (
              <polygon
                key={`${row}-${col}`}
                points={`${x},${y} ${x + 20},${y + 14} ${x},${y + 28} ${x - 20},${y + 14}`}
                fill={colors[(row + col) % colors.length]}
                opacity="0.75"
                stroke="#5D4037"
                strokeWidth="0.8"
              />
            );
          })
        )}

        {/* Blue accent rosettes */}
        <circle cx="140" cy="95" r="10" fill="#5C9FD4" opacity="0.55" stroke="#3D2510" strokeWidth="0.8" />
        <circle cx="90" cy="175" r="7" fill="#5C9FD4" opacity="0.45" stroke="#3D2510" strokeWidth="0.6" />
        <circle cx="190" cy="175" r="7" fill="#5C9FD4" opacity="0.45" stroke="#3D2510" strokeWidth="0.6" />
        <circle cx="140" cy="240" r="9" fill="#5C9FD4" opacity="0.5" stroke="#3D2510" strokeWidth="0.7" />

        {/* Lead lines */}
        <path d="M 36 128 Q 140 18 244 128" fill="none" stroke="#3D2510" strokeWidth="2" />
        <line x1="140" y1="18" x2="140" y2="320" stroke="#3D2510" strokeWidth="1.8" />
        <line x1="36" y1="200" x2="244" y2="200" stroke="#3D2510" strokeWidth="1.2" opacity="0.7" />
        <line x1="68" y1="128" x2="100" y2="320" stroke="#3D2510" strokeWidth="0.9" opacity="0.5" />
        <line x1="212" y1="128" x2="180" y2="320" stroke="#3D2510" strokeWidth="0.9" opacity="0.5" />

        {/* Soft halo glow behind portrait */}
        <ellipse cx="140" cy="155" rx="75" ry="90" fill="url(#glassHalo)" />
      </g>

      {/* Inner arch gold trim */}
      <path
        d="M 36 320 L 36 128 Q 140 18 244 128 L 244 320"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1.2"
        opacity="0.6"
      />
    </svg>
  );
}
