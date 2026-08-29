"use client";

import { useState } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { faqSchema, type FaqItem } from "@/lib/seo/schemas";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 300ms var(--ease-spring)", flexShrink: 0 }}>
      <path d="M6.5 4l5 5-5 5" stroke="var(--text-tertiary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * FAQ propre à chaque page cas d'usage — questions distinctes de HOSTIA_FAQ
 * (home), donc son propre FAQPage JSON-LD sans duplication mot pour mot.
 * Réponses toujours dans le HTML initial (aria-hidden masque pour les
 * lecteurs d'écran fermés, pas `hidden`/display:none) : jamais cachées
 * uniquement derrière un accordéon exécuté côté client, cf. spec §11.
 */
export function UseCaseFaq({ id, items }: { id: string; items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number[]>([]);
  const toggle = (i: number) => setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <AnimatedSection id={id} style={{ padding: "0 20px", paddingBottom: "var(--space-section-y)" }}>
      <JsonLd data={faqSchema(items)} />
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "clamp(34px, 5vw, 46px)", fontWeight: 600, marginBottom: 40 }}>
          Questions fréquentes
        </h2>
        <div>
          {items.map((item, i) => {
            const isOpen = open.includes(i);
            return (
              <div key={item.question} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel-${i}`}
                  id={`${id}-question-${i}`}
                  className="faq-question"
                  style={{ width: "100%", minHeight: 44, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                >
                  <span className="faq-question-text" style={{ fontSize: 16, fontWeight: 500, color: "var(--text-primary)", lineHeight: "22px", transition: "color var(--duration-fast) ease" }}>
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  id={`${id}-panel-${i}`}
                  role="region"
                  aria-labelledby={`${id}-question-${i}`}
                  aria-hidden={!isOpen}
                  style={{ maxHeight: isOpen ? 800 : 0, overflow: "hidden", transition: "max-height 350ms var(--ease-spring)" }}
                >
                  <p style={{ fontSize: 15, lineHeight: "23px", color: "var(--text-secondary)", paddingBottom: 18 }}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
