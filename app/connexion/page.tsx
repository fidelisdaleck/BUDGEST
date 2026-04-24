"use client";

import Input from "@/components/input";
import { HandCoins } from "lucide-react";
import Link from "next/link"
export default function Inscription() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-10 ">
        {/* CREATION DE COMPTE */}
        <section className=" flex flex-col justify-center w-full rounded-4xl px-5 md:px-16 space-y-3 bg-[url('/images/degrader.jpg')] bg-cover bg-center h-100 md:h-screen">
          <div className="flex gap-2 mb-10">
            <HandCoins size={30} className="text-[#1E7F43]"/>
            <Link href="/"><h1 className="text-2xl text-[#1E7F43]">BUDGEST</h1></Link>
          </div>
          <h1 className="text-3xl md:text-5xl text-[#333333]">
            Connectez vous à votre compte
          </h1>
          <p className="text-xl md:text-2xl text-[#444444]">
            Profitez sans tarder de notre application de gestion budgetaire.
          </p>
        </section>

        {/* FORMULAIRE */}
        <section className="space-y-3 pl-5 mx-2 px-10 lg:w-full border border-gray-300 rounded-3xl py-2">
          <div className="py-10 text-center">
            <h1 className="text-4xl md:text-5xl text-[#1e7f43]">Connexion</h1>
          </div>
          <div>
            <form className="space-y-4">
              <Input
                label="Email:"
                type="email"
                placeholder="exemple@gmail.com"
              />

              <Input
                label="Mot de passe:"
                type="password"
                placeholder="********"
              />
              <button className="bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-3 py-2 md:py-3 md:px-6 mb-2 rounded-lg w-full shadow-xl">
                Rejoignez nous
              </button>
            </form>
          </div>
            <button className="bg-[#333333] text-white font-bold px-3 py-2 md:py-3 md:px-6 rounded-lg w-full shadow-xl hover:bg-[#ffffff] hover:text-black hover:border-2 border-[#333333] flex items-center justify-center gap-2">
              Connectez-vous avec Google
            </button>
            <div className="flex gap-1 justify-center">
              <p>Pas de compte?</p>
              <Link href="/sign-up" className="text-blue-500 underline">inscrivez-vous</Link>
            </div>
        </section>
      </div>
    </div>
  );
}
