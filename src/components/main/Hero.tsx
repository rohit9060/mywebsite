import { useTranslations } from "next-intl";
import { SectionWrapper } from "./SectionWrapper";

export function Hero() {
  const t = useTranslations("HomePage");
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-3 animate-fadeInDown w-full">
        <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl ">
          {t("greeting")}
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-orange-600">
          {t("name")}
        </h2>
        <p className="text-xl md:text-3xl lg:text-4xl font-normal">
          {t("profession")}
        </p>
        <button className="bg-orange-600 px-3 py-1 rounded-md w-fit mt-5">
          {t("btn")}
        </button>
      </div>
      <div></div>
    </SectionWrapper>
  );
}
