"use client";

import { projects } from "@/content/data";
import { useLocale } from "@/i18n/LocaleProvider";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";
import { Tags } from "./Tags";

export function Projects() {
  const { t, l } = useLocale();
  return (
    <Section id="projects" index="03" title={t.projects.title} intro={t.projects.intro}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors focus-within:border-accent hover:border-accent"
          >
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-accent">{t.projects.kinds[project.kind]}</span>
              {project.status && (
                <span className="rounded-full bg-accent-soft px-2 py-0.5 text-ink">{t.projects.status[project.status]}</span>
              )}
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold">
              <ExternalLink href={project.href} className="hover:text-accent">
                {project.name}
              </ExternalLink>
            </h3>
            <p className="mt-2 flex-1 leading-relaxed text-muted">{l(project.description)}</p>
            {project.highlight && <p className="mt-3 font-mono text-sm font-semibold text-accent">{l(project.highlight)}</p>}
            <div className="mt-4">
              <Tags items={project.stack} lang="en" />
            </div>
            {project.source && (
              <ExternalLink href={project.source} className="mt-4 inline-flex min-h-11 items-center self-start text-sm font-medium underline underline-offset-4 hover:text-accent">
                {t.projects.source}
                <span className="sr-only">: {project.name}</span>
              </ExternalLink>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
