import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {

  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: [
    {
      source: '/dashboard/:path*',
      locale: false,
      has: [
        { type: 'header', key: 'Authorization', value: 'Bearer Token' },
      ],
      missing: [{ type: 'cookie', key: 'session', value: 'active' }],
    },
  ],
}





// import { createServerClient } from '@supabase/ssr'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// // Routes publiques (pas besoin d'authentification)
// const PUBLIC_ROUTES = ['/', '/connexion', '/sign-up', '/fonctionalites', '/tarification', '/about']

// // Routes protégées (nécessitent authentification)
// const PROTECTED_ROUTES = ['/dashboard']

// export async function middleware(request: NextRequest) {
//   const requestUrl = new URL(request.url)
//   const pathname = requestUrl.pathname

//   // Vérifier si la route est protégée
//   const isProtected = PROTECTED_ROUTES.some(route => pathname.startsWith(route))
  
//   if (!isProtected) {
//     return NextResponse.next()
//   }

//   let response = NextResponse.next({
//     request: {
//       headers: request.headers,
//     },
//   })

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll()
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value, options }) => {
//             response.cookies.set(name, value, options)
//           })
//         },
//       },
//     }
//   )

//   const {
//     data: { user },
//     error,
//   } = await supabase.auth.getUser()

//   // Si l'utilisateur n'est pas authentifié, rediriger vers la connexion
//   if (!user || error) {
//     const loginUrl = new URL('/connexion', request.url)
//     return NextResponse.redirect(loginUrl)
//   }

//   return response
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - public folder
//      */
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// }
