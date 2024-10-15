"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { ChangeEvent, useTransition } from "react";

export function LangSwitch() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();

  const localActive = useLocale();

  const OnSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as "en" | "hi" | "kr";

    startTransition(() => {
      router.replace(`${pathname}`, {
        locale: nextLocale,
      });
    });
  };

  const routes = [
    {
      name: "English",
      locale: "en",
    },
    {
      name: "हिंदी",
      locale: "hi",
    },
    {
      name: "한국인",
      locale: "kr",
    },
  ];

  return (
    <>
      <label className="cursor-pointer">
        <p className="sr-only">Change Language</p>
        <select
          className="bg-transparent py-2"
          onChange={OnSelectChange}
          disabled={isPending}
          defaultValue={localActive}
        >
          {routes.map((route) => (
            <option
              key={route.locale}
              value={route.locale}
              className="bg-gray-900"
            >
              {route.name}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
