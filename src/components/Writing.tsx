"use client";

import { useState } from "react";
import { type ArticleLang, articles } from "@/content/data";
import { htmlLang } from "@/i18n/dictionaries";
import { formatDate, useLocale } from "@/i18n/LocaleProvider";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";

type Filter = "all" | ArticleLang;

export function Writing() {
  const { t, locale } = useLocale();
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? articles : articles.filter((article) => article.lang === filter);
  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: t.writing.all },
    { value: "pt", label: t.writing.pt },
    { value: "en", label: t.writing.en },
  ];

  return (
    <Section id="writing" index="05" title={t.writing.title} intro={t.writing.intro}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label={t.writing.filterLabel} className="flex flex-wrap gap-2">
          {filters.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={filter === option.value}
              onClick={() => setFilter(option.value)}
              className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors ${
                filter === option.value
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line text-muted hover:border-accent hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p role="status" className="font-mono text-sm text-muted">
          {t.writing.count(visible.length)}
        </p>
      </div>

      <ul className="mt-6 divide-y divide-line border-y border-line">
        {visible.map((article) => (
          <li key={article.href}>
            <ExternalLink
              href={article.href}
              showIcon={false}
              className="group grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[7.5rem_minmax(0,1fr)_auto] sm:items-baseline"
            >
              <time dateTime={article.date} className="font-mono text-sm text-muted">
                {formatDate(article.date, locale)}
              </time>
              <span lang={htmlLang[article.lang]} className="font-medium leading-snug group-hover:text-accent">
                {article.title}
              </span>
              <span className="flex gap-2 font-mono text-xs text-muted">
                <span className="rounded border border-line px-1.5 py-0.5">{t.writing.langBadge[article.lang]}</span>
                <span>{article.source}</span>
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
