export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", padding: "32px 20px", textAlign: "center" }}>
      <p className="font-mono" style={{ fontSize: 12, color: "var(--text-tertiary)", letterSpacing: "0.04em" }}>
        © {new Date().getFullYear()} HostIA · Mentions légales · Politique de confidentialité
      </p>
    </footer>
  );
}
