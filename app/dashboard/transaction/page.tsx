"use client"
import {Wallet, Bus} from "lucide-react"

export default function Depense() {
  return (
    <div>
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
