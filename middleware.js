import { NextResponse } from "next/server";

export function middleware(request) {
  const isAuthenticated = true

  //si l`utilisateur est authentifie, continu
  if (isAuthenticated) {
    return NextResponse.next()
  }
  //sinon, rediriger vers la pager d'authentification
  return NextResponse.redirect(new URL(`/login`, request.url))
}

export const config = {
  matcher: '/Accueil',
}