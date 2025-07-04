import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname === '/login';
  const isDashboardPage = pathname.startsWith('/dashboard');

  // For client-side authentication, we'll handle redirects in the components
  // This middleware will just pass through all requests
  return NextResponse.next();
}

export const config = {
  // We'll handle all routes in the components
  matcher: [],
};
