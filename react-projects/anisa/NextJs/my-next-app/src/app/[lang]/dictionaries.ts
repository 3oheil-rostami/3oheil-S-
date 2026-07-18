const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  fa: () => import("@/dictionaries/fa.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export type Dictionary = Awaited<
  ReturnType<(typeof dictionaries)[Locale]>
>;

export const locales = Object.keys(dictionaries) as Locale[];

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export const dirFor = (locale: Locale): "rtl" | "ltr" =>
  locale === "fa" ? "rtl" : "ltr";
