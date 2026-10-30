"use client";

import { profile } from "@/content/data";
import { useLocale } from "@/i18n/LocaleProvider";
import { ExternalLink } from "./ExternalLink";

export function Contact() {
  const { t } = useLocale();
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-16 sm:py-24">
      <div className="on-accent rounded-3xl bg-accent px-6 py-12 text-accent-ink sm:px-12 sm:py-16">
        <p className="font-mono text-sm opacity-80" aria-hidden="true">
          06
        </p>
        <h2 id="contact-title" className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.contact.title}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed">{t.contact.body}</p>
        <ExternalLink
          href={profile.linkedin}
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-accent-ink px-6 font-semibold text-accent transition-opacity hover:opacity-90"
        >
          {t.contact.cta}
        </ExternalLink>
      </div>
    </section>
  );
}
