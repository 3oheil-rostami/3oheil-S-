import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "fa"] as const;
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale in the pathname — always default to English;
  // visitors switch to Persian explicitly via the locale switcher.
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal paths (_next), API routes and files with an extension (e.g. /images/…)
    "/((?!_next|api|.*\\..*).*)",
  ],
};
