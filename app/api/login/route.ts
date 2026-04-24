import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 401 } // mieux que 400
      );
    }

    return NextResponse.json(
      { message: "Connexion réussie", user: data.user },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Erreur serveur" + err },
      { status: 500 }
    );
  }
}