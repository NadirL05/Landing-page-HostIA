import type { ReactNode } from "react";
import { AnimatedSection } from "@/components/marketing/animated-section";

/** Section "explication du problème" — prose libre par page (spec §7 point 5), même typo que /ressources. */
export function UseCaseProblem({ children }: { children: ReactNode }) {
  return (
    <AnimatedSection style={{ padding: "0 20px", paddingBottom: "var(--space-section-y)" }}>
      <div className="prose-article" style={{ maxWidth: 720, margin: "0 auto" }}>
        {children}
      </div>
    </AnimatedSection>
  );
}
