"use client";

import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AddCategorie() {
  const [isOpen, setIsOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [montant, setMontant] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // Récupérer la session au chargement
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Écouter les changements d'authentification
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!session) {
      alert("Utilisateur non connecté");
      setLoading(false);
      return;
    }

    const CategorieData = {
      nom,
      montant_limit: parseInt(montant),
      user_id: session.user.id,
    };

    // Récupérer le token
    const token = session.access_token;

    const res = await fetch("/api/categorie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(CategorieData),
    });

    if (res.ok) {
      alert("Categorie ajoutée avec succès");
      setNom("");
      setMontant("");
      setIsOpen(false);
    } else {
      const error = await res.json();
      alert(`Erreur: ${error.error || "Erreur lors de l'ajout"}`);
    }

    setLoading(false);
  };

  // ... reste du JSX identique
}
  return (
    <>
      {/* Bouton */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#1e7f43] text-white font-bold px-4 py-2 rounded-lg flex gap-2 hover:bg-green-900"
      >
        <Plus size={20} /> Ajouter une nouvelle categorie
      </button>

      {/* MODALE */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-xl w-full max-w-2xl p-6 z-10 shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              Ajouter une categorie
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mt-5 space-y-2">
                <label className="block font-medium text-[#333333]">
                  Nom de la categorie:
                </label>
                <input
                  type="text"
                  className="border p-2 w-full rounded-lg"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>

              <div className="mt-5 space-y-2">
                <label className="block font-medium text-[#333333]">
                  Montant limite:
                </label>
                <input
                  type="number"
                  className="border p-2 w-full rounded-lg"
                  value={montant}
                  onChange={(e) => setMontant(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Annuler
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 rounded-lg text-white ${
                    loading ? "bg-gray-400" : "bg-[#1e7f43]"
                  }`}
                >
                  {loading ? "Ajout en cours..." : "Ajouter"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}