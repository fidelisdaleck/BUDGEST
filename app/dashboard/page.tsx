"use client";
import { Wallet, TrendingUp, TrendingDown, Target, Bus } from "lucide-react";

import Chart from "@/components/chartTemp";
import PieChart from "@/components/PieChart";
import AddBudget from "@/components/add-budget";
export default function Dashboard() {
  return (
    <div className="px-10">
      {/* ENTETE */}
      <section className="space-y-2 flex justify-between flex-col lg:flex-row gap-3 md:gap-5">
        <div>
          <h1 className="text-3xl md:text-5xl">
            Bienvenu sur BUDGEST,{" "}
            <span className="text-[#1e7f43]">Lithina</span>
          </h1>
          <p className="text-xl text-[#333333]">
            Voici un aperçu de votre situation financière actuelle.
          </p>
        </div>
        <div className="">
          <AddBudget />
        </div>
      </section>

      {/* RESUME */}
      <section className="mt-10 grid md:grid-cols-4 grid-cols-2 gap-10">
        <div className="space-y-3 rounded-lg shadow-md px-5 py-3">
          <div className="flex gap-2">
            <Wallet size={30} className="text-[#D7AD04]" />
            <h1 className="text-xl text-[#1e7f43]">Budget total</h1>
          </div>
          <p className="text-gray-500 text-10">
            Votre balance disponible pour ce mois:
          </p>
          <p className="text-[#1e507f] text-xl">200 000 Fcfa</p>
        </div>

        <div className="space-y-3 rounded-lg shadow-md px-5 py-3">
          <div className="flex gap-2">
            <TrendingUp size={30} className="text-[#D7AD04]" />
            <h1 className="text-xl text-[#1e7f43]">Revenus mois</h1>
          </div>
          <p className="text-gray-500 text-10">
            Total des revenus enregistrés:
          </p>
          <p className="text-[#1e507f] text-xl">120 000 Fcfa</p>
        </div>

        <div className="space-y-3 rounded-lg shadow-md px-5 py-3">
          <div className="flex gap-2">
            <TrendingDown size={30} className="text-[#D7AD04]" />
            <h1 className="text-xl text-[#1e7f43]">Depenses mois</h1>
          </div>
          <p className="text-gray-500 text-10">
            Total de vos dépenses mensuelles:
          </p>
          <p className="text-[#1e507f] text-xl">75 000 Fcfa</p>
        </div>

        <div className="space-y-3 rounded-lg shadow-md px-5 py-3">
          <div className="flex gap-2">
            <Target size={30} className="text-[#D7AD04]" />
            <h1 className="text-xl text-[#1e7f43]">Budget restant</h1>
          </div>
          <p className="text-gray-500 text-10">
            Votre budget encore disponible:
          </p>
          <p className="text-[#1e507f] text-xl">5 000 Fcfa</p>
        </div>
      </section>

      {/* Graphiques */}
      <section>
        <h1 className="mt-20 text-2xl md:text-4xl">
          Un apercu de vos statistiques
        </h1>
        <div className="mt-5 flex justify-between items-center lg:flex-row flex-col">
          <div className="space-y-10">
            <div className="">
              <Chart />
            </div>
            <h1 className="text-3xl text-gray-400">Répartition des revenus</h1>
          </div>
          <div className="space-y-10  md:mb-10 ">
            <div className="w-64 h-64 mx-auto">
              <PieChart />
            </div>
            <h1 className="text-3xl text-gray-400">Répartition des depenses</h1>
          </div>
        </div>
      </section>

      {/* Briefing de transaction */}

      <section className=" mb-10">
        <div className="rounded-xl shadow-xl px-10 py-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-4xl text-[#333333]">
              Transactions recentes.
            </h1>
            <p className="text-xl text-blue-500">Voir tout</p>
          </div>

          {/* premiere transaction */}
          <div className="mt-10 flex justify-between">
            <div className="flex flex-row gap-20">
              {/* icones */}
              <div className="rounded-full bg-[#1e7f4330] p-6">
                <Wallet size={30} className="text-[#1e7f43]" />
              </div>
              {/* texte + date */}
              <div className="space-y-3">
                <h1 className="text-2xl text-[#333333]">Salaire</h1>
                <p className="text-xl text-[#444444]">
                  Aujourd&rsquo;hui - 7:30
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl text-[#1e7f43]">+ 200 000 Fcfa</h1>
              <p className="text-xl text-[#1e7f43] bg-[#1e7f4330] py-1 text-center rounded-lg">
                Revenu
              </p>
            </div>
          </div>

          {/* Deuxieme transaction */}
          <div className="mt-10 flex justify-between">
            <div className="flex flex-row gap-20">
              {/* icones */}
              <div className="rounded-full bg-[#be2d2d30] p-6">
                <Bus size={30} className="text-[#be2d2d]" />
              </div>
              {/* texte + date */}
              <div className="space-y-3">
                <h1 className="text-2xl text-[#333333]">Transport</h1>
                <p className="text-xl text-[#444444]">
                  Aujourd&rsquo;hui - 8:30
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl text-[#be2d2d]">- 2 000 Fcfa</h1>
              <p className="text-xl text-[#be2d2d] bg-[#be2d2d30] py-1 text-center rounded-lg">
                Depense
              </p>
            </div>
          </div>

          {/* Troisieme transaction */}
          <div className="mt-10 flex justify-between">
            <div className="flex flex-row gap-20">
              {/* icones */}
              <div className="rounded-full bg-[#be2d2d30] p-6">
                <Bus size={30} className="text-[#be2d2d]" />
              </div>
              {/* texte + date */}
              <div className="space-y-3">
                <h1 className="text-2xl text-[#333333]">Alimentation</h1>
                <p className="text-xl text-[#444444]">
                  Aujourd&rsquo;hui - 12:40
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl text-[#be2d2d]">- 6 000 Fcfa</h1>
              <p className="text-xl text-[#be2d2d] bg-[#be2d2d30] py-1 text-center rounded-lg">
                Depense
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
