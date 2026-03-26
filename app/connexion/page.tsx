"use client";

import Input from "@/components/input";
import Link from "next/link"
export default function Inscription() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-10 ">
        {/* CREATION DE COMPTE */}
        <section className=" flex flex-col justify-center rounded-4xl px-5 md:px-16 space-y-3 bg-[url('/images/degrader.jpg')] bg-cover bg-center h-100 md:h-screen">
          <h1 className="text-3xl md:text-5xl text-[#333333]">
            Connectez vous à votre compte
          </h1>
          <p className="text-xl md:text-2xl text-[#444444]">
            Profitez sans tarder de notre application de gestion budgetaire.
          </p>
        </section>

        {/* FORMULAIRE */}
        <section className="space-y-5 px-10 md:px-20">
          <div className="px-16 md:px-30 py-10">
            <h1 className="text-3xl md:text-5xl text-[#1e7f43]">Connexion</h1>
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
              <button className="bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-3 py-2 md:py-3 md:px-6 mb-10 rounded-lg w-full shadow-xl">
                Rejoignez nous
              </button>
            </form>
          </div>
            <button className="bg-[#ffffff] border-2 border-[#333333] text-[#1e7f43] font-bold px-3 py-2 md:py-3 md:px-6 mb-10 rounded-lg w-full shadow-xl">
              <span className="text-2xl text-[#333333] pr-3">G</span> Google
            </button>
            <div className="flex gap-1">
              <p>Pas de compte?</p>
              <Link href="../inscription" className="text-blue-500 underline">inscrivez-vous</Link>
            </div>
        </section>
      </div>
    </div>
  );
}
