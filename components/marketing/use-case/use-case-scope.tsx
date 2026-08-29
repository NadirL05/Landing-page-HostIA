import { AnimatedSection } from "@/components/marketing/animated-section";

interface UseCaseScopeProps {
  whatItDoes: readonly string[];
  whatItDoesNotReplace: readonly string[];
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }}>
      <path d="M3 8.5l3 3 7-7" stroke="#3a7a52" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }}>
      <path d="M3.5 8h9" stroke="var(--text-tertiary)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** "Ce que HostIA fait" / "Ce que HostIA ne remplace pas" — deux colonnes, honnêtes sur le périmètre par construction (spec §6/§21). */
export function UseCaseScope({ whatItDoes, whatItDoesNotReplace }: UseCaseScopeProps) {
  return (
    <AnimatedSection style={{ padding: "0 20px", paddingBottom: "var(--space-section-y)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
        <div className="use-case-scope-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
          <div>
            <h2 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 30px)", fontWeight: 600, marginBottom: 20, color: "var(--text-primary)" }}>
              Ce que HostIA fait
            </h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: 14, listStyle: "none", margin: 0, padding: 0 }}>
              {whatItDoes.map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: "23px", color: "var(--text-secondary)" }}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 30px)", fontWeight: 600, marginBottom: 20, color: "var(--text-primary)" }}>
              Ce que HostIA ne remplace pas
            </h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: 14, listStyle: "none", margin: 0, padding: 0 }}>
              {whatItDoesNotReplace.map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: "23px", color: "var(--text-secondary)" }}>
                  <DashIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
