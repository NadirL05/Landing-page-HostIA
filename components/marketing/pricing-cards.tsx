import { PRICING_TIERS, SIGNUP_URL } from "@/lib/seo/schemas";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--color-champagne)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PricingCards({ ctaLabel = "Choisir" }: { ctaLabel?: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, alignItems: "center" }}>
      {PRICING_TIERS.map((tier, i) => {
        const featured = i === 1;
        return (
          <div
            key={tier.name}
            className={featured ? "material-regular" : "material-ultrathin"}
            style={{
              borderRadius: 28,
              padding: 32,
              transform: featured ? "scale(1.04)" : "scale(1)",
              boxShadow: featured ? "0 8px 48px rgba(160,120,48,0.14)" : "0 2px 16px rgba(26,18,9,0.06)",
              position: "relative",
            }}
          >
            {featured ? (
              <div className="font-mono" style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--gradient-premium)", color: "var(--color-obsidian)", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 8, whiteSpace: "nowrap" }}>
                Le plus choisi
              </div>
            ) : null}
            <p className="font-mono" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 12 }}>
              {tier.name}
            </p>
            <div style={{ marginBottom: 12 }}>
              <span className="font-serif" style={{ fontSize: 48, fontWeight: 700, color: "var(--text-primary)" }}>{tier.price} €</span>
              <span style={{ fontSize: 15, color: "var(--text-tertiary)", marginLeft: 4 }}>/mois</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)", marginBottom: 24 }}>{tier.description}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
              {tier.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--text-secondary)", lineHeight: "20px" }}>
                  <span style={{ marginTop: 2, flexShrink: 0 }}><CheckIcon /></span>
                  {f}
                </li>
              ))}
            </ul>
            <a href={SIGNUP_URL} className={featured ? "btn-primary" : "btn-secondary"} style={{ width: "100%" }}>
              {ctaLabel} {tier.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}
