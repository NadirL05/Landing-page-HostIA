import type { ReactNode } from "react";

/**
 * Encart "mesurez d'abord" — réutilise .ticket-card pour ancrer le pattern
 * self-measurement dans la DA carnet de service (littéralement un ticket à
 * remplir soi-même), plutôt qu'une bannière CTA générique. Utilisé par les
 * 3 articles au lieu d'un hard-sell produit.
 */
export function MeasureCallout({ children }: { children: ReactNode }) {
  return (
    <div className="ticket-card" style={{ padding: "28px 24px", margin: "40px 0", borderRadius: 6 }}>
      <p
        className="font-mono"
        style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 12 }}
      >
        À faire avant de changer quoi que ce soit
      </p>
      <div style={{ fontSize: 15, lineHeight: "24px", color: "var(--color-ticket-ink)" }}>{children}</div>
    </div>
  );
}
