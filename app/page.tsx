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
  BotMessageSquare,
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
        <section className="mt-10 flex lg:flex-row flex-col lg:items-center justify-between gap-10 px-5 md:px-10 py-10 w-full">
          <div className="space-y-7">
            <h1 className="text-5xl md:text-7xl text-[#1e7f43] dark:text-white font-bold">
              Reprenez le contrôle de votre <span className="dark:text-[#1e7f43]">budgest</span>, simplement.
            </h1>
            <p className="text-10 md:text-xl text-[#444444] dark:text-[#777777]">
              Suivez vos revenus, analysez vos dépenses et organisez vos
              finances grâce à une application web claire, intuitive et
              accompagnée d’un assistant interactif.
            </p>
            <div className="flex gap-5">
              <Link href="/sign-up">
                <button className="bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-3 py-2 md:py-3 md:px-6 rounded-full shadow-xl">
                  Commnencer
                </button>
              </Link>
              <Link href="/sign-up">
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
              className="rounded-xl w-full"
              src="/images/hero.jpg"
              alt=" Hero section image"
              width={500}
              height={20}
              priority
            />
          </motion.div>
        </section>

        {/* PROBLEME */}
        <section className="mt-20 text-center space-y-5">
          <h2 className="text-3xl md:text-4xl text-[#1e7f43] dark:text-[#3ac971] font-semibold">
            Votre argent disparaît sans que vous sachiez pourquoi ?
          </h2>
          <p className="text-xl text-[#444444] dark:text-[#777777] lg:px-10">
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
        <section className="mt-30">
          <h1 className="text-center text-2xl md:text-4xl text-[#1e7f43] dark:text-[#3ac971] font-semibold">
            Une application pensée pour simplifier votre gestion financière.
          </h1>
          <div className="space-y-10 flex lg:flex-row flex-col gap-10 lg:items-center justify-between lg:px-15 py-10 md:py-20">
            <div className="space-y-7 md:w-1/2">
              <p className="text-10 md:text-xl text-[#444444] dark:text-[#777777]">
                Notre application web vous offre tous les outils nécessaires
                pour suivre, comprendre et organiser votre budget en un seul
                endroit.
              </p>
              <p className="text-10 md:text-xl text-[#444444] dark:text-[#777777]">
                Plus besoin de fichiers compliqués ou de calculs manuels.
              </p>
              <p className="text-10 md:text-xl text-[#444444] dark:text-[#777777]">
                Tout est centralisé dans une interface moderne et facile à
                utiliser.
              </p>
              <div className="flex gap-5">
                <Link href="/fonctionalites">
                  <button className="bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-3 py-2 md:py-3 md:px-6 rounded-full shadow-xl">
                    Découvrez nos solutions
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
              className="rounded-xl w-full"
              src="/images/solution.jpg"
              alt=" Hero section image"
              width={400}
              height={20}
              priority
              />
            </div>
          </div>
        </section>

        {/* FONCTIONALITES */}
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl text-[#1e7f43] dark:text-[#3ac971] font-semibold">
            Fonctionalités principales
          </h1>
          <p className="text-10 md:text-xl text-[#444444] dark:text-[#777777] mt-3">
            Découvrez tous les outils mis à votre disposition pour suivre vos finances, analyser vos dépenses et organiser votre budget efficacement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-20 mt-20">
            <Card1
              icon={<Wallet size={30} className="text-[#D7AD04]" />}
              title="Gérez vos revenus et dépenses facilement"
              description="Ajoutez, modifiez ou supprimez vos depenses en quelques clics et gardez un suivi précis de votre situation financière."
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
              description="Graphiques mensuels,
            analyse par catégorie,
            suivi de l’évolution de votre budget."
            />
            <Card1
              icon={<Download size={30} className="text-[#D7AD04]" />}
              title="Exportez vos données quand vous voulez"
              description="Téléchargez vos informations financières en PDF ou Excel pour vos archives ou analyses personnelles."
            />
            <Card1
              icon={<BotMessageSquare size={30} className="text-[#D7AD04]" />}
              title="Assistant de discussion intégré"
              description="L’application intègre également un module de chatbot permettant d’accompagner l’utilisateur dans l’utilisation de la plateforme."
            />
          </div>
        </section>

        {/* COMMENT CA MARCHE: Timeline */}
        <section className="py-20 mt-20 space-y-15 z-0">
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl  text-[#1e7f43] dark:text-[#d4ad04] font-semibold">
              Comment utilise t-on BUDGEST?
            </h1>
            <p className="text-xl text-[#444444] dark:text-[#777777]">
              Suivez nos 03 étapes principales pour obtimiser votre utilisation.
            </p>
          </div>
          <div className="relative ml-5 md:ml-20 pl-12 border-l-3 px-10  border-[#1e7f43] space-y-16">
            {/* ITEM */}
            <div className="relative mx-auto">
              <div
                className="absolute -left-22 top-10 w-8 h-8 rounded-full 
              border-2 border-[#333333] bg-white flex items-center justify-center"
              >
                <span className="text-[#1e7f43] dark:text-[#3ac971] font-bold">1</span>
              </div>

              <div className="bg-[#1e7f4315] rounded-xl p-8 hover:bg-[#1e7f4330] transition">
                <h2 className="text-xl font-semibold text-[#333333] dark:text-[#f2f2f2] mb-3">
                  Créez votre compte
                </h2>
                <p className="text-gray-500 dark:text-[#f2f2f2]">
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
                <span className="text-[#1e7f43] dark:text-[#3ac971] font-bold">2</span>
              </div>

              <div className="bg-[#1e7f4315] rounded-xl p-8 hover:bg-[#1e7f4330] transition">
                <h2 className="text-xl font-semibold text-[#333333] dark:text-[#f2f2f2] mb-3">
                  Ajoutez vos transactions
                </h2>
                <p className="text-gray-500 dark:text-[#f2f2f2]">
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
                <span className="text-[#1e7f43] dark:text-[#3ac971] font-bold">3</span>
              </div>

              <div className="bg-[#1e7f4315] rounded-xl p-8 hover:bg-[#1e7f4330] transition">
                <h2 className="text-xl font-semibold  mb-3">
                  Analysez votre budget
                </h2>
                <p className="text-gray-500 dark:text-[#f2f2f2]">
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
          <h1 className="text-3xl md:text-6xl text-[#1e7f43] dark:text-[#3ac971] font-semibold">
            Pret à mieux gérer votre argent ?
          </h1>
          <p className="text-xl text-[#444444] dark:text-gray-500">
            Commencez dès aujourd’hui et transformez votre manière de suivre vos
            finances.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link href="../inscription">
            <button className="flex gap-2 bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-4 py-2 md:py-3 md:px-6 rounded-xl shadow-xl dark:bg-[#d7ad04] dark:hover:bg-[#ffffff] dark:border-[#d7ad04]">
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
