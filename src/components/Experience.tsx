"use client";

import { education, experience } from "@/content/data";
import { formatMonth, useLocale } from "@/i18n/LocaleProvider";
import { Section } from "./Section";
import { Tags } from "./Tags";

export function Experience() {
  const { t, l, locale } = useLocale();
  const period = (start: string, end?: string) =>
    `${formatMonth(start, locale)} – ${end ? formatMonth(end, locale) : t.experience.present}`;

  return (
    <Section id="experience" index="02" title={t.experience.title} intro={t.experience.intro}>
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[1.95rem] size-3 rounded-full border-2 border-bg sm:-left-[2.45rem] ${
                job.roles[0].end ? "bg-line" : "bg-accent"
              }`}
            />
            <h3 className="font-display text-xl font-semibold">{job.company}</h3>
            <ul className="mt-1 space-y-0.5">
              {job.roles.map((role) => (
                <li key={role.start} className="flex flex-wrap gap-x-3 text-sm">
                  <span className="font-medium">{l(role.title)}</span>
                  <span className="font-mono text-muted">{period(role.start, role.end)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{l(job.summary)}</p>
            <div className="mt-3">
              <Tags items={job.stack} lang="en" />
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-14 font-display text-xl font-semibold">{t.experience.educationTitle}</h3>
      <ul className="mt-4 space-y-2">
        {education.map((item) => (
          <li key={item.school} className="flex flex-wrap gap-x-3">
            <span className="font-medium">{l(item.course)}</span>
            <span className="text-muted">{item.school}</span>
            <span className="font-mono text-sm text-muted">{item.years}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
