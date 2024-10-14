import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <section className="flex items-center justify-between flex-col gap-5 lg:w-1/2 ">
        <div className="flex flex-col gap-1">
          <h1 className="flex gap-2 font-semibold text-lg  md:text-5xl">
            {t("greeting")}
          </h1>
          <h2 className="text-orange-600 font-medium text-xl md:text-4xl px-5">
            {t("name")}
          </h2>
          <p className="px-5 font-medium text-base md:text-2xl font-sofia">
            {t("profession")}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 bg-orange-600 rounded-md font-sofia">
            {t("btn")}
          </button>
        </div>
      </section>
    </>
  );
}
