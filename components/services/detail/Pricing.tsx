import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLeader } from "./SectionLeader";
import { cn } from "@/lib/cn";

type Tier = {
  label: string;
  name: string;
  price: string;
  unit?: string;
  featured?: boolean;
  inclusions: string[];
  cta: { label: string; href: string };
};

export function Pricing({ tiers, note, eyebrow = "Pricing", title }: { tiers: Tier[]; note?: string; eyebrow?: string; title: React.ReactNode }) {
  return (
    <section className="philosophy section-pad">
      <Container>
        <SectionLeader eyebrow={eyebrow} title={title} />
        <div className="sd-pricing">
          {tiers.map((t) => (
            <div className={cn("sd-pricing__card", t.featured && "sd-pricing__card--feat")} key={t.name}>
              <span className="sd-pricing__lbl">{t.label}</span>
              <h3 className="sd-pricing__name">{t.name}</h3>
              <div className="sd-pricing__price">
                {t.price}
                {t.unit ? <small>{t.unit}</small> : null}
              </div>
              <ul className="sd-pricing__incl">
                {t.inclusions.map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
              <ButtonLink variant={t.featured ? "primary" : "ghost"} href={t.cta.href}>
                {t.cta.label}
              </ButtonLink>
            </div>
          ))}
        </div>
        {note ? <p className="sd-pricing__note">{note}</p> : null}
      </Container>
    </section>
  );
}
