import { AnimatedSection } from "@/components/marketing/animated-section";

const ROWS = [
  ["Coup de feu du service", "L'appel sonne dans le vide", "HostIA décroche en 2 sonneries"],
  ["Client qui veut réserver", "Mise en attente, erreur de date", "Réservation prise et reformulée"],
  ["Soirée chargée", "Appels manqués = clients perdus", "Zéro appel manqué"],
  ["Pas de poste dédié", "Le chef ou le serveur interrompt son travail", "L'équipe reste concentrée en salle"],
] as const;

/*
 * Le comparatif n'est plus un simple tableau éditorial : c'est le carnet de
 * réservation à spirale posé sur le bar. Une reliure perforée court sur le
 * bord gauche (petits ronds façon spirale + ligne pointillée), et chaque
 * ligne du "sans HostIA" est barrée d'un trait à la main — comme une note
 * raturée un soir de coup de feu — avant que la colonne "avec HostIA"
 * n'affiche la correction en braise. Ce geste (raturer / corriger) est
 * spécifique à un carnet papier, impossible à confondre avec une matrice
 * de comparaison SaaS générique.
 */
export function PainSection() {
  return (
    <AnimatedSection style={{ padding: "var(--space-section-y) 20px", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: "clamp(38px, 5vw, 54px)", fontWeight: 600, marginBottom: 56, maxWidth: 640, letterSpacing: "-0.01em" }}>
          Le téléphone sonne surtout quand personne ne peut décrocher
        </h2>
        <div
          style={{
            position: "relative",
            paddingLeft: 28,
            backgroundImage:
              "radial-gradient(circle at 8px 0, var(--color-obsidian-deep) 4px, transparent 4.5px)",
            backgroundSize: "100% 44px",
            backgroundRepeat: "repeat-y",
            borderLeft: "1.5px dashed var(--border-accent)",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 16, minWidth: 520 }}>
              <thead>
                <tr>
                  {["Situation", "Sans HostIA", "Avec HostIA"].map((h, i) => (
                    <th key={h} className="font-mono" style={{ textAlign: "left", padding: "16px 20px", fontSize: 12, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: i === 2 ? "var(--color-champagne)" : "var(--text-tertiary)", borderBottom: "1px solid var(--border-accent)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "22px 20px", color: "var(--text-primary)", fontSize: 17, lineHeight: "24px", fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: "22px 20px", color: "var(--text-tertiary)", fontSize: 16, lineHeight: "24px", textDecoration: "line-through", textDecorationColor: "rgba(217,119,63,0.55)", textDecorationThickness: "1.5px" }}>
                      {row[1]}
                    </td>
                    <td style={{ padding: "22px 20px", color: "var(--color-champagne-light)", fontSize: 17, lineHeight: "24px", fontWeight: 600 }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
