import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-inter">

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-sm">🍽️</div>
          <span className="font-bold text-lg">HostIA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
          <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
        </div>
        <Link href="/dashboard"
          className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg">
          Essai gratuit
        </Link>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-800/40 rounded-full px-4 py-1.5 text-xs text-indigo-300 mb-6">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Nouveau — Gestion IA en temps réel
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Le dashboard tout-en-un<br />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            pour restaurateurs ambitieux
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Réservations, menu, stocks, personnel et caisse — tout dans un seul outil.
          Arrêtez de jongler entre 5 logiciels différents.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard"
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold px-8 py-3.5 rounded-xl text-base">
            Démarrer gratuitement →
          </Link>
          <a href="#features"
            className="border border-gray-700 hover:border-gray-500 transition-colors text-gray-300 font-medium px-8 py-3.5 rounded-xl text-base">
            Voir la démo
          </a>
        </div>
        <p className="text-gray-600 text-sm mt-4">Aucune carte bancaire requise · Setup en 5 minutes</p>

        {/* Dashboard preview */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f] z-10 pointer-events-none" style={{top: "60%"}} />
          <div className="bg-[#111120] border border-gray-800/60 rounded-2xl p-6 text-left shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-xs">🍽️</div>
              <span className="font-semibold text-sm">HostIA</span>
              <span className="ml-auto text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">● Live</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "CA aujourd'hui", value: "3 240 €", trend: "+12%" },
                { label: "Commandes", value: "47", trend: "+8%" },
                { label: "Panier moyen", value: "68 €", trend: "+3%" },
                { label: "Réservations", value: "12", trend: "+5%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0d0d1a] rounded-xl p-4">
                  <p className="text-gray-500 text-xs mb-1">{stat.label}</p>
                  <p className="text-white font-bold text-xl">{stat.value}</p>
                  <p className="text-green-400 text-xs mt-1">{stat.trend}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Table 1 · Occupée", "Table 2 · Libre", "Table 3 · Réservée", "Table 4 · Occupée", "Table 5 · Libre", "Table 6 · Occupée"].map((t, i) => (
                <div key={i} className={`rounded-lg p-3 text-xs font-medium ${
                  t.includes("Occupée") ? "bg-indigo-950/60 border border-indigo-800/40 text-indigo-300" :
                  t.includes("Réservée") ? "bg-amber-950/60 border border-amber-800/40 text-amber-300" :
                  "bg-gray-900/60 border border-gray-800/40 text-gray-500"
                }`}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tout ce dont vous avez besoin</h2>
          <p className="text-gray-400 text-lg">Un seul outil remplace tout votre stack actuel</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📅",
              title: "Réservations intelligentes",
              desc: "Gérez vos tables et vos réservations en temps réel. Plan de salle interactif, confirmation automatique, gestion des no-shows.",
              items: ["Plan de salle drag & drop", "Confirmation SMS/Email", "File d'attente automatique"]
            },
            {
              icon: "🍽️",
              title: "Menu & Caisse",
              desc: "Créez et modifiez votre menu en quelques clics. Prise de commande rapide, modificateurs, variantes, impression cuisine.",
              items: ["Menu digital en temps réel", "POS intégré", "Impression cuisine & bar"]
            },
            {
              icon: "📦",
              title: "Stocks & Personnel",
              desc: "Alertes de stock faible, gestion des fournisseurs, planning du personnel. Tout sous contrôle sans effort.",
              items: ["Alertes stock automatiques", "Gestion fournisseurs", "Planning & pointage"]
            },
          ].map((f) => (
            <div key={f.title} className="bg-[#111120] border border-gray-800/60 rounded-2xl p-6 hover:border-indigo-800/40 transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{f.desc}</p>
              <ul className="space-y-2">
                {f.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-indigo-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-gray-800/40 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "3h", label: "économisées par jour en moyenne" },
              { val: "−23%", label: "de pertes alimentaires" },
              { val: "+18%", label: "de réservations honorées" },
              { val: "5 min", label: "pour démarrer" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white mb-1">{s.val}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tarifs simples et transparents</h2>
          <p className="text-gray-400">Sans engagement · Annulable à tout moment</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-[#111120] border border-gray-800/60 rounded-2xl p-8">
            <p className="text-gray-400 text-sm mb-1">Starter</p>
            <p className="text-4xl font-bold mb-1">49 <span className="text-xl font-normal text-gray-400">€/mois</span></p>
            <p className="text-gray-500 text-sm mb-6">Idéal pour 1 établissement</p>
            <ul className="space-y-3 mb-8">
              {["Réservations illimitées", "Menu digital", "POS & commandes", "Jusqu'à 3 utilisateurs", "Support email"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-indigo-400">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/dashboard" className="block text-center border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors font-medium py-3 rounded-xl">
              Essayer gratuitement
            </Link>
          </div>
          <div className="bg-gradient-to-br from-indigo-950/60 to-purple-950/40 border border-indigo-700/50 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">Recommandé</div>
            <p className="text-gray-300 text-sm mb-1">Pro</p>
            <p className="text-4xl font-bold mb-1">99 <span className="text-xl font-normal text-gray-400">€/mois</span></p>
            <p className="text-gray-400 text-sm mb-6">Multi-établissements + IA</p>
            <ul className="space-y-3 mb-8">
              {["Tout le plan Starter", "Établissements illimités", "Gestion des stocks avancée", "Planning personnel", "Statistiques IA", "Support prioritaire 7j/7"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-200">
                  <span className="text-indigo-400">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/dashboard" className="block text-center bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold py-3 rounded-xl">
              Démarrer maintenant →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <div className="bg-gradient-to-br from-indigo-950/60 to-purple-950/40 border border-indigo-800/40 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à reprendre le contrôle ?</h2>
          <p className="text-gray-400 mb-8">Rejoignez les restaurateurs qui gèrent leur établissement sereinement.</p>
          <Link href="/dashboard"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold px-10 py-4 rounded-xl text-lg">
            Démarrer gratuitement — sans CB
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800/40 py-8 text-center text-gray-600 text-sm">
        <p>© 2026 HostIA · Restaurant Management · <a href="mailto:contact@agentimpact.fr" className="hover:text-gray-400">contact@agentimpact.fr</a></p>
      </footer>

    </div>
  );
}
