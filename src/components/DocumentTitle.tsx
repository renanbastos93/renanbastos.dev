"use client";

import { useEffect } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

/** Keeps document.title in the visitor's language. */
export function DocumentTitle({ page }: { page: "home" | "notFound" }) {
  const { t } = useLocale();
  const title = page === "home" ? t.meta.title : `${t.notFound.title} · Renan Bastos`;
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}
