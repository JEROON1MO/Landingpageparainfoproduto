/**
 * SectionTransition — Subtle divider between sections
 * Creates a smooth visual bridge with gradient fade
 */
export function SectionTransition({ variant = "green" }: { variant?: "green" | "warm" | "neutral" }) {
  const colors = {
    green: "rgba(0,245,147,0.04)",
    warm: "rgba(251,191,36,0.03)",
    neutral: "rgba(255,255,255,0.02)",
  };

  return (
    <div className="relative h-24 sm:h-32 w-full overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${colors[variant]}, transparent)`,
        }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 w-[60%] max-w-xl h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${colors[variant]}, transparent)`,
        }}
      />
    </div>
  );
}
