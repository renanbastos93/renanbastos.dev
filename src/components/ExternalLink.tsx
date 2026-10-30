"use client";

import { useLocale } from "@/i18n/LocaleProvider";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; showIcon?: boolean };

/** Link that opens in a new tab and says so to screen readers. */
export function ExternalLink({ children, showIcon = true, ...props }: Props) {
  const { t } = useLocale();
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      {showIcon && (
        <span aria-hidden="true" className="ml-1 inline-block">
          ↗
        </span>
      )}
      <span className="sr-only"> {t.a11y.newTab}</span>
    </a>
  );
}
