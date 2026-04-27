import { ProtectedRoute } from '@/components/ProtectedRoute'
import { UserInfo } from '@/components/UserMenu'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-[#1E7F43] text-white">
          {/* Votre sidebar ici */}
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 flex flex-col">
          {/* Header avec UserMenu */}
          <header className="border-b border-gray-200 p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <UserInfo />
          </header>

          {/* Contenu */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
