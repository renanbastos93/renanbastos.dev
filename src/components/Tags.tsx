export function Tags({ items, lang }: { items: string[]; lang?: string }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2" lang={lang}>
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}
