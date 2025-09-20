
import { NextResponse } from 'next/server'

export function middleware(request) {
  const auth = request.headers.get('authorization')

  // Vérifie si l'en-tête Authorization est présent
  if (auth) {
    const base64 = auth.split(' ')[1]
    const [user, pass] = atob(base64).split(':')

    // Identifiants à modifier selon ton choix
    if (user === 'user' && pass === 'hellolara') {
      return NextResponse.next()
    }
  }

  // Si pas d'identifiants ou mauvais mot de passe → demande login
  return new Response('Auth Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}
