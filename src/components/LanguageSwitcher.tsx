"use client";

import { htmlLang, locales } from "@/i18n/dictionaries";
import { useLocale } from "@/i18n/LocaleProvider";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  return (
    <div role="group" aria-label={t.language.label} className="flex rounded-full border border-line p-0.5">
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={htmlLang[code]}
            aria-pressed={active}
            onClick={() => setLocale(code)}
            className={`min-h-11 min-w-11 rounded-full px-2 font-mono text-xs font-semibold uppercase transition-colors ${
              active ? "bg-accent text-accent-ink" : "text-muted hover:text-ink"
            }`}
          >
            {code}
            <span className="sr-only"> {t.language.names[code]}</span>
          </button>
        );
      })}
    </div>
  );
}
