import type { CSSProperties } from "react";
import { PRICING_TIERS, CALENDLY_URL, SIGNUP_URL } from "@/lib/seo/schemas";

function CheckIcon({ ink }: { ink?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke={ink ? "var(--color-ticket-ink)" : "var(--color-champagne)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/*
 * Le plan recommandé n'est pas mis en avant par une pilule flottante : il
 * est rendu comme un vrai ticket de commande en papier crème posé au milieu
 * des deux autres formules "de nuit" — la carte que le patron reconnaît
 * immédiatement, celle qu'on scotche à côté de la caisse. Les deux autres
 * plans restent en verre sombre pour que le contraste papier/nuit fasse le
 * travail de hiérarchie, pas une bordure plus épaisse.
 */
export function PricingCards({ ctaLabel = "Choisir" }: { ctaLabel?: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "stretch" }}>
      {PRICING_TIERS.map((tier, i) => {
        const featured = i === 1;
        return (
          <div
            key={tier.name}
            className={featured ? "pricing-card pricing-card--featured ticket-card" : "pricing-card material-ultrathin"}
            style={{
              borderRadius: featured ? 6 : 28,
              padding: featured ? "40px 30px" : 32,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              marginTop: featured ? 10 : 0,
              marginBottom: featured ? 10 : 0,
            }}
          >
            {featured ? (
              <div
                className="ticket-stamp"
                style={{ position: "absolute", top: 20, right: 20, width: 74, height: 74, fontSize: 10, lineHeight: "12px", textAlign: "center", padding: 4 }}
              >
                Le plus
                <br />
                choisi
              </div>
            ) : null}
            <p
              className="font-mono"
              style={
                {
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: featured ? "var(--color-ticket-ink-soft)" : "var(--color-champagne)",
                  marginBottom: 12,
                } as CSSProperties
              }
            >
              {tier.name}
            </p>
            <div style={{ marginBottom: 12 }}>
              <span className="font-serif" style={{ fontSize: 48, fontWeight: 700, color: featured ? "var(--color-ticket-ink)" : "var(--text-primary)" }}>
                {tier.price} €
              </span>
              <span style={{ fontSize: 15, color: featured ? "var(--color-ticket-ink-soft)" : "var(--text-tertiary)", marginLeft: 4 }}>/mois</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: "20px", color: featured ? "var(--color-ticket-ink-soft)" : "var(--text-secondary)", marginBottom: 20 }}>
              {tier.description}
            </p>
            <hr className={featured ? "ticket-divider" : undefined} style={featured ? { marginBottom: 20 } : { border: "none", borderTop: "1px solid var(--border-subtle)", marginBottom: 20 }} />
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
              {tier.features.map((f) => (
                <li
                  key={f}
                  className={featured ? "font-mono" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    fontSize: 14,
                    color: featured ? "var(--color-ticket-ink)" : "var(--text-secondary)",
                    lineHeight: "20px",
                  }}
                >
                  <span style={{ marginTop: 2, flexShrink: 0 }}><CheckIcon ink={featured} /></span>
                  {f}
                </li>
              ))}
            </ul>
            {/*
             * Le paiement direct depuis la landing (tier.stripeUrl) créerait
             * un client Stripe sans organisation associée : le webhook
             * (/api/stripe/webhook) n'active un compte qu'à partir d'un
             * `orgId` posé par /api/stripe/checkout, lui-même authentifié.
             * On route donc vers l'inscription — le paiement se fait ensuite
             * depuis le dashboard, sur le flux qui pose réellement l'orgId.
             */}
            <a
              href={SIGNUP_URL}
              className={featured ? "btn-primary" : "btn-secondary"}
              style={{ width: "100%", marginTop: "auto", ...(featured ? { color: "var(--color-obsidian)" } : {}) }}
            >
              {ctaLabel} {tier.name}
            </a>
          </div>
        );
      })}
      <p style={{ gridColumn: "1 / -1", textAlign: "center", fontSize: 13, color: "var(--text-tertiary)", marginTop: 8 }}>
        Pas sûr du plan qui convient à votre restaurant ?{" "}
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
          Réservez un appel de 30 min
        </a>
        .
      </p>
    </div>
  );
}
