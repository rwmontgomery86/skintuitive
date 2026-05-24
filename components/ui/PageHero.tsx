import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

export type Crumb = { label: string; href?: string };

// Shared page hero used across non-home pages (About, Services, Providers, Contact, Service Detail)
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="ph">
      <Container className="ph__inner">
        <div className="ph__crumbs">
          {crumbs.map((c, i) => (
            <span key={c.label} style={{ display: "inline-flex", gap: 14, alignItems: "center" }}>
              {i > 0 ? <span className="sep">/</span> : null}
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="current">{c.label}</span>}
            </span>
          ))}
        </div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="t-display ph__title" style={{ marginTop: 28 }}>
          {title}
        </h1>
        {lead ? <p className="ph__lead">{lead}</p> : null}
        {children}
      </Container>
    </section>
  );
}
