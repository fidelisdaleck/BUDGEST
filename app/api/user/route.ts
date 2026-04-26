import { withAuth, getCurrentUser } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import type { User } from '@supabase/supabase-js'

/**
 * Exemple: GET /api/user - Récupère les données de l'utilisateur actuellement connecté
 */
export const GET = withAuth(async (req: NextRequest, user: User) => {
  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name || 'N/A',
    },
  })
})

/**
 * Exemple POST sans protection - Utiliser withAuth pour protéger
 */
// export const POST = withAuth(async (req: NextRequest, user: User) => {
//   const data = await req.json()
//   // Traiter les données...
//   return NextResponse.json({ success: true, userId: user.id })
// })
