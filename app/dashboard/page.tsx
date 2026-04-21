"use client";
import { Wallet, TrendingUp, TrendingDown, Target, Plus, Download } from "lucide-react";
import Input from "@/components/input";

export default function Dashboard() {
  return (
    <div className="px-10">
      {/* ENTETE */}
      <section className="space-y-2 flex justify-between md:flex-row flex-col gap-5">
        <div>
          <h1 className="text-3xl md:text-5xl">
            Bienvenu sur BUDGEST, <span className="text-[#1e7f43]">Lithina</span>
          </h1>
          <p className="text-xl text-[#333333]">Voici un aperçu de votre situation financière actuelle.</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="flex gap-2 bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-4 py-2 md:py-3 md:px-6 rounded-xl shadow-xl">
            <Plus size={20} />
            Ajouter un revenu
          </button>
        </div>
      </section>

      {/* RESUME */}
      <section className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-10">
        <div className="space-y-3 border hover:border-2 border-green-200 rounded-lg px-2 py-3">
          <div className="flex gap-2"><Wallet size={30} className="text-[#D7AD04]"/><h1 className="text-2xl text-[#1e7f43]">Solde actuel</h1></div>
          <p className="text-[#333333] text-10">Votre balance disponible</p>
          <p className="text-[#1e507f] text-xl">200 000 Fcfa</p>
        </div>

        <div className="space-y-3 border hover:border-2 border-orange-200 rounded-lg px-2 py-3">
          <div className="flex gap-2"><TrendingUp size={30} className="text-[#D7AD04]"/><h1 className="text-2xl text-[#1e7f43]">Revenus du mois</h1></div>
          <p className="text-[#333333] text-10">Total des revenus enregistrés ce mois-ci</p>
          <p className="text-[#1e507f] text-xl">120 000 Fcfa</p>
        </div>

        <div className="space-y-3 border hover:border-2 border-red-200 rounded-lg px-2 py-3">
          <div className="flex gap-2"><TrendingDown size={30} className="text-[#D7AD04]"/><h1 className="text-2xl text-[#1e7f43]">Depenses du mois</h1></div>
          <p className="text-[#333333] text-10">Total de vos dépenses mensuelles</p>
          <p className="text-[#1e507f] text-xl">75 000 Fcfa</p>
        </div>

         <div className="space-y-3 border hover:border-2 border-yellow-200 rounded-lg px-2 py-3">
          <div className="flex gap-2"><Target size={30} className="text-[#D7AD04]"/><h1 className="text-2xl text-[#1e7f43]">Budget restant</h1></div>
          <p className="text-[#333333] text-10">Votre budget encore disponible</p>
          <p className="text-[#1e507f] text-xl">190 000 Fcfa</p>
        </div>
      </section>

      {/* CHATBOT */}
      <section className="mt-20">
        <div className=" text-center space-y-3">
          <h1 className="text-4xl text-[#1e7f43]">Assistant d’aide</h1>
          <p className="text-xl text-[#444444]">Besoin d’aide ? Discutez avec l’assistant pour obtenir des informations sur l’utilisation de l’application ou des conseils simples de gestion budgétaire.</p>
        </div>
        <div className="mt-10 space-y-3">
          <Input label="Votre question:" placeholder="Posez votre question ici..." />
        </div>
      </section>

      {/* CTA */}
     <section className="mt-20">
      <h1 className="text-4xl text-center text-[#1e7f43]">Actions rapides</h1>
       <div className="mt-10 flex justify-between md:flex-row flex-col">
          <div className="flex items-center justify-center">
            <button className="flex gap-2 bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-4 py-2 md:py-3 md:px-6 rounded-xl shadow-xl">
              <Plus size={20} />
              Ajouter un revenu
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex gap-2 bg-[#d6131d] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#d6131d] text-white font-bold px-4 py-2 md:py-3 md:px-6 rounded-xl shadow-xl">
              <Plus size={20} />
              Ajouter une depense
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex gap-2 bg-[#D7AD04] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#D7AD04] text-white font-bold px-4 py-2 md:py-3 md:px-6 rounded-xl shadow-xl">
              <Download  size={20} />
              Exporter des donnees
            </button>
          </div>
        </div>
     </section>
    </div>
  );
}
