"use client";

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

  
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HandCoins,
  LayoutDashboard,
  Receipt,
  Download,
  BotMessageSquare,
  User,
  LogOut,
  ChartLine
} from "lucide-react";

export default function AppSidebar() {

  const { signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    const confirm = window.confirm("Se déconnecter ?");
    if (!confirm) return;

    await signOut()
    router.push('/')
  }

  const pathname = usePathname();
  const navLinkClass = (path: string) =>
    `text-lg px-4 py-1 flex gap-2 rounded-lg transition-all duration-100
    ${
      pathname === path
        ? "bg-[#1e7f4315] text-[#1E7F43]"
        : "text-[#333333] hover:text-[#1E7F43] hover:bg-[#1e7f430d]"
    }`;
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex gap-2 mt-5">
          <HandCoins size={30} className="text-[#1E7F43]" />
          <Link href="/..">
            <h1 className="text-2xl text-[#1E7F43]">BUDGEST</h1>
          </Link>
          
        </div>
      </SidebarHeader>

      <SidebarContent className="space-y-5 mt-10">
        <Link
          href="/dashboard"
          className={navLinkClass("/dashboard")}
        >
          <LayoutDashboard size={20} className="text-[#D7AD04]" />
          Tableau de Bord
        </Link>
        <Link
          href="/dashboard/transaction"
          className={navLinkClass("/dashboard/transaction")}
        >
          <Receipt size={20} className="text-[#D7AD04]" />
          Transactions
        </Link>
        <Link
          href="/dashboard/exportation"
          className={navLinkClass("/dashboard/exportation")}
        >
          <Download size={20} className="text-[#D7AD04]" />
          Exportation
        </Link>
        <Link
          href="/dashboard/statistiques"
          className={navLinkClass("/dashboard/statistiques")}
        >
          <ChartLine size={20} className="text-[#D7AD04]" />
          Statistiques
        </Link>
        <Link
          href="/dashboard/chatbot"
          className={navLinkClass("/dashboard/chatbot")}
        >
          <BotMessageSquare size={20} className="text-[#D7AD04]" />
          Chatbot
        </Link>
      </SidebarContent>
      <SidebarFooter>
        <Link
          href="/dashboard/profil"
          className={navLinkClass("/dashboard/profil")}
        >
          <User size={20} className="text-[#D7AD04]" />
          Profil
        </Link>
        <Link
          href="#"
          className={navLinkClass("#")}
          onClick={handleSignOut}
        >
          <LogOut size={20} className="text-[#d70404]" />
          Deconnexion
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
