"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { DocumentTitle } from "./DocumentTitle";

export function NotFoundContent() {
  const { t } = useLocale();
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-4">
      <DocumentTitle page="notFound" />
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">{t.notFound.title}</h1>
      <p className="mt-4 text-lg text-muted">{t.notFound.body}</p>
      <a
        href="/"
        className="mt-8 inline-flex min-h-12 items-center self-start rounded-full bg-accent px-6 font-semibold text-accent-ink"
      >
        {t.notFound.back}
      </a>
    </main>
  );
}
