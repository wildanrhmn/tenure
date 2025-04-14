import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // List of auth routes to protect
  const authRoutes = ['/login', '/signup', '/forgot-password', '/reset-password', '/verify-email', '/resend-verification'];

  // If user is authenticated and trying to access auth routes
  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/signup', '/forgot-password', '/reset-password', '/verify-email/:path*', '/resend-verification'],
}; 