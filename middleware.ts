import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0/edge';

export async function middleware(request: Request) {
  const session = await getSession();
  return NextResponse.next();
}