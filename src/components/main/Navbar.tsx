import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LangSwitch } from "./LangSwitch";
export function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <>
      <nav className="mt-2  left-1/2 right-1/2 flex items-center justify-center">
        <div className="flex items-center gap-5 bg-white/15  px-5 py-3 rounded-full text-base font-medium">
          <Link href="/">{t("Home")}</Link>
          <Link href="/projects">{t("Projects")}</Link>
          <Link href="/blogs">{t("Blogs")}</Link>
          <LangSwitch />
        </div>
      </nav>
    </>
  );
}
