import { AnimatedSection } from "@/components/marketing/animated-section";

const ROWS = [
  ["Coup de feu du service", "L'appel sonne dans le vide", "HostIA décroche en 2 sonneries"],
  ["Client qui veut réserver", "Mise en attente, erreur de date", "Réservation prise et reformulée"],
  ["Soirée chargée", "Appels manqués = clients perdus", "Zéro appel manqué"],
  ["Pas de poste dédié", "Le chef ou le serveur interrompt son travail", "L'équipe reste concentrée en salle"],
] as const;

export function PainSection() {
  return (
    <AnimatedSection style={{ padding: "96px 20px", background: "var(--color-paper-deep)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "clamp(34px, 5vw, 46px)", fontWeight: 600, marginBottom: 48, maxWidth: 600 }}>
          Le téléphone sonne surtout quand personne ne peut décrocher
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                {["Situation", "Sans HostIA", "Avec HostIA"].map((h, i) => (
                  <th key={h} className="font-mono" style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: i === 2 ? "var(--color-champagne)" : "var(--text-tertiary)", borderBottom: "1px solid var(--border-subtle)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: 16, color: ci === 2 ? "var(--color-champagne)" : ci === 0 ? "var(--text-primary)" : "var(--text-secondary)", fontSize: 15, lineHeight: "22px", fontWeight: ci === 2 ? 500 : 400 }}>
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
