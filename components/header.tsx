"use client";

import Link from "next/link";
import { useState } from "react";
import {useTheme} from "next-themes";
import { usePathname } from "next/navigation";
import {X, Menu, Moon, Sun, Languages, HandCoins} from "lucide-react"

export default function Header() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const navLinkClass = (path: string) =>
    `text-xl px-4 py-2 rounded-lg transition-all duration-100
    ${
      pathname === path
        ? "bg-[#1e7f4315] text-[#1E7F43]"
        : "text-[#333333] hover:text-[#1E7F43] hover:bg-[#1e7f430d] dark:text-gray-300 dark:hover:text-[#1E7F43] dark:hover:bg-[#1e7f4340]"
    }`;


  return (
    <header className="flex items-center justify-between px-8 py-3 shadow-lg sticky top-0 w-full bg-white z-50 dark:bg-[#000000]">
      {/* logo */}
      <div className="flex gap-2">
        <HandCoins size={30} className="text-[#1E7F43]"/>
        <Link href="/"><h1 className="text-2xl text-[#1E7F43]">BUDGEST</h1></Link>
      </div>
      {/* Menu desktop */}
      <nav className="hidden md:flex gap-10">
        <Link href="/" className={navLinkClass("/")}>
          Acceuil
        </Link>
        <Link href="/about" className={navLinkClass("/about")}>
          A propos
        </Link>
        <Link href="/fonctionalites" className={navLinkClass("/fonctionalites")}>
          Fonctionalités
        </Link>
        <Link href="/tarification" className={navLinkClass("/tarification")}>
          Tarification
        </Link>
      </nav>

      {/* CTA */}
      <div className="flex items-center gap-4">

        {/* BUTTON LIGHT/DARK */}
          <button onClick={() => setTheme(isDark? "light" : "dark")}
          className="bg-[#1e7f4315] rounded-full px-2 py-2 hover:bg-[#1e7f433b]"
          >
            {isDark ? <Sun size={20} className="text-[#1E7F43]"/> 
            : (<Moon size={20} className="text-[#1E7F43]"/>)}
          </button>

          <div className="bg-[#d7ad0415] rounded-full px-2 py-2 hover:bg-[#d7ad043b]"><Languages size={20} className="text-[#997800]"/></div>
        <div className="hidden md:block">
          <Link href="../connexion">
            <button className="bg-[#1E7F43] hover:bg-[#0f3d22] text-white font-bold py-2 px-4 rounded-full shadow-xl">
              Se connecter
            </button>
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!IsMenuOpen)}
        >
          {IsMenuOpen ? (
            <X className="w-6 h-6 text-[#111827]" />
          ) : (
            <Menu className="w-6 h-6 text-[#111827]" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {IsMenuOpen && (
        <div className="absolute top-full left-0 w-full px-3 py-5 bg-white shadow-md md:hidden">
          <nav className="flex flex-col gap-2 ">
            <Link href="/" className={navLinkClass("/")}>
              Acceuil
          </Link>
            <Link href="/about" className={navLinkClass("/about")}>
              A propos
            </Link>
            <Link href="/fonctionalites" className={navLinkClass("/fonctionalites")}>
              Fonctionalités
            </Link>
            <Link href="/tarification" className={navLinkClass("/tarification")}>
              Tarification
            </Link>
          </nav>
            <Link href="../connexion">
            <button className="bg-[#1E7F43] hover:bg-[#0f3d22] text-white font-bold py-2 px-4 rounded-full w-full shadow-xl">
              Se connecter
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
