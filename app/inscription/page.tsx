"use client";
import Input from "@/components/input";
import { HandCoins } from "lucide-react";
import Link from "next/link"
import { FaGoogle } from "react-icons/fa";
export default function Inscription() {
  return (
    <div className="">
      <div className="flex lg:flex-row flex-col gap-10">
        {/* CREATION DE COMPTE */}
        <section className=" flex flex-col justify-center rounded-4xl px-5 md:px-16 space-y-2 bg-[url('/images/degrader.jpg')] bg-cover bg-center h-100 md:h-screen">
          <div className="flex gap-2 mb-10">
            <HandCoins size={30} className="text-[#1E7F43]"/>
            <Link href="/"><h1 className="text-2xl text-[#1E7F43]">BUDGEST</h1></Link>
          </div>
          <h1 className="text-3xl md:text-5xl text-[#333333]">
            Créez votre compte gratuitement
          </h1>
          <p className="text-xl md:text-2xl text-[#444444]">
            Gérer mieux votre argent facilement grace à nous.
          </p>
        </section>

        {/* FORMULAIRE */}
        <section className="space-y-3 px-10 md:px-20">
          <div className="px-16 md:px-30 py-10">
            <h1 className="text-3xl md:text-5xl text-[#1e7f43]">Inscription</h1>
          </div>
          <div>
            <form className="space-y-4">
              <Input label="Nom:" placeholder="Entrez votre nom" />
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
          <button className="bg-[#ffffff] border-2 border-[#333333] font-bold px-3 py-2 md:py-3 md:px-6 rounded-lg w-full shadow-xl">
            <FaGoogle/>Google
          </button>
          <div className="flex gap-1 pb-20">
            <p>Vous avez deja un compte?</p>
            <Link href="../connexion" className="text-blue-500 underline">connectez-vous</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
