"use client";

import { useState } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { HOSTIA_FAQ } from "@/lib/seo/schemas";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 300ms var(--ease-spring)", flexShrink: 0 }}>
      <path d="M6.5 4l5 5-5 5" stroke="var(--text-tertiary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number[]>([]);
  const toggle = (i: number) => setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <AnimatedSection id="faq" style={{ padding: "0 20px 96px" }}>
      <JsonLd src="/schema/faq.json" />
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "clamp(34px, 5vw, 46px)", fontWeight: 600, marginBottom: 40 }}>
          Questions fréquentes
        </h2>
        <div>
          {HOSTIA_FAQ.map((item, i) => {
            const isOpen = open.includes(i);
            return (
              <div key={item.question} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="faq-question"
                  style={{ width: "100%", minHeight: 44, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                >
                  <span className="faq-question-text" style={{ fontSize: 16, fontWeight: 500, color: "var(--text-primary)", lineHeight: "22px", transition: "color var(--duration-fast) ease" }}>
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                {/* maxHeight volontairement large : la transition s'arrête à la
                    hauteur réelle du contenu (min(maxHeight, hauteur naturelle)),
                    donc aucune réponse — même longue — n'est jamais tronquée. */}
                <div style={{ maxHeight: isOpen ? 800 : 0, overflow: "hidden", transition: "max-height 350ms var(--ease-spring)" }}>
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
