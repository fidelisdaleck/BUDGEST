"use client";
import Input from "@/components/input";
import Link from "next/link"
import { HandCoins } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useState} from "react";
import { useRouter } from "next/navigation";
import { createSupabaseServer } from "@/lib/auth";
export default function Page({ className, ...props }: React.ComponentPropsWithoutRef<'div'> ) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  // Email signUp
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword){
      setError("Les mots de passe ne correspondent pas");
      setIsLoading(false);
      return;
    }

    const res = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password}),
    })

    const text = await res.text();
    console.log(text);

    const data = JSON.parse(text);
        
    if (!res.ok){
      setError(data.error || "Une erreur est survenue")
      setIsLoading(false)
      return
    }
    router.push("/connexion")
    setIsLoading(false)
  }


  return (
    <div className="">
      <div className="flex lg:flex-row flex-col gap-10 ">
        {/* CREATION DE COMPTE */}
        <section className=" flex flex-col justify-center w-full rounded-4xl px-5 md:px-16 space-y-2 bg-[url('/images/degrader.jpg')] bg-cover bg-center h-100 md:h-auto">
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
        <section className="space-y-3 pl-5 mx-2 px-10 lg:w-full border border-gray-300 rounded-3xl py-2">
          <div className="py-10 text-center">
            <h1 className="text-4xl md:text-5xl text-[#1e7f43]">Inscription</h1>
          </div>
          <div>
            <form className="space-y-4" onSubmit={handleSignUp}>
              <Input label="Nom:" 
                placeholder="Entrez votre nom" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
              />
              <Input
                label="Email:"
                type="email"
                placeholder="exemple@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Mot de passe:"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                label="Confirmer votre mot de passe:"
                type="password"
                placeholder="********"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
              <button disabled={isLoading} className="bg-[#1E7F43] hover:bg-[#ffffff] hover:border-2 hover:text-black border-[#1e7f43] text-white font-bold px-3 py-2 md:py-3 md:px-6 mb-2 rounded-lg w-full shadow-xl">
                {isLoading ? "Chargement..." : "Rejoignez nous"}
              </button>
            </form>
          </div>
          <button className="bg-[#333333] text-white font-bold px-3 py-2 md:py-3 md:px-6 rounded-lg w-full shadow-xl hover:bg-[#ffffff] hover:text-black hover:border-2 border-[#333333] flex items-center justify-center gap-2">
            <FaGoogle/>Inscrivez-vous avec Google
          </button>
          <div className="flex gap-1 pb-2 justify-center">
            <p>Vous avez deja un compte?</p>
            <Link href="/connexion" className="text-blue-500 underline">connectez-vous</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
