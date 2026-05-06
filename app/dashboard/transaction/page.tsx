"use client"
import {Wallet, Bus} from "lucide-react"
import AddTransaction from "@/components/add-transaction";

export default function Depense() {
  return (
    <div className="px-10">
      <div className="space-y-2 flex justify-between flex-col lg:flex-row gap-3 md:gap-5">
        <div>
          <h1 className="text-4xl text-[#333333]">Historique des transactions</h1>
          <p className="text-lg text-[#444444]">
            Consultez vos revenus et dépenses récents en un coup d&rsquo;œil.
          </p>
        </div>
        <div>
          <AddTransaction />
        </div>
      </div>
      {/* Briefing de transaction */}
      <section className="mt-5 flex items-center justify-center ">
        <div className="rounded-xl shadow-xl px-10 py-10">
          {/* premiere transaction */}
          <div className="mt-10 flex items-center justify-between gap-30 lg:gap-100">
            <div className="flex flex-row gap-5">
              {/* icones */}
              <div className="rounded-full bg-[#1e7f4330] p-6">
                <Wallet size={30} className="text-[#1e7f43]" />
              </div>
              {/* texte + date */}
              <div className="space-y-3">
                <h1 className="text-xl text-[#333333]">Salaire</h1>
                <p className="text-lg text-[#444444]">
                  Aujourd&rsquo;hui - 7:30
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-xl text-[#1e7f43]">+ 200 000 Fcfa</h1>
              <p className="text-lg text-[#1e7f43] bg-[#1e7f4330] py-1 text-center rounded-lg">
                Revenu
              </p>
            </div>
          </div>

          {/* Deuxieme transaction */}
          <div className="mt-10 flex justify-between">
            <div className="flex flex-row gap-5">
              {/* icones */}
              <div className="rounded-full bg-[#be2d2d30] p-6">
                <Bus size={30} className="text-[#be2d2d]" />
              </div>
              {/* texte + date */}
              <div className="space-y-3">
                <h1 className="text-xl text-[#333333]">Transport</h1>
                <p className="text-lg text-[#444444]">
                  Aujourd&rsquo;hui - 8:30
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-xl text-[#be2d2d]">- 2 000 Fcfa</h1>
              <p className="text-lg text-[#be2d2d] bg-[#be2d2d30] py-1 text-center rounded-lg">
                Depense
              </p>
            </div>
          </div>

          {/* Troisieme transaction */}
          <div className="mt-10 flex justify-between">
            <div className="flex flex-row gap-5">
              {/* icones */}
              <div className="rounded-full bg-[#be2d2d30] p-6">
                <Bus size={30} className="text-[#be2d2d]" />
              </div>
              {/* texte + date */}
              <div className="space-y-3">
                <h1 className="text-xl text-[#333333]">Alimentation</h1>
                <p className="text-lg text-[#444444]">
                  Aujourd&rsquo;hui - 12:40
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-xl text-[#be2d2d]">- 6 000 Fcfa</h1>
              <p className="text-lg text-[#be2d2d] bg-[#be2d2d30] py-1 text-center rounded-lg">
                Depense
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
