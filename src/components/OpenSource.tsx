"use client";

import { contributions } from "@/content/data";
import { formatDate, useLocale } from "@/i18n/LocaleProvider";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";

export function OpenSource() {
  const { t, locale } = useLocale();
  return (
    <Section id="open-source" index="04" title={t.openSource.title} intro={t.openSource.intro}>
      <div className="space-y-10">
        {contributions.map((contribution) => (
          <div key={contribution.repo}>
            <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <ExternalLink href={contribution.href} className="font-mono text-lg font-semibold hover:text-accent">
                {contribution.repo}
              </ExternalLink>
              <span className="text-sm text-muted">{t.openSource.merged(contribution.prs.length)}</span>
            </h3>
            {contribution.authored && (
              <p className="mt-1 text-sm font-medium text-accent">{t.openSource.author}</p>
            )}
            <ul className="mt-3 divide-y divide-line rounded-2xl border border-line bg-surface">
              {contribution.prs.map((pr) => (
                <li key={pr.href}>
                  <ExternalLink
                    href={pr.href}
                    showIcon={false}
                    className="flex min-h-11 flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 transition-colors hover:bg-accent-soft"
                  >
                    <span lang="en">{pr.title}</span>
                    <span className="font-mono text-xs text-muted">
                      #{pr.href.split("/").pop()} · <time dateTime={pr.date}>{formatDate(pr.date, locale)}</time>
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
