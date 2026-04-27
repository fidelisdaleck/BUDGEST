import { getCurrentUser } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import type { User } from '@supabase/supabase-js'

/**
 * Exemple: GET /api/user - Récupère les données de l'utilisateur actuellement connecté
 */
export function withAuth(
  handler: (req: NextRequest, user: User) => Promise<Response>
) {
  return async function (req: NextRequest): Promise<Response> {
    const user = await getCurrentUser(req);

    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    return handler(req, user);
  };
}

export const GET = withAuth(async (req: NextRequest, user: User) =>{
  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
    }
  })
}
)

