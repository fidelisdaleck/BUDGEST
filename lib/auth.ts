import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import type { User } from '@supabase/supabase-js'

/**
 * Crée un client Supabase pour les routes API
 */
export async function createSupabaseServer() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          } catch {
            // Ignorer les erreurs lors de la définition des cookies
          }
        },
      },
    }
  )
}

/**
 * Middleware de protection d'API - Vérifie l'authentification
 */
export async function withAuth(handler: (req: NextRequest, user: User) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    try {
      const supabase = await createSupabaseServer()
      
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (!user || error) {
        return NextResponse.json(
          { error: 'Authentification requise' },
          { status: 401 }
        )
      }

      return await handler(req, user)
    } catch (err) {
      console.error('API Auth Error:', err)
      return NextResponse.json(
        { error: 'Erreur authentification' },
        { status: 500 }
      )
    }
  }
}

/**
 * Récupère l'utilisateur actuel (ou null si non authentifié)
 */
export async function getCurrentUser() {
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user
  } catch {
    return null
  }
}
