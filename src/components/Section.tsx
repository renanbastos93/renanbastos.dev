type Props = {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

/** Page section with a numbered, labelled heading. */
export function Section({ id, index, title, intro, children }: Props) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line py-16 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-16">
        <header>
          <p className="font-mono text-sm text-accent" aria-hidden="true">
            {index}
          </p>
          <h2 id={headingId} className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">{intro}</p>}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
