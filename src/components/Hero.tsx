"use client";

import { articles, mergedPullRequests, profile, stats } from "@/content/data";
import { useLocale } from "@/i18n/LocaleProvider";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  const { t, l } = useLocale();
  const figures = [
    { value: stats.years, label: t.stats.years },
    { value: l(stats.npmMonthlyDownloads), label: t.stats.downloads },
    { value: String(articles.length), label: t.stats.articles },
    { value: String(mergedPullRequests), label: t.stats.prs },
  ];

  return (
    <div className="pb-16 pt-12 sm:pb-24 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-sm text-accent">{t.hero.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ExternalLink
              href={profile.linkedin}
              className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              {t.hero.ctaPrimary}
            </ExternalLink>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center rounded-full border border-line px-6 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Decorative: repeats facts already on the page. */}
        <div aria-hidden="true" className="rounded-2xl border border-line bg-surface p-5 font-mono text-sm shadow-sm">
          <div className="mb-4 flex gap-1.5">
            <span className="size-3 rounded-full bg-line" />
            <span className="size-3 rounded-full bg-line" />
            <span className="size-3 rounded-full bg-line" />
          </div>
          <p>
            <span className="text-accent">$</span> go run ./renan
          </p>
          <p className="mt-2 text-muted">→ backend · distributed systems · ai agents</p>
          <p className="text-muted">→ go · postgres · kafka · kubernetes · aws · gcp</p>
          <p className="text-muted">→ florianópolis, br · surf · bike · trail</p>
          <p className="mt-2">
            <span className="text-accent">$</span> <span className="cursor">▍</span>
          </p>
        </div>
      </div>

      <dl aria-label={t.stats.label} className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {figures.map((figure) => (
          <div key={figure.label} className="flex flex-col-reverse gap-1 bg-surface p-5">
            <dt className="text-sm leading-snug text-muted">{figure.label}</dt>
            <dd className="font-display text-3xl font-semibold text-accent sm:text-4xl">{figure.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
