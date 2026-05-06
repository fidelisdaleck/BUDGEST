import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req:Request){
    const body = await req.json();
    const { montant, mois, limit_mois } = body;

     const dataToInsert = {
      montant: montant,
      mois: mois,
      limit_mois: limit_mois
    };

    const { error } = await supabase
    .from("budgets")
    .insert({
        montant: dataToInsert.montant,
        mois: dataToInsert.mois,
        limit_mois: dataToInsert.limit_mois
    });

    if (error){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Budget ajouté avec succès" }, { status: 200 });
}