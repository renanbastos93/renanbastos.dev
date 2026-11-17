"use client";

import { profile } from "@/content/data";
import { useLocale } from "@/i18n/LocaleProvider";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";
import { Tags } from "./Tags";

export function Services() {
  const { t } = useLocale();
  const { featured, offers, process } = t.services;

  return (
    <Section id="services" index="02" title={t.services.title} intro={t.services.intro}>
      <article className="rounded-2xl border border-accent bg-surface p-6 sm:p-8">
        <p className="font-mono text-xs text-accent">{featured.badge}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{featured.title}</h3>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{featured.body}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {featured.points.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="font-mono text-accent">
                →
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>

      <ul className="mt-4 grid gap-4 md:grid-cols-3">
        {offers.map((offer) => (
          <li key={offer.title} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
            <h3 className="font-display text-xl font-semibold">{offer.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-muted">{offer.body}</p>
            <div className="mt-4">
              <Tags items={offer.stack} lang="en" />
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 font-display text-xl font-semibold">{process.title}</h3>
      <ol className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {process.steps.map((step, i) => (
          <li key={step.title} className="bg-surface p-6">
            <p className="font-mono text-sm text-accent" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-semibold">{step.title}</p>
            <p className="mt-1 leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <ExternalLink
          href={profile.linkedin}
          className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-semibold text-accent-ink transition-opacity hover:opacity-90"
        >
          {t.services.cta}
        </ExternalLink>
        <p className="text-sm text-muted">{t.services.note}</p>
      </div>
    </Section>
  );
}
