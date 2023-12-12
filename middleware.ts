import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export { default } from "next-auth/middleware"

const protectedPages = [''];
const protectedApis = ['/api/secret-route'];

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req });
  console.log('token', token);

  if (protectedPages.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL('/', req.nextUrl.origin));
  }

  if (protectedApis.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.rewrite(new URL('/api/unauthorised', req.nextUrl.origin));
  }

  return NextResponse.next();
};
