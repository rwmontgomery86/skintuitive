import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";
import type { Service } from "@/content/services";

export function SdHero({ service: s }: { service: Service }) {
  if (!s.detail) return null;
  const titleNode = s.titleLines ? (
    <>{s.titleLines[0]}<br />{s.titleLines[1]}.</>
  ) : (
    s.title
  );
  return (
    <section className="sd-hero">
      <Container className="sd-hero__inner">
        <div className="sd-hero__split">
          <div className="sd-hero__left">
            <div className="ph__crumbs">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/services">Treatments</Link>
              <span className="sep">/</span>
              <span className="current">{s.title}</span>
            </div>
            <span className="sd-hero__cat">Treatment {s.number} · {s.category}</span>
            <h1 className="sd-hero__title">{titleNode}</h1>
            <p className="sd-hero__lead">{s.detail.heroLeadLong}</p>
            <div className="sd-hero__ctas">
              <ButtonLink variant="primary" arrow href={site.booking.href}>
                Book consultation
              </ButtonLink>
              <ButtonLink variant="ghost" href={site.phone.href}>
                Call {site.phone.display}
              </ButtonLink>
            </div>
          </div>
          <div className="sd-hero__media">
            <Image
              src={s.detail.heroImage.src}
              alt={s.detail.heroImage.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <div className="sd-specs">
          {s.detail.specs.map((spec) => (
            <div className="spec" key={spec.label}>
              <div className="lab">{spec.label}</div>
              <div className="val">
                {spec.value}
                {spec.suffix ? <small>{spec.suffix}</small> : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
