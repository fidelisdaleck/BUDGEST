"use client";
import Image from "next/image";
import { Check } from "lucide-react";

export default function Exportation() {
  return (
    <div className="px-10">
      {/* HERO SECTION */}
      <section>
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
      <section className="mt-20 flex items-center justify-center gap-20">
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
    </div>
  );
}
