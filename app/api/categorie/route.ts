import {NextResponse} from "next/server";
import {createClient} from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST (req:Request){

    const body = await req.json();
    const { nom, montant_limit, user_id } = body;

    const dataToInsert = {
        nom: nom,
        montant_limit: montant_limit,
        user_id
    };

    const {error} = await supabase
    .from("categories")
    .insert({
        nom: dataToInsert.nom,
        montant_limit: dataToInsert.montant_limit,
        user_id: dataToInsert.user_id
    });

    if (error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
    return NextResponse.json({message: "Categorie ajoutée avec succès"}, {status: 200});
}