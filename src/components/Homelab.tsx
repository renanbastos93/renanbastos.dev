"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Section } from "./Section";
import { Tags } from "./Tags";

const stack = [
  "Proxmox VE",
  "GMKtec K8 Plus",
  "Terraform",
  "Ansible",
  "GitHub Actions",
  "Tailscale",
  "Traefik",
  "Vault",
  "Prometheus",
  "Grafana",
  "PostgreSQL",
  "Dokploy",
];

export function Homelab() {
  const { t } = useLocale();
  const { stages, pillars, pipeline } = t.homelab;

  return (
    <Section id="homelab" index="05" title={t.homelab.title} intro={t.homelab.intro}>
      <ol className="grid gap-4 md:grid-cols-2">
        {stages.map((stage, i) => (
          <li
            key={stage.title}
            className={`rounded-2xl border bg-surface p-6 ${i === 0 ? "border-accent" : "border-line"}`}
          >
            <p className="font-mono text-xs text-accent">{stage.label}</p>
            <h3 className="mt-3 font-display text-xl font-semibold">{stage.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{stage.body}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <li key={pillar.title} className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{pillar.body}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 font-display text-xl font-semibold">{pipeline.title}</h3>
      <ol className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {pipeline.steps.map((step, i) => (
          <li key={step.title} className="bg-surface p-5">
            <p className="font-mono text-sm text-accent" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-semibold">{step.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <Tags items={stack} lang="en" />
      </div>
      <p className="mt-6 text-sm text-muted">{t.homelab.note}</p>
    </Section>
  );
}
