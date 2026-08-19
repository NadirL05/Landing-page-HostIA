import { AnimatedSection } from "@/components/marketing/animated-section";

const ROWS = [
  ["Coup de feu du service", "L'appel sonne dans le vide", "HostIA décroche en 2 sonneries"],
  ["Client qui veut réserver", "Mise en attente, erreur de date", "Réservation prise et reformulée"],
  ["Soirée chargée", "Appels manqués = clients perdus", "Zéro appel manqué"],
  ["Pas de poste dédié", "Le chef ou le serveur interrompt son travail", "L'équipe reste concentrée en salle"],
] as const;

export function PainSection() {
  return (
    <AnimatedSection style={{ padding: "var(--space-section-y) 20px", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: "clamp(38px, 5vw, 54px)", fontWeight: 600, marginBottom: 56, maxWidth: 640, letterSpacing: "-0.01em" }}>
          Le téléphone sonne surtout quand personne ne peut décrocher
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 16 }}>
            <thead>
              <tr>
                {["Situation", "Sans HostIA", "Avec HostIA"].map((h, i) => (
                  <th key={h} className="font-mono" style={{ textAlign: "left", padding: "16px 20px", fontSize: 12, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: i === 2 ? "var(--color-champagne)" : "var(--text-tertiary)", borderBottom: "1px solid var(--border-accent)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: "22px 20px", color: ci === 2 ? "var(--color-champagne-light)" : ci === 0 ? "var(--text-primary)" : "var(--text-secondary)", fontSize: 17, lineHeight: "24px", fontWeight: ci === 2 ? 600 : ci === 0 ? 600 : 400 }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedSection>
  );
}
