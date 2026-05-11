import { NextResponse } from "next/server";
import {createClient} from "@supabase/supabase-js"

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST (req:Request){

    const body = await req.json();
    const {titre, description, montant, user_id} = body;

    const dataToInsert = {
        titre: titre,
        description: description,
        montant: montant,
        user_id
    };

    const {error} = await supabase
    .from("depense")
    .insert({
        titre: dataToInsert.titre,
        description: dataToInsert.description,
        montant: dataToInsert.montant,
        user_id: dataToInsert.user_id
    });

    if (error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
    return NextResponse.json({message: "transaction ajoutée avec succès"}, {status: 200});
}