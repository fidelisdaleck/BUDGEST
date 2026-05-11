"use client";

import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Categorie = {
  id: string;
  nom: string;
  montant_limit: string;
  user_id: string;
};

export default function AddDepense() {
  const [isOpen, setIsOpen] = useState(false);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [montant, setMontant] = useState("");
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [categorieId, setCategorieId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.log(error);
      } else {
        setCategories(data);
      }
    }

    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Utilisateur non connecté");
      setLoading(false);
      return;
    }

    const DepenseData = {
      titre,
      description,
      montant: parseInt(montant),
      user_id: user.id,
      categorie_id: categorieId,
    };

    const res = await fetch("/api/depense", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(DepenseData),
    });

    if (!categorieId) {
      alert("Choisissez une categorie");
      setLoading(false);
      return;
    }

    if (res.ok) {
      alert("Depense ajoutée avec succès");
      setTitre("");
      setDescription("");
      setMontant("");
    } else {
      alert("Erreur lors de l'ajout de la depense");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Bouton pour ouvrir */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#1e7f43] text-white font-bold px-4 py-2 rounded-lg flex gap-2 hover:bg-green-900"
      >
        <Plus size={20} /> Ajouter une depense
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
            <h2 className="text-xl font-semibold mb-4">Ajouter une depense</h2>

            {/* FORMULAIRE */}
            <form onSubmit={handleSubmit}>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Titre"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Montant"
                  value={montant}
                  onChange={(e) => setMontant(e.target.value)}
                  className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none"
                />

                <select
                  value={categorieId}
                  onChange={(e) => setCategorieId(e.target.value)}
                  className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none"
                >
                  <option value="">Choisir une categorie</option>

                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nom}
                    </option>
                  ))}
                </select>
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
