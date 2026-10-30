"use client";

import { profile } from "@/content/data";
import { useLocale } from "@/i18n/LocaleProvider";
import { ExternalLink } from "./ExternalLink";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {profile.name} · {t.footer.built}
        </p>
        <nav aria-label={t.contact.elsewhere}>
          <ul className="flex flex-wrap gap-1">
            {[{ label: "LinkedIn", href: profile.linkedin }, ...profile.links].map((link) => (
              <li key={link.label}>
                <ExternalLink href={link.href} className="flex min-h-11 items-center rounded-full px-3 hover:text-accent">
                  {link.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
