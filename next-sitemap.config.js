// next-sitemap.config.js

module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  exclude: ["/404", "/500", "/admin/**"],
  alternateRefs: [
    {
      hrefLang: "en",
      href: `${process.env.SITE_URL}/en`,
    },
    {
      hrefLang: "hi",
      href: `${process.env.SITE_URL}hi`,
    },
    {
      hrefLang: "kr",
      href: `${process.env.SITE_URL}/kr`,
    },
  ],

  transform: async (config, path) => {
    const locales = ["en", "hi", "kr"];
    const defaultLocale = "en";

    return locales.map((locale) => {
      const loc =
        locale === defaultLocale
          ? `${config.siteUrl}${path}`
          : `${config.siteUrl}/${locale}${path}`;

      return {
        loc,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
        alternateRefs: locales.map((lng) => ({
          href:
            lng === defaultLocale
              ? `${config.siteUrl}${path}`
              : `${config.siteUrl}/${lng}${path}`,
          hreflang: lng,
        })),
      };
    });
  },
};
