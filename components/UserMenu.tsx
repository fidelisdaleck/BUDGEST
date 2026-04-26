'use client'

import { useAuth } from '@/hooks/useAuth'

export function UserInfo() {
  const { user, loading } = useAuth()

  if (loading) return null
  if (!user) return null

  return (
    <div className="text-sm">
      <p className="font-semibold">{user.email}</p>
      <p className="text-xs text-gray-500">
        {user.user_metadata?.name || 'Utilisateur'}
      </p>
    </div>
  )
}