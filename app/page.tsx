const CAL_URL = "https://cal.com/nadir-lahyani/15min";

const FEATURES = [
  {
    emoji: "📞",
    title: "Prend tous les appels",
    color: "#6366f1",
    items: [
      "Voix française naturelle (ElevenLabs)",
      "Réception 24/7, même quand tu es fermé",
      "Réponse en 3 sonneries max, garanti",
      "Annulations et modifications gérées au tél.",
    ],
  },
  {
    emoji: "💳",
    title: "Encaisse les acomptes",
    color: "#10b981",
    items: [
      "Lien Stripe par SMS après chaque résa",
      "Acompte 5–10€ paramétrable",
      "Anti no-show natif",
      "Récupération automatique en cas d'annulation tardive",
    ],
  },
  {
    emoji: "🍳",
    title: "Notifie la cuisine",
    color: "#f59e0b",
    items: [
      "SMS / Slack / Telegram à chaque nouvelle résa",
      "Récap quotidien dans ton email",
      "Intégration Zenchef / La Fourchette / Google Calendar",
      "Tableau de bord temps réel",
    ],
  },
];

const PLANS = [
  {
    name: "Simple",
    price: "150",
    recommended: false,
    minutes: "250 min/mois",
    features: [
      "Réception en français naturel",
      "Prise de réservation complète",
      "Notification cuisine SMS / email",
      "Récap quotidien email",
      "Jusqu'à 10 appels simultanés",
    ],
    mailSubject: "HostIA%20-%20Forfait%20Simple",
  },
  {
    name: "Medium",
    price: "299",
    recommended: true,
    minutes: "1 100 min/mois",
    features: [
      "Tout Simple +",
      "Lien Stripe par SMS pour acompte",
      "Annulations / modifications par tél.",
      "Intégration Zenchef / La Fourchette",
      "Jusqu'à 20 appels simultanés",
    ],
    mailSubject: "HostIA%20-%20Forfait%20Medium",
  },
  {
    name: "Luxe",
    price: "549",
    recommended: false,
    minutes: "3 600 min/mois",
    features: [
      "Tout Medium +",
      "Personnalisation voix (clonage)",
      "Multilingue (FR / EN / ES)",
      "Up-sell automatisé (menu / vins)",
      "Webhook personnalisé",
      "Jusqu'à 30 appels simultanés",
    ],
    mailSubject: "HostIA%20-%20Forfait%20Luxe",
  },
];

const FAQ_ITEMS = [
  {
    q: "Combien de minutes pour mon restaurant ?",
    a: "Restaurant 30 couverts ≈ 1 200 min/mois → forfait Medium. Restaurant 50 couverts ≈ 2 400 min → Medium ou Luxe. Restaurant 60 couverts ≈ 3 600 min → Luxe. On te guide au call de qualification gratuit.",
  },
  {
    q: "Le surcoût 0,20€/min, c'est honnête ?",
    a: "0,20€/min, c'est ce qu'on facture. Au coût réel (ElevenLabs + IA + téléphonie), on est à ~0,04€/min. Notre marge sur les minutes hors forfait finance le développement et le support.",
  },
  {
    q: "Que se passe-t-il si je dépasse mon forfait ?",
    a: "On te facture 0,20€/min au-delà. Tu reçois une alerte à 80% du forfait. Si tu dépasses régulièrement, on te propose de monter de forfait — mais c'est ton choix.",
  },
  {
    q: "Mes clients vont sentir que c'est une IA ?",
    a: "95% des clients ne font pas la différence avec une voix ElevenLabs bien configurée. Le forfait Luxe permet même de cloner ta propre voix.",
  },
];

const STEPS = [
  { step: 1, emoji: "✍️", title: "Tu signes (5 min)", desc: "Devis → contrat → paiement 490€ setup + 1er mois via Stripe." },
  { step: 2, emoji: "⚙️", title: "On configure (jours 1–5)", desc: "Scripts personnalisés, intégrations Zenchef / Stripe, tests approfondis." },
  { step: 3, emoji: "🎤", title: "Tests en live (jour 6)", desc: "Tu appelles toi-même l'agent, on ajuste les scripts ensemble." },
  { step: 4, emoji: "🚀", title: "Go-live (jour 7)", desc: "Ton numéro est porté ou un nouveau numéro dédié est activé." },
  { step: 5, emoji: "📊", title: "Suivi mensuel", desc: "Récap hebdo, optimisations continues, facturation automatique." },
];

