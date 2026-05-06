"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";

export default function AddBudget() {
  const [isOpen, setIsOpen] = useState(false);
  const [montant, setMontant] = useState("");
  const [mois, setMois] = useState("");
  const [limit_mois, setLimitMois] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const budgetData = {
      montant: parseFloat(montant), // Convertir en nombre
      mois: new Date(mois).toISOString(), // Convertir en format ISO date
      limit_mois: new Date(limit_mois).toISOString(),
    };
    const res = await fetch("/api/budget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(budgetData),
    });
    if (res.ok) {
      alert("Budget ajouté avec succès");
      setMontant("");
      setMois("");
      setLimitMois("");
      setIsOpen(false);
    } else {
      alert("Erreur lors de l'ajout du budget");
    }
  };

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
            <h2 className="text-xl font-semibold mb-4">Ajouter un Budget</h2>

            {/* FORMULAIRE */}
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                placeholder="Montant"
                className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none"
                value={montant}
                onChange={(e) => setMontant(e.target.value)}
              />
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="Debut">Date de debut:</label>
                  <input
                    type="date"
                    id="Debut"
                    className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none text-gray-400"
                    value={mois}
                    onChange={(e) => setMois(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="Fin">Date de fin:</label>
                  <input
                    type="date"
                    id="Fin"
                    className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none text-gray-400"
                    value={limit_mois}
                    onChange={(e) => setLimitMois(e.target.value)}
                  />
                </div>
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
  );
}