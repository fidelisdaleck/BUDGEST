'use client'

import { useState } from "react";
import {X, Plus} from "lucide-react";

export default function AddBudget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Bouton pour ouvrir */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#1e7f43] text-white font-bold px-4 py-2 rounded-lg flex gap-2 hover:bg-green-900"
      >
        <Plus size={20} /> Ajouter un budget
      </button>

      {/* MODALE */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/*  Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/*  Contenu */}
          <div className="relative bg-white rounded-xl w-full max-w-2xl p-6 z-10 shadow-lg">

            {/* Bouton fermer */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X size={20} />
            </button>

            {/* Titre */}
            <h2 className="text-xl font-semibold mb-4">
              Ajouter un Budget
            </h2>

            {/* FORMULAIRE */}
            <form>
              <input type = "text" placeholder="Montant" className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none"/>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <input type = "date" placeholder="Debut" className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none"/>
                <input type = "date" placeholder="Fin" className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none"/>
              </div>

              {/* Boutons */}
              <div className="col-span-2 flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Annuler
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1e7f43] text-white rounded-lg"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}