"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Section } from "./Section";

export function About() {
  const { t } = useLocale();
  return (
    <Section id="about" index="01" title={t.about.title}>
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="text-muted">{t.about.outside}</p>
      </div>
    </Section>
  );
}
