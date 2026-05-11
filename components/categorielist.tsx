"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Wallet } from "lucide-react";

type Categorie = {
  id: string;
  nom: string;
  montant_limit: number;
};

export default function CategorieList() {
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [loading, setLoading] = useState(true);

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

      setLoading(false);
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-500 mt-5 flex-col">
        Chargement des categories...
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {categories.map((categorie) => (
        <div
          key={categorie.id}
          className="bg-white rounded-2xl shadow-md border p-5 hover:shadow-xl transition"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-[#e8f5ec] flex items-center justify-center mb-4">
            <Wallet className="text-[#1e7f43]" />
          </div>

          {/* Nom */}
          <h2 className="text-xl font-bold text-gray-800">
            {categorie.nom}
          </h2>

          {/* Montant */}
          <p className="text-gray-500 mt-2">
            Limite :
          </p>

          <p className="text-2xl font-bold text-[#1e7f43] mt-1">
            {categorie.montant_limit} FCFA
          </p>
        </div>
      ))}
    </div>
  );
}