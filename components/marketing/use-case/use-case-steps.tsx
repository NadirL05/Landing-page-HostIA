import { AnimatedSection } from "@/components/marketing/animated-section";
import type { UseCaseStep } from "@/lib/seo/use-cases";

/**
 * Ticket-card générique — même dispositif que HowItWorksSection (le
 * "journal d'appel" imprimé en direct) mais paramétré par page cas d'usage,
 * pas de "TOTAL APPEL" chronométré (le temps est illustratif, pas une
 * mesure produite par le système : garder le total chiffré aurait suggéré
 * une précision non vérifiée).
 */
export function UseCaseSteps({ label, steps }: { label: string; steps: readonly UseCaseStep[] }) {
  return (
    <AnimatedSection style={{ padding: "0 20px", paddingBottom: "var(--space-section-y)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "clamp(34px, 5vw, 46px)", fontWeight: 600, marginBottom: 48, textAlign: "center" }}>
          Comment se déroule un appel
        </h2>

        <div className="ticket-card" style={{ padding: "34px 8px 30px", margin: "0 auto", maxWidth: 480 }}>
          <div style={{ textAlign: "center", marginBottom: 18, padding: "0 28px" }}>
            <p className="font-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ticket-ink)" }}>
              — HostIA · {label} —
            </p>
          </div>
          <hr className="ticket-divider" style={{ margin: "0 24px 20px" }} />

          {steps.map((step, i) => (
            <div key={`${step.time}-${step.title}`}>
              <div style={{ padding: "0 28px", display: "flex", gap: 16 }}>
                <p className="font-mono" style={{ fontSize: 13, fontWeight: 700, color: "var(--color-champagne)", minWidth: 44, flexShrink: 0, paddingTop: 1 }}>
                  {step.time}
                </p>
                <div style={{ paddingBottom: i === steps.length - 1 ? 0 : 18 }}>
                  <p className="font-mono" style={{ fontSize: 15, fontWeight: 700, color: "var(--color-ticket-ink)", marginBottom: 5, lineHeight: "20px" }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: "21px", color: "var(--color-ticket-ink-soft)" }}>{step.body}</p>
                </div>
              </div>
              {i < steps.length - 1 ? <hr className="ticket-divider" style={{ margin: "16px 24px" }} /> : null}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
