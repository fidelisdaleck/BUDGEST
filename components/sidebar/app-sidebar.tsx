import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";
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
          href="../dashboard"
          className="text-xl text-[#333333] hover:text-[#1E7F43] flex gap-2"
        >
          <LayoutDashboard size={25} className="text-[#D7AD04]" />
          Tableau de Bord
        </Link>
        <Link
          href="../dashboard/depense"
          className="text-xl text-[#333333] hover:text-[#1E7F43]  flex gap-2"
        >
          <Receipt size={25} className="text-[#D7AD04]" />
          Depenses & Revenus
        </Link>
        <Link
          href="../dashboard/exportation"
          className="text-xl text-[#333333] hover:text-[#1E7F43]  flex gap-2"
        >
          <Download size={25} className="text-[#D7AD04]" />
          Exportation
        </Link>
        <Link
          href="n"
          className="text-xl text-[#333333] hover:text-[#1E7F43]  flex gap-2"
        >
          <ChartLine size={25} className="text-[#D7AD04]" />
          Statistiques
        </Link>
        <Link
          href="n"
          className="text-xl text-[#333333] hover:text-[#1E7F43]  flex gap-2"
        >
          <BotMessageSquare size={25} className="text-[#D7AD04]" />
          Chatbot
        </Link>
      </SidebarContent>
      <SidebarFooter>
        <Link
          href="n"
          className="text-xl text-[#333333] hover:text-[#1E7F43]  flex gap-2"
        >
          <User size={25} className="text-[#D7AD04]" />
          Profil
        </Link>
        <Link
          href="n"
          className="text-xl text-[#333333] hover:text-[#1E7F43]  flex gap-2"
        >
          <LogOut size={25} className="text-[#d70404]" />
          Deconnexion
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
