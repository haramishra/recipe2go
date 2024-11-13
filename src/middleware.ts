import { NextResponse } from "next/server";
import { auth } from "@/server/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage =
    req.nextUrl.pathname === "/sign-in" || req.nextUrl.pathname === "/sign-up";
  const isDashboardPage = req.nextUrl.pathname === "/dashboard";

  // If user is not logged in and trying to access dashboard
  if (!isLoggedIn && isDashboardPage) {
    const signInUrl = new URL("/sign-in", req.nextUrl.origin);
    return NextResponse.redirect(signInUrl);
  }

  // If user is logged in and trying to access auth pages
  if (isLoggedIn && isAuthPage) {
    const dashboardUrl = new URL("/dashboard", req.nextUrl.origin);
    return NextResponse.redirect(dashboardUrl);
  }

  // In all other cases, continue as normal
  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard", "/sign-in", "/sign-up"],
};
