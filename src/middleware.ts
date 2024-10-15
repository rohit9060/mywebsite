import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "hi", "kr"],
  defaultLocale: "en",
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the request is for the .mp3 file
  if (pathname.startsWith("/assets") && pathname.endsWith(".mp3")) {
    return NextResponse.rewrite(new URL(`/public${pathname}`, req.url));
  }

  // Otherwise, use the intl middleware for locale handling
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(en|hi|kr)/:path*", "/((?!api|_next|favicon.ico).*)"],
};
