import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLeader } from "./SectionLeader";
import { services, type ServiceSlug } from "@/content/services";

export function RelatedTreatments({ slugs, eyebrow = "Pairs well with", title }: { slugs: ServiceSlug[]; eyebrow?: string; title: React.ReactNode }) {
  const items = slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  return (
    <section className="section-pad">
      <Container>
        <SectionLeader eyebrow={eyebrow} title={title} />
        <div className="sd-related">
          {items.map((s) => (
            <Link className="sd-related__card" href={`/services/${s.slug}`} key={s.slug}>
              <div className="sd-related__media">
                <Image
                  src={s.cardImage.src}
                  alt={s.cardImage.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className="cat">{s.number} / {s.category}</span>
              <h3 className="name">{s.title}</h3>
              <span className="meta">{s.priceLabel}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
