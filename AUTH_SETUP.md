# Système de Protection de Routes avec Supabase

Ce système fournit une protection complète des routes (serveur et client) avec authentification Supabase.

## 📁 Structure

```
├── middleware.ts                 # Protège les routes serveur
├── lib/auth.ts                   # Utilitaires d'authentification
├── lib/supabase.ts              # Client Supabase côté client
├── hooks/useAuth.ts             # Hook React pour l'authentification
├── components/ProtectedRoute.tsx # Composant de protection côté client
├── components/UserMenu.tsx      # Menu utilisateur avec déconnexion
└── app/api/user/route.ts        # Exemple d'API protégée
```

## 🛡️ Protection au niveau du Middleware (Serveur)

**Fichier:** `middleware.ts`

Protège automatiquement les routes définies dans `PROTECTED_ROUTES`:
- `/dashboard` et ses sous-routes

### Modifiez les routes protégées:

```typescript
const PROTECTED_ROUTES = ['/dashboard', '/admin', '/profile']
```

**Comportement:**
- Utilisateur authentifié → Accès accordé
- Utilisateur non authentifié → Redirection vers `/connexion`

## 🪝 Hook d'Authentification Côté Client

**Fichier:** `hooks/useAuth.ts`

```typescript
'use client'

import { useAuth } from '@/hooks/useAuth'

export function MyComponent() {
  const { user, loading, isAuthenticated, signOut } = useAuth()

  if (loading) return <div>Chargement...</div>
  
  if (!isAuthenticated) return <div>Non authentifié</div>

  return (
    <div>
      <p>Bienvenue {user?.email}</p>
      <button onClick={signOut}>Déconnexion</button>
    </div>
  )
}
```

### Propriétés retournées:
- `user` - Objet utilisateur Supabase (null si non authentifié)
- `session` - Session actuelle
- `loading` - Chargement en cours
- `error` - Erreur d'authentification
- `isAuthenticated` - Boolean simple
- `signOut()` - Fonction pour se déconnecter

## 🔒 Composant ProtectedRoute

**Fichier:** `components/ProtectedRoute.tsx`

Protège les composants côté client:

```typescript
'use client'

import { ProtectedRoute } from '@/components/ProtectedRoute'

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard Protégé</h1>
        {/* Votre contenu */}
      </div>
    </ProtectedRoute>
  )
}
```

Propriétés:
- `children` - Contenu à protéger
- `fallback` - Composant à afficher pendant le chargement (optionnel)

## 🔐 Protection des Routes API

**Fichier:** `lib/auth.ts`

### Protéger une route API:

```typescript
// app/api/protected/route.ts
import { withAuth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import type { User } from '@supabase/supabase-js'

export const GET = withAuth(async (req: NextRequest, user: User) => {
  // 'user' est garantidement l'utilisateur authentifié
  return NextResponse.json({
    message: `Bonjour ${user.email}`,
    userId: user.id,
  })
})

export const POST = withAuth(async (req: NextRequest, user: User) => {
  const data = await req.json()
  // Traiter avec 'user' automatiquement injecté
  return NextResponse.json({ success: true })
})
```

### Récupérer l'utilisateur actuel:

```typescript
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
  const user = await getCurrentUser()
  
  if (!user) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
  }

  return NextResponse.json({ user })
}
```

## 👤 Composant Menu Utilisateur

**Fichier:** `components/UserMenu.tsx`

```typescript
import { UserMenu } from '@/components/UserMenu'

export function Header() {
  return (
    <header>
      <h1>Mon App</h1>
      <UserMenu />
    </header>
  )
}
```

Affiche:
- Email de l'utilisateur
- Nom (si disponible)
- Bouton de déconnexion

## 🚀 Exemples d'Utilisation

### 1. Page protégée (Layout)

```typescript
// app/dashboard/layout.tsx
import { ProtectedRoute } from '@/components/ProtectedRoute'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="dashboard">
        {children}
      </div>
    </ProtectedRoute>
  )
}
```

### 2. API protégée

```typescript
// app/api/profile/route.ts
import { withAuth } from '@/lib/auth'
import type { User } from '@supabase/supabase-js'

export const GET = withAuth(async (req, user: User) => {
  // Récupérer le profil depuis la DB
  return NextResponse.json({ profile: user })
})
```

### 3. Composant avec authentification

```typescript
'use client'

import { useAuth } from '@/hooks/useAuth'

export function Profile() {
  const { user, isAuthenticated, signOut } = useAuth()

  if (!isAuthenticated) return null

  return (
    <div>
      <h2>{user?.email}</h2>
      <button onClick={signOut}>Se déconnecter</button>
    </div>
  )
}
```

## ⚙️ Configuration

### Variables d'environnement requises (.env.local):

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 🔄 Flux d'Authentification

```
1. Utilisateur se connecte via /api/login
2. Supabase enregistre la session dans les cookies
3. Middleware.ts vérifie la session à chaque requête
4. Si authentifié → Accès accordé
5. Si non authentifié → Redirection vers /connexion
```

## 📝 Notes Importantes

- Le middleware s'exécute **avant chaque requête**
- Le hook `useAuth()` doit être utilisé dans des composants client (`'use client'`)
- Les routes API protégées retournent **401** si non authentifié
- La session est automatiquement synchro entre les onglets

## 🐛 Dépannage

**"Authentification requise" sur une route API?**
- Vérifier que les variables d'environnement sont définies
- Vérifier que la session est valide (cookies)

**Le composant ProtectedRoute se charge infiniment?**
- S'assurer que `useAuth()` est dans un composant client
- Vérifier la console pour les erreurs

**La redirection vers /connexion ne fonctionne pas?**
- Vérifier que PROTECTED_ROUTES contient le bon chemin
- S'assurer que middleware.ts est bien configuré
