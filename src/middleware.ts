import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "@/types/supabase.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const { data } = await supabase.auth.getSession();

  const isAuthenticated = data.session && data.session.expires_in > 0;
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/signup");

  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(
      new URL("/household/transactions/new", req.url)
    );
  }
}

export const config = {
  matcher: ["/login", "/household/transactions/new"],
};
