"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const sectionIds = ["about", "experience", "projects", "open-source", "writing", "contact"] as const;

export function Header() {
  const { t } = useLocale();
  const labels: Record<(typeof sectionIds)[number], string> = {
    about: t.nav.about,
    experience: t.nav.experience,
    projects: t.nav.projects,
    "open-source": t.nav.openSource,
    writing: t.nav.writing,
    contact: t.nav.contact,
  };

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 px-4 sm:px-6">
        <a href="#top" className="flex min-h-14 items-center font-mono text-sm font-semibold">
          <span className="text-accent" aria-hidden="true">
            ~/
          </span>
          renanbastos
        </a>
        <nav aria-label={t.nav.label} className="order-3 -mx-4 w-[calc(100%+2rem)] overflow-x-auto px-4 py-1.5 md:order-none md:mx-0 md:w-auto md:flex-1 md:overflow-visible md:px-0 md:py-0">
          <ul className="flex gap-1 md:justify-center">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex min-h-11 items-center whitespace-nowrap rounded-full px-3 text-sm text-muted transition-colors hover:bg-accent-soft hover:text-ink"
                >
                  {labels[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto py-1.5 md:ml-0">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
