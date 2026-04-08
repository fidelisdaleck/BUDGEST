"use client";
import Image from "next/image";
import Link from "next/link"
import { Check, Download } from "lucide-react";

export default function Exportation() {
  return (
    <div className="">
      {/* HERO SECTION */}
      <section className="px-10">
        <div className=" text-center space-y-3">
          <h1 className="text-2xl md:text-4xl text-[#1e7f43]">
            Exportez vos données financières en un clic
          </h1>
          <p className="text-10 md:text-xl text-[#444444]">
            Téléchargez un rapport clair et structuré de votre activité
            financière au format PDF pour conserver, analyser ou partager vos
            informations.
          </p>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR? */}
      <section className="mt-20 px-10 flex items-center justify-center gap-20">
        <div className="space-y-5">
          <h1 className="text-xl md:text-3xl text-[#333333]">
            Pourquoi exporter vos données ?
          </h1>
          <p className="text-8 md:text-xl text-[#444444]">
            Garder une trace de ses finances est essentiel pour mieux organiser
            son budget.
          </p>
          <div className="space-y-3">
            <p className="text-8 md:text-xl text-[#444444]">
              Lexportation PDF vous permet:
            </p>
            <div className="flex gap-2">
              <Check size={20} className="text-[#D7AD04]" />
              <p className="text-5 md:text-8 text-[#444444]">
                conserver un historique de vos transactions.
              </p>
            </div>
            <div className="flex gap-2">
              <Check size={20} className="text-[#D7AD04]" />
              <p className="text-5 md:text-8 text-[#444444]">
                analyser vos dépenses hors de l’application.
              </p>
            </div>
            <div className="flex gap-2">
              <Check size={20} className="text-[#D7AD04]" />
              <p className="text-5 md:text-8 text-[#444444]">
                partager facilement votre situation financière.
              </p>
            </div>
            <div className="flex gap-2">
              <Check size={20} className="text-[#D7AD04]" />
              <p className="text-5 md:text-8 text-[#444444]">
                archiver vos données en toute sécurité.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-xl"
            src="/images/solution.jpg"
            alt=" Hero section image"
            width={700}
            height={20}
            priority
          />
        </div>
      </section>

      {/* LAST CTA */}
      <section className="mt-10 text-center py-20 bg-[#1e7f4313] space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-6xl text-[#1e7f43] font-semibold">
            Génère ton rapport financier maintenant
          </h1>
          <p className="text-xl text-[#444444]">
            Le téléchargement démarre automatiquement après la génération du rapport.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link href="../inscription">
            <button className="flex gap-2 bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-4 py-2 md:py-3 md:px-6 rounded-xl shadow-xl">
              <Download size={20} />Exporter en PDF
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
