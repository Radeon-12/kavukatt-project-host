"use client";

/** Golden dust particles floating in the hero atmosphere */
export function HeroFloatingParticles() {
  const particles = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 85}%`,
    size: 2 + (i % 4),
    delay: `${(i % 8) * 0.7}s`,
    duration: `${4 + (i % 5) * 1.2}s`,
    opacity: 0.25 + (i % 3) * 0.15,
  }));

  return (
    <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 6px 1px rgba(240, 208, 96, 0.7)",
            animation: `particle-drift ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
