"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  type Dictionary,
  type Locale,
  type Localized,
  defaultLocale,
  dictionaries,
  htmlLang,
  locales,
  matchLocale,
} from "./dictionaries";

const STORAGE_KEY = "locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  /** Picks the current locale's text from a Localized value. */
  l: (text: Localized) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && (locales as readonly string[]).includes(stored) ? (stored as Locale) : null;
  } catch {
    return null;
  }
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // The static HTML is rendered in the default locale; the visitor's choice applies after hydration.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setLocaleState(readStoredLocale() ?? matchLocale(navigator.languages ?? [navigator.language]));
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: the choice lasts for this visit only.
    }
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale], l: (text) => text[locale] }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

/** "2024-12" → "Dec 2024" in the given locale. */
export function formatMonth(yearMonth: string, locale: Locale) {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(htmlLang[locale], { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}

/** "2023-07-25" → "Jul 25, 2023" in the given locale. */
export function formatDate(isoDate: string, locale: Locale) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat(htmlLang[locale], { dateStyle: "medium", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, day)),
  );
}
