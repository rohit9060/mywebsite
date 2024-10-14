import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "hi", "kr"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|hi|kr)/:path*", "/((?!api|_next|favicon.ico).*)"],
};
