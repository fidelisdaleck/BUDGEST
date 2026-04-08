"use client";
import Image from "next/image";
import {
  Wallet,
  PiggyBank,
  TriangleAlert,
  Folder,
  Calendar,
  BarChart3,
  Download,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import Card from "../components/card";
import Card1 from "../components/card1";
import Header from "../components/header";
import Footer from "../components/footer";
export default function Acceuil() {
  return (
    <div>
      <Header />
      <div className="px-5 md:px-2">
        {/* HERO SECTION */}
        <section className="flex lg:flex-row flex-col lg:items-center justify-between gap-10 px-5 md:px-15 py-10">
          <div className="space-y-7">
            <h1 className="text-5xl md:text-7xl text-[#1e7f43] font-bold">
              Reprenez le contrôle de votre budget, simplement.
            </h1>
            <p className="text-10 md:text-xl text-[#444444] ">
              Suivez vos revenus, analysez vos dépenses et organisez vos
              finances grâce à une application web claire, intuitive et
              accompagnée d’un assistant interactif.
            </p>
            <div className="flex gap-5">
              <Link href="../inscription">
                <button className="bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-3 py-2 md:py-3 md:px-6 rounded-full shadow-xl">
                  Commnencer
                </button>
              </Link>
              <Link href="../inscription">
                <button className="bg-[#D7AD04] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#D7AD04] text-white font-bold px-3 py-2 md:py-3 md:px-6 rounded-full shadow-xl">
                  Inscrivez-vous
                </button>
              </Link>
            </div>
          </div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="md:w-500 cursor-pointer"
          >
            <Image
              className="rounded-xl"
              src="/images/hero.jpg"
              alt=" Hero section image"
              width={600}
              height={20}
              priority
            />
          </motion.div>
        </section>

        {/* PROBLEME */}
        <section className="mt-20 text-center space-y-5">
          <h2 className="text-3xl md:text-4xl text-[#1e7f43] font-semibold">
            Votre argent disparaît sans que vous sachiez pourquoi ?
          </h2>
          <p className="text-xl text-[#444444] lg:px-80">
            Entre les dépenses quotidiennes, les abonnements et les imprévus, il
            devient difficile de garder une vision claire de son budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 lg:px-10 mt-20">
            <Card
              icon={<Wallet size={30} className="text-[#D7AD04]" />}
              description="Des dépenses mal controlées."
            />
            <Card
              icon={<PiggyBank size={30} className="text-[#D7AD04]" />}
              description="Peu d'économies."
            />
            <Card
              icon={<TriangleAlert size={30} className="text-[#D7AD04]" />}
              description="Une gestion stressante."
            />
          </div>
        </section>

        {/* SOLUTION */}
        <section className="flex lg:flex-row flex-col lg:items-center justify-between gap-10 lg:px-15 py-30">
          <div className="space-y-7">
            <h1 className="text-2xl md:text-4xl text-[#1e7f43] font-semibold">
              Une application pensée pour simplifier votre gestion financière.
            </h1>
            <p className="text-10 md:text-15 text-[#444444] ">
              Notre application web vous offre tous les outils nécessaires pour
              suivre, comprendre et organiser votre budget en un seul endroit.
            </p>
            <p className="text-10 md:text-15 text-[#444444] ">
              Plus besoin de fichiers compliqués ou de calculs manuels.
            </p>
            <p className="text-10 md:text-15 text-[#444444] ">
              Tout est centralisé dans une interface moderne et facile à
              utiliser.
            </p>
            <div className="flex gap-5">
              <Link href="../fonctionalites">
                <button className="bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-3 py-2 md:py-3 md:px-6 rounded-full shadow-xl">
                  Découvrez nos solutions
                </button>
              </Link>
            </div>
          </div>
          <Image
            className="rounded-xl"
            src="/images/solution.jpg"
            alt=" Hero section image"
            width={450}
            height={20}
            priority
          />
        </section>

        {/* FONCTIONALITES */}
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl text-[#1e7f43] font-semibold">
            Fonctionalités principales
          </h1>
          <p className="text-10 md:text-xl text-[#444444] mt-3">
            Découvrez nos fonctionalités principales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-20 mt-20">
            <Card1
              icon={<Wallet size={30} className="text-[#D7AD04]" />}
              title="Gérez vos revenus et dépenses facilement"
              description="Ajoutez, modifiez ou supprimez vos transactions en quelques clics et gardez un suivi précis de votre situation financière."
            />
            <Card1
              icon={<Folder size={30} className="text-[#D7AD04]" />}
              title="Organisez vos dépenses intelligemment"
              description="Classez vos dépenses par catégories pour identifier rapidement où va votre argent."
            />
            <Card1
              icon={<Calendar size={30} className="text-[#D7AD04]" />}
              title="Fixez votre budget"
              description="Définissez des limites de dépenses et gardez le contrôle tout au long du mois."
            />
            <Card1
              icon={<BarChart3 size={30} className="text-[#D7AD04]" />}
              title="Visualisez vos finances en un coup d'œil"
              description="graphiques mensuels,
            analyse par catégorie,
            suivi de l’évolution de votre budget."
            />
            <Card1
              icon={<Download size={30} className="text-[#D7AD04]" />}
              title="Exportez vos données quand vous voulez"
              description="Téléchargez vos informations financières en PDF ou Excel pour vos archives ou analyses personnelles."
            />
          </div>
        </section>

        {/* COMMENT CA MARCHE: Timeline */}
        <section className="py-20 mt-20 space-y-15 z-0">
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl  text-[#1e7f43] font-semibold">
              Comment ca marche?
            </h1>
            <p className="text-xl text-[#444444]">
              Suivez nos étapes pour obtimiser votre utilisation.
            </p>
          </div>
          <div className="relative ml-5 md:ml-20 pl-12 border-l-3 pr-10 md:pr-50  border-[#1e7f43] space-y-16">
            {/* ITEM */}
            <div className="relative mx-auto">
              <div
                className="absolute -left-22 top-10 w-8 h-8 rounded-full 
              border-2 border-[#333333] bg-white flex items-center justify-center"
              >
                <span className="text-[#1e7f43] font-bold">1</span>
              </div>

              <div className="bg-[#1e7f4315] rounded-xl p-8 hover:bg-[#1e7f4330] transition">
                <h2 className="text-xl font-semibold text-[#333333] mb-3">
                  Créez votre compte
                </h2>
                <p className="text-gray-500">
                  Inscription rapide et sécurisée.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="relative">
              <div
                className="absolute -left-22 top-10 w-8 h-8 rounded-full 
              border-2 border-[#333333] bg-white flex items-center justify-center"
              >
                <span className="text-[#1e7f43] font-bold">2</span>
              </div>

              <div className="bg-[#1e7f4315] rounded-xl p-8 hover:bg-[#1e7f4330] transition">
                <h2 className="text-xl font-semibold text-[#333333] mb-3">
                  Ajoutez vos transactions
                </h2>
                <p className="text-gray-500">
                  Enregistrez revenus et dépenses facilement.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="relative">
              <div
                className="absolute -left-22 top-10 w-8 h-8 rounded-full 
              border-2 border-[#333333] bg-white flex items-center justify-center"
              >
                <span className="text-[#1e7f43] font-bold">3</span>
              </div>

              <div className="bg-[#1e7f4315] rounded-xl p-8 hover:bg-[#1e7f4330] transition">
                <h2 className="text-xl font-semibold  mb-3">
                  Analysez votre budget
                </h2>
                <p className="text-gray-500">
                  Consultez vos graphiques et échangez avec le chatbot pour
                  mieux comprendre vos finances.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* LAST CTA */}
      <section className="text-center py-20 bg-[#1e7f4313] space-y-10">
        <div className="space-y-3 px-5">
          <h1 className="text-3xl md:text-6xl text-[#1e7f43] font-semibold">
            Pret à mieux gérer votre argent ?
          </h1>
          <p className="text-xl text-[#444444]">
            Commencez dès aujourd’hui et transformez votre manière de suivre vos
            finances.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link href="../inscription">
            <button className="flex gap-2 bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-4 py-2 md:py-3 md:px-6 rounded-xl shadow-xl">
              Créer mon compte gratuitement
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
