"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SIGNUP_URL } from "@/lib/seo/schemas";

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="material-thick"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        transition: "border-color 300ms var(--ease-spring), background 300ms var(--ease-spring)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 20px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          className="font-serif"
          style={{
            fontSize: scrolled ? 17 : 22,
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.3px",
            transition: "font-size 350ms var(--ease-spring)",
          }}
        >
          HostIA
        </Link>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/pricing" style={{ color: "var(--text-secondary)", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>
            Tarifs
          </Link>
          <Link href="/#faq" style={{ color: "var(--text-secondary)", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>
            FAQ
          </Link>
          <a href={SIGNUP_URL} className="btn-primary" style={{ height: 38, padding: "0 20px", fontSize: 14 }}>
            Essayer
          </a>
        </div>
      </div>
    </nav>
  );
}
