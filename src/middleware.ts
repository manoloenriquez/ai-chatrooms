import { NextResponse, NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  // console.log(req.nextUrl.pathname);

  // if (req.nextUrl.pathname.startsWith("/auth")) {
  //   return;
  // }

  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const user = await supabase.auth.getUser();

  console.log(user);

  // if (!user.data.user) {
  //   return NextResponse.redirect(new URL("/auth", req.url));
  // }
}
