"use client";
import Image from "next/image";
import {
  Check,
  Rocket,
  MessageCircle,
  LayoutDashboard,
  Target,
  ArrowRight,
} from "lucide-react";

import Card2 from "@/components/card2";
export default function About() {
  return (
    <div>
      {/* BANNER */}
      <section className="mt-20 text-center space-y-3">
        <h1 className="text-[#333333] md:text-6xl text-4xl">
          A propos de nous, <span className="text-[#1e7f43]">BUDGEST</span>
        </h1>
        <p className="text-gray-500 text-10 md:text-xl">
          Découvrez la raison detre de notre application.
        </p>
      </section>

      {/* POURQUOI AVONS NOUS CREER */}

      <section className="mt-30 flex md:flex-row flex-col items-center justify-between md:gap-20 gap-10 px-10">
        <div className="space-y-5">
          <h2 className="text-[#1e7f43] md:text-5xl text-2xl">
            Pourquoi avons-nous créé cette application ?
          </h2>
          <p className="text-[#444444] text-10 md:text-xl">
            La gestion du budget personnel reste un défi pour de nombreuses
            personnes. Entre les dépenses quotidiennes, les abonnements et les
            imprévus, il devient difficile de garder une vision claire de sa
            situation financière.
          </p>

          <p className="text-[#444444] text-10 md:text-xl">
            Ce projet est né d’un constat simple : les outils existants sont
            souvent trop complexes ou peu adaptés aux besoins réels des
            utilisateurs. Nous avons donc conçu une application web qui met
            l’accent sur :
          </p>
          <div className="text-[#444444] text-10 md:text-xl">
            <div className="flex gap-2">
              <Check size={20} className="text-[#1e7f43]" />
              La simplicité d’utilisation.{" "}
            </div>
            <div className="flex gap-2">
              <Check size={20} className="text-[#1e7f43]" />
              La clarté des informations financières.
            </div>
            <div className="flex gap-2">
              <Check size={20} className="text-[#1e7f43]" />
              Un accompagnement accessible directement dans l’application.
            </div>
          </div>

          <p className="text-[#444444] text-10 md:text-xl">
            Notre objectif est d’offrir une solution pratique permettant à
            chacun de reprendre le contrôle de ses finances sans difficulté.
          </p>
        </div>
        <Image
          className="rounded-xl"
          src="/images/about1.jpg"
          alt=" Hero section image"
          width={500}
          height={20}
          priority
        />
      </section>

      {/* NOS VALEURS */}
      <section className="mt-30 grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-15 px-10">
        <Card2
          icon={<Rocket size={30} className="text-[#D7AD04]" />}
          title="Notre mission"
          description="
                Notre mission est de rendre la gestion du budget plus simple, plus accessible et plus claire pour tous.
                Beaucoup de personnes rencontrent des difficultés à suivre leurs dépenses ou à comprendre où va réellement leur argent.
                Notre application a été conçue pour répondre à ce besoin en proposant une solution intuitive qui permet de mieux organiser ses finances au quotidien.
            "
        />

        <Card2
          icon={<MessageCircle size={30} className="text-[#D7AD04]" />}
          title="Un assistant pour accompagner l’utilisateur"
          description="
                Afin de rendre l’utilisation de l’application encore plus simple, un chatbot intégré est disponible pour assister les utilisateurs.

                Cet assistant permet notamment de :

                répondre aux questions fréquentes,

                aider à naviguer dans l’application,

                fournir des conseils financiers simples,

                guider les utilisateurs dans l’utilisation des différentes fonctionnalités.
            "
        />

        <Card2
          icon={<LayoutDashboard size={30} className="text-[#D7AD04]" />}
          title="Une application centrée sur l’utilisateur"
          description="
                L’application a été conçue avec un objectif principal : offrir une expérience simple et intuitive.

                L’interface a été pensée pour permettre aux utilisateurs de trouver rapidement les informations dont 
                ils ont besoin et de gérer leurs finances sans difficulté.
            "
        />

        <Card2
          icon={<Target size={30} className="text-[#D7AD04]" />}
          title="Notre vision"
          description="
                Nous croyons que mieux comprendre son budget est la première étape vers une meilleure gestion financière.

                Grâce à cette application, chacun peut disposer d’un outil pratique pour suivre ses finances, analyser ses habitudes 
                et prendre des décisions plus éclairées.
            "
        />
      </section>

      {/* LAST CTA */}
      <section className="mt-30 text-center py-20 bg-gray-200 space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-6xl text-[#1e7f43] font-semibold">
            Découvrez l’application en pratique
          </h1>
          <p className="text-xl text-[#444444]">
            Explorez les fonctionnalités et commencez à organiser votre budget
            simplement grâce à notre application web.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="flex gap-2 bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-4 py-2 md:py-3 md:px-6 rounded-xl shadow-xl">
            Accéder à l’application
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
