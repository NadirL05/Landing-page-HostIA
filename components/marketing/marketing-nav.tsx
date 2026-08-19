"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SIGNUP_URL } from "@/lib/seo/schemas";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {open ? (
        <path d="M5 5l10 10M15 5L5 15" stroke="var(--text-primary)" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <>
          <path d="M3 6h14M3 10h14M3 14h14" stroke="var(--text-primary)" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/pricing", label: "Tarifs" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Referme le menu mobile si la fenêtre repasse en largeur desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="material-thick"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled || menuOpen ? "1px solid var(--border-subtle)" : "1px solid transparent",
        transition: "border-color var(--duration-normal) var(--ease-spring), background var(--duration-normal) var(--ease-spring)",
      }}
    >
      <nav
        aria-label="Navigation principale"
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

        {/* Desktop : liens inline, dès 640px. */}
        <div className="nav-links-desktop" style={{ display: "none", gap: 24, alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" style={{ color: "var(--text-secondary)", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>
              {link.label}
            </Link>
          ))}
          <a href={SIGNUP_URL} className="btn-primary" style={{ height: 38, padding: "0 20px", fontSize: 14 }}>
            Essayer
          </a>
        </div>

        {/* Mobile : bouton hamburger, sous 640px. */}
        <button
          type="button"
          className="nav-menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      {/*
        Toujours rendu dans le DOM (jamais conditionné par menuOpen) : ces
        liens doivent exister dans le HTML servi au premier rendu pour tout
        visiteur/crawler qui n'exécute pas de JS sur un viewport mobile —
        sinon le nav n'a plus aucun lien en dessous de 640px tant que React
        n'a pas hydraté. Seule la visibilité est pilotée en CSS via
        data-open, pas la présence dans le DOM.
      */}
      <div
        id="mobile-nav-panel"
        className="nav-menu-mobile material-thick"
        data-open={menuOpen}
        style={{
          borderTop: "1px solid var(--border-subtle)",
          padding: "16px 20px 24px",
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "var(--text-primary)",
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              padding: "12px 4px",
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            {link.label}
          </Link>
        ))}
        <a href={SIGNUP_URL} className="btn-primary" style={{ marginTop: 16, width: "100%" }}>
          Essayer
        </a>
      </div>
    </header>
  );
}
