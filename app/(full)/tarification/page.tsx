import { Package, Crown, Check, ArrowRight } from "lucide-react";
import Link from "next/link"
export default function Tarification() {
  return (
    <div>
      {/* BANNER */}
      <section className="py-20 text-center space-y-3 bg-[#1e7f4315]">
        <h1 className="text-[#333333] dark:text-white md:text-6xl text-4xl">
          Choisissez l’offre adaptée à votre gestion budgétaire
        </h1>
        <p className="text-gray-500 text-10 md:text-xl">
          Commencez gratuitement et passez au niveau supérieur lorsque vous
          souhaitez analyser vos finances plus en profondeur.
        </p>
      </section>

      {/* NOS OFFRES */}
      <section className="mt-30">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-10 px-5 md:px-10">
          <div className=" space-y-10 px-10 py-10 shadow-lg rounded-xl  dark:border dark:border-gray-700">
            <div className="bg-[#1e7f4318] hover:bg-[#1e7f4333] rounded-full w-15 h-15 flex items-center justify-center">
              <Package size={30} className="text-[#D7AD04]" />
            </div>
            <div className="space-y-3">
                <h1 className="text-3xl text-[#1e7f43]">Offre Standard — Gratuit</h1>
                <p className="text-10 text-[#444444]">Idéal pour commencer à organiser son budget simplement.</p>
            </div>
            <div className="space-y-3">
                <div className="flex gap-2"><Check className="text-[#D7AD04]"/>Gestion revenus & dépenses </div>
                <div className="flex gap-2"><Check className="text-[#D7AD04]"/>Tableau de bord </div>
            </div>
            <button className="bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-3 py-2 md:py-3 md:px-6 rounded-lg shadow-xl">
              Essayer gratuitement
            </button>
          </div>

          <div className="space-y-10 px-10 py-10 shadow-lg rounded-xl border border-green-300">
            <div className="bg-[#1e7f4318] hover:bg-[#1e7f4333] rounded-full w-15 h-15 flex items-center justify-center">
              <Crown size={30} className="text-[#D7AD04]" />
            </div>
            <div className="space-y-3">
                <h1 className="md:text-3xl text-2xl text-[#1e7f43]">Offre Premium — 2500 Fcfa/Mois</h1>
                <p className="text-10 text-[#444444]">Pour une gestion budgétaire plus avancée et personnalisée</p>
            </div>
            <div className="space-y-3">
                <div className="flex gap-2"><Check className="text-[#D7AD04]"/>Gestion revenus & dépenses </div>
                <div className="flex gap-2"><Check className="text-[#D7AD04]"/>Tableau de bord </div>
                <div className="flex gap-2"><Check className="text-[#D7AD04]"/>Export PDF / Excel</div>
                <div className="flex gap-2"><Check className="text-[#D7AD04]"/>Chatbot d’assistance</div>
            </div>
            <button className="bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-3 py-2 md:py-3 md:px-6 rounded-lg shadow-xl">
              Essayer le premium
            </button>
          </div>
        </div>
      </section>

      {/* SECTION DE PERSUASION */}
      <section className=" mt-20 text-center space-y-5 px-2">
        <p className="text-xl text-[#444444] dark:text-gray-500">
            L’offre Premium vous aide à aller au-delà du simple suivi pour réellement comprendre 
            vos habitudes financières et améliorer votre gestion de l’argent sur le long terme.
        </p>
      </section>

      {/* LAST CTA */}
      <section className="mt-20 text-center px-10 py-20 bg-[#1e7f4313] space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-6xl text-[#1e7f43] font-semibold">Commencez gratuitement, évoluez quand vous voulez</h1>
          <p className="text-xl text-[#444444] dark:text-gray-500">Testez l’application sans engagement et passez à Premium uniquement si vous en ressentez le besoin.</p>

        </div>
        <div className="flex items-center justify-center">
          <Link href="../inscription">
            <button className="flex gap-2 bg-[#1E7F43] dark:bg-[#D7AD04] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-4 py-2 md:py-3 md:px-6 rounded-xl shadow-xl">
              Créer mon compte
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
