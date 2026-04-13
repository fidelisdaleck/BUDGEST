import Card2 from "@/components/card2";
import {
  BotMessageSquare,
  LogIn,
  Calendar,
  ArrowRight,
  ListPlus,
  Folder,
  ChartLine,
} from "lucide-react"
import Link from "next/link"

export default function Fonctionalites() {
  return (
    <div>
      {/* BANNER */}
      <section className="text-center space-y-3 px-5 py-20 bg-[#1e7f4315]">
        <h1 className=" text-[#333333] dark:text-white md:text-6xl text-4xl">
          Des outils pensés pour simplifier votre gestion budgétaire
        </h1>
        <p className="text-gray-500 text-10 md:text-xl">
          Découvrez tous les outils mis à votre disposition pour suivre vos
          finances, analyser vos dépenses et organiser votre budget
          efficacement.
        </p>
      </section>

      {/* NOS FONCTIONALITES */}
      <section className="mt-30 grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-15 px-10 mb-10">
        <Card2
          icon={<LogIn size={30} className="text-[#D7AD04]" />}
          title="Inscription et connexion sécurisées"
          description="
            Créez votre compte en toute simplicité et accédez à votre espace personnel grâce à un système d’authentification sécurisé.
            Vos données restent accessibles uniquement par vous, pour une utilisation en toute confiance.
            "
        />

        <Card2
          icon={<ListPlus size={30} className="text-[#D7AD04]" />}
          title="Ajout et gestion des revenus et dépenses"
          description="
            Enregistrez facilement vos transactions financières :

            ajout de revenus,
            ajout de dépenses,
            modification ou suppression des données.
            Gardez un suivi précis et à jour de votre situation financière.
            "
        />

        <Card2
          icon={<Folder size={30} className="text-[#D7AD04]" />}
          title="Catégorisation des dépenses"
          description="
            Classez vos dépenses par catégories afin de mieux comprendre vos habitudes financières.
            Identifiez rapidement les domaines où vous dépensez le plus et ajustez votre budget en conséquence.
            "
        />

        <Card2
          icon={<Calendar size={30} className="text-[#D7AD04]" />}
          title="Définition d’un budget mensuel"
          description="
            Fixez des objectifs de dépenses mensuels pour mieux contrôler vos finances.
            L’application vous aide à rester organisé et à éviter les dépassements.
            "
        />

        <Card2
          icon={<ChartLine size={30} className="text-[#D7AD04]" />}
          title="Tableau de bord interactif"
          description="
            Accédez à un tableau de bord clair et visuel comprenant :
            graphiques mensuels,
            répartition des dépenses par catégorie,
            évolution de votre budget.
            Toutes vos informations financières réunies en un seul endroit.
            "
        />

        <Card2
          icon={<BotMessageSquare size={30} className="text-[#D7AD04]" />}
          title="Assistant de discussion intégré"
          description="
            Un chatbot est disponible directement dans l’application pour vous accompagner lors de votre utilisation.
            "
        />
      </section>

      {/* LAST CTA */}
      <section className="mt-30 text-center py-20 px-10 bg-[#1e7f4313] space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-6xl text-[#1e7f43] font-semibold">Prenez le contrôle de votre budget dès aujourd’hui</h1>
          <p className="text-xl text-gray-500">Découvrez toutes les fonctionnalités et commencez à organiser vos finances simplement.</p>

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
