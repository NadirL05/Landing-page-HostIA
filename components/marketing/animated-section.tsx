"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function AnimatedSection({
  children,
  className = "",
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // On ne masque le contenu qu'une fois le JS monté — le HTML servi au
    // premier rendu (SSR, crawlers sans exécution JS) reste toujours
    // visible en clair, jamais opacity:0.
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass = mounted ? (visible ? "section-enter-active" : "section-enter") : "";

  return (
    <section ref={ref} id={id} style={style} className={`${revealClass} ${className}`}>
      {children}
    </section>
  );
}
