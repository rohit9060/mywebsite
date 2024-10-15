import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";

export function About() {
  const t = useTranslations("HomePage");

  return (
    <section className="bg-gray-900">
      <SectionWrapper>
        <div>
          <Image
            src="https://res.cloudinary.com/dltwjutqb/image/upload/v1728963429/mybropic_crvlqy.jpg"
            alt="hero"
            width={500}
            height={500}
            className="rounded-3xl shadow-md backdrop-blur-md w-80 lg:w-full"
          />
        </div>
        <article className="w-full animate-fadeInUp">
          <h1 className="text-2xl font-semibold text-center md:text-3xl">
            {t("aboutHead")}
          </h1>
          <p className="text-base md:text-xl font-normal">{t("about")}</p>
        </article>
      </SectionWrapper>
    </section>
  );
}