export default function LandingPage() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "HostIA — Agent vocal IA pour restaurants",
    description: "L'agent vocal IA qui prend tous les appels de ton restaurant.",
    url: "https://hostia.agentimpact.fr",
    provider: { "@type": "Organization", name: "AgentImpact", url: "https://agentimpact.fr" },
    offers: PLANS.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price,
      priceCurrency: "EUR",
    })),
  });

  return (
    <div className="min-h-screen bg-[#080d1a] text-white">
      {/* JSON-LD Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080d1a]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-lg">📞</div>
            <span className="text-xl font-bold">HostIA</span>
            <span className="hidden sm:inline-flex text-xs px-2.5 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/50">
              Agent vocal IA
            </span>
          </div>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-opacity text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Réserver 15 min
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse, #6366f1, transparent)" }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8 bg-indigo-950 border border-indigo-800/50 text-indigo-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Disponible 24/7 · Voix ElevenLabs FR · Setup 7 jours
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            L&apos;agent vocal IA qui répond<br className="hidden md:block" />
            à tous tes appels resto
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Prend les réservations. Encaisse les acomptes. Notifie la cuisine.{" "}
            <span className="text-indigo-300">Pendant que tu cuisines.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-opacity text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-[0_0_30px_rgba(99,102,241,0.35)]"
            >
              📞 Réserver 15 min de qualif
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center border border-white/10 hover:border-white/20 transition-colors text-gray-400 hover:text-white font-medium px-8 py-4 rounded-xl text-lg"
            >
              Voir la démo audio
            </a>
          </div>
          <p className="text-sm text-gray-600">
            Période d&apos;essai 14 jours · Sans engagement · Setup en 7 jours
          </p>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="py-10 bg-[#0d1425] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "0", label: "appel raté", sub: "100% des appels pris, même fermé" },
            { value: "3", label: "sonneries max", sub: "Décrochage rapide garanti contractuellement" },
            { value: "15–30%", label: "CA récupéré", sub: "Sur les résas ratées pendant le service" },
            { value: "7 j", label: "au go-live", sub: "De la signature au premier appel traité" },
          ].map(({ value, label, sub }) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-1">{value}</div>
              <div className="text-sm font-semibold mb-1">{label}</div>
              <div className="text-xs text-gray-600">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20" id="features">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que fait HostIA pour toi</h2>
            <p className="text-gray-400">Trois superpouvoir combinés dans un seul agent vocal.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map(({ emoji, title, color, items }) => (
              <div key={title} className="rounded-2xl p-8 bg-[#0d1425] border border-white/5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl" style={{ backgroundColor: `${color}18` }}>
                  {emoji}
                </div>
                <h3 className="text-xl font-bold mb-5">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="mt-0.5 shrink-0" style={{ color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-[#0d1425]" id="pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950 border border-indigo-800/50 text-indigo-300 mb-4">
              Tarification transparente
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choisis ton forfait</h2>
            <p className="text-gray-400">Mensuel, sans engagement, résiliable à tout moment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-8 flex flex-col relative bg-[#080d1a]"
                style={{
                  border: plan.recommended ? "2px solid #6366f1" : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: plan.recommended ? "0 0 30px rgba(99,102,241,0.2)" : undefined,
                }}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      RECOMMANDÉ
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-extrabold">{plan.price}€</span>
                  <span className="text-sm text-gray-600 ml-1">/mois</span>
                </div>
                <ul className="space-y-3 mt-5 mb-6 flex-1">
                  <li className="flex items-start gap-3 text-sm font-semibold text-indigo-300">
                    <span className="text-indigo-400 mt-0.5">✓</span>
                    {plan.minutes} incluses
                  </li>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-indigo-400 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-600 mb-5">Surcoût : 0,20€/min hors forfait</p>
                <a
                  href={`mailto:contact@agentimpact.fr?subject=${plan.mailSubject}`}
                  className={[
                    "w-full text-center font-semibold py-3 rounded-xl transition-opacity text-sm block",
                    plan.recommended
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
                      : "border border-white/10 text-gray-400 hover:border-white/20 hover:text-white",
                  ].join(" ")}
                >
                  {plan.recommended ? "⚡ " : ""}Choisir {plan.name}
                </a>
              </div>
            ))}
          </div>

          {/* Setup + conditions */}
          <div className="grid sm:grid-cols-3 gap-4 mb-14 text-center">
            {[
              { icon: "⚙️", title: "Setup 490€ one-shot", desc: "Configuration · intégrations · tests · go-live sous 7 jours" },
              { icon: "🛡️", title: "Garantie 14 jours", desc: "Remboursement intégral si HostIA ne convient pas" },
              { icon: "📅", title: "Sans engagement", desc: "Mensuel, résiliable à tout moment, préavis 30 jours" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-xl p-6 bg-[#111827] border border-white/5">
                <div className="text-2xl mb-3">{icon}</div>
                <div className="font-semibold text-sm mb-1">{title}</div>
                <div className="text-xs text-gray-500">{desc}</div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto" id="demo">
            <h3 className="text-xl font-bold text-center mb-8">Questions fréquentes</h3>
            <div className="space-y-3">
              {FAQ_ITEMS.map(({ q, a }) => (
                <details key={q} className="group rounded-xl bg-[#111827] border border-white/5 px-6">
                  <summary className="flex items-center justify-between py-4 text-sm font-medium cursor-pointer list-none select-none">
                    {q}
                    <span className="text-gray-500 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4">▼</span>
                  </summary>
                  <p className="text-sm text-gray-400 pb-5 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-20" id="garanties">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos garanties</h2>
            <p className="text-gray-400">On ne vend pas du vent. Si on rate nos engagements, tu ne paies pas.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📞", title: "Sous 3 sonneries", desc: "Ou on te crédite un mois gratuit", border: "#6366f130" },
              { icon: "✅", title: "95% résas correctes", desc: "Mesuré sur les 200 premiers appels", border: "#10b98130" },
              { icon: "⚡", title: "Setup 7 jours", desc: "Ou −50% sur le 1er mois", border: "#f59e0b30" },
              { icon: "🛡️", title: "14 jours remboursé", desc: "Période d'essai, sans question", border: "#8b5cf630" },
            ].map(({ icon, title, desc, border }) => (
              <div key={title} className="rounded-2xl p-6 text-center bg-[#0d1425]" style={{ border: `1px solid ${border}` }}>
                <div className="text-3xl mb-4">{icon}</div>
                <div className="font-bold text-sm mb-2">{title}</div>
                <div className="text-xs text-gray-400">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[#0d1425]" id="comment-ca-marche">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche</h2>
            <p className="text-gray-400">De la signature au premier appel traité : 7 jours.</p>
          </div>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-white/5 hidden sm:block" />
            <div className="space-y-8">
              {STEPS.map(({ step, emoji, title, desc }) => (
                <div key={step} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm shrink-0 z-10">
                    {step}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{emoji}</span>
                      <h4 className="font-bold">{title}</h4>
                    </div>
                    <p className="text-sm text-gray-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative overflow-hidden text-center" style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.25), transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">0 appel raté à partir de maintenant</h2>
          <p className="text-lg text-indigo-200 mb-10 max-w-xl mx-auto">
            15 minutes de qualif pour comprendre si HostIA est fait pour ton resto. Gratuit, sans engagement.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-opacity text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.4)]"
          >
            📞 Réserver 15 min de qualif →
          </a>
          <p className="mt-6 text-sm text-indigo-300">
            Période d&apos;essai 14 jours · Setup 7 jours · Annulable à tout moment
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#080d1a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm">📞</div>
                <span className="font-bold">HostIA</span>
              </div>
              <p className="text-sm text-gray-600">
                Agent vocal IA pour restaurateurs indépendants 30–60 couverts.{" "}
                Un produit <a href="https://agentimpact.fr" className="text-indigo-400 hover:text-indigo-300">AgentImpact</a>.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-3">
                <a href="mailto:contact@agentimpact.fr" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                  ✉️ contact@agentimpact.fr
                </a>
                <a href="https://www.linkedin.com/in/nadir-lahyani/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                  💼 LinkedIn — Nadir Lahyani
                </a>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                  📅 Réserver 15 min
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Navigation</h5>
              <div className="space-y-3">
                <a href="#features" className="block text-sm text-gray-500 hover:text-white transition-colors">Fonctionnalités</a>
                <a href="#pricing" className="block text-sm text-gray-500 hover:text-white transition-colors">Tarifs</a>
                <a href="#garanties" className="block text-sm text-gray-500 hover:text-white transition-colors">Garanties</a>
                <a href="#comment-ca-marche" className="block text-sm text-gray-500 hover:text-white transition-colors">Comment ça marche</a>
              </div>
            </div>
          </div>
          <div className="pt-6 text-sm text-center text-gray-700 border-t border-white/5">
            © {new Date().getFullYear()} AgentImpact — HostIA · Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}
