import Link from "next/link";

const footerLinkStyle: React.CSSProperties = {
  color: "inherit",
  textDecoration: "underline",
  textUnderlineOffset: 3,
};

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", padding: "32px 20px", textAlign: "center" }}>
      <p className="font-mono" style={{ fontSize: 12, color: "var(--text-tertiary)", letterSpacing: "0.04em" }}>
        © {new Date().getFullYear()} HostIA ·{" "}
        <Link href="/ressources" style={footerLinkStyle}>
          Ressources
        </Link>{" "}
        ·{" "}
        <Link href="/mentions-legales" style={footerLinkStyle}>
          Mentions légales
        </Link>{" "}
        ·{" "}
        <Link href="/confidentialite" style={footerLinkStyle}>
          Politique de confidentialité
        </Link>
      </p>
    </footer>
  );
}
